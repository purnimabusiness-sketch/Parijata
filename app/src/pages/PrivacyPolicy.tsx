import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionEntrance } from '@/components/SectionEntrance';

export function PrivacyPolicy() {
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
              Privacy Policy
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
                <h2 className="text-deep-earth text-xl font-medium mb-4">1. Introduction</h2>
                <p className="text-sage leading-relaxed">
                  The Parijata Dental Studio ("we," "our," or "us") is committed to protecting your privacy 
                  and ensuring the confidentiality of your personal and health information. This Privacy Policy 
                  describes how we collect, use, store, and safeguard your information when you visit our website, 
                  use our chatbot service, or receive dental treatment at our clinic in Ponda, Goa. This policy 
                  is in compliance with the Information Technology Act, 2000 (as amended), the Information Technology 
                  (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, 
                  and the Digital Personal Data Protection Act, 2023 of India.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">2. Information We Collect</h2>
                <p className="text-sage leading-relaxed mb-4">
                  We collect the following categories of information to provide you with quality dental care and 
                  improve our services:
                </p>
                <h3 className="text-deep-earth font-medium mb-2">2.1 Personal Information</h3>
                <ul className="text-sage leading-relaxed list-disc pl-6 mb-4 space-y-1">
                  <li>Full name, age, date of birth, and gender</li>
                  <li>Contact details including phone number, email address, and residential address</li>
                  <li>Government-issued identification (Aadhaar/PAN) as required for records under Goa Dental Council regulations</li>
                </ul>

                <h3 className="text-deep-earth font-medium mb-2">2.2 Health and Dental Information</h3>
                <ul className="text-sage leading-relaxed list-disc pl-6 mb-4 space-y-1">
                  <li>Dental and medical history, including allergies, ongoing treatments, and medications</li>
                  <li>Dental X-rays, scans, intraoral photographs, and other diagnostic images</li>
                  <li>Treatment records, prescriptions, and progress notes</li>
                  <li>Information about your referring physician or previous dentists, if applicable</li>
                </ul>

                <h3 className="text-deep-earth font-medium mb-2">2.3 Website and Communication Data</h3>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li>Messages exchanged through our website chatbot</li>
                  <li>Information submitted via our appointment request forms (name, phone, treatment preference, preferred date)</li>
                  <li>Basic device and browser information for website analytics</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">3. How We Use Your Information</h2>
                <p className="text-sage leading-relaxed mb-4">Your information is used strictly for the following purposes:</p>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li>Providing dental diagnosis, treatment, and follow-up care</li>
                  <li>Maintaining statutory dental records as mandated by the Dental Council of India</li>
                  <li>Processing appointment requests and sending reminders</li>
                  <li>Responding to your enquiries via our chatbot, phone, or WhatsApp</li>
                  <li>Billing, invoicing, and insurance claim processing</li>
                  <li>Improving our services and patient experience</li>
                  <li>Communicating dental health tips and clinic updates (only with your explicit consent)</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">4. Data Storage and Security</h2>
                <p className="text-sage leading-relaxed mb-4">
                  We implement appropriate technical and organisational measures to protect your personal 
                  and health data in compliance with the Information Technology (Reasonable Security Practices 
                  and Procedures and Sensitive Personal Data or Information) Rules, 2011:
                </p>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li>All physical patient records are stored in a secured location at our clinic premises in Ponda, Goa</li>
                  <li>Digital records are maintained on password-protected, encrypted systems</li>
                  <li>Access to patient data is restricted to Dr. MS Raghunandan, Dr. Aishwarya Rao Mysore, and authorised clinical staff only</li>
                  <li>We do not store payment card details on our servers</li>
                  <li>In the event of a data breach, we will notify affected patients and the Indian Computer Emergency Response Team (CERT-In) as required by law</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-sage leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your data only in the following circumstances:
                </p>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li><strong>Referral dentists or specialists:</strong> When your treatment requires specialist collaboration, with your prior consent</li>
                  <li><strong>Insurance providers:</strong> For processing dental insurance claims, upon your explicit authorisation</li>
                  <li><strong>Legal requirements:</strong> When required by court order, statutory authority, or applicable Indian law</li>
                  <li><strong>WhatsApp Business:</strong> Messages sent via our chatbot are processed through Meta's WhatsApp Business platform, subject to their Privacy Policy</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">6. Your Rights Under Indian Law</h2>
                <p className="text-sage leading-relaxed mb-4">
                  Under the Digital Personal Data Protection Act, 2023 and other applicable Indian laws, you have the following rights:
                </p>
                <ul className="text-sage leading-relaxed list-disc pl-6 space-y-1">
                  <li><strong>Right to Access:</strong> Request a copy of your personal and health records</li>
                  <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your data, subject to statutory retention requirements</li>
                  <li><strong>Right to Withdraw Consent:</strong> Opt out of marketing communications at any time</li>
                  <li><strong>Right to Grievance Redressal:</strong> File a complaint with our Data Protection Officer or the Data Protection Board of India</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">7. Chatbot and WhatsApp Communication</h2>
                <p className="text-sage leading-relaxed">
                  Our website chatbot is designed to assist with general enquiries and appointment requests. 
                  Information shared through the chatbot is used solely to respond to your query and may be 
                  forwarded to our clinic staff via WhatsApp for follow-up. Conversations are stored temporarily 
                  for service improvement purposes and are not shared with third parties. By using the chatbot, 
                  you consent to this data processing. WhatsApp communications are governed by Meta Platforms, 
                  Inc.'s Privacy Policy in addition to this policy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">8. Cookies and Analytics</h2>
                <p className="text-sage leading-relaxed">
                  Our website uses minimal cookies necessary for functionality. We do not use third-party 
                  tracking cookies or behavioural advertising. Basic website analytics (page views, traffic 
                  sources) are collected in anonymised form to help us improve user experience.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">9. Data Retention</h2>
                <p className="text-sage leading-relaxed">
                  Patient dental records are retained as per the guidelines of the Dental Council of India 
                  and Goa State Dental Council, typically for a minimum period of seven (7) years from the 
                  date of last treatment or until the patient reaches 25 years of age, whichever is longer. 
                  Website chat logs are retained for a maximum of ninety (90) days, after which they are 
                  automatically deleted.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-deep-earth text-xl font-medium mb-4">10. Grievance Officer</h2>
                <p className="text-sage leading-relaxed">
                  In accordance with the Information Technology Act, 2000, we have appointed a Grievance 
                  Officer to address any concerns regarding your data:
                </p>
                <div className="mt-4 p-6 bg-warm-sand rounded-xl">
                  <p className="text-deep-earth font-medium">Dr. MS Raghunandan</p>
                  <p className="text-sage">The Parijata Dental Studio</p>
                  <p className="text-sage">Shop No. 6, Sumit Plumeria, Daag Daag, Khadpabandh</p>
                  <p className="text-sage">Ponda, Goa 403401, India</p>
                  <p className="text-sage mt-2">Email: privacy@theparijatadentalstudio.com</p>
                  <p className="text-sage">Phone: +91 89992 69685</p>
                  <p className="text-sage mt-2 text-sm italic">Response time: Within 30 days of receipt</p>
                </div>
              </div>

              <div>
                <h2 className="text-deep-earth text-xl font-medium mb-4">11. Updates to This Policy</h2>
                <p className="text-sage leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  applicable laws. Any changes will be posted on this page with an updated effective date. 
                  We encourage you to review this policy periodically.
                </p>
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
