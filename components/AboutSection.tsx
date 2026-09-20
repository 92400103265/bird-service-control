"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiShield, FiUsers } from "react-icons/fi";

const metrics = [
  { icon: FiAward, value: "5+", label: "Years Experience" },
  { icon: FiUsers, value: "500+", label: "Happy Customers" },
  { icon: FiShield, value: "100%", label: "Safety Focused" },
];

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <motion.div
        className="about-visual"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/images/about.jpg"
          alt="Shweta Invisible Grill balcony installation in Gurugram"
          fill
          sizes="(max-width: 850px) 100vw, 48vw"
          priority={false}
        />
        <div className="experience-card">
          <strong>5+</strong>
          <span>
            Years of
            <br />
            trusted service
          </span>
        </div>
      </motion.div>

      <motion.div
        className="about-copy"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="eyebrow">Who we are</span>
        <h2>
          Safety solutions that <em>feel like home.</em>
        </h2>
        <p>
          <strong>Shweta Invisible Grill</strong> helps Gurugram families and businesses protect balconies, high-rise windows, staircases, and open terraces without compromising natural airflow or breathtaking skyline views.
        </p>
        <p>
          Operating from Hans Enclave, Sector 33 near Jain Complex (Rajeev Chowk, Gurugram), our certified technicians use marine-grade 316 stainless steel cables and high-density anti-bird nets to ensure long-lasting protection with zero maintenance.
        </p>

        <div className="metrics">
          {metrics.map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="metrics-icon" />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <Link href="/about" className="text-link">
          More about our story & quality <FiArrowRight />
        </Link>
      </motion.div>
    </section>
  );
}