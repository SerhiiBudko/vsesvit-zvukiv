import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type LoafScript = { invoker?: string; duration: number };
type LoafEntry = {
  startTime: number;
  duration: number;
  renderStart?: number;
  styleAndLayoutStart?: number;
  scripts?: LoafScript[];
};

const STORAGE_KEY = "vz:perf-overlay";

/**
 * The overlay stays on once switched on.
 *
 * Client-side navigation drops the query string, so `?perf=1` alone would make
 * the meter vanish the moment you followed a link. Latching it in
 * sessionStorage keeps it on every page for the rest of the tab's life;
 * `?perf=0` turns it back off.
 */
function isPerfEnabled() {
  if (typeof window === "undefined") return false;

  const param = new URLSearchParams(window.location.search).get("perf");

  if (param === "0" || param === "off") {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return false;
  }

  if (param !== null) {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    return true;
  }

  return window.sessionStorage.getItem(STORAGE_KEY) === "1";
}

type Stats = {
  fps: number;
  worst: number;
  janky: number;
  blocking: number;
  /** Longest animation frame, including rendering — not just script. */
  loafMs: number;
  /** Time spent in style + layout inside the worst frame. */
  layoutMs: number;
  /** Time spent rendering (paint/composite) inside the worst frame. */
  renderMs: number;
  /** What was running during the worst frame, per the LoAF attribution. */
  culprit: string;
};

/**
 * Live frame-rate readout, shown only when the URL carries `?perf=1`.
 *
 * This is a diagnostic aid, not part of the site: without the query parameter
 * nothing mounts and nothing is measured, so ordinary visitors never see it and
 * pay no cost for it.
 */
