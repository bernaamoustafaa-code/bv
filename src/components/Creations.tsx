import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { Grid, Layers, ExternalLink, ArrowLeft, Calendar, Tag, Compass, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

// Local high-fidelity assets
import image19 from "@/assets/19_v2.webp";
import image20 from "@/assets/20_v2.webp";
import image28 from "@/assets/28_v2.webp";
import image29 from "@/assets/29_v2.webp";
import image32 from "@/assets/32_v2.webp";
import noEye from "@/assets/no_eye_v2.webp";
import s1 from "@/assets/s1_v2.webp";
import s2 from "@/assets/s2_v2.webp";
import shot1 from "@/assets/shot_1_v2.webp";
import shot2 from "@/assets/shot_2_v2.webp";
import viceLogoShot from "@/assets/vice_logo_shot_v2.webp";
import viceShot1 from "@/assets/vice_shot_1_v2.webp";
import viceShot3 from "@/assets/vice_shot_3_v2.webp";
import viceSleeveShot from "@/assets/vice_sleeve_shot_v2.webp";
import vulera1 from "@/assets/vulera_1.webp";
import vulera2 from "@/assets/vulera_2.webp";
import vulera3 from "@/assets/vulera_3.webp";
import sojan1 from "@/assets/sojan_1.webp";
import sojan2 from "@/assets/sojan_2.webp";
import sojan3 from "@/assets/sojan_3.webp";

// Curated high-fidelity creative projects matching Berna's aesthetic
const PROJECTS: Project[] = [
  {
    id: "dark-nights",
    title: "Dark Nights",
    category: "AI Cinematic Fashion Narrative",
    year: "2026",
    description: "A moody, high-fashion visual series exploring cinematic nocturnes, shadow play, and bold silhouettes.",
    longDescription: "Dark Nights is an avant-garde AI-generated cinematic fashion narrative that explores the mystery, elegance, and solitude of urban nocturnes. Specially crafted using custom diffusion prompting, the project blends high-contrast chiaroscuro lighting, textured rain-slicked concrete, and bold neo-noir silhouettes. Each frame is designed to feel like a high-end editorial campaign, bridging the boundary between fashion design and synthetic cinematic art.",
    image: image29,
    tags: ["Cinematic Narrative", "AI Fashion", "Chiaroscuro", "Art Direction"],
    specs: [
      { label: "Commission", value: "Berna Moustapha Studio" },
      { label: "Role", value: "AI Visual Creator & Art Director" },
      { label: "Medium", value: "Generative AI (Custom Diffusion & ControlNet)" },
      { label: "Vibe", value: "Neo-Noir Chiaroscuro" }
    ],
    images: [
      image19,
      image20,
      image28,
      image29,
      image32
    ],
    aspect: "3/4"
  },
  {
    id: "aetherial-eye",
    title: "Vibezzz",
    category: "Interactive Spatial Installation",
    year: "2026",
    description: "Generative canvas projection exploring physical sight, eye tracking, and hand-sketched boundaries.",
    longDescription: "Aetherial Eye is an immersive spatial installation merging raw physical art media with real-time digital feedback. Projectors cast generative vector strokes onto physical charcoal paintings, controlled entirely by visitors' eye movements. This project visualizes the dialogue between organic human gaze and digital surveillance, creating a dynamic, living gallery environment.",
    image: shot2,
    tags: ["Generative Art", "Eye Tracking", "Projection Mapping", "Charcoal Canvas"],
    specs: [
      { label: "Commission", value: "Centre de Création Contemporaine, Paris" },
      { label: "Role", value: "Creative Director & Code Architect" },
      { label: "Technologies", value: "Charcoal, High-Gain Screen, WebGL, EyeTribe SDK" },
      { label: "Exhibited", value: "Espace Lumière, May 2026" }
    ],
    images: [
      shot1,
      shot2
    ],
    aspect: "3/4"
  },
  {
    id: "denali",
    title: "Denali",
    category: "AI Landscape & Nature Narrative",
    year: "2026",
    description: "An awe-inspiring cinematic journey capturing the rugged, raw beauty of the Alaskan wilderness.",
    longDescription: "Denali is a high-contrast visual exploration of rugged peak structures, alpine light shifts, and pristine wilderness. Designed to convey a sense of sublime isolation and dramatic texture, each frame merges landscape photography principles with synthetic art generation.",
    image: s1,
    tags: ["Landscape Narrative", "AI Visuals", "Cinematic", "Art Direction"],
    specs: [
      { label: "Commission", value: "Berna Moustapha Studio" },
      { label: "Role", value: "AI Visual Creator & Art Director" },
      { label: "Medium", value: "Generative AI (Custom Diffusion)" },
      { label: "Vibe", value: "Alpine Wilderness Noir" }
    ],
    images: [
      s1,
      s2
    ],
    aspect: "4/3"
  },
  {
    id: "chroma-static",
    title: "Vice",
    category: "Interactive Digital Medium",
    year: "2026",
    description: "A tactile digital canvas translating micro-gestures into generative chromatic noise and sound.",
    longDescription: "Chroma Static is a custom-coded web-only digital canvas that converts delicate cursor tracks and touch coordinates into beautiful fluid ripples and chromatic frequency sweeps. Paired with synthesized sound, it acts as a digital sanctuary of negative space, encouraging users to play, breathe, and slow down.",
    image: viceLogoShot,
    tags: ["WebGL", "Web Audio API", "Interactive UX", "Creative Coding"],
    specs: [
      { label: "Medium", value: "Standalone Creative Web Experience" },
      { label: "Role", value: "Sole Creator & Frontend Architect" },
      { label: "Stack", value: "React, Three.js, Tone.js, Tailwind CSS" },
      { label: "Reach", value: "Self-published, over 40k unique sessions" }
    ],
    images: [
      viceLogoShot,
      viceShot1,
      viceShot3,
      viceSleeveShot
    ],
    aspect: "4/3"
  },
  {
    id: "vulera-fragrance",
    title: "Vulera Fragrance",
    category: "AI Luxury Product & Lifestyle Campaign",
    year: "2026",
    description: "A sun-drenched Mediterranean summer campaign for a two-scent perfume duo, blending still life, coastal lifestyle, and editorial elegance.",
    longDescription: "Vulera Fragrance is an AI-generated luxury product campaign built around a two-scent summer duo, Fruit Punch and Celestial Dew. The series moves between intimate still-life compositions and sun-lit lifestyle scenes, pairing warm citrus and vanilla ingredient styling with coastal blues and Amalfi-inspired backdrops. Each frame was crafted to feel like a premium fragrance house's seasonal editorial, balancing product clarity with an aspirational sense of place.",
    image: vulera1,
    tags: ["Product Campaign", "AI Fashion", "Lifestyle", "Art Direction"],
    specs: [
      { label: "Client", value: "Vulèra Fragrances" },
      { label: "Role", value: "AI Creative Producer & Art Director" },
      { label: "Medium", value: "Generative AI (Higgsfield)" },
      { label: "Vibe", value: "Mediterranean Summer Editorial" }
    ],
    images: [
      vulera1,
      vulera2,
      vulera3
    ],
    aspect: "3/4"
  },
  {
    id: "sojan-of-egypt",
    title: "Sojan of Egypt",
    category: "AI Accessory & Lifestyle Campaign",
    year: "2026",
    description: "A sun-soaked poolside campaign for a handcrafted crochet clutch, pairing warm terracotta tones with coastal styling.",
    longDescription: "Sojan of Egypt is an AI-generated accessory campaign built around a hand-crocheted starfish and cowrie shell clutch. The series moves from an aspirational poolside lifestyle scene into clean studio product shots, capturing the handmade texture of the piece from multiple angles. Warm terracotta tones are set against sun-drenched blues, balancing lifestyle storytelling with precise product clarity.",
    image: sojan1,
    tags: ["Product Campaign", "AI Lifestyle", "Accessories", "Art Direction"],
    specs: [
      { label: "Client", value: "Sojan of Egypt" },
      { label: "Role", value: "AI Creative Producer & Art Director" },
      { label: "Medium", value: "Generative AI (Higgsfield)" },
      { label: "Vibe", value: "Coastal Summer Editorial" }
    ],
    images: [
      sojan1,
      sojan2,
      sojan3
    ],
    aspect: "3/4"
  }
];

export default function Creations() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectProject = (proj: Project) => {
    setSelectedProject(proj);
  };

  const count = PROJECTS.length;
  const goPrev = () => setActiveIndex((i) => (i - 1 + count) % count);
  const goNext = () => setActiveIndex((i) => (i + 1) % count);

  return (
    <div className="text-white h-full overflow-y-auto pr-1 custom-scrollbar" id="creations-section">
      {/* Slide carousel of Creations — center slide is active/in focus, others recede to the sides */}
      <div className="max-w-4xl mx-auto w-full mb-10" id="creations-carousel">
        <div
          className="relative h-[300px] sm:h-[380px] md:h-[440px] w-full flex items-center justify-center"
          style={{ perspective: "1400px" }}
          id="creations-carousel-stage"
        >
          {PROJECTS.map((proj, i) => {
            let offset = i - activeIndex;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            if (absOffset > 2) return null;

            const scale = 1 - absOffset * 0.16;
            const opacity = 1 - absOffset * 0.4;
            const rotateY = offset * -10;
            const translateXPct = offset * 62;

            return (
              <div
                key={proj.id}
                onClick={() => (isActive ? handleSelectProject(proj) : setActiveIndex(i))}
                className={`absolute top-1/2 left-1/2 cursor-pointer rounded-xl border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  proj.aspect === "4/3" ? "aspect-[4/3] w-[70%] sm:w-[55%]" : "aspect-[3/4] w-[46%] sm:w-[34%]"
                } ${isActive ? "border-white/30 shadow-2xl" : "border-white/10"}`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateXPct}%) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex: 10 - absOffset,
                  opacity,
                }}
                id={`project-card-${proj.id}`}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    isActive ? "grayscale-0" : "grayscale"
                  }`}
                  id={`project-img-${proj.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 text-[8px] font-mono tracking-widest uppercase rounded text-white border border-white/10">
                  {proj.year}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h4 className="font-horizon tracking-[-0.1em] font-black text-sm sm:text-lg text-white uppercase leading-[0.9]">
                    {proj.title}
                  </h4>
                </div>
              </div>
            );
          })}

          {/* Prev / Next controls */}
          <button
            onClick={goPrev}
            className="absolute left-0 sm:-left-4 z-20 p-2 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-black/80 transition-all cursor-pointer"
            id="carousel-prev-btn"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 sm:-right-4 z-20 p-2 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-black/80 transition-all cursor-pointer"
            id="carousel-next-btn"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6" id="carousel-dots">
          {PROJECTS.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to ${proj.title}`}
            />
          ))}
        </div>

        <p className="text-center text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mt-4">
          Click the centered slide to open the full project
        </p>
      </div>

      {/* Immersive Dedicated Project Detail Page */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black text-white z-50 flex flex-col h-screen overflow-y-auto custom-scrollbar select-text"
            id="project-page-overlay"
          >
            {/* Elegant Header Area with Blur backdrop */}
            <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 py-6 px-6 sm:px-12 md:px-20 flex justify-between items-center">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-white/60 hover:text-white transition-colors cursor-pointer group"
                id="project-page-back-btn"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Creations
              </button>
              <div className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                {selectedProject.year} • Project Detail
              </div>
            </div>

            {/* Main Content: Minimalist Centered Editorial Layout with ONLY Images */}
            <div className="max-w-4xl w-full mx-auto px-6 sm:px-12 py-12 md:py-16 flex-grow">
              
              {/* Main Title Banner (Centered, simple, beautiful) */}
              <div className="border-b border-white/10 pb-8 mb-12 text-center">
                <h2 className="font-horizon tracking-[-0.11em] font-black text-2xl sm:text-4xl md:text-5xl text-white uppercase leading-[0.85]">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Stack of ALL high-fidelity images */}
              <div className="space-y-12 max-w-2xl mx-auto" id="project-page-images-stack">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  selectedProject.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => setZoomedImage(img)}
                      className={`group/img cursor-zoom-in relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/30 transition-all duration-500 shadow-xl ${
                        selectedProject.aspect === "4/3" ? "aspect-[4/3]" : "aspect-[3/4]"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${selectedProject.title} Frame ${index + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"
                      />
                      {/* Elegant hover detail label */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-[10px] font-mono tracking-widest uppercase bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-1.5 text-white">
                          Enlarge Image {index + 1}/{selectedProject.images?.length}
                        </span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className={`rounded-2xl overflow-hidden border border-white/10 bg-white/5 ${
                    selectedProject.aspect === "4/3" ? "aspect-[4/3]" : "aspect-[3/4]"
                  }`}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extreme Detail Full-Screen Pure Lightbox */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            {/* Close button top-right */}
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 z-[70] p-3 rounded-full bg-black/50 border border-white/10 text-white/80 hover:text-white hover:bg-black/80 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              src={zoomedImage}
              alt="Zoomed project series visual"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
