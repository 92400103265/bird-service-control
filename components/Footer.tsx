import Link from "next/link";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">S</span>
            <div className="brand-text">
              <span>Shweta <b>Invisible Grill</b></span>
              <small className="brand-tagline">Safety Solutions · Gurugram</small>
            </div>
          </div>
          <p>
            Premium 316-grade stainless steel invisible grills, bird nets, child safety nets, and artificial turf designed for balconies and windows across Gurugram and NCR.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/#services">Our Services</Link>
            </li>
            <li>
              <Link href="/#why-us">Why Choose Us</Link>
            </li>
            <li>
              <Link href="/#gallery">Project Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact & Free Quote</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <ul className="footer-contact">
            <li>
              <FiMapPin />
              <span>
                Rajeev Chowk, near by Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004
              </span>
            </li>
            <li>
              <FiPhone />
              <a href="tel:+918229006831">+91 8229006831</a>
            </li>
            <li>
              <FiMail />
              <a href="mailto:invisiblesafetygrillpatna@gmail.com">
                invisiblesafetygrillpatna@gmail.com
              </a>
            </li>
            <li>
              <FaWhatsapp />
              <a
                href="https://wa.me/918229006831?text=Hello%20Shweta%20Invisible%20Grill,%20I%20need%20a%20quote%20for%20safety%20grills/bird%20net."
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <FiArrowUpRight />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright © 2026 Shweta Invisible Grill. All rights reserved.</span>
        <span>Hans Enclave, Sector 33, Gurugram, Haryana</span>
      </div>
    </footer>
  );
}