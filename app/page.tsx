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
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main>
        {/* ===================================================
            HERO
        ==================================================== */}

        <Hero />

        {/* ===================================================
            ABOUT
        ==================================================== */}

        <section id="about">
          <AboutSection />
        </section>

        {/* ===================================================
            SERVICES
        ==================================================== */}

        <section id="services">
          <Services />
        </section>

        {/* ===================================================
            WHY CHOOSE US
        ==================================================== */}

        <section id="why-us">
          <WhyChooseUs />
        </section>

        {/* ===================================================
            GALLERY
        ==================================================== */}

        <section id="gallery">
          <Gallery />
        </section>

        {/* ===================================================
            CONTACT
        ==================================================== */}

        <section
          id="contact"
          className="contact-section section"
        >
          <div className="section-heading contact-heading">
            <span className="eyebrow">
              Get a free estimate
            </span>

            <h2>
              Let&apos;s make your space <em>safer.</em>
            </h2>

            <p>
              Tell us about your requirement and our Gurugram
              team at Shweta Invisible Grill will get back to you
              with a free on-site quote.
            </p>
          </div>

          <ContactForm />
        </section>

        {/* ===================================================
            GOOGLE MAP
        ==================================================== */}

        <GoogleMap />
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

      {/* =====================================================
          FLOATING BUTTONS
      ====================================================== */}

      <WhatsAppButton />

      <CallButton />
    </>
  );
}