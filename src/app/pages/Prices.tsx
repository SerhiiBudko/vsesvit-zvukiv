import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { motion } from "motion/react";
import priceheroimage from "@/assets/prices1.webp";
import priceheroimagemobile from "@/assets/prices1_mobile.webp";
import { Check, Clock, Users, Calendar, UtensilsCrossed, Music, Activity, Brain } from "lucide-react";

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

function MobileCorrectionalPriceHero() {
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
          alt="Діти граються з кульками"
          className="relative z-10 w-full h-full object-cover"
          sources={[{ src: priceheroimagemobile, w: 640 }]}
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
          Оберіть зручний план для вашої сім'ї.
        </p>

        <div className="mt-7 flex justify-center">
          <Button variant="primary" size="md" href="/contact">
              Зв'язатися з нами
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ================= HERO SECTION ================= */}
      {/* Mobile hero */}
      <div className="block lg:hidden">
        <MobileCorrectionalPriceHero />
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
          <ResponsiveImage
            alt="Діти граються з кульками"
            className="w-full h-full object-cover"
            sources={[
              { src: priceheroimagemobile, w: 1024 },
              { src: priceheroimage, w: 1376 },
              ]}
            fetchPriority="high"
            loading="eager"
          />
        </motion.div>

        {/* Navy Panel with Concave Semicircle Cut-out - Animate from LEFT */}
        <motion.div 
          className="absolute inset-0"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 640" preserveAspectRatio="none">
            <defs>
              <clipPath id="navy-clip-prices">
                <path d="M 0,0 L 1400,0 A 300,300 0 0 0 965,640 L 0,640 Z" />
              </clipPath>
            </defs>
            <rect width="1440" height="640" fill="#003060" clipPath="url(#navy-clip-prices)" />
          </svg>
        </motion.div>

        {/* Content - Left Aligned in Navy Panel */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full pl-[100px] pr-3 lg:pr-5">
            <div className="max-w-[520px] pr-10 lg:pr-14 space-y-6">
              
              {/* Main Headline */}
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

              {/* Supporting Paragraph */}
              <motion.p 
                className="text-lg lg:text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.35 }}
              >
                <span className="block">
                  Оберіть зручний план для вашої сім'ї.
                </span>
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.45 }}
              >
                <Button variant="primary" size="lg" href="/contact">
                  Зв'язатися з нами
                </Button>
              </motion.div>

            </div>
          </div>
        </div>

      </section>

      {/* ================= PRICING CARDS SECTION ================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E2E2E] mb-4">
              Тарифні плани
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Виберіть найзручніший варіант відвідування для вашої дитини
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Full Day */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFB703] to-[#FFD966]" />
              
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 lg:mx-auto">
                  <Clock className="w-8 h-8 text-[#FFB703]" />
                </div>

                {/* Title */}
                <div className="text-center md:text-left lg:text-center">
                  <h3 className="text-2xl font-bold text-[#003060] mb-2">
                    Повний день
                  </h3>
                  <p className="text-[#2E2E2E]/60">
                    5 днів на тиждень
                  </p>
                </div>

                {/* Price */}
                <div className="py-6 border-y border-gray-200 text-center md:text-left lg:text-center">
                  <div className="flex items-baseline gap-2 justify-center md:justify-start lg:justify-center">
                    <span className="text-5xl font-bold text-[#003060]">7000</span>
                    <span className="text-xl text-[#2E2E2E]/60">грн</span>
                  </div>
                  <p className="text-[#2E2E2E]/60 mt-1">на місяць</p>
                </div>

                {/* Features */}
                <div className="flex justify-center md:justify-start lg:justify-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Повний робочий день</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Понеділок - П'ятниця</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">8:30 - 16:00</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Всі освітні програми</span>
                    </li>
                  </ul> 
                </div>

                {/* CTA Button */}
                <Button variant="primary" size="md" href="/contact" className="w-full">
                  Записатися
                </Button>
              </div>
            </motion.div>

            {/* Card 2: Half Day */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border-2 border-[#FFB703]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Decorative gradient - with rounded corners matching container */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFB703] to-[#FFD966] rounded-t-3xl" />
              
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 lg:mx-auto">
                  <Users className="w-8 h-8 text-[#FFB703]" />
                </div>

                {/* Popular badge */}
                <div className="flex justify-center md:justify-start lg:justify-center">
                  <div className="bg-[#FFB703] text-[#003060] px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                    Популярне
                  </div>
                </div>

                {/* Title */}
                <div className="text-center md:text-left lg:text-center">
                  <h3 className="text-2xl font-bold text-[#003060] mb-2">
                    Половина дня
                  </h3>
                  <p className="text-[#2E2E2E]/60">
                    "Вільна мама"
                  </p>
                </div>

                {/* Price */}
                <div className="py-6 border-y border-gray-200 text-center md:text-left lg:text-center">
                  <div className="flex items-baseline gap-2 justify-center md:justify-start lg:justify-center">
                    <span className="text-5xl font-bold text-[#003060]">4000</span>
                    <span className="text-xl text-[#2E2E2E]/60">грн</span>
                  </div>
                  <p className="text-[#2E2E2E]/60 mt-1">на місяць</p>
                </div>

                {/* Features */}
                <div className="flex justify-center md:justify-start lg:justify-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">5 днів на тиждень</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Понеділок - П'ятниця</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">8:30 - 13:00</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Основні освітні програми</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button variant="primary" size="md" href="/contact" className="w-full">
                  Записатися
                </Button>
              </div>
            </motion.div>

            {/* Card 3: Flexible Schedule */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFB703] to-[#FFD966]" />
              
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 lg:mx-auto">
                  <Calendar className="w-8 h-8 text-[#FFB703]" />
                </div>

                {/* Title */}
                <div className="text-center md:text-left lg:text-center">
                  <h3 className="text-2xl font-bold text-[#003060] mb-2">
                    Гнучкий графік
                  </h3>
                  <p className="text-[#2E2E2E]/60">
                    3 дні на тиждень
                  </p>
                </div>

                {/* Price */}
                <div className="py-6 border-y border-gray-200 text-center md:text-left lg:text-center">
                  <div className="flex items-baseline gap-2 justify-center md:justify-start lg:justify-center">
                    <span className="text-5xl font-bold text-[#003060]">4000</span>
                    <span className="text-xl text-[#2E2E2E]/60">грн</span>
                  </div>
                  <p className="text-[#2E2E2E]/60 mt-1">на місяць</p>
                </div>

                {/* Features */}
                <div className="flex justify-center md:justify-start lg:justify-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Виберіть 3 дні</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Гнучкий розклад</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Повний день</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Всі освітні програми</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button variant="primary" size="md" href="/contact" className="w-full">
                  Записатися
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= MEALS SECTION ================= */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          
          <motion.div
            className="bg-white rounded-3xl p-10 lg:p-16 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Icon & Text */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="w-20 h-20 bg-[#FFB703]/10 rounded-3xl flex items-center justify-center mx-auto lg:mx-0">
                  <UtensilsCrossed className="w-10 h-10 text-[#FFB703]" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-[#003060]">
                  Харчування
                </h3>
                
                <p className="text-lg text-[#2E2E2E]/70 leading-relaxed">
                  Збалансоване триразове харчування для вашої дитини. 
                  Ми використовуємо тільки якісні та свіжі продукти, 
                  враховуючи індивідуальні потреби кожної дитини.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Ранковий перекус</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Повноцінний обід</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2E2E2E]/80">Полуденок</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Price */}
              <div className="bg-gradient-to-br from-[#003060] to-[#004080] rounded-3xl p-10 text-center text-white">
                <p className="text-xl mb-4 opacity-90">Вартість харчування</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl lg:text-7xl font-bold">60</span>
                  <span className="text-2xl opacity-80">грн</span>
                </div>
                <p className="text-lg opacity-90">на день</p>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-75">
                    * Харчування сплачується окремо та не входить у вартість тарифних планів
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= INCLUDED CLASSES SECTION ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E2E2E] mb-4">
              Входить в оплату садка
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Додаткові заняття для гармонійного розвитку дитини
            </p>
            <p className="text-sm text-[#2E2E2E]/50 mt-2">
              * Заняття проводяться один раз на тиждень
            </p>
          </motion.div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Choreography */}
            <motion.div
              className="bg-gradient-to-br from-blue-50/50 to-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Activity className="w-8 h-8 text-[#FFB703]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#003060] mb-4 text-center md:text-left">
                Хореографія
              </h3>
              
              <p className="text-[#2E2E2E]/70 leading-relaxed text-center md:text-left">
                Розвиток координації, пластичності та почуття ритму через танцювальні рухи та вправи.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-[#2E2E2E]/60 justify-center md:justify-start">
                  <Calendar className="w-4 h-4" />
                  <span>1 раз на тиждень</span>
                </div>
              </div>
            </motion.div>

            {/* Music & Rhythm */}
            <motion.div
              className="bg-gradient-to-br from-blue-50/50 to-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Music className="w-8 h-8 text-[#FFB703]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#003060] mb-4 text-center md:text-left">
                Музика і ритміка
              </h3>
              
              <p className="text-[#2E2E2E]/70 leading-relaxed text-center md:text-left">
                Знайомство з музичними інструментами, розвиток слуху та музичних здібностей дитини.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-[#2E2E2E]/60 justify-center md:justify-start">
                  <Calendar className="w-4 h-4" />
                  <span>1 раз на тиждень</span>
                </div>
              </div>
            </motion.div>

            {/* Neuro-exercises */}
            <motion.div
              className="bg-gradient-to-br from-blue-50/50 to-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Brain className="w-8 h-8 text-[#FFB703]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#003060] mb-4 text-center md:text-left">
                Нейровправи
              </h3>
              
              <p className="text-[#2E2E2E]/70 leading-relaxed text-center md:text-left">
                Спеціальні вправи для розвитку мозку, покращення концентрації та когнітивних функцій.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-[#2E2E2E]/60 justify-center md:justify-start">
                  <Calendar className="w-4 h-4" />
                  <span>1 раз на тиждень</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#003060] to-[#004080]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 text-center">
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              Готові приєднатися до нас?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-[700px] mx-auto">
              Зв'яжіться з нами для отримання додаткової інформації та запису на екскурсію садком
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" href="/contact">
                Записатися на екскурсію
              </Button>
              <Button variant="outline" size="lg" href="tel:+380501234567">
                Зателефонувати нам
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
