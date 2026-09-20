"use client";

import { motion } from "framer-motion";
import { CallButton } from "@/components/CallButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const services = [
  "316-Grade Stainless Steel Invisible Grill",
  "High-Density Balcony Bird Net Installation",
  "Pigeon & Anti-Bird Spikes Installation",
  "Child & Pet Balcony Safety Netting",
  "Premium UV-Resistant Artificial Grass",
  "Staircase & Duct Safety Netting",
  "Commercial & High-Rise Building Protection",
  "Custom Window & Terrace Safety Solutions",
];

const reasons = [
  "5+ Years of Dedicated Expertise in Safety",
  "Over 500+ Satisfied Families in Gurugram & NCR",
  "High-Tensile 316 Marine Grade SS Cables (400kg+ capacity)",
  "Zero Obstruction to Sunlight & Panoramic Views",
  "Trained & Background-Verified Installation Technicians",
  "Transparent Quotes with No Hidden Add-ons",
  "Prompt Same-Day On-Site Measurement Service",
  "Comprehensive Service Warranty & Lifetime Support",
];

export default function AboutPage() {
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
            <span className="eyebrow">About Shweta Invisible Grill</span>
            <h1>
              Uncompromising safety, <em>seamlessly invisible.</em>
            </h1>
          </motion.div>
        </section>

        <section className="about-long section">
          <motion.div
            className="about-long-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow">Our Story & Mission</span>
            <h2>Reliable protection, meticulously crafted.</h2>
            <p>
              Welcome to <strong>Shweta Invisible Grill</strong>. Headquartered at Hans Enclave, Sector 33 near Jain Complex (Rajeev Chowk, Gurugram), we are Gurugram&apos;s leading specialists in modern invisible grill installations, bird netting, child balcony safety, and premium artificial turf.
            </p>
            <p>
              Traditional iron grills create a cage-like feeling, rust quickly, and pose a severe hazard during fire emergencies. We pioneered modern invisible grill systems made of high-tensile <strong>AISI 316 marine-grade stainless steel cables</strong> with transparent nylon coating that withstand over 400 kg of breaking force while keeping your balcony completely open and airy.
            </p>
            <p>
              With more than 5 years of industry experience and over 500+ successful installations across Gurugram, Delhi NCR, and beyond, our mission is to deliver the highest safety standard for your children and pets without compromising architectural beauty.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/contact" className="button button-primary">
                Book a Free Measurement Visit
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="about-long-image"
            aria-label="Modern protected balcony by Shweta Invisible Grill"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          />
        </section>

        <section className="two-column-list section-soft">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">What We Specialize In</span>
            <h2>Tailored safety systems for modern buildings.</h2>
            <ul className="check-list">
              {services.map((service) => (
                <li key={service}>
                  <FiCheckCircle /> {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="eyebrow">The Shweta Advantage</span>
            <h2>Why homeowners across Gurugram choose us.</h2>
            <ul className="check-list">
              {reasons.map((reason) => (
                <li key={reason}>
                  <FiCheckCircle /> {reason}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}