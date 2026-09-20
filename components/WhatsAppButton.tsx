"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Shweta Invisible Grill, I would like to get a free estimate for invisible grill / bird netting in Gurugram."
  );

  return (
    <motion.a
      className="floating-button whatsapp-button"
      href={`https://wa.me/918229006831?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Shweta Invisible Grill on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp />
      <span>WhatsApp</span>
    </motion.a>
  );
}