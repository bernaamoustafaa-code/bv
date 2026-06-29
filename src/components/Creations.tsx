import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { Grid, Layers, ExternalLink, ArrowLeft, Calendar, Tag, Compass, ArrowRight, X } from "lucide-react";

// Local high-fidelity assets
import image19 from "@/assets/19_v2.webp";
import image20 from "@/assets/20_v2.webp";
import image28 from "@/assets/28_v2.webp";
import image29 from "@/assets/29_v2.webp";
import image32 from "@/assets/32_v2.webp";
import noEye from "@/assets/no_eye_v2.webp";
import shoot4 from "@/assets/shoot_4_v2.webp";
import shoot4_1 from "@/assets/shoot_4.1_v2.webp";
import shoot4_2 from "@/assets/shoot_4.2_v2.webp";
import shoot9 from "@/assets/shoot_9_v2.webp";
import shot1 from "@/assets/shot_1_v2.webp";
import shot2 from "@/assets/shot_2_v2.webp";
import viceLogoShot from "@/assets/vice_logo_shot_v2.webp";
import viceShot1 from "@/assets/vice_shot_1_v2.webp";
import viceShot3 from "@/assets/vice_shot_3_v2.webp";
import viceSleeveShot from "@/assets/vice_sleeve_shot_v2.webp";

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
    id: "bernavision-identity",
    title: "Basicplus",
    category: "Luxury Brand Identity & Design",
    year: "2026",
    description: "A comprehensive brand ecosystem celebrating fluid curvature, tactile paper, and eye-centric themes.",
    longDescription: ".Bernavision is a boutique brand identity built for visual creators, art directors, and galleries. Prioritizing hand-drawn sketch motifs—like the distinctive lash eye logo—and custom organic script typography, the brand represents an elegant counterweight to clinical geometric corporate identities. It explores physical textures such as debossed cotton paper and matte slate gray elements.",
    image: shoot4,
    tags: ["Typography", "Creative Direction", "Logo Design", "Editorial Strategy"],
    specs: [
      { label: "Client", value: "Bernavision Creative Network" },
      { label: "Role", value: "Lead Brand Strategist & Visual Designer" },
      { label: "Materials", value: "Indian Ink, 600gsm Cotton Card, Debossed Foil" },
      { label: "Recognition", value: "Featured on Behance Editorial (Branding)" }
    ],
    images: [
      shoot4,
      shoot4_1,
      shoot4_2,
      shoot9
    ],
    aspect: "3/4"
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
  }
];

export default function Creations() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleSelectProject = (proj: Project) => {
    setSelectedProject(proj);
  };

  return (
    <div className="text-white h-full overflow-y-auto pr-1 custom-scrollbar" id="creations-section">
      {/* Dynamic Grid of Creations styled beautifully in their natural aspect ratios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto w-full mb-8" id="creations-grid">
        {PROJECTS.map((proj) => (
          <motion.div
            key={proj.id}
            layoutId={`project-card-container-${proj.id}`}
            onClick={() => handleSelectProject(proj)}
            onHoverStart={() => setHoveredProject(proj.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className={`group cursor-pointer relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full ${
              proj.aspect === "4/3" ? "aspect-[4/3]" : "aspect-[3/4]"
            }`}
            id={`project-card-${proj.id}`}
          >
            {/* Project Image filling the shape */}
            <img
              src={proj.image}
              alt={proj.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              id={`project-img-${proj.id}`}
            />

            {/* Gradient Overlay for legibility: blending with black and using white text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 transition-opacity duration-300" />

            {/* Year indicator (top right) */}
            <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 text-[9px] font-mono tracking-widest uppercase rounded text-white z-20 border border-white/10">
              {proj.year}
            </span>

            {/* Project Name at the Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
              <h4 className="font-horizon tracking-[-0.1em] font-black text-lg sm:text-xl text-white group-hover:text-white transition-colors uppercase leading-[0.9]">
                {proj.title}
              </h4>
            </div>
          </motion.div>
        ))}
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
