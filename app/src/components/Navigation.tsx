import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(['services', 'doctors', 'testimonials', 'contact']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-400 ${
          scrolled
            ? 'bg-cream/92 backdrop-blur-xl border-b border-mist'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 lg:px-16">
          {/* Logo with flower image */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/assets/logo.jpg"
              alt="Parijata flower logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-deep-earth group-hover:text-terracotta transition-colors">
              PARIJATA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`nav-style relative py-1 transition-colors duration-300 group ${
                  activeSection === link.href.slice(1)
                    ? 'text-deep-earth'
                    : 'text-sage hover:text-deep-earth'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-deep-earth transition-transform duration-300 origin-left w-full ${
                    activeSection === link.href.slice(1)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden md:inline-flex items-center px-7 py-3 rounded-full bg-terracotta text-white text-[13px] font-medium uppercase tracking-[0.06em] hover:bg-terracotta-dark transition-all duration-300 hover:-translate-y-px"
          >
            Book Appointment
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-deep-earth"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 mb-4"
          >
            <img
              src="/assets/logo.jpg"
              alt="Parijata flower logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-deep-earth">
              PARIJATA
            </span>
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-2xl font-medium text-deep-earth hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="mt-4 px-8 py-3.5 rounded-full bg-terracotta text-white text-sm font-medium uppercase tracking-[0.06em]"
          >
            Book Appointment
          </a>
        </div>
      )}
    </>
  );
}
