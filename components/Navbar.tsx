"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: scrolled ? "rgba(7, 25, 22, 0.95)" : "rgba(7, 25, 22, 0.75)",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.25)" : "none",
      }}
    >
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/" onClick={close}>
          <span className="brand-mark">S</span>
          <div className="brand-text">
            <span>Shweta <b>Invisible Grill</b></span>
            <small className="brand-tagline">Safety Grills & Nets · Gurugram</small>
          </div>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.label} href={link.href} onClick={close}>
              {link.label}
            </Link>
          ))}
          <a className="nav-call" href="tel:+918229006831" onClick={close}>
            <FiPhone /> 8229006831
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-links is-open"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={close}>
                {link.label}
              </Link>
            ))}
            <a className="nav-call" href="tel:+918229006831" onClick={close}>
              <FiPhone /> Call 8229006831
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}