"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FiArrowRight, FiCheck, FiShield } from "react-icons/fi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-kicker" variants={itemVariants}>
            <span className="dot" /> Gurugram&apos;s trusted safety & invisible grill partner
          </motion.p>

          <motion.h1 variants={itemVariants}>
            Protect your space.
            <br />
            <em>Keep it beautiful.</em>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Expert bird netting, 316-grade stainless steel invisible grills, child safety nets, and lush artificial grass installation by <strong>Shweta Invisible Grill</strong> across Gurugram, Hans Enclave, Sector 33, and NCR.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link href="/contact" className="button button-primary">
              Get free estimate <FiArrowRight />
            </Link>
            <a href="tel:+918229006831" className="button button-ghost">
              Call 8229006831
            </a>
          </motion.div>

          <motion.div className="hero-trust" variants={itemVariants}>
            <span>
              <FiCheck /> 5+ years of experience
            </span>
            <span>
              <FiCheck /> 500+ happy customers
            </span>
            <span>
              <FiShield /> Grade 316 SS rust-free cable
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Scroll to discover <span />
      </motion.div>
    </section>
  );
}