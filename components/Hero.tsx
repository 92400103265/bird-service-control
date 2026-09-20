"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";

import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiPhone,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const PHONE_NUMBER = "7065953252";
const PHONE_LINK = "+917065953252";

const WHATSAPP_NUMBER = "917065953252";

const WHATSAPP_MESSAGE =
  "Hello Shweta Invisible Grill, I would like to get a free estimate for invisible grill / bird netting in Gurugram.";

/* =========================================================
   HERO IMAGES
========================================================= */

const HERO_IMAGES = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
];

/* =========================================================
   HERO CONTENT
========================================================= */

const HERO_CONTENT = [
  {
    kicker: "GURUGRAM'S TRUSTED SAFETY & INVISIBLE GRILL PARTNER",

    title: "Protect your space.",

    highlight: "Keep it beautiful.",

    description:
      "Expert bird netting, 316-grade stainless steel invisible grills, child safety nets, and lush artificial grass installation by Shweta Invisible Grill across Gurugram, Hans Enclave, Sector 33, and NCR.",
  },

  {
    kicker: "PREMIUM BIRD NETTING FOR GURUGRAM",

    title: "Keep birds away.",

    highlight: "Keep your balcony clean.",

    description:
      "Professional bird net installation for balconies, windows, ducts, shafts, and open spaces across Gurugram and NCR.",
  },

  {
    kicker: "316-GRADE STAINLESS STEEL",

    title: "Safety without compromise.",

    highlight: "Invisible. Strong. Elegant.",

    description:
      "Premium invisible grills designed to provide safety while maintaining the open view and beauty of your home.",
  },

  {
    kicker: "CHILD & BALCONY SAFETY",

    title: "Make every corner safer.",

    highlight: "Peace of mind starts here.",

    description:
      "Reliable child safety nets and balcony protection solutions for apartments, high-rise homes, and commercial spaces.",
  },

  {
    kicker: "BEAUTIFUL OUTDOOR SPACES",

    title: "Transform your balcony.",

    highlight: "Bring nature closer.",

    description:
      "Create a clean and attractive balcony with artificial grass, safety solutions, bird protection, and professional installation.",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   HERO COMPONENT
========================================================= */

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     AUTOMATIC SLIDER
  ======================================================= */

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentImage((previous) => {
        if (previous >= HERO_IMAGES.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  /* =======================================================
     NEXT IMAGE
  ======================================================= */

  const nextImage = () => {
    setCurrentImage((previous) => {
      if (previous >= HERO_IMAGES.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  /* =======================================================
     PREVIOUS IMAGE
  ======================================================= */

  const previousImage = () => {
    setCurrentImage((previous) => {
      if (previous <= 0) {
        return HERO_IMAGES.length - 1;
      }

      return previous - 1;
    });
  };

  /* =======================================================
     SELECT IMAGE
  ======================================================= */

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  /* =======================================================
     WHATSAPP URL
  ======================================================= */

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  /* =======================================================
     CURRENT CONTENT
  ======================================================= */

  const content = HERO_CONTENT[currentImage];

  return (
    <>
      <section
        id="home"
        className="shweta-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* =================================================
            BACKGROUND IMAGES
        ================================================= */}

        <div className="shweta-hero-background">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={currentImage}
              className="shweta-hero-image"
              style={{
                backgroundImage: `url("${HERO_IMAGES[currentImage]}")`,
              }}
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
              }}
              transition={{
                opacity: {
                  duration: 1.1,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 6,
                  ease: "linear",
                },
              }}
            />
          </AnimatePresence>
        </div>

        {/* =================================================
            DARK OVERLAY
        ================================================= */}

        <div className="shweta-hero-overlay" />

        {/* =================================================
            LEFT GRADIENT
        ================================================= */}

        <div className="shweta-hero-left-gradient" />

        {/* =================================================
            BOTTOM GRADIENT
        ================================================= */}

        <div className="shweta-hero-bottom-gradient" />

        {/* =================================================
            DECORATIVE GLOW
        ================================================= */}

        <motion.div
          className="shweta-glow-one"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="shweta-glow-two"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            MAIN CONTAINER
        ================================================= */}

        <div className="shweta-hero-container">
          <motion.div
            className="shweta-hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* =================================================
                BRAND
            ================================================= */}

            <motion.div
              className="shweta-brand"
              variants={itemVariants}
            >
              <motion.div
                className="shweta-logo"
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                S
              </motion.div>

              <div className="shweta-brand-text">
                <div className="shweta-brand-name">
                  Shweta
                  <span>Invisible Grill</span>
                </div>

                <div className="shweta-brand-tagline">
                  SAFETY GRILLS & NETS • GURUGRAM
                </div>
              </div>
            </motion.div>

            {/* =================================================
                KICKER
            ================================================= */}

            <motion.div
              className="shweta-kicker"
              variants={itemVariants}
            >
              <span className="shweta-kicker-dot-wrapper">
                <span className="shweta-kicker-ping" />
                <span className="shweta-kicker-dot" />
              </span>

              <span>{content.kicker}</span>
            </motion.div>

            {/* =================================================
                HEADING
            ================================================= */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`heading-${currentImage}`}
                className="shweta-heading-wrapper"
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(5px)",
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <h1 className="shweta-heading">
                  {content.title}
                  <br />
                  <em>{content.highlight}</em>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentImage}`}
                className="shweta-description"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.12,
                }}
              >
                {content.description}
              </motion.p>
            </AnimatePresence>

            {/* =================================================
                HERO ACTION BUTTONS
            ================================================= */}

            <motion.div
              className="shweta-actions"
              variants={itemVariants}
            >
              {/* FREE ESTIMATE */}

              <Link
                href="/contact"
                className="shweta-button shweta-button-primary"
              >
                <span>Get free estimate</span>

                <FiArrowRight className="shweta-arrow" />
              </Link>

              {/* CALL */}

              <a
                href={`tel:${PHONE_LINK}`}
                className="shweta-button shweta-button-call"
                aria-label={`Call Shweta Invisible Grill at ${PHONE_NUMBER}`}
              >
                <FiPhone aria-hidden="true" />

                <span>Call {PHONE_NUMBER}</span>
              </a>

              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shweta-button shweta-button-whatsapp"
                aria-label="Chat with Shweta Invisible Grill on WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" />

                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* =================================================
                TRUST ITEMS
            ================================================= */}

            <motion.div
              className="shweta-trust"
              variants={itemVariants}
            >
              <div className="shweta-trust-item">
                <FiCheck aria-hidden="true" />

                <span>
                  <strong>5+</strong> years of experience
                </span>
              </div>

              <div className="shweta-trust-item">
                <FiCheck aria-hidden="true" />

                <span>
                  <strong>500+</strong> happy customers
                </span>
              </div>

              <div className="shweta-trust-item">
                <FiShield aria-hidden="true" />

                <span>Grade 316 SS rust-free cable</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =================================================
            SLIDER CONTROLS
        ================================================= */}

        <div className="shweta-slider-controls">
          {/* DOTS */}

          <div className="shweta-dots">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show hero image ${index + 1}`}
                aria-current={
                  currentImage === index ? "true" : undefined
                }
                onClick={() => selectImage(index)}
                className={
                  currentImage === index
                    ? "shweta-dot shweta-dot-active"
                    : "shweta-dot"
                }
              />
            ))}
          </div>

          {/* ARROWS */}

          <div className="shweta-arrows">
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous hero image"
              className="shweta-slider-button"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next hero image"
              className="shweta-slider-button"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* =================================================
            IMAGE COUNTER
        ================================================= */}

        <div className="shweta-counter">
          <span className="shweta-counter-active">
            {String(currentImage + 1).padStart(2, "0")}
          </span>

          <span className="shweta-counter-line">/</span>

          <span>
            {String(HERO_IMAGES.length).padStart(2, "0")}
          </span>
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          className="shweta-scroll"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
        >
          <span>Scroll to discover</span>

          <motion.div
            className="shweta-scroll-line"
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </section>
    </>
  );
}

export default Hero;