import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import KindergartenPage from "./pages/KindergartenPage";
import CorrectionalClubPage from "./pages/CorrectionalClubPage";
import PricesPage from "./pages/Prices";
import CorrectionalClubPricesPage from "./pages/CorrectionalClubPricesPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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