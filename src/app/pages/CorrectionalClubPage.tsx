// src/app/pages/CorrectionalClubPage.tsx

import correctionalHeroImage from "@/assets/LogopedPhoto1.png";
import correctionalExteriorImage from "@/assets/generalphoto.png";
import correctionalInteriorImage from "@/assets/5f8522679dafd3ef75bb99e6e2e6a375637b1054.png";

import photo1 from "@/assets/photo1.JPG";
import photo2 from "@/assets/photo2.JPG";
import photo3 from "@/assets/photo3.JPG";
import photo4 from "@/assets/photo4.JPG";
import photo5 from "@/assets/photo5.JPG";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Phone,
  Mail,
  Speech,
  Sparkles,
  Hand,
  Users,
  BookOpenCheck,
  ClipboardList,
} from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef, useState, ReactNode } from "react";


/* ================= MOBILE HERO ================= */

function MobileCorrectionalHero({ image }: { image: string }) {
  return (
    <div className="bg-white overflow-hidden">
      {/* PHOTO (from right) */}
      <motion.div
        className="relative h-[380px] overflow-hidden"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* warm gradient behind image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7E6] via-[#FFFDF8] to-white" />

        <ImageWithFallback
          src={image}
          alt="Корекційний клуб - Всесвіт Звуків"
          className="relative z-10 w-full h-full object-cover"
        />

        {/* blend into blue */}
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
          Корекційний клуб
        </h1>

        <p className="mt-4 text-base text-white/90 leading-relaxed">
          <span className="block">
            Індивідуальні та групові заняття для розвитку мовлення, уваги та навчальних навичок.
          </span>
          <span className="block">
            Працюємо дбайливо, професійно та з результатом — під потреби кожної дитини.
          </span>
        </p>

        <div className="mt-7 flex justify-center">
          <Button variant="primary" size="md" href="/contact">
            Зв&apos;язатися з нами
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function CorrectionalClubPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ================= HERO SECTION ================= */}

      {/* Mobile hero */}
      <div className="block lg:hidden">
        <MobileCorrectionalHero image={correctionalHeroImage} />
      </div>

      {/* Desktop hero */}
      <section className="relative overflow-hidden bg-white hidden lg:block" style={{ height: "640px" }}>
        {/* Full Background Photo - Animate from RIGHT */}
        <motion.div
          className="absolute inset-0"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
        >
          <img
            src={correctionalHeroImage}
            alt="Корекційні заняття"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Navy Panel with Concave Semicircle Cut-out - Animate from LEFT */}
        <motion.div
          className="absolute inset-0"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 640" preserveAspectRatio="none">
            <defs>
              <clipPath id="navy-clip-correctional">
                <path d="M 0,0 L 1400,0 A 300,300 0 0 0 965,640 L 0,640 Z" />
              </clipPath>
            </defs>
            <rect width="1440" height="640" fill="#003060" clipPath="url(#navy-clip-correctional)" />
          </svg>
        </motion.div>

        {/* Content - Left */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full pl-[100px] pr-3 lg:pr-5">
            <div className="max-w-[760px] pr-10 lg:pr-14 space-y-6">
              <motion.h1
                className="font-bold leading-tight text-[#F6F1E4]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.25 }}
              >
                <span className="block whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl">
                  Корекційний клуб
                </span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.35 }}
              >
                <span className="block">
                  Індивідуальні та групові заняття для розвитку мовлення, уваги та навчальних навичок.
                </span>
                <span className="block">
                  Працюємо дбайливо, професійно та з результатом — під потреби кожної дитини.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIRECTIONS (LOGOPEDY) SECTION ================= */}
      <SpeechTherapyDirectionsSection />

      {/* ================= HOW WE WORK SECTION ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E2E2E] mb-4">
              Як проходять заняття
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[760px] mx-auto">
              Діагностика → індивідуальний план → регулярні заняття → зворотний звʼязок батькам
            </p>
          </motion.div>

          <div className="max-w-[900px] mx-auto space-y-6">
            {[
              {
                title: "1) Первинна консультація",
                text: "Знайомимось, уточнюємо запит, оцінюємо сильні сторони та зони росту дитини.",
              },
              {
                title: "2) Діагностика та план",
                text: "Формуємо цілі й кроки: що саме будемо коригувати та як вимірюємо прогрес.",
              },
              {
                title: "3) Заняття (індивідуально/у малій групі)",
                text: "Працюємо через гру, вправи, сенсорні та навчальні методики — без перевантаження.",
              },
              {
                title: "4) Результат і підтримка",
                text: "Регулярно даємо батькам рекомендації та домашні вправи (за потреби).",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-[#FFFDF8] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <h3 className="text-xl font-bold text-[#003060] mb-2">{step.title}</h3>
                <p className="text-[#2E2E2E]/70 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATION + PHOTOS + CONTACT ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E2E2E] mb-4">
              Наше розташування та фото
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[760px] mx-auto">
              Зручна локація та комфортні приміщення для спокійної роботи з дитиною
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              className="rounded-3xl overflow-hidden shadow-xl bg-gray-100 h-[520px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps?q=Лермонтова+16,+Кривий+Ріг&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Корекційний клуб - Лермонтова 16, Кривий Ріг"
              />
            </motion.div>

            {/* Photos */}
            <motion.div
              className="h-[520px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="h-full">
                <CorrectionalPhotoGallerySlider
                  exterior={correctionalExteriorImage}
                  interior={correctionalInteriorImage}
                  photos={[photo1, photo2, photo3, photo4, photo5]}
                />
              </div>
            </motion.div>
          </div>

          {/* Contact info below */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-[1050px] rounded-[28px] bg-[#FFFDF8] shadow-[0_12px_30px_rgba(0,0,0,0.08)] px-8 py-10 lg:px-12 lg:py-12">
              <h3 className="text-center text-3xl lg:text-4xl font-bold text-[#003060]">
                Контактна інформація
              </h3>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                <ContactItem
                  icon={<MapPin className="w-7 h-7 text-[#FFB703]" />}
                  title="Адреса"
                  lines={["Лермонтова 16", "Кривий Ріг"]}
                />

                <ContactItem
                  icon={<Clock className="w-7 h-7 text-[#FFB703]" />}
                  title="Режим роботи"
                  lines={["Понеділок – П'ятниця", "8:30 – 16:00"]}
                />

                <ContactItem
                  icon={<Phone className="w-7 h-7 text-[#FFB703]" />}
                  title="Телефон"
                  links={[
                    { href: "tel:+380987196649", label: "+380-98-719-66-49" },
                    { href: "tel:+380672101516", label: "+380-67-210-15-16" },
                  ]}
                />

                <ContactItem
                  icon={<Mail className="w-7 h-7 text-[#FFB703]" />}
                  title="Email"
                  link={{ href: "mailto:budko79t@gmail.com", label: "budko79t@gmail.com" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ===================== Directions Section (Nice Grid) ===================== */

function SpeechTherapyDirectionsSection() {
  const items = [
    {
      title: "Логопедична корекція",
      description: "Виправлення звуковимови, постановка звуків та їх автоматизація.",
      icon: Speech,
    },
    {
      title: '“Запуск” або стимулювання мовлення',
      description: "Імітація звуків, звуконаслідування, формування перших слів та фразового мовлення.",
      icon: Sparkles,
    },
    {
      title: "Логопедичний масаж",
      description: "Дизартрія, міжзубний сигматизм, робота з інервацією артикуляційного апарату.",
      icon: Hand,
    },
    {
      title: "Робота з різними віковими групами",
      description: "Заняття з дітьми від 2 років: дошкільний, шкільний та підлітковий вік.",
      icon: Users,
    },
    {
      title: "Корекція дислексії та дисграфії",
      description: "Спеціалізована робота з проблемами читання та письма.",
      icon: BookOpenCheck,
    },
    {
      title: "Діагностика мовлення",
      description: "Комплексне обстеження та визначення рівня розвитку мовлення дитини.",
      icon: ClipboardList,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/30 to-blue-50/10">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E2E2E] mb-4">
            Напрями роботи логопеда
          </h2>
          <p className="text-lg text-[#2E2E2E]/70 max-w-[820px] mx-auto leading-relaxed">
            Підбираємо програму індивідуально — залежно від віку, запиту та мовленнєвого розвитку.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                className="rounded-3xl bg-[#FFFDF8] border border-[#FFB703]/25 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.10)] transition-all duration-300 p-7 lg:p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFB703]/12 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#FFB703]" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#003060] leading-snug">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-[#2E2E2E]/70 leading-relaxed">
                      {it.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#FFB703]/35 via-[#FFB703]/10 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== Small UI components ===================== */

function ContactItem({
  icon,
  title,
  lines,
  link,
  links,
}: {
  icon: ReactNode;
  title: string;
  lines?: string[];
  link?: { href: string; label: string };
  links?: { href: string; label: string }[];
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-full bg-[#FFB703]/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xl font-bold text-[#2E2E2E]">{title}</p>

        {lines && (
          <div className="mt-2 space-y-1">
            {lines.map((l, idx) => (
              <p key={idx} className="text-[#2E2E2E]/70 text-lg leading-snug">
                {l}
              </p>
            ))}
          </div>
        )}

        {link && (
          <div className="mt-2">
            <a
              href={link.href}
              className="text-[#2E2E2E]/70 text-lg hover:text-[#FFB703] transition-colors"
            >
              {link.label}
            </a>
          </div>
        )}

        {links && (
          <div className="mt-2 space-y-1">
            {links.map((l, idx) => (
              <a
                key={idx}
                href={l.href}
                className="block text-[#2E2E2E]/70 text-lg hover:text-[#FFB703] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ===================== Photo Gallery Slider ===================== */

function CorrectionalPhotoGallerySlider({
  exterior,
  interior,
  photos,
}: {
  exterior: string;
  interior: string;
  photos: string[];
}) {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const allPhotos = [
    { src: exterior, alt: "Зовнішній вигляд центру" },
    { src: interior, alt: "Кабінет для занять" },
    ...photos.map((src, i) => ({ src, alt: `Фото ${i + 1}` })),
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white h-full">
      <Slider ref={sliderRef} {...settings}>
        {allPhotos.map((photo, index) => (
          <div key={index}>
            <div className="relative h-[520px]">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[#003060] transition-all duration-300 group"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-7 h-7 text-[#003060] group-hover:text-white" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[#003060] transition-all duration-300 group"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-7 h-7 text-[#003060] group-hover:text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-[#003060]/80 backdrop-blur-sm px-6 py-2 rounded-full">
        <p className="text-white font-bold text-sm">
          {currentSlide + 1} / {allPhotos.length}
        </p>
      </div>
    </div>
  );
}
