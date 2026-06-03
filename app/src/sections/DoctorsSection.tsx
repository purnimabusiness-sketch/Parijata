import { SectionEntrance, StaggerContainer, StaggerItem } from '@/components/SectionEntrance';
import { ParallaxImage } from '@/components/ParallaxImage';

const doctors = [
  {
    name: 'Dr. MS Raghunandan',
    credentials: 'BDS \u2014 General Dentist',
    bio: 'With over 15 years of clinical experience, Dr. Raghunandan brings a gentle, thorough approach to general dentistry. His commitment to painless procedures and patient comfort has made him one of the most trusted dentists in Ponda.',
    image: '/assets/doctor-raghunandan.jpg',
    specialties: ['Preventive Care', 'Restorative Dentistry', 'Oral Surgery'],
    direction: 'left' as const,
  },
  {
    name: 'Dr. Aishwarya Rao Mysore',
    credentials: 'MDS Prosthodontics \u2014 Specialist',
    bio: 'Dr. Aishwarya holds a Master of Dental Surgery in Prosthodontics, Crown & Bridge \u2014 making her one of the few prosthodontic specialists in Goa. Her expertise in complex restorations, implants, and aesthetic dentistry transforms smiles with scientific precision and artistic sensibility.',
    image: '/assets/doctor-aishwarya.jpg',
    specialties: ['Crowns & Bridges', 'Dental Implants', 'Full-Mouth Rehab', 'Aesthetic Dentistry'],
    isSpecialist: true,
    direction: 'right' as const,
  },
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="bg-warm-sand section-padding">
      <div className="content-max-width">
        <StaggerContainer className="text-center mb-16" staggerDelay={0.12}>
          <StaggerItem>
            <p className="label-style mb-4">MEET OUR DOCTORS</p>
          </StaggerItem>
          <StaggerItem>
            <h2
              className="text-deep-earth"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.01em' }}
            >
              Expertise You Can <em className="italic">Trust</em>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p
              className="text-sage mt-4 max-w-[600px] mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)' }}
            >
              A husband-and-wife team bringing together decades of experience and
              a shared passion for patient-centered care.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {doctors.map((doctor) => (
            <SectionEntrance
              key={doctor.name}
              direction={doctor.direction}
              distance={40}
              duration={1}
            >
              <div>
                <ParallaxImage
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  className="aspect-[3/4] w-full max-w-[400px] mx-auto lg:mx-0 mb-6"
                />
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3
                      className="text-deep-earth"
                      style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 500, lineHeight: 1.2 }}
                    >
                      {doctor.name}
                    </h3>
                    {doctor.isSpecialist && (
                      <span className="px-2.5 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-medium">
                        ★ Specialist
                      </span>
                    )}
                  </div>
                  <p className="text-sage text-sm">{doctor.credentials}</p>
                  <p className="text-deep-earth leading-[1.7]">{doctor.bio}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {doctor.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-3.5 py-1 rounded-full border border-mist text-sage text-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionEntrance>
          ))}
        </div>
      </div>
    </section>
  );
}
