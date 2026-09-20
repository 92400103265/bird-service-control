"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiHeart, FiShield, FiStar, FiTool } from "react-icons/fi";

const benefits = [
  {
    icon: FiStar,
    title: "5+ Years Experience",
    text: "Extensive hands-on expertise with hundreds of residential & commercial balcony installations.",
  },
  {
    icon: FiHeart,
    title: "500+ Happy Clients",
    text: "Reputation built on punctuality, pristine clean-ups, and genuine customer recommendations in Gurugram.",
  },
  {
    icon: FiTool,
    title: "Expert Certified Team",
    text: "Skilled safety technicians using diamond-tip drilling and tension gauges for flawless precision.",
  },
  {
    icon: FiShield,
    title: "Grade 316 Stainless Steel",
    text: "Rust-proof, high-tensile marine-grade cables wrapped in protective transparent nylon sleeves.",
  },
  {
    icon: FiCheckCircle,
    title: "Affordable & Transparent",
    text: "Direct manufacturer pricing with zero hidden charges. Free on-site inspection and measurements.",
  },
  {
    icon: FiClock,
    title: "Quick 24×7 Assistance",
    text: "Fast turnaround times with prompt emergency service and dedicated after-sales support.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="container why-container">
        <motion.div
          className="why-intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow eyebrow-light">Why choose us</span>
          <h2>
            Built on trust.
            <br />
            <em>Engineered to protect.</em>
          </h2>
          <p>
            At <strong>Shweta Invisible Grill</strong>, we deliver uncompromised safety without disrupting the aesthetics of your home. Trusted by homeowners across Gurugram, Hans Enclave, and Sector 33.
          </p>

          <div className="rating-badge">
            <span className="rating-stars">★★★★★</span>
            <div className="rating-text">
              <strong>5.0 Rated Safety Specialist</strong>
              <small>500+ Verified Homes in Gurugram & NCR</small>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="benefits-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit-card" key={title}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}