import { SectionEntrance, StaggerContainer, StaggerItem } from '@/components/SectionEntrance';
import { ParallaxImage } from '@/components/ParallaxImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-warm-sand section-padding">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] gap-8 lg:gap-[5%] items-center">
          {/* Image */}
          <SectionEntrance direction="left" distance={40} duration={1}>
            <ParallaxImage
              src="/assets/clinic-interior.jpg"
              alt="The Parijata Dental Studio clinic interior with modern equipment and natural light"
              className="aspect-[4/3] w-full"
            />
          </SectionEntrance>

          {/* Content */}
          <StaggerContainer staggerDelay={0.12}>
            <StaggerItem>
              <p className="label-style mb-4">ABOUT US</p>
            </StaggerItem>

            <StaggerItem>
              <h2
                className="text-deep-earth mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.01em' }}
              >
                Rooted in Care, <em className="italic">Growing</em> with Trust
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-deep-earth leading-[1.7] mb-5">
                The Parijata Dental Studio is named after the sacred Parijata tree
                that blossoms right in front of our clinic — a symbol of healing,
                renewal, and divine beauty in Indian tradition. Just as this ancient
                tree has stood as a beacon of wellness for centuries, we strive to be
                a sanctuary of oral health for our community.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-deep-earth leading-[1.7] mb-8">
                Located in the heart of Ponda, Goa, our clinic combines the warmth
                of a family home with the precision of specialist-level dentistry.
                Every treatment is delivered with the same care we would offer our
                own family.
              </p>
            </StaggerItem>

            {/* Stats */}
            <StaggerItem>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '15+', label: 'Years of Experience' },
                  { value: '4.9\u2605', label: 'Google Rating' },
                  { value: '1000+', label: 'Happy Patients' },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`text-center ${i < 2 ? 'border-r border-mist' : ''}`}
                  >
                    <p
                      className="text-terracotta"
                      style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 500, lineHeight: 1.2 }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sage text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
