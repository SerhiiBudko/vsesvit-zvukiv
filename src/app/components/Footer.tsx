import { Link } from "react-router-dom";
import logoImage from "@/assets/5497a58c61619b80f23e22721bc1a0f52c06c371.png";
import { Facebook, Instagram, ArrowUp, MapPin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#003060] text-white py-16 relative">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Logo and Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img src={logoImage} alt="Всесвіт Звуків" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-white">
                Всесвіт Звуків
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Ми дбаємо про розвиток та щастя ваших дітей, створюючи комфортні умови для їхнього навчання та розвитку.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Швидкі посилання</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/80 hover:text-[#FFB703] transition-colors duration-300"
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link 
                  to="/correctional_club" 
                  className="text-white/80 hover:text-[#FFB703] transition-colors duration-300"
                >
                  Корекційний клуб
                </Link>
              </li>
              <li>
                <Link 
                  to="/kindergarten" 
                  className="text-white/80 hover:text-[#FFB703] transition-colors duration-300"
                >
                  Дитячий садок
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white/80 hover:text-[#FFB703] transition-colors duration-300"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/80 hover:text-[#FFB703] transition-colors duration-300"
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Контакти</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a 
                  href="tel:+380987196649" 
                  className="hover:text-[#FFB703] transition-colors duration-300"
                >
                  +380-98-719-66-49
                </a>
              </li>
              <li>
                <a 
                  href="tel:+380672101516" 
                  className="hover:text-[#FFB703] transition-colors duration-300"
                >
                  +380-67-210-15-16
                </a>
              </li>
              <li>
                <a 
                  href="mailto:budko79t@gmail.com" 
                  className="hover:text-[#FFB703] transition-colors duration-300"
                >
                  budko79t@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Локації</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Дитячий садок</p>
                    <p>проспект миру 31</p>
                    <p>Кривий Ріг</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Корекційний клуб</p>
                    <p>просп.Центральний (Лермонтова), 16</p>
                    <p>Кривий Ріг</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Соціальні мережі</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/vsesvit_zvukiv/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                style={{
                  background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                }}
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.facebook.com/tetana.budko.2025" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Back to Top Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#FFB703] group-hover:border-[#FFB703] transition-all duration-300">
              <ArrowUp className="w-6 h-6 text-white" />
            </span>
            <span className="font-semibold tracking-wide">Нагору</span>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2026 Всесвіт Звуків. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
