import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

type HeroPanelProps = {
  /** Edge the panel slides in from. */
  from: "left" | "right";
  children: ReactNode;
};

/**
 * The sliding halves of each page's hero.
 *
 * These panels contain clipped SVG shapes, which the compositor cannot promote
 * on its own — without an explicit layer the browser re-rasterizes the whole
 * clipped shape on every frame of the slide. `will-change` forces the layer for
 * the duration of the animation, then releases it: leaving it on a
 * viewport-sized element would pin several megabytes of GPU memory per page for
 * an animation that only runs once.
 */
export function HeroPanel({ from, children }: HeroPanelProps) {
  const [animating, setAnimating] = useState(true);

  return (
    <motion.div
      className="absolute inset-0"
      style={
        animating
          ? { willChange: "transform", backfaceVisibility: "hidden" }
          : undefined
      }
      initial={{ x: from === "left" ? "-100%" : "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
      onAnimationComplete={() => setAnimating(false)}
    >
      {children}
    </motion.div>
  );
}
