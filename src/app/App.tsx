import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import KindergartenPage from "./pages/KindergartenPage";
import CorrectionalClubPage from "./pages/CorrectionalClubPage";
import PricesPage from "./pages/Prices";
import CorrectionalClubPricesPage from "./pages/CorrectionalClubPricesPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import { trackPageView } from "../utils/analytics";

// Component to track page views on route changes
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <ScrollToTop />
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/kindergarten" element={<KindergartenPage />} />
        <Route path="/correctional_club" element={<CorrectionalClubPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/correctional_club_prices" element={<CorrectionalClubPricesPage />} />
      </Routes>
    </BrowserRouter>
  );
}