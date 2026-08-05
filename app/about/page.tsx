import { CallButton } from "@/components/CallButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FiCheckCircle } from "react-icons/fi";

const services = [
  "Invisible Grill",
  "Bird Net Installation",
  "Balcony Safety Net",
  "Child Safety Solutions",
  "Artificial Grass",
  "Bird Spike Installation",
];

const reasons = [
  "5+ Years Experience",
  "Professional Team",
  "High Quality Material",
  "Affordable Price",
  "Fast Installation",
  "100% Customer Satisfaction",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        <section className="page-banner">
          <span className="eyebrow">About Bird Service Control</span>
          <h1>Safety that blends into <em>www.invisiblesafetygrillpatna.com</em></h1>
        </section>
        <section className="about-long section">
          <div className="about-long-copy">
            <span className="eyebrow">Welcome to Bird Service Control</span>
            <h2>Reliable protection, thoughtfully installed.</h2>
            <p>
              We are one of Patna&apos;s trusted companies for Bird Net Installation, Invisible
              Grill Installation, Child Safety Net, Artificial Grass, Balcony Safety Solutions
              and Pigeon Protection Services.
            </p>
            <p>
              With over 5 years of experience, our expert team has completed hundreds of
              successful installations for homes, apartments, offices, hospitals, schools and
              commercial buildings.
            </p>
            <p>
              Our mission is to provide safe, modern and affordable bird protection solutions
              while maintaining beautiful surroundings.
            </p>
          </div>
          <div className="about-long-image" aria-label="Modern protected balcony" />
        </section>
        <section className="two-column-list section section-soft">
          <div>
            <span className="eyebrow">Our services</span>
            <h2>Everything you need for a safer balcony.</h2>
            <ul className="check-list">
              {services.map((service) => (
                <li key={service}><FiCheckCircle /> {service}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Why choose us</span>
            <h2>Quality work that gives you confidence.</h2>
            <ul className="check-list">
              {reasons.map((reason) => (
                <li key={reason}><FiCheckCircle /> {reason}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
