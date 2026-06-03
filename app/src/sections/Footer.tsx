import { Link } from 'react-router-dom';
import { SectionEntrance } from '@/components/SectionEntrance';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const treatments = [
  'General Dentistry',
  'Prosthodontics',
  'Dental Implants',
  'Root Canal',
  'Cosmetic Dentistry',
];

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-sage">
      <SectionEntrance>
        <div className="content-max-width">
          {/* Main Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
            {/* Clinic */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src="/assets/logo.jpg"
                  alt="Parijata flower logo"
                  className="w-8 h-8 rounded-md object-cover"
                />
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-parijata-gold">
                  PARIJATA
                </p>
              </div>
              <p className="text-sm text-cream/60 leading-relaxed">
                The Parijata Dental Studio
              </p>
              <p className="text-sm text-cream/60">Ponda, Goa</p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-cream/60 mb-4">
                QUICK LINKS
              </p>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-sm text-cream/80 hover:text-cream transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-cream/60 mb-4">
                TREATMENTS
              </p>
              <ul className="space-y-2.5">
                {treatments.map((t) => (
                  <li key={t}>
                    <span className="text-sm text-cream/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-cream/60 mb-4">
                CONNECT
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://www.instagram.com/theparijatadentalstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/80 hover:text-cream transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/p/The-Parijata-Dental-Studio-100069169806889/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/80 hover:text-cream transition-colors duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918999269685"
                    className="text-sm text-cream/80 hover:text-cream transition-colors duration-300"
                  >
                    +91 89992 69685
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-cream/10" />

          {/* Bottom Row: Legal Links + Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="text-xs text-cream/40 hover:text-cream/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-cream/20">|</span>
              <Link
                to="/terms-of-service"
                className="text-xs text-cream/40 hover:text-cream/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-sm text-cream/40">
              &copy; 2025 The Parijata Dental Studio. All rights reserved.
            </p>
          </div>
        </div>
      </SectionEntrance>
    </footer>
  );
}
