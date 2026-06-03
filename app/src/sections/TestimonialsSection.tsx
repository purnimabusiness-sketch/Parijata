import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';
import { StaggerContainer, StaggerItem, SectionEntrance } from '@/components/SectionEntrance';
import { TestimonialCard } from '@/components/TestimonialCard';

const testimonials = [
  {
    quote:
      "I used to dread dental visits until I found Parijata Dental Studio. Dr. Raghunandan explained everything so patiently, and the procedure was completely painless. The clinic feels like a home, not a hospital.",
    name: 'Priya Naik',
    treatment: 'Root Canal Treatment',
    rating: 5,
  },
  {
    quote:
      "Dr. Aishwarya transformed my smile with crowns that look completely natural. Her attention to detail is remarkable \u2014 she even matched the shade perfectly to my other teeth. I smile with confidence now!",
    name: 'Rahman Sheikh',
    treatment: 'Ceramic Crowns',
    rating: 5,
  },
  {
    quote:
      "The entire family comes here \u2014 my parents, my children, and myself. The doctors remember everyone's names and always ask about our wellbeing. This is what healthcare should feel like.",
    name: 'Sunita Dessai',
    treatment: 'Family Dental Care',
    rating: 5,
  },
  {
    quote:
      "After my accident, I needed extensive dental work. Dr. Aishwarya's prosthodontic expertise rebuilt my smile from scratch. The implants feel exactly like my natural teeth. Forever grateful.",
    name: 'Manoj Kamat',
    treatment: 'Dental Implants & Full Rehabilitation',
    rating: 5,
  },
  {
    quote:
      "The clinic is spotlessly clean, the equipment is modern, and the staff is incredibly warm. You can tell they genuinely care about their patients. Best dental experience in Goa, hands down.",
    name: 'Anjali Borkar',
    treatment: 'Teeth Whitening & Cleaning',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section id="testimonials" className="bg-cream section-padding">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-16">
        <StaggerContainer className="text-center mb-12" staggerDelay={0.12}>
          <StaggerItem>
            <p className="label-style mb-4">PATIENT STORIES</p>
          </StaggerItem>
          <StaggerItem>
            <h2
              className="text-deep-earth"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.01em' }}
            >
              Words That Warm <em className="italic">Our Hearts</em>
            </h2>
          </StaggerItem>
        </StaggerContainer>

        {/* Testimonial Slider */}
        <SectionEntrance delay={0.2}>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-9 h-9 rounded-full border border-mist bg-white flex items-center justify-center text-deep-earth hover:border-sage hover:text-sage transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-9 h-9 rounded-full border border-mist bg-white flex items-center justify-center text-deep-earth hover:border-sage hover:text-sage transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <TestimonialCard {...testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    i === activeIndex ? 'bg-parijata-gold' : 'bg-mist-dark'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </SectionEntrance>

        {/* Google Reviews CTA */}
        <SectionEntrance delay={0.3} className="text-center mt-12">
          <p className="text-sage text-sm mb-3">Read 88+ reviews on Google</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-mist shadow-card">
              <span className="text-deep-earth font-medium text-lg">4.9</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-parijata-gold fill-parijata-gold"
                  />
                ))}
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=The+Parijata+Dental+Studio+Ponda+Goa+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-terracotta text-sm font-medium hover:underline transition-all"
            >
              View all reviews <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
