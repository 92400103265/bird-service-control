import { CallButton } from "@/components/CallButton";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { GoogleMap } from "@/components/GoogleMap";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        <section className="page-banner">
          <span className="eyebrow">Contact us</span>
          <h1>Let&apos;s protect what <em>matters most.</em></h1>
        </section>
        <section className="contact-page section">
          <div className="contact-details">
            <span className="eyebrow">Speak with our team</span>
            <h2>Get a quick, no-obligation quote.</h2>
            <p>We serve homes and businesses across Patna with fast, careful installation.</p>
            <a href="tel:+918229006831" className="detail-card">
              <FiPhone /><span><strong>Call us</strong>8229006831</span>
            </a>
            <div className="detail-card"><FiMapPin /><span><strong>Our location</strong>Patna, Bihar</span></div>
            <div className="detail-card"><FiClock /><span><strong>Working hours</strong>Mon – Sun, 8:00 AM – 8:00 PM</span></div>
          </div>
          <ContactForm />
        </section>
        <GoogleMap />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
