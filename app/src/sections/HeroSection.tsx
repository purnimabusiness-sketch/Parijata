import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BotanicalCanvas } from '@/components/BotanicalCanvas';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-cream"
    >
      <BotanicalCanvas />

      <motion.div
        className="relative z-10 text-center max-w-[800px] mx-auto px-6 pt-20"
        style={{ marginTop: '-5vh' }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          },
        }}
      >
        <motion.p
          variants={itemVariants}
          className="label-style mb-6"
        >
          THE PARIJATA DENTAL STUDIO
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-deep-earth leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 400 }}
        >
          Where Precision
          <br />
          Meets <em className="italic">calm</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sage max-w-[560px] mx-auto mt-6 leading-relaxed"
          style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)' }}
        >
          A boutique dental clinic in the heart of Ponda, Goa — where specialist
          care, modern technology, and the serene spirit of the Parijata tree come
          together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mt-10 flex-wrap"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full bg-terracotta text-white text-[13px] font-medium uppercase tracking-[0.06em] hover:bg-terracotta-dark transition-all duration-300 hover:-translate-y-px"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full border border-deep-earth text-deep-earth text-[13px] font-medium uppercase tracking-[0.06em] hover:bg-deep-earth hover:text-white transition-all duration-300"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="w-5 h-5 text-sage/40 animate-bounce-down" />
      </motion.div>
    </section>
  );
}
