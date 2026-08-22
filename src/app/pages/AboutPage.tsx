import {
  Building2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { PageMeta } from "../components/PageMeta";
import { Button } from "../components/Button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import heroImageDesktopWebp from "@/assets/Hero1_Desktop.webp";
import heroImageTabletWebp from "@/assets/Hero1_Tablet.webp";
import heroImageMobileWebp from "@/assets/Hero1_Mobile.webp";
import AboutUsP1 from "@/assets/aboutusp1desktop.webp";
import individualApproachImage from "@/assets/aboutusp2.webp";
import professionalismImage from "@/assets/aboutusp3.webp";
import playBasedLearningImage from "@/assets/aboutusp4.webp";
import partnershipImage from "@/assets/aboutusp5.webp";
import chooseDirectionImage from "@/assets/aboutusp6.webp";




/* ================= MOBILE HERO ================= */

function MobileAboutHero() {
  return (
    <div className="bg-white overflow-hidden">
      {/* PHOTO (from right) */}
      <motion.div
        className="relative h-[380px] overflow-hidden"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7E6] via-[#FFFDF8] to-white" />

        <ResponsiveImage
          alt="Діти граються з кульками"
          className="relative z-10 w-full h-full object-cover"
          sources={[{ src: heroImageMobileWebp, w: 640 }]}
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
        />

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
        <h1 className="text-3xl font-bold text-[#F6F1E4] leading-tight">Про нас</h1>

        <p className="mt-4 text-base text-white/90 leading-relaxed">
          <span className="block font-semibold">Всесвіт Звуків</span>
          <span className="block">
            Це два окремі заклади у Кривому Розі: корекційний клуб та дитячий садок.
          </span>
          <span className="block">
            Ми допомагаємо дітям від 2 років розвиватися, навчатися та впевнено зростати у теплій
            підтримуючій атмосфері.
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


/* ================= CHOOSE DIRECTION SECTION ================= */

function ChooseDirectionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#BFE6FF]">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Photo Card */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          >
            <img
              src={chooseDirectionImage}
              alt="Педагог з батьком та дитиною"
              className="w-full h-full object-cover aspect-[4/3]"
              width={1024}
              height={768}
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Right: Dark Navy Container */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl bg-[#003060] p-6 lg:p-10"
            style={{ boxShadow: "0 10px 40px rgba(0,48,96,0.2)" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F6F1E4] mb-4">
              Оберіть напрям
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Ми маємо два напрями під одним брендом — оберіть те, що потрібно саме вашій
              дитині.
            </p>

            <div className="space-y-4">
              <a
                href="/kindergarten"
                className="relative block w-full bg-[#FFFDF8] rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                {/* arrow is not part of layout anymore */}
                <ArrowRight className="absolute right-4 top-5 w-5 h-5 sm:w-6 sm:h-6 text-[#FFB703]" />

                <div className="flex items-start gap-3 w-full">
                  {/* left icon */}
                  <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFB703] flex-shrink-0" />

                  {/* text gets more width; padding-right avoids arrow overlap */}
                  <div className="flex-1 min-w-0 pr-4 sm:pr-8">
                    <h3 className="text-xl font-bold text-[#003060] mb-2">
                      Дитячий садок
                    </h3>
                    <p className="text-[#2E2E2E] leading-relaxed break-words">
                      Комплексний розвиток, підготовка до школи, творчість, музика, англійська.
                    </p>
                  </div>
                </div>
              </a>


              <a
                href="/correctional_club"
                className="block bg-[#FFFDF8] rounded-2xl p-4 md:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-start gap-3 md:gap-4 w-full">
                  <div className="flex-shrink-0">
                    <MessageCircle className="w-8 h-8 text-[#FFB703]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-[#003060] mb-2">
                      Корекційний клуб
                    </h3>
                    <p className="text-[#2E2E2E] leading-relaxed break-words">
                      Логопедична корекція, запуск мовлення, діагностика, дислексія/дисграфія.
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-[#FFB703]" />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="Про нас"
        description="Про «Всесвіт Звуків»: два заклади у Кривому Розі — корекційний клуб та дитячий садок. Наша команда, підхід та цінності."
        path="/about"
      />
      <Navigation />

      {/* ================= HERO ================= */}

      {/* Mobile hero */}
      <div className="block lg:hidden">
        <MobileAboutHero />
      </div>

      {/* Desktop hero (your existing one) */}
      <section className="relative overflow-hidden bg-white hidden lg:block" style={{ height: "640px" }}>
        {/* SVG Clip Path Definition */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="concave-clip-about" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.5 A 0.5 0.5 0 0 1 1 0.5 L 1 1 L 0 1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Full Background Photo - Animate from TOP */}
        <motion.div
          className="absolute inset-0"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
        >
          <ResponsiveImage
            alt="Діти граються з кульками"
            className="w-full h-full object-cover"
            sources={[
              { src: heroImageTabletWebp, w: 1024 },
              { src: heroImageDesktopWebp, w: 1376 },
            ]}
            // на десктопі картинка фактично займає праву частину, але простіше — 100vw.
            // якщо хочеш точніше: 60vw (у тебе ліва панель забирає частину)
            sizes="(min-width: 1024px) 60vw, 100vw"
            fetchPriority="high"
            loading="eager"
          />
        </motion.div>

        {/* Navy Panel - Animate from TOP */}
        <motion.div
          className="absolute inset-0"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 640" preserveAspectRatio="none">
            <defs>
              <clipPath id="navy-clip-about">
                <path d="M 0,0 L 1400,0 A 300,300 0 0 0 965,640 L 0,640 Z" />
              </clipPath>
            </defs>
            <rect width="1440" height="640" fill="#003060" clipPath="url(#navy-clip-about)" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full pl-[100px] pr-3 lg:pr-5">
            <div className="max-w-[520px] pr-10 lg:pr-14 space-y-6">
              <motion.h1
                className="font-bold leading-tight text-[#F6F1E4]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.25 }}
              >
                <span className="block text-4xl lg:text-5xl xl:text-6xl">Про нас</span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.35 }}
              >
                <span className="block whitespace-nowrap">Всесвіт Звуків</span>
                <span className="block whitespace-nowrap">
                  Це два окремі заклади у Кривому Розі: корекційний клуб та дитячий садок.
                </span>
                <span className="block whitespace-nowrap">
                  Ми допомагаємо дітям від 2 років розвиватися, навчатися та впевненo
                </span>
                <span className="block whitespace-nowrap">
                  зростати у теплій підтримуючій атмосфері.
                </span>
              </motion.p>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.45 }}
              >
                <Button variant="primary" size="lg" href="/contact">
                  Зв&apos;язатися з нами
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION AND VALUES ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003060] mb-16 lg:mb-20">
            Наша місія та цінності
          </h2>

          {/* Value 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-16 lg:mb-24">
            <div className="space-y-6 lg:pr-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#003060]">
                Турбота і безпека
              </h3>
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Створюємо безпечний простір, де кожна дитина почувається захищеною та комфортно.
                Ми забезпечуємо найвищі стандарти безпеки та дбайливе ставлення до кожної дитини,
                щоб батьки могли бути впевнені у добробуті своїх малюків.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg order-first lg:order-last">
              <ImageWithFallback
                src={AboutUsP1}
                alt="Турбота і безпека дітей"
                className="w-full h-full object-cover aspect-[4/3]"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Value 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-16 lg:mb-24">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={individualApproachImage}
                alt="Індивідуальний підхід до кожної дитини"
                className="w-full h-full object-cover aspect-[4/3]"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-6 lg:pl-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#003060]">
                Індивідуальний підхід
              </h3>
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Ураховуємо особливості та темп розвитку кожної дитини, підтримуючи її унікальність.
                Наші педагоги працюють з кожною дитиною індивідуально, створюючи персоналізовані
                програми навчання та розвитку.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-16 lg:mb-24">
            <div className="space-y-6 lg:pr-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#003060]">
                Професіоналізм
              </h3>
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Команда досвідчених педагогів з профільною освітою та постійним розвитком.
                Наші фахівці регулярно підвищують кваліфікацію, щоб застосовувати найсучасніші
                методики навчання та розвитку дітей.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg order-first lg:order-last">
              <ImageWithFallback
                src={professionalismImage}
                alt="Професійні педагоги"
                className="w-full h-full object-cover aspect-[4/3]"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Value 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-16 lg:mb-24">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={playBasedLearningImage}
                alt="Діти навчаються через гру"
                className="w-full h-full object-cover aspect-[4/3]"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-6 lg:pl-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#003060]">
                Розвиток через гру
              </h3>
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Використовуємо ігрові методики для природного та радісного навчання дітей.
                Гра — це природний спосіб дитячого пізнання світу, тому ми інтегруємо навчальні
                елементи в цікаві та захоплюючі ігрові активності.
              </p>
            </div>
          </div>

          {/* Value 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="space-y-6 lg:pr-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#003060]">
                Партнерство з батьками
              </h3>
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Підтримуємо відкритий діалог та співпрацюємо з сім&apos;ями для кращого результату.
                Ми віримо, що ефективне навчання можливе лише за умови тісної співпраці між педагогами
                та батьками, тому завжди відкриті до спілкування.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg order-first lg:order-last">
              <ImageWithFallback
                src={partnershipImage}
                alt="Партнерство з батьками"
                className="w-full h-full object-cover aspect-[4/3]"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHOOSE DIRECTION ================= */}
      <ChooseDirectionSection />

      <Footer />
    </div>
  );
}
