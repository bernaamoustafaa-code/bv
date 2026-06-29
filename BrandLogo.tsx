import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface BrandLogoProps {
  className?: string;
  interactive?: boolean;
}

export default function BrandLogo({ className = "", interactive = true }: BrandLogoProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Trigger a subtle blink animation periodically to give it a premium, organic "alive" feel
  useEffect(() => {
    if (!interactive) return;
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4500);
    return () => clearInterval(interval);
  }, [interactive]);

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`} id="brand-logo-container">
      {/* SVG Hand-Drawn Eye Logo */}
      <motion.svg
        width="140"
        height="90"
        viewBox="0 0 140 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white drop-shadow-md"
        id="eye-vector-logo"
        whileHover={interactive ? { scale: 1.05 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Upper Eyelid Curve */}
        <motion.path
          d="M 15 50 Q 70 12 125 50"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          animate={isBlinking ? { d: "M 15 50 Q 70 50 125 50" } : { d: "M 15 50 Q 70 12 125 50" }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        />

        {/* Lower Eyelid Curve */}
        <motion.path
          d="M 15 50 Q 70 80 125 50"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={isBlinking ? { d: "M 15 50 Q 70 50 125 50" } : { d: "M 15 50 Q 70 80 125 50" }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        />

        {/* Iris / Pupil (Centered eye circle) */}
        <motion.path
          d="M 50 48 C 50 35, 90 35, 90 48"
          fill="currentColor"
          animate={isBlinking ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="origin-center"
        />
        <motion.ellipse
          cx="70"
          cy="48"
          rx="12"
          ry="6"
          fill="currentColor"
          animate={isBlinking ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
        />

        {/* Lower Eyelashes (7 distinct eyelashes drawn outwards) */}
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-95">
          {/* Eyelash 1 (Far Left) */}
          <line x1="32" y1="63" x2="24" y2="76" />
          {/* Eyelash 2 */}
          <line x1="45" y1="71" x2="38" y2="85" />
          {/* Eyelash 3 */}
          <line x1="58" y1="75" x2="55" y2="90" />
          {/* Eyelash 4 (Center) */}
          <line x1="70" y1="76" x2="70" y2="92" />
          {/* Eyelash 5 */}
          <line x1="82" y1="75" x2="85" y2="90" />
          {/* Eyelash 6 */}
          <line x1="95" y1="71" x2="102" y2="85" />
          {/* Eyelash 7 (Far Right) */}
          <line x1="108" y1="63" x2="116" y2="76" />
        </g>
      </motion.svg>
    </div>
  );
}
