"use client";

import { motion, type Variants } from "framer-motion";
import { FiFeather, FiGrid, FiHome, FiShield, FiSun, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    icon: FiGrid,
    title: "Invisible Grill Installation",
    text: "Ultra-strong 316 marine-grade stainless steel wire ropes providing unblocked views, fire safety escape access, and 400kg+ tensile strength.",
    image: "/images/invisible-grill.jpg",
  },
  {
    icon: FiFeather,
    title: "Bird Net Installation",
    text: "Durable Garware nylon & HDPE pigeon nets for balconies, windows, and duct areas. UV-stabilized, discreet, and 100% humane.",
    image: "/images/bird-net.jpg",
  },
  {
    icon: FiShield,
    title: "Child & Pet Safety Net",
    text: "Heavy-duty safety barrier engineered to safeguard toddlers and pets on high-rise balconies, stairwells, and large openings.",
    image: "/images/child-safety.jpg",
  },
  {
    icon: FiSun,
    title: "Premium Artificial Grass",
    text: "Lush, natural-looking synthetic turf for balconies, terraces, and indoor gardens. Weatherproof with excellent drainage.",
    image: "/images/grass.jpg",
  },
  {
    icon: FiHome,
    title: "Balcony Safety Net",
    text: "Custom-fitted safety netting for apartment complexes and villas in Gurugram, preventing accidental falls and bird entry.",
    image: "/images/work1.jpg",
  },
  {
    icon: FiTrendingUp,
    title: "Anti-Bird Spikes",
    text: "Polycarbonate and stainless-steel bird spikes designed to stop pigeons and birds from roosting on ledges, AC units, and pipes.",
    image: "/images/work2.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section className="section services-section" id="services">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">What we do</span>
        <h2>
          Complete protection for <em>every space.</em>
        </h2>
        <p>
          Premium safety installations precision-engineered by Shweta Invisible Grill for modern high-rises and residences across Gurugram.
        </p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {services.map(({ icon: Icon, title, text, image }, index) => (
          <motion.article className="service-card" key={title} variants={cardVariants}>
            <div
              className="service-image"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
            <div className="service-overlay" />
            <div className="service-content">
              <span className="service-number">0{index + 1}</span>
              <div className="service-icon-box">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="/contact">
                Get a free quote <span>→</span>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}