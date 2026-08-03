import { AboutSection } from "@/components/AboutSection";
import { CallButton } from "@/components/CallButton";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { GoogleMap } from "@/components/GoogleMap";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <section className="contact-section section" id="contact">
          <div className="section-heading contact-heading">
            <span className="eyebrow">Get a free estimate</span>
            <h2>Let&apos;s make your space <em>safer.</em></h2>
            <p>Tell us about your requirement and our Rajkot team will get back to you shortly.</p>
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
