"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "7065953252";
const WHATSAPP_NUMBER = "917065953252";

const WHATSAPP_MESSAGE =
  "Hello Shweta Invisible Grill, I would like to get a free estimate for invisible grill / bird netting in Gurugram.";

export function WhatsAppButton() {
  const message = encodeURIComponent(WHATSAPP_MESSAGE);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.a
      className="floating-button whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Shweta Invisible Grill on WhatsApp at ${PHONE_NUMBER}`}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        delay: 1.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <FaWhatsapp
        aria-hidden="true"
      />

      <span>
        WhatsApp
      </span>
    </motion.a>
  );
}

export default WhatsAppButton;