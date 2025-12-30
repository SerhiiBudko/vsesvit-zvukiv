import teacherImage from "@/assets/4a52e4a61a78df7e73a78d08c3883b149cd72988.png";
import parentChildImage from "@/assets/7ef5bb868035840156acaedc3d1b8b01a05331ce.png";
import heroImage from "@/assets/fd018b67431b677e0933f671b2e5704c7d35e17a.png";
import { Button } from "../components/Button";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { CircleCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ================= HERO (MOBILE + DESKTOP) ================= */}
      <section className="relative overflow-hidden bg-white">
        {/* MOBILE HERO */}
        <div className="block lg:hidden">
          <MobileHero />
        </div>

        {/* DESKTOP HERO */}
        <div className="hidden lg:block">
          <DesktopHero />
        </div>
      </section>

      {/* ================= SECTION 1: OUR PROMISE ================= */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Video/Photo Card */}
            <div
              className="rounded-3xl overflow-hidden shadow-lg"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            >
              <div className="aspect-video">
                <img
                  src={teacherImage}
                  alt="Педагог з дітьми"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003060]">
                Наша обіцянка сім'ям
              </h2>

              {/* Checkmark Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CircleCheck className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#2E2E2E]">
                    Індивідуальний підхід до кожної дитини з урахуванням її темпу
                    розвитку
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CircleCheck className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#2E2E2E]">
                    Безпечне та комфортне середовище для гри, навчання та
                    спілкування
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CircleCheck className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#2E2E2E]">
                    Досвідчені педагоги з профільною освітою та любов'ю до дітей
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CircleCheck className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#2E2E2E]">
                    Розвиток творчих здібностей через музику, мистецтво та рухові
                    активності
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CircleCheck className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#2E2E2E]">
                    Відкрита комунікація з батьками та регулярний зворотний зв'язок
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CircleCheck className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#2E2E2E]">
                    Гармонійний розвиток емоційного інтелекту та соціальних навичок
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button variant="primary" size="lg" href="/about">
                  Дізнатися більше про підхід
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: TESTIMONIALS ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003060] mb-12 lg:mb-16 max-w-3xl">
            Подивіться, чому сім'ї довіряють і рекомендують 'Всесвіт Звуків'
          </h2>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Quote Card with Colored Glow */}
            <div className="space-y-6">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    backgroundColor: "#E8F4FF",
                    filter: "blur(40px)",
                    transform: "scale(1.02)",
                    opacity: 0.5,
                  }}
                />

                <div
                  className="relative rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-center"
                  style={{
                    backgroundColor: "#E8F4FF",
                    boxShadow: "0 8px 32px rgba(0, 48, 96, 0.25)",
                    minHeight: "400px",
                  }}
                >
                  <div className="space-y-6">
                    <p className="text-xl lg:text-2xl text-[#2E2E2E] italic leading-relaxed">
                      "Коли ми шукали садок для нашої доньки, найважливішим для нас
                      було знайти місце, де до неї ставитимуться як до особистості.
                      У 'Всесвіті Звуків' ми знайшли саме це — турботливих педагогів,
                      які бачать і розвивають унікальні таланти нашої дитини."
                    </p>
                    <div className="pt-4 border-t border-[#003060]/20">
                      <p className="font-bold text-[#003060]">Олена Коваленко</p>
                      <p className="text-[#2E2E2E]/70">Мама Софії, 4 роки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Photo Card with Neutral Gray Glow */}
            <div className="relative h-full flex flex-col">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "rgba(0, 0, 0, 0.08)",
                  filter: "blur(40px)",
                  transform: "scale(1.02)",
                }}
              />

              <div
                className="relative rounded-3xl overflow-hidden h-full"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                  minHeight: "400px",
                }}
              >
                <img
                  src={parentChildImage}
                  alt="Щаслива мама з дитиною"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= HERO COMPONENTS ================= */

function MobileHero() {
  return (
    <div className="bg-white">
      {/* Image block with soft gradient + straight bottom edge */}
      <div className="relative h-[380px] overflow-hidden">
        {/* soft warm gradient behind image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7E6] via-[#FFFDF8] to-white" />

        {/* image */}
        <img
          src={heroImage}
          alt="Діти граються з кульками"
          className="relative z-10 w-full h-full object-cover"
        />

        {/* fade image -> blue section */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-b from-transparent via-[#003060]/35 to-[#003060]" />
      </div>

      {/* Blue text block (straight top line, no curve) */}
      <div className="bg-[#003060] px-6 py-10 text-center">
        <h1 className="text-3xl font-bold text-[#F6F1E4] leading-tight">
          Ласкаво просимо до
          <br />
          Всесвіту Звуків
        </h1>

        <p className="mt-4 text-base text-white/90 leading-relaxed">
          <span className="block">
            Створюємо теплий та безпечний простір, де кожна дитина відкриває
          </span>
          <span className="block">
            свої таланти через гру, творчість та турботу досвідчених педагогів.
          </span>
        </p>
      </div>
    </div>
  );
}



function DesktopHero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ height: "640px" }}>
      {/* SVG Clip Path Definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="concave-clip" clipPathUnits="objectBoundingBox">
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
        <img
          src={heroImage}
          alt="Діти граються з кульками"
          className="w-full h-full object-cover"
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
            <clipPath id="navy-clip">
              <path d="M 0,0 L 1400,0 A 300,300 0 0 0 965,640 L 0,640 Z" />
            </clipPath>
          </defs>
          <rect width="1440" height="640" fill="#003060" clipPath="url(#navy-clip)" />
        </svg>
      </motion.div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full pl-[100px] pr-3 lg:pr-5">
          <div className="max-w-[520px] pr-10 lg:pr-14 space-y-6">
            <motion.h1
              className="font-bold leading-tight text-[#F6F1E4]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.25 }}
            >
              <span className="block whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl">
                Ласкаво просимо до
              </span>
              <span className="block whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl">
                Всесвіту&nbsp;Звуків
              </span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1], delay: 0.35 }}
            >
              <span className="block">
                Створюємо теплий та безпечний простір, де кожна дитина відкриває
                свої таланти через гру, творчість та турботу досвідчених педагогів.
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
