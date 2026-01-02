import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import heroImageMobileWebp from "@/assets/Hero1_Mobile.webp";
import heroImageTabletWebp from "@/assets/Hero1_Tablet.webp";
import heroImageDesktopWebp from "@/assets/Hero1_Desktop.webp";
import { motion } from "motion/react";
import { Phone, Mail, Instagram, Facebook, MapPin, Clock } from "lucide-react";

type ImageSource = {
  src: string;
  w: number;
  type?: string;
};

type ResponsiveImageProps = {
  alt: string;
  className?: string;
  sources: ImageSource[];
  sizes?: string;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
};

function ResponsiveImage({
  alt,
  className,
  sources,
  sizes,
  fetchPriority,
  loading,
  decoding = "async",
}: ResponsiveImageProps) {
  const srcSet = sources.map((s) => `${s.src} ${s.w}w`).join(", ");
  const fallback = sources[0]?.src; // smallest as default

  return (
    <img
      src={fallback}
      srcSet={srcSet || undefined}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
    />
  );
}

/* ================= MOBILE HERO ================= */

function MobileContactHero() {
  return (
    <div className="bg-white overflow-hidden">
      {/* PHOTO (from right) */}
      <motion.div
        className="relative h-[380px] overflow-hidden"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* soft warm gradient behind image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7E6] via-[#FFFDF8] to-white" />

        {/* image */}
        <ResponsiveImage
          alt="Діти граються з кульками"
          className="relative z-10 w-full h-full object-cover"
          sources={[{ src: heroImageMobileWebp, w: 640 }]}
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
        />

        {/* STRONGER blend from image to blue section */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-b from-transparent via-[#003060]/45 to-[#003060]" />
      </motion.div>

      {/* BLUE TEXT (from left) */}
      <motion.div
        className="bg-[#003060] px-6 py-10 text-center"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.08,
        }}
      >
        <h1 className="text-3xl font-bold text-[#F6F1E4] leading-tight">
          Зв&apos;яжіться з нами
        </h1>

        <p className="mt-4 text-base text-white/90 leading-relaxed">
          Ми завжди раді відповісти на ваші запитання та допомогти обрати найкращий
          варіант для вашої дитини.
          <br />
          Зателефонуйте нам або напишіть — ми на зв’язку.
        </p>
      </motion.div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ================= HERO ================= */}

      {/* Mobile hero */}
      <div className="block lg:hidden">
        <MobileContactHero />
      </div>

      {/* Desktop hero */}
      <section
        className="relative overflow-hidden bg-white hidden lg:block"
        style={{ height: "640px" }}
      >
        {/* SVG Clip Path Definition */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="concave-clip-contact" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.5 A 0.5 0.5 0 0 1 1 0.5 L 1 1 L 0 1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Full Background Photo - Animate from RIGHT */}
        <motion.div
          className="absolute inset-0"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
        >
          <ResponsiveImage
            alt="Діти граються з кульками"
            className="w-full h-full object-cover"
            sources={[
              { src: heroImageTabletWebp, w: 1024 },
              { src: heroImageDesktopWebp, w: 1376 },
              ]}
            fetchPriority="high"
            loading="eager"
          />
        </motion.div>

        {/* Navy Panel - Animate from LEFT */}
        <motion.div
          className="absolute inset-0"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 640" preserveAspectRatio="none">
            <defs>
              <clipPath id="navy-clip-contact">
                <path d="M 0,0 L 1400,0 A 300,300 0 0 0 965,640 L 0,640 Z" />
              </clipPath>
            </defs>
            <rect width="1440" height="640" fill="#003060" clipPath="url(#navy-clip-contact)" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full pl-[100px] pr-3 lg:pr-5">
            <div className="max-w-[520px] pr-10 lg:pr-14 space-y-6">
              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#F6F1E4] whitespace-nowrap"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.25 }}
              >
                Зв&apos;яжіться з нами
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.35 }}
              >
                <span className="block whitespace-nowrap">
                  Ми завжди раді відповісти на ваші запитання та допомогти обрати
                </span>
                <span className="block whitespace-nowrap">
                  найкращий варіант для вашої дитини.
                </span>
                <span className="block whitespace-nowrap">
                  Зателефонуйте нам або заповніть форму нижче.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFORMATION ================= */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Phone & Email */}
            <motion.div
              className="rounded-3xl p-10 bg-white flex flex-col items-center text-center"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#003060] mb-4">
                Телефон та Email
              </h3>

              <p className="text-lg text-[#2E2E2E] mb-6 leading-relaxed">
                Зателефонуйте нам або напишіть на електронну пошту, щоб отримати
                відповіді на всі ваші запитання. Ми завжди на зв&apos;язку.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="tel:+380987196649"
                  className="flex items-center justify-center gap-2 text-[#003060] hover:text-[#FFB703] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-medium">+380-98-719-66-49</span>
                </a>
                <a
                  href="mailto:budko79t@gmail.com"
                  className="flex items-center justify-center gap-2 text-[#003060] hover:text-[#FFB703] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-lg font-medium">budko79t@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              className="rounded-3xl p-10 bg-white flex flex-col items-center text-center"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#003060] mb-4">
                Соціальні мережі
              </h3>

              <p className="text-lg text-[#2E2E2E] mb-6 leading-relaxed">
                Слідкуйте за нашими новинами, подіями та щоденними моментами з життя
                наших дітей у соціальних мережах.
              </p>

              <div className="flex gap-6 mb-6">
                <a
                  href="https://www.instagram.com/vsesvit_zvukiv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <Instagram className="w-8 h-8 text-white" />
                </a>

                <a
                  href="https://www.facebook.com/tetana.budko.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="w-8 h-8 text-white" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Second Row: Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kindergarten */}
            <motion.div
              className="rounded-3xl overflow-hidden bg-white"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
            >
              <div className="w-full h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=проспект+миру+31,+Кривий+Ріг&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Дитячий садок - проспект миру 31, Кривий Ріг"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#003060] mb-6">
                  Дитячий садок
                </h3>

                <div className="flex items-start gap-3 mb-5">
                  <MapPin className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2E2E2E] mb-1">Адреса:</p>
                    <p className="text-[#2E2E2E]">проспект миру 31, Кривий Ріг</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <Clock className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2E2E2E] mb-1">Графік роботи:</p>
                    <p className="text-[#2E2E2E]">Пн-Пт: 7:00 - 19:00</p>
                    <p className="text-[#2E2E2E]">Сб-Нд: Вихідний</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <Phone className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2E2E2E] mb-1">Телефон:</p>
                    <a
                      href="tel:+380987196649"
                      className="text-[#003060] hover:text-[#FFB703] transition-colors duration-300"
                    >
                      +380-98-719-66-49
                    </a>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href="https://www.google.com/maps?q=проспект+миру+31,+Кривий+Ріг"
                >
                  Прокласти маршрут
                </Button>
              </div>
            </motion.div>

            {/* Correctional club */}
            <motion.div
              className="rounded-3xl overflow-hidden bg-white"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
            >
              <div className="w-full h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=просп.Центральний+(Лермонтова),+16,+Кривий+Ріг&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Корекційний клуб - просп.Центральний (Лермонтова), 16, Кривий Ріг"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#003060] mb-6">
                  Корекційний клуб
                </h3>

                <div className="flex items-start gap-3 mb-5">
                  <MapPin className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2E2E2E] mb-1">Адреса:</p>
                    <p className="text-[#2E2E2E]">просп.Центральний (Лермонтова), 16, Кривий Ріг</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <Clock className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2E2E2E] mb-1">Графік роботи:</p>
                    <p className="text-[#2E2E2E]">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-[#2E2E2E]">Сб: 9:00 - 15:00</p>
                    <p className="text-[#2E2E2E]">Нд: Вихідний</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <Phone className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2E2E2E] mb-1">Телефон:</p>
                    <a
                      href="tel:+380987196649"
                      className="text-[#003060] hover:text-[#FFB703] transition-colors duration-300"
                    >
                      +380-98-719-66-49
                    </a>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href="https://www.google.com/maps?q=просп.Центральний+(Лермонтова),+16,+Кривий+Ріг"
                >
                  Прокласти маршрут
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
