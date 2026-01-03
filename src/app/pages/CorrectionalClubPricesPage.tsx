import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { motion } from "motion/react";
import logopedphoto1mobile from "@/assets/logopedp1mobile.webp";
import logopedphoto1tablet from "@/assets/logopedp1tablet.webp";
import logopedphoto1desktop from "@/assets/logopedp1desktop.webp"; 
import { MessageCircle, Brain, Hand, Heart, Music, BookOpen, Clock, AlertCircle, CheckCircle } from "lucide-react";

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
            sources={[{ src: logopedphoto1mobile, w: 640 }]}
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
            Корекційний клуб
          </h1>
  
          <p className="mt-4 text-base text-white/90 leading-relaxed">
            <span className="block">
                Професійні спеціалісти та Індивідуальний підхід до кожної дитини.
            </span>
          </p>
  
          <div className="mt-7 flex justify-center">
            <Button variant="primary" size="md" href="/contact">
                Записатися на консультацію
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }


export default function CorrectionalClubPricesPage() {
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
              { src: logopedphoto1tablet, w: 1024 },
              { src: logopedphoto1desktop, w: 1376 },
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
              <clipPath id="navy-clip-correctional">
                <path d="M 0,0 L 1400,0 A 300,300 0 0 0 965,640 L 0,640 Z" />
              </clipPath>
            </defs>
            <rect width="1440" height="640" fill="#003060" clipPath="url(#navy-clip-correctional)" />
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
                  Корекційний клуб
                </span>
              </motion.h1>

              {/* Supporting Paragraph */}
              <motion.p 
                className="text-lg lg:text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.35 }}
              >
                <span className="block">Професійні спеціалісти та Індивідуальний підхід до кожної дитини.</span>
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.45 }}
              >
                <Button variant="primary" size="lg" href="/contact">
                  Записатися на консультацію
                </Button>
              </motion.div>

            </div>
          </div>
        </div>

      </section>

      {/* ================= SPEECH THERAPY SECTION ================= */}
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
              Логопед та корекційний педагог
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Індивідуальні заняття тривалістю 45 хвилин
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Speech Disorders */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFB703] to-[#FFD966]" />
              
              <div className="space-y-6">
                {/* Icon and Title - inline on mobile, stacked and centered on desktop */}
                <div className="flex items-center gap-3 md:block lg:flex lg:flex-col lg:items-center">
                  <div className="w-14 h-14 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center flex-shrink-0 md:mb-4 lg:mb-3">
                    <MessageCircle className="w-7 h-7 text-[#FFB703]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003060] md:mb-3 lg:mb-0 lg:text-center">
                    Порушення звуковимови
                  </h3>
                </div>

                <div className="text-center md:text-left lg:text-center">
                  <p className="text-[#2E2E2E]/60 text-sm leading-relaxed">
                    Корекція вимови звуків, робота над чіткістю мовлення
                  </p>
                </div>

                <div className="py-6 border-y border-gray-200 text-center md:text-left lg:text-center">
                  <div className="flex items-baseline gap-2 justify-center md:justify-start lg:justify-center">
                    <span className="text-5xl font-bold text-[#003060]">400</span>
                    <span className="text-xl text-[#2E2E2E]/60">грн</span>
                  </div>
                  <p className="text-[#2E2E2E]/60 mt-1 text-sm">за заняття (45 хв)</p>
                </div>

                <Button variant="primary" size="md" href="/contact" className="w-full">
                  Записатися
                </Button>
              </div>
            </motion.div>

            {/* Card 2: Speech Development Delays */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFB703] to-[#FFD966]" />
              
              <div className="space-y-6">
                {/* Icon and Title - inline on mobile, stacked and centered on desktop */}
                <div className="flex items-center gap-3 md:block lg:flex lg:flex-col lg:items-center">
                  <div className="w-14 h-14 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center flex-shrink-0 md:mb-4 lg:mb-3">
                    <Brain className="w-7 h-7 text-[#FFB703]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003060] md:mb-3 lg:mb-0 lg:text-center">
                    Запуск мовлення, ЗМР, ЗПМР
                  </h3>
                </div>

                <div className="text-center md:text-left lg:text-center">
                  <p className="text-[#2E2E2E]/60 text-sm leading-relaxed">
                    ЗНМ різних рівнів, дислалія, дизартрія
                  </p>
                </div>

                <div className="py-6 border-y border-gray-200 text-center md:text-left lg:text-center">
                  <div className="flex items-baseline gap-2 justify-center md:justify-start lg:justify-center">
                    <span className="text-5xl font-bold text-[#003060]">400</span>
                    <span className="text-xl text-[#2E2E2E]/60">грн</span>
                  </div>
                  <p className="text-[#2E2E2E]/60 mt-1 text-sm">за заняття (45 хв)</p>
                </div>

                <Button variant="primary" size="md" href="/contact" className="w-full">
                  Записатися
                </Button>
              </div>
            </motion.div>

            {/* Card 3: Complex Conditions */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFB703] to-[#FFD966]" />
              
              <div className="space-y-6">
                {/* Icon and Title - inline on mobile, stacked and centered on desktop */}
                <div className="flex items-center gap-3 md:block lg:flex lg:flex-col lg:items-center">
                  <div className="w-14 h-14 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center flex-shrink-0 md:mb-4 lg:mb-3">
                    <Heart className="w-7 h-7 text-[#FFB703]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003060] md:mb-3 lg:mb-0 lg:text-center">
                    РАС, синдром Дауна
                  </h3>
                </div>

                <div className="text-center md:text-left lg:text-center">
                  <p className="text-[#2E2E2E]/60 text-sm leading-relaxed">
                    Розумова відсталість, РДУГ та інші особливі освітні потреби
                  </p>
                </div>

                <div className="py-6 border-y border-gray-200 text-center md:text-left lg:text-center">
                  <div className="flex items-baseline gap-2 justify-center md:justify-start lg:justify-center">
                    <span className="text-5xl font-bold text-[#003060]">450</span>
                    <span className="text-xl text-[#2E2E2E]/60">грн</span>
                  </div>
                  <p className="text-[#2E2E2E]/60 mt-1 text-sm">за заняття (45 хв)</p>
                </div>

                <Button variant="primary" size="md" href="/contact" className="w-full">
                  Записатися
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SPECIALISTS SECTION ================= */}
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
              Інші спеціалісти
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Професійна допомога від кваліфікованих фахівців
            </p>
          </motion.div>

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Psychology */}
            <motion.div
              className="bg-gradient-to-br from-blue-50/50 to-white lg:bg-white rounded-3xl p-8 lg:p-10 shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-4 lg:flex lg:items-start lg:gap-6">
                {/* Icon - Left side on desktop */}
                <div className="flex items-center gap-3 lg:block lg:flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFB703]/10 lg:bg-[#FFF8E1] lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 lg:mb-0">
                    <Heart className="w-8 h-8 text-[#FFB703]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003060] lg:hidden">
                    Психолог
                  </h3>
                </div>
                
                {/* Content - Right side on desktop */}
                <div className="flex-1 space-y-4 lg:space-y-3 text-center md:text-left lg:text-left">
                  <h3 className="text-2xl font-bold text-[#003060] hidden lg:block lg:text-xl lg:mb-2">
                    Психолог
                  </h3>
                  <p className="text-[#2E2E2E]/70 lg:text-[#2E2E2E]/60 leading-relaxed lg:text-sm">
                    ПТСР, булінг, харчові розлади, пубертат
                  </p>

                  <div className="flex items-center justify-center md:justify-start lg:justify-start gap-2 text-sm text-[#2E2E2E]/60">
                    <Clock className="w-4 h-4" />
                    <span>1 раз на тиждень</span>
                  </div>

                  <div className="py-6 border-y border-gray-200 lg:py-0 lg:border-y-0 lg:pt-3 lg:border-t lg:border-gray-200">
                    <div className="flex items-baseline justify-center md:justify-start lg:justify-start gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-[#003060]">600</span>
                      <span className="text-lg lg:text-base text-[#2E2E2E]/60">грн за заняття</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sensory Therapy / Neuropsychology */}
            <motion.div
              className="bg-gradient-to-br from-blue-50/50 to-white lg:bg-white rounded-3xl p-8 lg:p-10 shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-4 lg:flex lg:items-start lg:gap-6">
                {/* Icon - Left side on desktop */}
                <div className="flex items-center gap-3 lg:block lg:flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFB703]/10 lg:bg-[#FFF8E1] lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 lg:mb-0">
                    <Brain className="w-8 h-8 text-[#FFB703]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003060] lg:hidden">
                    Сенсорний терапевт, нейропсихолог
                  </h3>
                </div>
                
                {/* Content - Right side on desktop */}
                <div className="flex-1 space-y-4 lg:space-y-3 text-center md:text-left lg:text-left">
                  <h3 className="text-2xl font-bold text-[#003060] hidden lg:block lg:text-xl lg:mb-2">
                    Сенсорний терапевт, нейропсихолог
                  </h3>
                  <p className="text-[#2E2E2E]/70 lg:text-[#2E2E2E]/60 leading-relaxed lg:text-sm">
                    Різні види сенсорної дисфункції
                  </p>

                  <div className="py-6 border-y border-gray-200 lg:py-0 lg:border-y-0 lg:pt-3 lg:border-t lg:border-gray-200">
                    <div className="flex items-baseline justify-center md:justify-start lg:justify-start gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-[#003060]">400</span>
                      <span className="text-lg lg:text-base text-[#2E2E2E]/60">грн за заняття</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Massage */}
            <motion.div
              className="bg-gradient-to-br from-blue-50/50 to-white lg:bg-white rounded-3xl p-8 lg:p-10 shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-4 lg:flex lg:items-start lg:gap-6">
                {/* Icon - Left side on desktop */}
                <div className="flex items-center gap-3 lg:block lg:flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFB703]/10 lg:bg-[#FFF8E1] lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 lg:mb-0">
                    <Hand className="w-8 h-8 text-[#FFB703]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003060] lg:hidden">
                    Дитячий загальний масаж, Логомасаж
                  </h3>
                </div>
                
                {/* Content - Right side on desktop */}
                <div className="flex-1 space-y-4 lg:space-y-3 text-center md:text-left lg:text-left">
                  <h3 className="text-2xl font-bold text-[#003060] hidden lg:block lg:text-xl lg:mb-2">
                    Дитячий загальний масаж, Логомасаж
                  </h3>
                  <p className="text-[#2E2E2E]/70 lg:text-[#2E2E2E]/60 leading-relaxed lg:text-sm">
                    Тривалість: 30 хвилин
                  </p>

                  <div className="py-6 border-y border-gray-200 lg:py-0 lg:border-y-0 lg:pt-3 lg:border-t lg:border-gray-200">
                    <div className="flex items-baseline justify-center md:justify-start lg:justify-start gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-[#003060]">300</span>
                      <span className="text-lg lg:text-base text-[#2E2E2E]/60">грн за сеанс</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Music */}
            <motion.div
              className="bg-gradient-to-br from-blue-50/50 to-white lg:bg-white rounded-3xl p-8 lg:p-10 shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-4 lg:flex lg:items-start lg:gap-6">
                {/* Icon - Left side on desktop */}
                <div className="flex items-center gap-3 lg:block lg:flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFB703]/10 lg:bg-[#FFF8E1] lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 lg:mb-0">
                    <Music className="w-8 h-8 text-[#FFB703]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003060] lg:hidden">
                    Індивідуальне музичне заняття
                  </h3>
                </div>
                
                {/* Content - Right side on desktop */}
                <div className="flex-1 space-y-4 lg:space-y-3 text-center md:text-left lg:text-left">
                  <h3 className="text-2xl font-bold text-[#003060] hidden lg:block lg:text-xl lg:mb-2">
                    Індивідуальне музичне заняття
                  </h3>
                  <p className="text-[#2E2E2E]/70 lg:text-[#2E2E2E]/60 leading-relaxed lg:text-sm">
                    Розвиток музичних здібностей
                  </p>
                  <p className="text-[#2E2E2E]/70 lg:text-[#2E2E2E]/60 leading-relaxed lg:text-sm">
                    Тривалість: 30 хвилин
                  </p>

                  <div className="py-6 border-y border-gray-200 lg:py-0 lg:border-y-0 lg:pt-3 lg:border-t lg:border-gray-200">
                    <div className="flex items-baseline justify-center md:justify-start lg:justify-start gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-[#003060]">250</span>
                      <span className="text-lg lg:text-base text-[#2E2E2E]/60">грн за заняття</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= EDUCATIONAL PROGRAMS SECTION ================= */}
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
            <div className="w-20 h-20 bg-[#FFB703]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-[#FFB703]" />
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E2E2E] mb-4">
              Освітні програми
            </h2>
            <p className="text-lg text-[#2E2E2E]/70 max-w-[700px] mx-auto">
              Англійська мова та підготовка до школи
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* English Language */}
            <motion.div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#FFB703]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#FFB703]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#003060]">
                    Англійська мова
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Individual */}
                  <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                      <span className="text-[#2E2E2E] font-medium">Індивідуально</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#003060]">300</span>
                      <span className="text-sm text-[#2E2E2E]/60 ml-1">грн</span>
                    </div>
                  </div>

                  {/* Pair */}
                  <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                      <span className="text-[#2E2E2E] font-medium">Парні заняття</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#003060]">250</span>
                      <span className="text-sm text-[#2E2E2E]/60 ml-1">грн</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* School Preparation */}
            <motion.div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#FFB703]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#FFB703]/10 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#FFB703]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#003060]">
                    Підготовка до школи
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Individual */}
                  <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                      <span className="text-[#2E2E2E] font-medium">Індивідуально</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#003060]">350</span>
                      <span className="text-sm text-[#2E2E2E]/60 ml-1">грн</span>
                    </div>
                  </div>

                  {/* Pair */}
                  <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                      <span className="text-[#2E2E2E] font-medium">Парні заняття</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#003060]">300</span>
                      <span className="text-sm text-[#2E2E2E]/60 ml-1">грн</span>
                    </div>
                  </div>

                  {/* Group */}
                  <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                      <span className="text-[#2E2E2E] font-medium">Група</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#003060]">250</span>
                      <span className="text-sm text-[#2E2E2E]/60 ml-1">грн</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= IMPORTANT NOTES SECTION ================= */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          
          <motion.div
            className="bg-gradient-to-br from-[#003060] to-[#004080] rounded-3xl p-10 lg:p-16 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8 text-white">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#FFD966] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Важлива інформація
                  </h3>
                </div>
              </div>

              <div className="space-y-6 text-lg text-white/90">
                <div className="flex items-start gap-4 bg-white/10 rounded-2xl p-6">
                  <Clock className="w-6 h-6 text-[#FFD966] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2 text-white">Частота занять</p>
                    <p>Заняття проводяться один раз на тиждень</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 rounded-2xl p-6">
                  <Heart className="w-6 h-6 text-[#FFD966] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2 text-white">Індивідуальний підхід</p>
                    <p>Точний план занять та формат підбирається індивідуально після консультації зі спеціалістом</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 rounded-2xl p-6">
                  <CheckCircle className="w-6 h-6 text-[#FFD966] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2 text-white">Безкоштовна консультація</p>
                    <p>Перша консультація зі спеціалістом безкоштовна - ми допоможемо підібрати оптимальну програму для вашої дитини</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
              Готові розпочати заняття?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-[700px] mx-auto">
              Запишіться на консультацію зі спеціалістом та отримайте індивідуальний план занять
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" href="/contact">
                Записатися на консультацію
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
