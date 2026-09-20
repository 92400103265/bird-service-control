"use client";

import Link from "next/link";

import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   CONTACT DETAILS
========================================================= */

const PHONE_NUMBER = "7065953252";

const PHONE_LINK = "+917065953252";

const WHATSAPP_NUMBER = "917065953252";

const EMAIL =
  "invisiblesafetygrillpatna@gmail.com";

const WHATSAPP_MESSAGE =
  "Hello Shweta Invisible Grill, I need a quote for safety grills / bird netting in Gurugram.";

/* =========================================================
   WHATSAPP URL
========================================================= */

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}` +
  `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* =========================================================
   FOOTER
========================================================= */

export function Footer() {
  return (
    <footer className="footer">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="container footer-grid">

        {/* ===================================================
            BRAND / ABOUT
        ==================================================== */}

        <div className="footer-about">

          <Link
            href="/"
            className="brand footer-brand"
            aria-label="Shweta Invisible Grill Home"
          >

            {/* LOGO */}

            <span className="brand-mark">
              S
            </span>

            {/* BRAND TEXT */}

            <span className="brand-text">

              <span>
                Shweta{" "}
                <b>
                  Invisible Grill
                </b>
              </span>

              <small className="brand-tagline">
                Safety Solutions · Gurugram
              </small>

            </span>

          </Link>

          {/* DESCRIPTION */}

          <p>
            Premium 316-grade stainless steel
            invisible grills, bird nets, child
            safety nets, balcony safety solutions,
            bird spikes, and artificial turf
            designed for homes and balconies
            across Gurugram and NCR.
          </p>

          {/* FOOTER WHATSAPP CTA */}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp-button"
            aria-label="Chat with Shweta Invisible Grill on WhatsApp"
          >
            <FaWhatsapp />

            <span>
              Chat on WhatsApp
            </span>

            <FiArrowUpRight />
          </a>

        </div>

        {/* ===================================================
            QUICK LINKS
        ==================================================== */}

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/#services">
                Our Services
              </Link>
            </li>

            <li>
              <Link href="/#why-us">
                Why Choose Us
              </Link>
            </li>

            <li>
              <Link href="/#gallery">
                Project Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact & Free Quote
              </Link>
            </li>

          </ul>

        </div>

        {/* ===================================================
            CONTACT
        ==================================================== */}

        <div className="footer-contact-column">

          <h3>
            Get In Touch
          </h3>

          <ul className="footer-contact">

            {/* ADDRESS */}

            <li>

              <span className="footer-contact-icon">
                <FiMapPin />
              </span>

              <span>
                Rajeev Chowk, near Jain Complex,
                Hans Enclave, Sector 33,
                Gurugram, Haryana 122004
              </span>

            </li>

            {/* PHONE */}

            <li>

              <span className="footer-contact-icon">
                <FiPhone />
              </span>

              <a
                href={`tel:${PHONE_LINK}`}
                aria-label={`Call ${PHONE_NUMBER}`}
              >
                +91 {PHONE_NUMBER}
              </a>

            </li>

            {/* EMAIL */}

            <li>

              <span className="footer-contact-icon">
                <FiMail />
              </span>

              <a
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>

            </li>

            {/* WHATSAPP */}

            <li>

              <span className="footer-contact-icon whatsapp-icon">
                <FaWhatsapp />
              </span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <span>
                  Chat on WhatsApp
                </span>

                <FiArrowUpRight />
              </a>

            </li>

          </ul>

        </div>

      </div>

      {/* =====================================================
          FOOTER BOTTOM
      ====================================================== */}

      <div className="container footer-bottom">

        <span>
          Copyright © 2026 Shweta Invisible Grill.
          All rights reserved.
        </span>

        <span>
          Hans Enclave, Sector 33,
          Gurugram, Haryana
        </span>

      </div>

    </footer>
  );
}

export default Footer;