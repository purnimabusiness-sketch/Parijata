import { Navigation } from '@/components/Navigation';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { DoctorsSection } from '@/sections/DoctorsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';

export function HomePage() {
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
