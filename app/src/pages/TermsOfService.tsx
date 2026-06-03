import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionEntrance } from '@/components/SectionEntrance';

export function TermsOfService() {
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <main className="pt-[72px]">
        {/* Header */}
        <section className="bg-warm-sand py-16 lg:py-24">
          <SectionEntrance className="content-max-width">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sage hover:text-terracotta transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.jpg"
                alt="Parijata flower logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="label-style">PARIJATA</span>
            </div>
            <h1
              className="text-deep-earth"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.01em' }}
            >
              Terms of Service
            </h1>
            <p className="text-sage mt-3">
              Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </SectionEntrance>
        </section>

        {/* Content */}
        <section className="section-padding">
          <SectionEntrance className="content-max-width max-w-[900px]">
            <div className="prose-zen">
              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">1. Acceptance of Terms</h2>
                <p className="text-sage leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                  The Parijata Dental Studio, a dental healthcare establishment operating under the registration 
                  of Dr. MS Raghunandan (BDS) and Dr. Aishwarya Rao Mysore (MDS Prosthodontics), located at 
                  Shop No. 6, Sumit Plumeria, Daag Daag, Khadpabandh, Ponda, Goa 403401, India. By accessing 
                  our website, using our chatbot, booking an appointment, or receiving treatment at our clinic, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms. If you 
                  do not agree with any part of these Terms, please discontinue use of our services immediately.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">2. Medical Disclaimer</h2>
                <p className="text-sage leading-relaxed mb-4">
                  The information provided on this website and through our chatbot is for general informational 
                  and educational purposes only and does not constitute medical advice, diagnosis, or treatment 
                  recommendations. The chatbot is an automated assistant designed to handle general enquiries 
                  and cannot provide clinical diagnoses or personalised treatment plans.
                </p>
                <p className="text-sage leading-relaxed">
                  <strong className="text-deep-earth">Always seek the advice of a qualified dentist or physician</strong> for any dental 
                  or medical condition. Never disregard professional medical advice or delay seeking it because 
                  of information you have read on this website. In case of a dental emergency, please contact 
                  our clinic immediately at +91 89992 69685 or visit the nearest emergency medical facility.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">3. Dental Services and Treatment</h2>
                <p className="text-sage leading-relaxed mb-4">
                  All dental treatments provided at The Parijata Dental Studio are carried out by registered 
                  dental practitioners licensed by the Dental Council of India and the Goa State Dental Council. 
                  Our services include but are not limited to:
                </p>
                <ul className="text-sage leading-relaxed list-disc pl-6 mb-4 space-y-1">
                  <li>General dentistry (check-ups, cleanings, fillings, extractions)</li>
                  <li>Prosthodontics (crowns, bridges, dentures, full-mouth rehabilitation)</li>
                  <li>Dental implantology</li>
                  <li>Endodontics (root canal treatment)</li>
                  <li>Cosmetic dentistry (whitening, veneers, bonding)</li>
                  <li>Orthodontics (braces, aligners)</li>
                </ul>
                <p className="text-sage leading-relaxed">
                  Treatment outcomes may vary depending on individual patient conditions. While we strive for 
                  excellence in every procedure, we cannot guarantee specific results. All treatment plans are 
                  discussed with patients, and informed consent is obtained before any procedure.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">4. Appointments and Cancellations</h2>
                <p className="text-sage leading-relaxed mb-4">
                  Appointments can be scheduled through our website form, WhatsApp (+91 86552 28422), or by 
                  calling +91 89992 69685. We operate Monday through Saturday, 10:00 AM to 7:00 PM IST.
                </p>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li>We request at least 24 hours' notice for appointment cancellations or rescheduling</li>
                  <li>Repeated no-shows (three or more) may result in a requirement for advance deposit for future bookings</li>
                  <li>Walk-in patients are welcome but may experience wait times; appointment holders receive priority</li>
                  <li>In case of clinic closure due to unforeseen circumstances, we will notify affected patients at the earliest</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">5. Fees and Payment</h2>
                <p className="text-sage leading-relaxed mb-4">
                  Treatment fees are communicated to patients before commencement of any procedure. Our fee 
                  structure is in accordance with the guidelines set by the Goa State Dental Council and is 
                  competitive with prevailing rates in Ponda, Goa.
                </p>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li>Payment is accepted in cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer</li>
                  <li>A detailed invoice is provided for all treatments</li>
                  <li>Medications and dental materials prescribed are charged at MRP</li>
                  <li>Instalment payment options may be available for extensive treatments; please discuss with our front desk</li>
                  <li>All fees are non-refundable once treatment has commenced, except at the discretion of the treating dentist</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">6. Website Chatbot Service</h2>
                <p className="text-sage leading-relaxed mb-4">
                  Our website chatbot is provided as a convenience tool for general enquiries. By using the 
                  chatbot, you agree to the following:
                </p>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li>The chatbot provides automated responses based on common dental queries and is not a substitute for professional dental consultation</li>
                  <li>Information shared through the chatbot may be forwarded to our clinic staff via WhatsApp for follow-up purposes</li>
                  <li>We do not guarantee immediate responses through the chatbot; for emergencies, please call our clinic directly</li>
                  <li>Conversation data may be stored for up to 90 days for service improvement</li>
                  <li>Do not share sensitive personal information such as passwords, financial details, or government IDs through the chatbot</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">7. Intellectual Property</h2>
                <p className="text-sage leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  the Parijata flower logo, videos, and software, is the property of The Parijata Dental Studio 
                  or its content suppliers and is protected by Indian and international copyright, trademark, 
                  and intellectual property laws. The Parijata name, logo, and associated marks are registered 
                  trademarks. You may not reproduce, distribute, modify, or create derivative works from any 
                  material on this site without our prior written consent.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">8. Limitation of Liability</h2>
                <p className="text-sage leading-relaxed">
                  To the fullest extent permitted by applicable law, The Parijata Dental Studio and its 
                  practitioners, staff, and affiliates shall not be liable for any direct, indirect, incidental, 
                  special, consequential, or punitive damages arising from your use of, or inability to use, 
                  this website, our chatbot, or our dental services. This limitation applies regardless of the 
                  legal theory under which such damages are sought. Nothing in these Terms shall exclude or 
                  limit liability for death or personal injury caused by negligence, fraud, or any other 
                  liability which cannot be excluded under Indian law.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">9. Governing Law and Jurisdiction</h2>
                <p className="text-sage leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic 
                  of India, specifically the laws applicable in the State of Goa. Any dispute arising out of 
                  or in connection with these Terms, including any question regarding their existence, validity, 
                  or termination, shall first be attempted to be resolved through good-faith negotiation. If 
                  unresolved within 30 days, the dispute shall be subject to the exclusive jurisdiction of 
                  the courts at Panaji, Goa, India.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">10. Consumer Protection</h2>
                <p className="text-sage leading-relaxed">
                  As a healthcare consumer in Goa, your rights are protected under the Consumer Protection 
                  Act, 2019. If you are dissatisfied with any aspect of our services, you may file a complaint 
                  with the Goa State Consumer Disputes Redressal Commission. We are committed to resolving all 
                  grievances amicably and in a timely manner.
                </p>
              </div>

              <div>
                <h2 className="text-deep-earth text-xl font-medium mb-4">11. Contact Us</h2>
                <p className="text-sage leading-relaxed">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="mt-4 p-6 bg-warm-sand rounded-xl">
                  <p className="text-deep-earth font-medium">The Parijata Dental Studio</p>
                  <p className="text-sage">Shop No. 6, Sumit Plumeria, Daag Daag, Khadpabandh</p>
                  <p className="text-sage">Ponda, Goa 403401, India</p>
                  <p className="text-sage mt-2">Phone: +91 89992 69685</p>
                  <p className="text-sage">WhatsApp: +91 86552 28422</p>
                </div>
              </div>
            </div>
          </SectionEntrance>
        </section>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
