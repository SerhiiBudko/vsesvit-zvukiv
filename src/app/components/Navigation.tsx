import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import logoImage from "@/assets/logo-vsesvit.webp";
import { Instagram, Facebook, X, ChevronDown } from "lucide-react";
import { SOCIALS } from "@/constants/contact";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [pricesDropdownOpen, setPricesDropdownOpen] = useState(false);
  const [mobilePricesOpen, setMobilePricesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
    setPricesDropdownOpen(false);
    setMobilePricesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPricesDropdownOpen(false);
      }
    };

    if (pricesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pricesDropdownOpen]);

  // Escape closes whichever overlay is open
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (open) {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
      setPricesDropdownOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Keep Tab inside the mobile panel while it is open, and focus it on open
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    closeButtonRef.current?.focus();

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", handleTab);
    return () => panel.removeEventListener("keydown", handleTab);
  }, [open]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pricesSubmenu = [
    { label: "Дитячий садок", to: "/prices" },
    { label: "Корекційний клуб", to: "/correctional_club_prices" },
  ];

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-white"
        style={{
          height: "80px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        }}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={logoImage}
                alt="Всесвіт Звуків"
                className="w-full h-full object-cover"
                width={56}
                height={56}
                decoding="async"
              />
            </div>
            <span className="hidden lg:block text-lg font-bold text-[#003057]">
              Всесвіт Звуків
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home button - only show when not on home page */}
            {location.pathname !== "/" && (
              <Link
                to="/"
                className="relative text-[#2E2E2E] transition-all duration-300 ease-out hover:scale-110 group"
              >
                {/* Blue gradient background on hover */}
                <span className="absolute inset-0 -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-medium">Головна</span>
              </Link>
            )}
            {/* Корекційний клуб */}
            <Link
              to="/correctional_club"
              className="relative text-[#2E2E2E] transition-all duration-300 ease-out hover:scale-110 group"
            >
              <span className="absolute inset-0 -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative font-medium">Корекційний клуб</span>
            </Link>
            {/* Дитячий садок */}
            <Link
              to="/kindergarten"
              className="relative text-[#2E2E2E] transition-all duration-300 ease-out hover:scale-110 group"
            >
              <span className="absolute inset-0 -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative font-medium">Дитячий садок</span>
            </Link>
            {/* Ціни Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPricesDropdownOpen(!pricesDropdownOpen)}
                className="relative text-[#2E2E2E] transition-all duration-300 ease-out hover:scale-110 group flex items-center gap-1"
                onMouseEnter={() => setPricesDropdownOpen(true)}
                aria-expanded={pricesDropdownOpen}
                aria-haspopup="true"
              >
                <span className="absolute inset-0 -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-medium">Ціни</span>
                <ChevronDown 
                  className={`relative w-4 h-4 transition-transform duration-200 ${
                    pricesDropdownOpen ? "rotate-180" : ""
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {pricesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50"
                  onMouseLeave={() => setPricesDropdownOpen(false)}
                >
                  {pricesSubmenu.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`block px-4 py-2 text-[#2E2E2E] hover:bg-blue-50 transition-colors ${
                          isActive ? "bg-blue-50 font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            {/* Про нас */}
            <Link
              to="/about"
              className="relative text-[#2E2E2E] transition-all duration-300 ease-out hover:scale-110 group"
            >
              <span className="absolute inset-0 -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative font-medium">Про нас</span>
            </Link>
            {/* Контакти та локація */}
            <Link
              to="/contact"
              className="relative text-[#2E2E2E] transition-all duration-300 ease-out hover:scale-110 group"
            >
              <span className="absolute inset-0 -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative font-medium">Контакти та локація</span>
            </Link>
          </div>

          {/* Right side: social + hamburger on mobile */}
          <div className="flex items-center gap-3">
            {/* Social Media Buttons */}
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>

            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>

            {/* Hamburger button (mobile) */}
            <button
              ref={hamburgerRef}
              onClick={() => setOpen(true)}
              className="lg:hidden w-12 h-12 rounded-xl flex items-center justify-center hover:bg-black/5 transition"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="flex flex-col gap-[6px]">
                <span className="block w-8 h-[4px] bg-[#003057] rounded-full" />
                <span className="block w-8 h-[4px] bg-[#003057] rounded-full" />
                <span className="block w-8 h-[4px] bg-[#003057] rounded-full" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Slide panel */}
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Меню"
            className="absolute right-0 top-0 h-full w-[86%] max-w-[420px] bg-white shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-[#003057]">Меню</p>
                <button
                  ref={closeButtonRef}
                  onClick={() => setOpen(false)}
                  className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-black/5 transition"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-[#003057]" />
                </button>
              </div>

              <div className="mt-6 space-y-2">
                {/* Home button - only show when not on home page */}
                {location.pathname !== "/" && (
                  <Link
                    to="/"
                    className="block rounded-2xl px-4 py-4 font-semibold text-lg transition bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                  >
                    Головна
                  </Link>
                )}
                {/* Корекційний клуб */}
                <Link
                  to="/correctional_club"
                  className={`block rounded-2xl px-4 py-4 font-semibold text-lg transition ${
                    location.pathname === "/correctional_club"
                      ? "bg-[#003057] text-white"
                      : "bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                  }`}
                >
                  Корекційний клуб
                </Link>
                {/* Дитячий садок */}
                <Link
                  to="/kindergarten"
                  className={`block rounded-2xl px-4 py-4 font-semibold text-lg transition ${
                    location.pathname === "/kindergarten"
                      ? "bg-[#003057] text-white"
                      : "bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                  }`}
                >
                  Дитячий садок
                </Link>
                {/* Prices Dropdown for Mobile */}
                <div>
                  <button
                    onClick={() => setMobilePricesOpen(!mobilePricesOpen)}
                    className={`w-full rounded-2xl px-4 py-4 font-semibold text-lg transition flex items-center justify-between ${
                      location.pathname === "/prices" || location.pathname === "/correctional_club_prices"
                        ? "bg-[#003057] text-white"
                        : "bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                    }`}
                  >
                    <span>Ціни</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobilePricesOpen ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  {/* Mobile Submenu */}
                  {mobilePricesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {pricesSubmenu.map((item) => {
                        const isActive = location.pathname === item.to;
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            className={`block rounded-2xl px-4 py-3 font-medium text-base transition ${
                              isActive
                                ? "bg-[#003057] text-white"
                                : "bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                {/* Про нас */}
                <Link
                  to="/about"
                  className={`block rounded-2xl px-4 py-4 font-semibold text-lg transition ${
                    location.pathname === "/about"
                      ? "bg-[#003057] text-white"
                      : "bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                  }`}
                >
                  Про нас
                </Link>
                {/* Контакти та локація */}
                <Link
                  to="/contact"
                  className={`block rounded-2xl px-4 py-4 font-semibold text-lg transition ${
                    location.pathname === "/contact"
                      ? "bg-[#003057] text-white"
                      : "bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                  }`}
                >
                  Контакти та локація
                </Link>
              </div>

              {/* Social inside menu (optional, looks nice) */}
              <div className="mt-8 rounded-2xl bg-[#FFFDF8] p-5">
                <p className="text-sm font-bold text-[#003057] mb-3">
                  Соціальні мережі
                </p>

                <div className="flex gap-3">
                  <a
                    href={SOCIALS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    }}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href={SOCIALS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
