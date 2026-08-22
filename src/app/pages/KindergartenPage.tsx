import kindergardenHeroImageDesktop from "@/assets/kindergardenp1desktop.webp";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { HeroPanel } from "../components/HeroPanel";
import { PageMeta } from "../components/PageMeta";
import { OpenInMapsButton } from "../components/OpenInMapsButton";
import kindergardenHeroImageTablet from "@/assets/kindergardenp1tablet.webp";
import kindergardenHeroImageMobile from "@/assets/kindergardenp1mobile.webp";
import kindergartenExteriorImage from "@/assets/generalphoto.webp";
import kindergartenInteriorImage from "@/assets/5f8522679dafd3ef75bb99e6e2e6a375637b1054.png";
import kindergartenphoto1 from "@/assets/photo1.webp";
import kindergartenphoto2 from "@/assets/photo2.JPG";
import kindergartenphoto3 from "@/assets/photo3.JPG";
import kindergartenphoto4 from "@/assets/photo4.JPG";
import kindergartenphoto5 from "@/assets/photo5.webp";
import kindergartenphoto6 from "@/assets/PhotoK6.webp";
import kindergartenphoto7 from "@/assets/PhotoK7.webp";
import kindergartenphoto8 from "@/assets/PhotoK8.webp";
import kindergartenphoto9 from "@/assets/PhotoK9.webp";
import kindergartenphoto10 from "@/assets/PhotoK10.webp";
import kindergartenphoto11 from "@/assets/PhotoK11.webp";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone, Mail } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PHONES, EMAIL, CITY, KINDERGARTEN } from "@/constants/contact";



/* ================= MOBILE HERO ================= */

function MobileKindergartenHero() {
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

        <ResponsiveImage
          alt="Діти в садочку"
          className="relative z-10 w-full h-full object-cover"
          sources={[{ src: kindergardenHeroImageMobile, w: 640 }]}
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
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
          Дитячий садок
        </h1>

        <p className="mt-4 text-base text-white/90 leading-relaxed">
          Використання різних методик у формуванні особистості дитини поєднане зі щоденними
          заняттями та іграми, а також помірним сенсорним і фізичним навантаженням, що дає змогу
          кожній дитині гармонійно зростати, пізнаючи світ і навколишнє середовище.
        </p>
      </motion.div>
    </div>
  );
}

