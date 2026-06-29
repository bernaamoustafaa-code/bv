import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionType } from "./types";
import AboutMe from "./components/AboutMe";
import Creations from "./components/Creations";
import Contact from "./components/Contact";
import { ArrowLeft } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(null);

  // Helper to close current expanded view
  const handleCloseSection = () => {
    setActiveSection(null);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans bg-black text-white flex flex-col justify-between" id="app-viewport">
      
      {/* 2. Top Navigation Rail / Header */}
      {!activeSection && (
        <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 py-8 flex justify-between items-center" id="main-header">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-xl tracking-wide text-white cursor-pointer select-none"
            onClick={handleCloseSection}
            id="header-branding"
          >
            .Bernavision
          </motion.div>
        </nav>
      )}

      {/* 3. Main Center Stage (Dynamic Switch Area) */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 flex-grow flex flex-col justify-center items-center" id="main-content-stage">
        
        <AnimatePresence mode="wait">
          {!activeSection ? (
            /* ==========================================
               CENTER STATE: Minimal Brand Typography
               ========================================== */
            <motion.div
              key="center-brand-group"
              className="flex flex-col items-center justify-center py-12 -translate-y-8 sm:-translate-y-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              id="center-hero"
            >
              {/* Central display typography with "Frosted Glass Theme" heavy style but decreased size */}
              <div className="text-center" id="hero-headings">
                <h1 
                  className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-horizon tracking-[-0.11em] uppercase m-0 text-white select-none text-center whitespace-nowrap leading-[0.85]"
                >
                  Berna moustapha
                </h1>
                
                {/* Portfolio subtext with same font as berna moustapha */}
                <div className="mt-4 text-center">
                  <span 
                    className="text-sm sm:text-base md:text-lg font-black font-horizon uppercase text-white/60 tracking-[-0.09em] select-none block"
                  >
                    Portfolio
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ==========================================
               EXPANDED STATE: Full Details Layout
               ========================================== */
            <motion.div
              key="expanded-section-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-black p-6 sm:p-10 md:p-16 flex flex-col h-screen overflow-hidden"
              id="expanded-panel"
            >
              <div className="w-full max-w-5xl mx-auto flex flex-col h-full">
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
                  {activeSection === "contact" && <Contact />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* 4. Vertically Stacked Pill-Shaped Navigation Controls */}
      {!activeSection && (
        <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 pt-2 pb-10 -translate-y-6" id="main-footer">
          <div className="flex flex-col gap-8 items-center" id="nav-pills-vertical-container">
            <motion.button
              onClick={() => setActiveSection(activeSection === "about" ? null : "about")}
              className="w-44 py-2.5 rounded-full text-[11px] font-bold font-sans uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer text-center select-none bg-transparent border border-white/25 text-white hover:bg-white/10 hover:border-white/40 shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              id="nav-btn-about"
            >
              About me
            </motion.button>

            <motion.button
              onClick={() => setActiveSection(activeSection === "creations" ? null : "creations")}
              className="w-44 py-2.5 rounded-full text-[11px] font-bold font-sans uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer text-center select-none bg-transparent border border-white/25 text-white hover:bg-white/10 hover:border-white/40 shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              id="nav-btn-creations"
            >
              Creations
            </motion.button>

            <motion.button
              onClick={() => setActiveSection(activeSection === "contact" ? null : "contact")}
              className="w-44 py-2.5 rounded-full text-[11px] font-bold font-sans uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer text-center select-none bg-transparent border border-white/25 text-white hover:bg-white/10 hover:border-white/40 shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              id="nav-btn-contact"
            >
              Contact
            </motion.button>
          </div>
        </footer>
      )}
    </div>
  );
}
