import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import HomePage from "./pages/HomePage";
import { ScrollToTop } from "./components/ScrollToTop";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import { PerfOverlay } from "./components/PerfOverlay";
import { trackPageView } from "../utils/analytics";

// The home page ships in the main bundle since it is the usual entry point.
// Every other route is split out so a first visit does not download the
// markup, copy and animation code for all seven pages at once.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const KindergartenPage = lazy(() => import("./pages/KindergartenPage"));
const CorrectionalClubPage = lazy(() => import("./pages/CorrectionalClubPage"));
const PricesPage = lazy(() => import("./pages/Prices"));
const CorrectionalClubPricesPage = lazy(
  () => import("./pages/CorrectionalClubPricesPage"),
);

// Component to track page views on route changes
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

/**
 * Phones and tablets get transform-free animations.
 *
 * The slide-in effects (x / y offsets) are what make scrolling stutter on a
 * mid-range phone, and the horizontal offsets briefly push cards past the
 * viewport edge so the page can be dragged sideways. Below the desktop
 * breakpoint we force Motion's reduced-motion mode: opacity still fades, but
 * nothing moves. On desktop the OS "reduce motion" setting is honoured.
 */
function useReducedMotionMode(): "always" | "user" {
  const query = "(max-width: 1023px)";
  const [isSmall, setIsSmall] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setIsSmall(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isSmall ? "always" : "user";
}

/** Holds the viewport steady while a route chunk downloads. */
function RouteFallback() {
  return <div className="min-h-screen bg-white" />;
}

export default function App() {
  const reducedMotion = useReducedMotionMode();

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion={reducedMotion}>
        <GoogleAnalytics />
        <PerfOverlay />
        <ScrollToTop />
        <AnalyticsTracker />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/kindergarten" element={<KindergartenPage />} />
            <Route
              path="/correctional_club"
              element={<CorrectionalClubPage />}
            />
            <Route path="/prices" element={<PricesPage />} />
            <Route
              path="/correctional_club_prices"
              element={<CorrectionalClubPricesPage />}
            />
          </Routes>
        </Suspense>
      </MotionConfig>
    </BrowserRouter>
  );
}