export default function KindergartenPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="Дитячий садок"
        description="Дитячий садок «Всесвіт Звуків» на Проспекті Університетському 51 у Кривому Розі: програма, приміщення, режим роботи та фото."
        path="/kindergarten"
      />
      <Navigation />

      {/* ================= HERO ================= */}

      {/* Mobile hero */}
      <div className="block lg:hidden">
        <MobileKindergartenHero />
      </div>

      {/* Desktop hero (your existing one) */}
      <section className="relative overflow-hidden bg-white hidden lg:block" style={{ height: "640px" }}>
        {/* SVG Clip Path Definition */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="concave-clip-kindergarten" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.5 A 0.5 0.5 0 0 1 1 0.5 L 1 1 L 0 1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Full Background Photo - Animate from RIGHT */}
        <HeroPanel from="right">
          <ResponsiveImage
            alt="Діти в садочку"
            className="w-full h-full object-cover"
            sources={[
              { src: kindergardenHeroImageTablet, w: 1024 },
              { src: kindergardenHeroImageDesktop, w: 1376 },
              ]}
            fetchPriority="high"
            loading="eager"
          />
        </HeroPanel>

        {/* Navy Panel - Animate from LEFT */}
        <HeroPanel from="left">
          <svg width="100%" height="100%" viewBox="0 0 1440 640" preserveAspectRatio="none">
            <defs>
              <clipPath id="navy-clip-kindergarten">
                <path d="M 0,0 L 1400,0 A 300,300 0 0 0 965,640 L 0,640 Z" />
              </clipPath>
            </defs>
            <rect width="1440" height="640" fill="#003060" clipPath="url(#navy-clip-kindergarten)" />
          </svg>
        </HeroPanel>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full pl-[100px] pr-3 lg:pr-5">
            <div className="max-w-[720px] pr-10 lg:pr-14 space-y-6">
              <motion.h1
                className="font-bold leading-tight text-[#F6F1E4]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.25 }}
              >
                <span className="block whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl">
                  Дитячий садок
                </span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.35 }}
              >
                <span className="block">Використання різних методик у формуванні особистості дитини</span>
                <span className="block">
                  поєднане зі щоденними заняттями та іграми, а також помірним
                </span>
                <span className="block">
                  сенсорним і фізичним навантаженням, що дає змогу кожній дитині
                </span>
                <span className="block">
                  гармонійно зростати, пізнаючи світ і навколишнє середовище.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAROUSEL SECTION ================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/30 to-blue-50/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E2E2E] mb-4">
              Як ми розвиваємо дитину?
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Основні напрямки розвитку у нашому дитячому садку
            </p>
          </motion.div>

          <CarouselSection />
        </div>
      </section>

      {/* ================= DAILY SCHEDULE SECTION ================= */}
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
              Розпорядок дня
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Збалансований розклад для гармонійного розвитку вашої дитини
            </p>
          </motion.div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {[
              { time: "8:30 - 9:00", activity: "Зустріч дітей, ранкова гімнастика" },
              { time: "9:00 - 9:30", activity: "Сніданок" },
              { time: "9:30 - 11:00", activity: "Освітні заняття, розвиваючі ігри" },
              { time: "11:00 - 12:30", activity: "Прогулянка на свіжому повітрі" },
              { time: "12:30 - 13:00", activity: "Обід" },
              { time: "13:00 - 15:00", activity: "Денний відпочинок" },
              { time: "15:00 - 15:30", activity: "Полудник" },
              { time: "15:30 - 16:00", activity: "Вільна гра, підготовка до дому" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 bg-[#FFFDF8] rounded-xl p-6 hover:shadow-sm transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-12 bg-[#003060] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{item.time}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-lg text-[#2E2E2E]">{item.activity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATION & GALLERY SECTION ================= */}
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
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Зручна локація та сучасні приміщення для комфорту вашої дитини
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Photos */}
            <motion.div
              className="h-[420px] sm:h-[520px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="h-full">
                <PhotoGallerySlider />
              </div>
            </motion.div>

            {/* Contact info — shares the row with the photos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="h-full rounded-[28px] bg-[#FFFDF8] shadow-[0_12px_30px_rgba(0,0,0,0.08)] px-6 py-6 lg:px-8 lg:py-7 flex flex-col justify-center">
                <h3 className="text-center text-xl lg:text-2xl font-bold text-[#003060]">
                  Контактна інформація
                </h3>

                <div className="mt-5 grid grid-cols-1 gap-y-4">
                  <ContactItem
                    icon={<MapPin className="w-6 h-6 text-[#FFB703]" />}
                    title="Адреса"
                    lines={[KINDERGARTEN.street, CITY]}
                    mapUrl={KINDERGARTEN.mapLinkUrl}
                  />

                  <ContactItem
                    icon={<Clock className="w-6 h-6 text-[#FFB703]" />}
                    title="Режим роботи"
                    lines={["Понеділок – П'ятниця", "8:30 – 16:00"]}
                  />

                  <ContactItem
                    icon={<Phone className="w-6 h-6 text-[#FFB703]" />}
                    title="Телефон"
                    links={[...PHONES]}
                  />

                  <ContactItem
                    icon={<Mail className="w-6 h-6 text-[#FFB703]" />}
                    title="Email"
                    link={EMAIL}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= Photo Gallery Slider ================= */

function PhotoGallerySlider() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    { src: kindergartenExteriorImage, alt: "Зовнішня частина дитячого садка" },
    { src: kindergartenInteriorImage, alt: "Класна кімната з навчальним обладнанням" },
    { src: kindergartenphoto1, alt: "Просторий класний простір" },
    { src: kindergartenphoto2, alt: "Ігрова кімната з іграшками" },
    { src: kindergartenphoto3, alt: "Комфортний внутрішній простір" },
    { src: kindergartenphoto4, alt: "Комфортний внутрішній простір" },
    { src: kindergartenphoto5, alt: "Комфортний внутрішній простір" },
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
    // `fade` stacks every slide inside the viewport, so the browser treats all
    // of them as visible and decodes all of them at once — a dozen full-size
    // bitmaps that stall scrolling. `ondemand` renders only the active slide.
    lazyLoad: "ondemand" as const,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white h-full">
      <Slider ref={sliderRef} {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <div className="relative h-[520px]">
              {/* Only the first slide is on screen at load; defer the rest so
                  the gallery does not pull megabytes of photos up front. */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                width={1040}
                height={520}
                {...(index === 0 ? { fetchpriority: "high" } : {})}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation controls aligned at bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-4 flex items-center justify-between">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[#003060] active:bg-[#003060] [&:active>svg]:text-white transition-all duration-300 group"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-7 h-7 text-[#003060] group-hover:text-white" />
        </button>

        <div className="bg-[#003060]/80 backdrop-blur-sm px-6 py-2 rounded-full">
          <p className="text-white font-bold text-sm">
            {currentSlide + 1} / {photos.length}
          </p>
        </div>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[#003060] active:bg-[#003060] [&:active>svg]:text-white transition-all duration-300 group"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-7 h-7 text-[#003060] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}

/* ================= Carousel Section ================= */

function CarouselSection() {
  const sliderRef = useRef<Slider>(null);

  const cardsData = [
    {
      title: "Загальний розвиток",
      description:
        "Комплексний підхід до розвитку когнітивних здібностей, соціальних навичок та емоційного інтелекту.",
      image: kindergartenphoto6,
    },
    {
      title: "Підготовка до школи",
      description:
        "Програма підготовки, яка допоможе вашій дитині впевнено почати шкільне життя з міцною базою знань.",
      image: kindergartenphoto7,
    },
    {
      title: "Творчі заняття",
      description:
        "Художня майстерня, ліплення та інші творчі активності для розвитку уяви та дрібної моторики.",
      image: kindergartenphoto8,
    },
    {
      title: "Фізичний розвиток",
      description:
        "Гімнастика, спортивні ігри та активності для здорового фізичного розвитку дітей.",
      image: kindergartenphoto9,
    },
    {
      title: "Музичні заняття",
      description:
        "Знайомство з музичними інструментами, ритмікою та співом для розвитку музичних здібностей.",
      image: kindergartenphoto10,
    },
    {
      title: "Англійська мова",
      description:
        "Ігрова форма навчання англійській мові з носіями для природного засвоєння іноземної мови.",
      image: kindergartenphoto11,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: false,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand" as const,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: false, infinite: true },
      },
    ],
  };

  return (
    <div className="relative pb-20 md:pb-12">
      {/* Mobile: Column Layout with Scroll Animations */}
      <div className="md:hidden space-y-6">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.1 
            }}
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Text */}
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-[#003060]">{card.title}</h3>
              <p className="text-[#2E2E2E]/70 leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Carousel Slider */}
      <div className="hidden md:block relative">
        {/* Desktop Navigation Buttons - On sides */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#003060] hover:text-white transition-all duration-300 group"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-[#003060] group-hover:text-white" />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#003060] hover:text-white transition-all duration-300 group"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-[#003060] group-hover:text-white" />
        </button>

        {/* Desktop Slider */}
        <Slider ref={sliderRef} {...settings} className="k-carousel">
          {cardsData.map((card, index) => (
            <div key={index}>
              <div className="px-3">
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden shadow-md w-full"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#003060]">{card.title}</h3>
                    <p className="text-[#2E2E2E]/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


/* ================= ContactItem ================= */

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  lines?: string[];
  link?: { href: string; label: string };
  links?: { href: string; label: string }[];
  /** When set, renders an "open in Google Maps" link under the lines. */
  mapUrl?: string;
}

function ContactItem({ icon, title, lines, link, links, mapUrl }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4 w-full">
      <div className="w-11 h-11 bg-[#FFB703]/10 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="font-bold text-lg text-[#003060] mb-1">{title}</p>

        {lines && (
          <div className="space-y-0.5">
            {lines.map((line, index) => (
              <p key={index} className="text-base text-[#2E2E2E]/70 leading-snug">
                {line}
              </p>
            ))}
          </div>
        )}

        {mapUrl && <OpenInMapsButton href={mapUrl} className="mt-3" />}

        {link && (
          <a
            href={link.href}
            className="text-base text-[#2E2E2E] hover:text-[#FFB703] transition-colors duration-300 font-medium leading-relaxed"
          >
            {link.label}
          </a>
        )}

        {links && (
          <div className="space-y-1">
            {links.map((l, index) => (
              <a
                key={index}
                href={l.href}
                className="block text-base text-[#2E2E2E] hover:text-[#FFB703] transition-colors duration-300 font-medium leading-relaxed"
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
