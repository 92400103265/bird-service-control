"use client";

import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

export function CallButton() {
  return (
    <motion.a
      className="floating-button call-button"
      href="tel:+918229006831"
      aria-label="Call Shweta Invisible Grill"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiPhone />
      <span>Call 8229006831</span>
    </motion.a>
  );
}