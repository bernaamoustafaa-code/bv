import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionType } from "./types";
import AboutMe from "./components/AboutMe";
import Creations from "./components/Creations";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { ArrowLeft, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg-texture-v2.jpg";
import logo from "@/assets/bernavision-logo.png";

const NAV_ITEMS: { key: Exclude<SectionType, null>; label: string }[] = [
  { key: "about", label: "About Me" },
  { key: "creations", label: "Creations" },
  { key: "services", label: "Services" },
  { key: "contact", label: "Contact" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(null);

  // Helper to close current expanded view
  const handleCloseSection = () => {
    setActiveSection(null);
  };

  return (
    <div
      className="relative min-h-screen w-full font-sans bg-black text-white bg-cover bg-center bg-no-repeat bg-fixed"
      id="app-viewport"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {!activeSection && (
        <>
          {/* ==========================================
              HOME: Logo + Name + Portfolio + Tagline
              ========================================== */}
          <section
            className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center text-center px-6 sm:px-16"
            id="hero-section"
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex items-center justify-center mb-4"
              id="hero-logo-wrap"
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-3xl scale-75" />
              <img
                src={logo}
                alt="Bernavision logo"
                className="w-40 sm:w-52 md:w-64 h-auto select-none"
                id="hero-logo-mark"
                draggable={false}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="font-zen-dots font-bold text-xl sm:text-3xl md:text-4xl tracking-wide text-white uppercase select-none relative z-10"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
              id="hero-name"
            >
              Berna Moustapha
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="font-doulaise text-4xl sm:text-6xl md:text-7xl leading-none text-black -mt-2 sm:-mt-4 md:ml-3 select-none relative z-20"
              style={{ textShadow: "0 0 22px rgba(255,255,255,0.65), 0 2px 6px rgba(255,255,255,0.4)" }}
              id="hero-portfolio"
            >
              Portfolio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="font-italiana text-base sm:text-xl md:text-2xl tracking-[0.08em] text-white/80 mt-5 select-none relative z-10"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
              id="hero-tagline"
            >
              where stories become visual
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{ opacity: { duration: 1, delay: 1 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
              className="absolute bottom-10 flex flex-col items-center gap-1 text-white/40"
              id="scroll-cue"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </section>

          {/* ==========================================
              SECTION NAV: horizontal glowing strip,
              revealed only once you scroll past home
              ========================================== */}
          <section
            className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 sm:px-16"
            id="section-nav"
          >
            <div
              className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:gap-x-16 md:gap-x-20"
              id="nav-pills-horizontal-container"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  className="metal-glow-text font-horizon font-black uppercase text-lg sm:text-2xl md:text-3xl tracking-[0.12em] cursor-pointer select-none transition-all duration-300"
                  id={"nav-btn-" + item.key}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ==========================================
          EXPANDED STATE: Full Details Layout
          ========================================== */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key="expanded-section-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-cover bg-center bg-no-repeat p-6 sm:p-10 md:p-16 flex flex-col h-screen overflow-hidden"
            style={{ backgroundImage: `url(${heroBg})` }}
            id="expanded-panel"
          >
            <div className="absolute inset-0 bg-black/85" />
            <div className="relative w-full max-w-5xl mx-auto flex flex-col h-full">
              {/* Exit/Back CTA Button inside container */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4 select-none">
                <button
                  onClick={handleCloseSection}
                  className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-white/60 hover:text-white transition-colors cursor-pointer group"
                  id="panel-back-button"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Return To Hub
                </button>
                <div className="text-xs uppercase tracking-widest font-mono text-white/40 font-light flex items-center gap-1.5">
                  {activeSection}
                </div>
              </div>

              {/* Active content viewport */}
              <div className="flex-grow overflow-hidden pr-1">
                {activeSection === "about" && <AboutMe onClose={handleCloseSection} />}
                {activeSection === "creations" && <Creations />}
                {activeSection === "services" && <Services />}
                {activeSection === "contact" && <Contact />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
