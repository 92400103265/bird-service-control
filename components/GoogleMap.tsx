"use client";

import { motion } from "framer-motion";
import { FiClock, FiExternalLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export function GoogleMap() {
  const address = "Rajeev Chowk, near by Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="map-section" aria-label="Shweta Invisible Grill location in Gurugram">
      <motion.div
        className="map-heading"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">Visit or Contact Us</span>
        <h2>
          Serving Gurugram <em>& NCR.</em>
        </h2>

        <div className="map-address-box">
          <div className="map-item">
            <FiMapPin />
            <div>
              <strong>Head Office / Workshop:</strong>
              <span>{address}</span>
            </div>
          </div>

          <div className="map-item">
            <FiPhone />
            <div>
              <strong>Call / WhatsApp:</strong>
              <a href="tel:+918229006831" style={{ color: "var(--ink)", fontWeight: 700 }}>
                +91 8229006831
              </a>
            </div>
          </div>

          <div className="map-item">
            <FiMail />
            <div>
              <strong>Email:</strong>
              <a href="mailto:invisiblesafetygrillpatna@gmail.com" style={{ color: "var(--ink)" }}>
                invisiblesafetygrillpatna@gmail.com
              </a>
            </div>
          </div>

          <div className="map-item">
            <FiClock />
            <div>
              <strong>Working Hours:</strong>
              <span>Monday – Sunday: 8:00 AM – 8:00 PM</span>
            </div>
          </div>

          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-directions-btn"
          >
            Open in Google Maps <FiExternalLink />
          </a>
        </div>
      </motion.div>

      <iframe
        title="Shweta Invisible Grill, Gurugram Location"
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}