import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
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

/** Holds the viewport steady while a route chunk downloads. */
function RouteFallback() {
  return <div className="min-h-screen bg-white" />;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* reducedMotion="user" makes every animation on the site honour the
          operating system's "reduce motion" setting, which is also the fastest
          escape hatch for anyone on a low-powered device. */}
      <MotionConfig reducedMotion="user">
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
