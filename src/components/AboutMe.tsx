import { motion } from "motion/react";

interface AboutMeProps {
  onClose: () => void;
}

export default function AboutMe({ onClose }: AboutMeProps) {
  return (
    <div className="text-white h-full flex items-center justify-center py-6" id="about-me-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center space-y-6 px-4"
      >
        <p className="text-xs sm:text-sm md:text-base font-bold leading-relaxed text-zinc-300">
          I'm <span className="text-white font-extrabold">Berna</span>, a 19-year-old third-year Artificial Intelligence student (Class of 2028) and freelance AI visual creator specializing in cinematic fashion narratives and bold visual identities.
        </p>
        <p className="text-xs sm:text-sm md:text-base font-bold leading-relaxed text-zinc-300">
          I use artificial intelligence as a creative medium to craft imagery that feels intentional, styled, and authentic—combining cinematic lighting, mood, composition, and brand strategy to create compelling visual stories. My work bridges technology and design, helping brands, creatives, and fashion concepts come to life through distinctive, high-end AI-generated visuals.
        </p>
      </motion.div>
    </div>
  );
}
