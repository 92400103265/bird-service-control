"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="hero-kicker"><span /> Rajkot&apos;s trusted safety partner</p>
          <h1>Protect your space.<br /><em>Keep it beautiful.</em></h1>
          <p className="hero-description">Expert bird net, invisible grill, child safety and artificial grass installation for safer, more beautiful living.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">Get free estimate <FiArrowRight /></Link>
            <a href="tel:+918229006831" className="button button-ghost">Call 8229006831</a>
          </div>
          <div className="hero-trust"><span><FiCheck /> 5+ years of experience</span><span><FiCheck /> 500+ happy customers</span></div>
        </motion.div>
      </div>
      <div className="hero-scroll">Scroll to discover <span /></div>
    </section>
  );
}
