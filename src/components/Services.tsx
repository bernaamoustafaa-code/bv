import { motion } from "motion/react";
import { Camera, Sparkles, Image, Shirt } from "lucide-react";

const SERVICES = [
  {
    title: "AI Product Photoshoots",
    icon: Camera,
  },
  {
    title: "AI Lifestyle Photoshoots",
    icon: Image,
  },
  {
    title: "Static Ad Creatives",
    icon: Sparkles,
  },
  {
    title: "Fashion Mockups",
    icon: Shirt,
  },
];

export default function Services() {
  return (
    <div className="text-white h-full overflow-y-auto pr-1 custom-scrollbar flex flex-col justify-center py-4" id="services-section">
      <div className="max-w-4xl w-full mx-auto px-4">

        {/* Top: Left-aligned intro, matching Contact section pattern */}
        <div className="text-left space-y-6 mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 block"
          >
            Capabilities
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-3xl font-horizon tracking-[-0.11em] font-black text-white uppercase leading-[0.85]"
          >
            what i offer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base font-sans font-light leading-relaxed text-zinc-300 max-w-2xl"
          >
            From product-ready visuals to full campaign rollouts, I build AI-generated imagery tailored to your brand's world — styled, on-message, and ready to publish.
          </motion.p>
        </div>

        {/* Services grid, styled to match Creations cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full border-t border-white/10 pt-10" id="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 p-6 flex items-center gap-4"
                id={`service-card-${index}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-white/40 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-horizon tracking-[-0.08em] font-black text-sm sm:text-base text-white uppercase leading-[0.95]">
                  {service.title}
                </h4>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
