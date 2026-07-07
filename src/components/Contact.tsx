import { motion } from "motion/react";
import { Mail, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "bernamoustapha@hotmail.com",
      href: "mailto:bernamoustapha@hotmail.com",
      icon: Mail,
    },
    {
      label: "Instagram",
      value: "instagram.com/bernamoustapha",
      href: "https://www.instagram.com/bernamoustapha?igsh=NGIyYmU0MzM4bDd1&utm_source=qr",
      icon: Instagram,
    },
    {
      label: "WhatsApp",
      value: "01014415541",
      href: "https://wa.me/201014415541",
      icon: MessageCircle,
    }
  ];

  return (
    <div className="text-white h-full overflow-y-auto pr-1 custom-scrollbar flex flex-col justify-between py-4" id="contact-section">
      <div className="max-w-4xl w-full mx-auto px-4 flex-grow flex flex-col justify-center">
        
        {/* Top: Left-aligned texts */}
        <div className="text-left space-y-6 mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 block"
          >
            Connection
          </motion.span>
          
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-3xl font-horizon tracking-[-0.11em] font-black text-white uppercase leading-[0.85]"
          >
            start a collaboration
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base font-sans font-light leading-relaxed text-zinc-300 max-w-2xl"
          >
            If you have a campaign to build, a brand to elevate, or a visual world that needs to exist — reach out. I work with brands, designers, and artists who believe in the power of intention-driven imagery.
          </motion.p>
        </div>

        {/* Bottom: Centered Contact Links */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full border-t border-white/10 pt-12 flex flex-col items-center justify-center text-center space-y-6"
          id="centered-contact-channels"
        >
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl justify-center items-center">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col items-center p-6 w-full sm:w-48 transition-all duration-300"
                  id={`contact-link-${link.label.toLowerCase()}`}
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 mb-1">{link.label}</span>
                  <span className="text-xs font-sans font-light text-zinc-300 group-hover:text-white transition-colors text-center truncate w-full px-2">
                    {link.value}
                  </span>
                  <ArrowUpRight className="absolute top-3 right-3 w-3 h-3 text-white/10 group-hover:text-white/40 transition-colors" />
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
