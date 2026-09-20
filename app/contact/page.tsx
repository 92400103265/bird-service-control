"use client";

import { motion } from "framer-motion";
import { CallButton } from "@/components/CallButton";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { GoogleMap } from "@/components/GoogleMap";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        <section className="page-banner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Contact Shweta Invisible Grill</span>
            <h1>
              Let&apos;s protect what <em>matters most.</em>
            </h1>
          </motion.div>
        </section>

        <section className="contact-page section">
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow">Speak with our experts</span>
            <h2>Get a fast, transparent quote today.</h2>
            <p>
              We serve high-rises, villas, apartments, and commercial facilities across Gurugram, Hans Enclave, Sector 33, and NCR with prompt, certified installations.
            </p>

            <a href="tel:+918229006831" className="detail-card">
              <FiPhone />
              <span>
                <strong>Call Us Directly</strong>
                +91 8229006831 (Instant response)
              </span>
            </a>

            <a href="mailto:invisiblesafetygrillpatna@gmail.com" className="detail-card">
              <FiMail />
              <span>
                <strong>Email Us</strong>
                invisiblesafetygrillpatna@gmail.com
              </span>
            </a>

            <div className="detail-card">
              <FiMapPin />
              <span>
                <strong>Office & Workshop Address</strong>
                Rajeev Chowk, near by Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004
              </span>
            </div>

            <div className="detail-card">
              <FiClock />
              <span>
                <strong>Working Hours</strong>
                Monday – Sunday: 8:00 AM – 8:00 PM (All 7 Days)
              </span>
            </div>
          </motion.div>

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