export function PerfOverlay() {
  const enabled = useMemo(isPerfEnabled, []);
  const { pathname } = useLocation();

  const [stats, setStats] = useState<Stats>({
    fps: 0,
    worst: 0,
    janky: 0,
    blocking: 0,
    loafMs: 0,
    layoutMs: 0,
    renderMs: 0,
    culprit: "—",
  });
  const frames = useRef<number[]>([]);
  const blocking = useRef(0);
  const worstSpots = useRef<{ dt: number; scrollY: number }[]>([]);
  const latest = useRef<Stats>({
    fps: 0,
    worst: 0,
    janky: 0,
    blocking: 0,
    loafMs: 0,
    layoutMs: 0,
    renderMs: 0,
    culprit: "—",
  });
  const loaf = useRef({ worst: 0, layout: 0, render: 0, culprit: "—", count: 0 });

  // Each route gets its own sample; otherwise the previous page's frames would
  // drag the average around after navigating.
  useEffect(() => {
    frames.current = [];
    blocking.current = 0;
    worstSpots.current = [];
    loaf.current = { worst: 0, layout: 0, render: 0, culprit: "—", count: 0 };
  }, [pathname]);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    let last = performance.now();
    let stop = false;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) blocking.current += entry.duration;
    });
    try {
      observer.observe({ entryTypes: ["longtask"] });
    } catch {
      /* longtask unsupported in this browser */
    }

    // A rAF delta only sees the main thread. Long Animation Frames include the
    // browser's own rendering work, which is where compositor-bound jank shows
    // up — a page can report a steady 60 rAF/s while visibly stuttering.
    const loafObserver = new PerformanceObserver((list) => {
      for (const e of list.getEntries() as unknown as LoafEntry[]) {
        if (e.duration <= loaf.current.worst) continue;
        const renderStart = e.renderStart || 0;
        loaf.current = {
          worst: Math.round(e.duration),
          layout: Math.round(e.styleAndLayoutStart && renderStart
            ? e.startTime + e.duration - e.styleAndLayoutStart
            : 0),
          render: Math.round(renderStart ? e.startTime + e.duration - renderStart : 0),
          culprit:
            (e.scripts || [])
              .slice()
              .sort((a, b) => b.duration - a.duration)[0]
              ?.invoker?.slice(0, 42) ?? "rendering (no script)",
          count: loaf.current.count + 1,
        };
      }
    });
    try {
      loafObserver.observe({ entryTypes: ["long-animation-frame"] });
    } catch {
      /* LoAF needs Chrome 123+ */
    }

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      frames.current.push(dt);
      if (frames.current.length > 180) frames.current.shift();
      if (dt > 50) {
        worstSpots.current.push({ dt: Math.round(dt), scrollY: Math.round(window.scrollY) });
        worstSpots.current.sort((a, b) => b.dt - a.dt);
        worstSpots.current = worstSpots.current.slice(0, 8);
      }

      const list = frames.current;
      const mean = list.reduce((a, b) => a + b, 0) / list.length;
      const next: Stats = {
        fps: Math.round(1000 / mean),
        worst: Math.round(Math.max(...list)),
        janky: list.filter((f) => f > 50).length,
        blocking: Math.round(blocking.current),
        loafMs: loaf.current.worst,
        layoutMs: loaf.current.layout,
        renderMs: loaf.current.render,
        culprit: loaf.current.culprit,
      };
      latest.current = next;
      setStats(next);

      if (!stop) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Expose the full report for copying out of the console.
    (window as unknown as { __perfReport: () => unknown }).__perfReport = () => ({
      fps: latest.current.fps,
      worstFrameMs: latest.current.worst,
      framesOver50ms: latest.current.janky,
      totalBlockingMs: latest.current.blocking,
      slowestSpots: worstSpots.current,
      worstAnimationFrameMs: loaf.current.worst,
      styleAndLayoutMs: loaf.current.layout,
      renderMs: loaf.current.render,
      worstFrameCulprit: loaf.current.culprit,
      longAnimationFrames: loaf.current.count,
      page: window.location.pathname,
      dpr: window.devicePixelRatio,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      cores: navigator.hardwareConcurrency,
      prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      visibility: document.visibilityState,
      ua: navigator.userAgent,
    });

    return () => {
      stop = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      loafObserver.disconnect();
    };
  }, [enabled]);

  if (!enabled) return null;

  // If the OS asks for reduced motion, MotionConfig disables transform
  // animations site-wide — which looks like "the animations are frozen" rather
  // than like a performance problem. Worth stating plainly.
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const colour = stats.fps >= 50 ? "#16a34a" : stats.fps >= 30 ? "#FFB703" : "#dc2626";

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        left: 12,
        zIndex: 9999,
        background: "rgba(0,32,64,0.92)",
        color: "#fff",
        font: "600 12px/1.5 ui-monospace, monospace",
        padding: "10px 14px",
        borderRadius: 12,
        pointerEvents: "none",
        minWidth: 150,
      }}
    >
      <div style={{ fontSize: 22, color: colour }}>{stats.fps} fps</div>
      <div>worst frame: {stats.worst}ms</div>
      <div>janky frames: {stats.janky}</div>
      <div>blocked: {stats.blocking}ms</div>
      <div style={{ marginTop: 6, paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
        <div style={{ color: stats.loafMs > 50 ? "#dc2626" : "#16a34a" }}>
          worst anim frame: {stats.loafMs}ms
        </div>
        <div>render: {stats.renderMs}ms</div>
        <div>style+layout: {stats.layoutMs}ms</div>
        <div style={{ opacity: 0.75, maxWidth: 190, whiteSpace: "normal" }}>
          {stats.culprit}
        </div>
      </div>
      {reducedMotion && (
        <div
          style={{
            marginTop: 6,
            padding: "5px 7px",
            borderRadius: 7,
            background: "#dc2626",
            whiteSpace: "normal",
            maxWidth: 190,
          }}
        >
          OS &ldquo;Reduce Motion&rdquo; is ON — animations are disabled by
          design, not stuck
        </div>
      )}
      <div style={{ opacity: 0.6, marginTop: 4 }}>{pathname}</div>
    </div>
  );
}
