"use client";

import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

const PHONE_NUMBER = "7065953252";
const PHONE_LINK = "+917065953252";

export function CallButton() {
  return (
    <motion.a
      className="floating-button call-button"
      href={`tel:${PHONE_LINK}`}
      aria-label={`Call Shweta Invisible Grill at ${PHONE_NUMBER}`}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        delay: 1,
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
      <FiPhone aria-hidden="true" />

      <span>
        Call {PHONE_NUMBER}
      </span>
    </motion.a>
  );
}

export default CallButton;