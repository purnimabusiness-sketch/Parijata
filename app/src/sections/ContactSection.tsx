import { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Star } from 'lucide-react';
import { StaggerContainer, StaggerItem, SectionEntrance } from '@/components/SectionEntrance';

const contactDetails = [
  {
    icon: Phone,
    label: '+91 89992 69685',
    href: 'tel:+918999269685',
  },
  {
    icon: MapPin,
    label: 'Shop No. 6, Sumit Plumeria, Daag Daag, Khadpabandh, Ponda, Goa 403401',
    href: 'https://maps.google.com/?q=15.4046,73.9837',
  },
  {
    icon: Clock,
    label: 'Mon\u2013Sat: 10:00 AM \u2013 7:00 PM\nSunday: Closed',
  },
  {
    icon: MessageCircle,
    label: '+91 86552 28422',
    href: 'https://wa.me/918655228422',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I'd like to book an appointment.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ATreatment: ${formData.treatment}%0APreferred Date: ${formData.date}`;
    window.open(`https://wa.me/918655228422?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="bg-warm-sand section-padding">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info & Form */}
          <StaggerContainer staggerDelay={0.12}>
            <StaggerItem>
              <p className="label-style mb-4">GET IN TOUCH</p>
            </StaggerItem>
            <StaggerItem>
              <h2
                className="text-deep-earth mb-4"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.01em' }}
              >
                Visit Our <em className="italic">Sanctuary</em>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-deep-earth leading-relaxed max-w-[480px] mb-8" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)' }}>
                We'd love to welcome you. Book an appointment or drop by for a
                consultation. Walk-ins are welcome, though appointments are
                recommended.
              </p>
            </StaggerItem>

            {/* Contact Details Grid */}
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {contactDetails.map((item) => (
                  <div key={item.label.split('\n')[0]} className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-sage" />
                    </div>
                    <div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-deep-earth text-sm leading-relaxed hover:text-terracotta transition-colors"
                        >
                          {item.label.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.label.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </a>
                      ) : (
                        <p className="text-deep-earth text-sm leading-relaxed">
                          {item.label.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.label.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </StaggerItem>

            {/* Quick Form */}
            <StaggerItem>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-mist-dark bg-white text-deep-earth placeholder:text-sage/50 text-sm outline-none focus:ring-2 focus:ring-parijata-gold/30 focus:border-parijata-gold/30 transition-all"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-mist-dark bg-white text-deep-earth placeholder:text-sage/50 text-sm outline-none focus:ring-2 focus:ring-parijata-gold/30 focus:border-parijata-gold/30 transition-all"
                    required
                  />
                </div>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg border border-mist-dark bg-white text-deep-earth text-sm outline-none focus:ring-2 focus:ring-parijata-gold/30 focus:border-parijata-gold/30 transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Select Treatment</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Prosthodontics">Prosthodontics</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Root Canal">Root Canal Treatment</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                </select>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg border border-mist-dark bg-white text-deep-earth text-sm outline-none focus:ring-2 focus:ring-parijata-gold/30 focus:border-parijata-gold/30 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta text-white text-[13px] font-medium uppercase tracking-[0.06em] hover:bg-terracotta-dark transition-all duration-300 hover:-translate-y-px"
                >
                  Request Appointment
                </button>
                <p className="text-sage text-sm mt-2">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Column - Map */}
          <SectionEntrance direction="right" distance={40} duration={1}>
            <div className="relative rounded-2xl overflow-hidden h-[500px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4925.146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbb8b1b3250e1%3A0xe0f3f1d3b954a087!2sThe%20Parijata%20Dental%20Studio%20by%20Dr.%20MS%20Raghunandan%20%26%20Dr.%20Aishwarya%20Rao%20Mysore!5e0!3m2!1sen!2sin!4v1750000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.15) sepia(0.08)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Parijata Dental Studio Location"
                className="absolute inset-0 w-full h-full"
              />
              {/* Map Overlay Card */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg max-w-[240px]">
                <p className="text-deep-earth font-medium text-sm">The Parijata Dental Studio</p>
                <p className="text-sage text-xs mt-0.5">Ponda, Goa</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <Star className="w-3.5 h-3.5 text-parijata-gold fill-parijata-gold" />
                  <span className="text-parijata-gold text-xs font-medium">4.9</span>
                  <span className="text-sage text-xs">88 reviews</span>
                </div>
              </div>
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  );
}
