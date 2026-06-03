import { StaggerContainer, StaggerItem } from '@/components/SectionEntrance';
import { ServiceCard } from '@/components/ServiceCard';
import {
  Shield,
  Crown,
  Hexagon,
  GitBranch,
  Sparkles,
  AlignHorizontalDistributeCenter,
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'General Dentistry',
    description:
      'Complete oral health care including routine check-ups, professional cleanings, fillings, extractions, and preventive treatments for the whole family.',
  },
  {
    icon: Crown,
    title: 'Prosthodontics',
    description:
      "Specialist care in crowns, bridges, dentures, and full-mouth rehabilitation. Dr. Aishwarya's MDS expertise ensures restorations that look and feel completely natural.",
  },
  {
    icon: Hexagon,
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement solutions using advanced implant technology. Single-tooth to full-arch restorations with precision planning and placement.',
  },
  {
    icon: GitBranch,
    title: 'Root Canal Treatment',
    description:
      'Pain-free endodontic therapy using modern rotary instruments and digital imaging. We save natural teeth with precision and comfort.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description:
      'Smile makeovers including teeth whitening, veneers, bonding, and aesthetic contouring. Let your smile reflect your true confidence.',
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: 'Orthodontics',
    description:
      'Teeth straightening solutions including traditional braces and clear aligners. Achieve a perfectly aligned smile at any age.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-cream section-padding">
      <div className="content-max-width">
        <StaggerContainer className="text-center mb-16" staggerDelay={0.12}>
          <StaggerItem>
            <p className="label-style mb-4">WHAT WE OFFER</p>
          </StaggerItem>
          <StaggerItem>
            <h2
              className="text-deep-earth"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.01em' }}
            >
              Comprehensive Dental <em className="italic">Care</em>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p
              className="text-sage mt-4 max-w-[640px] mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)' }}
            >
              From routine check-ups to specialist prosthodontic treatments, we
              provide a full spectrum of dental services under one roof.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
