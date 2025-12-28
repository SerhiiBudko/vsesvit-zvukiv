import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImage from "@/assets/5497a58c61619b80f23e22721bc1a0f52c06c371.png";
import { Instagram, Facebook, X } from "lucide-react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: "Корекційний клуб", to: "/correctional_club" },
    { label: "Дитячий садок", to: "/kindergarten" },
    { label: "Про нас", to: "/about" },
    { label: "Контакти та локація", to: "/contact" },
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
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-[#2E2E2E] transition-all duration-300 ease-out hover:scale-110 group"
              >
                {/* Blue gradient background on hover */}
                <span className="absolute inset-0 -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-medium">{l.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side: social + hamburger on mobile */}
          <div className="flex items-center gap-3">
            {/* Social Media Buttons */}
            <a
              href="https://www.instagram.com/vsesvit_zvukiv/"
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
              href="https://www.facebook.com/tetana.budko.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>

            {/* Hamburger button (mobile) */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-12 h-12 rounded-xl flex items-center justify-center hover:bg-black/5 transition"
              aria-label="Open menu"
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
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-[420px] bg-white shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-[#003057]">Меню</p>
                <button
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
                {navLinks.map((l) => {
                  const active = location.pathname === l.to;
                  return (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={`block rounded-2xl px-4 py-4 font-semibold text-lg transition ${
                        active
                          ? "bg-[#003057] text-white"
                          : "bg-[#FFFDF8] text-[#003057] hover:bg-[#003057]/10"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>

              {/* Social inside menu (optional, looks nice) */}
              <div className="mt-8 rounded-2xl bg-[#FFFDF8] p-5">
                <p className="text-sm font-bold text-[#003057] mb-3">
                  Соціальні мережі
                </p>

                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/vsesvit_zvukiv/"
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
                    href="https://www.facebook.com/tetana.budko.2025"
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
