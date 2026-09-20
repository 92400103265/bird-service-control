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
  "Hello Shweta Invisible Grill, I would like to get a free estimate.";

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
    kicker:
      "GURUGRAM'S TRUSTED SAFETY & INVISIBLE GRILL PARTNER",

    title: "Protect your space.",

    highlight: "Keep it beautiful.",

    description:
      "Expert bird netting, 316-grade stainless steel invisible grills, child safety nets, and lush artificial grass installation by Shweta Invisible Grill across Gurugram, Hans Enclave, Sector 33, and NCR.",
  },

  {
    kicker:
      "PREMIUM BIRD NETTING FOR GURUGRAM",

    title: "Keep birds away.",

    highlight: "Keep your balcony clean.",

    description:
      "Professional bird net installation for balconies, windows, ducts, shafts, and open spaces across Gurugram and NCR.",
  },

  {
    kicker:
      "316-GRADE STAINLESS STEEL",

    title: "Safety without compromise.",

    highlight: "Invisible. Strong. Elegant.",

    description:
      "Premium invisible grills designed to provide safety while maintaining the open view and beauty of your home.",
  },

  {
    kicker:
      "CHILD & BALCONY SAFETY",

    title: "Make every corner safer.",

    highlight: "Peace of mind starts here.",

    description:
      "Reliable child safety nets and balcony protection solutions for apartments, high-rise homes, and commercial spaces.",
  },

  {
    kicker:
      "BEAUTIFUL OUTDOOR SPACES",

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
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="shweta-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ===================================================
            BACKGROUND IMAGES
        ==================================================== */}

        <div className="shweta-hero-background">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={currentImage}
              className="shweta-hero-image"
              style={{
                backgroundImage:
                  `url("${HERO_IMAGES[currentImage]}")`,
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

        {/* ===================================================
            DARK OVERLAY
        ==================================================== */}

        <div className="shweta-hero-overlay" />

        {/* ===================================================
            LEFT GRADIENT
        ==================================================== */}

        <div className="shweta-hero-left-gradient" />

        {/* ===================================================
            BOTTOM GRADIENT
        ==================================================== */}

        <div className="shweta-hero-bottom-gradient" />

        {/* ===================================================
            DECORATIVE GLOW
        ==================================================== */}

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

        {/* ===================================================
            MAIN CONTAINER
        ==================================================== */}

        <div className="shweta-hero-container">
          <motion.div
            className="shweta-hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ===============================================
                BRAND
            ================================================ */}

            <motion.div
              className="shweta-brand"
              variants={itemVariants}
            >
              {/* LOGO ICON */}

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

              {/* BRAND TEXT */}

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

            {/* ===============================================
                KICKER
            ================================================ */}

            <motion.div
              className="shweta-kicker"
              variants={itemVariants}
            >
              <span className="shweta-kicker-dot-wrapper">
                <span className="shweta-kicker-ping" />
                <span className="shweta-kicker-dot" />
              </span>

              <span>
                {content.kicker}
              </span>
            </motion.div>

            {/* ===============================================
                HEADING
            ================================================ */}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
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

                  <em>
                    {content.highlight}
                  </em>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* ===============================================
                DESCRIPTION
            ================================================ */}

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

            {/* ===============================================
                BUTTONS
            ================================================ */}

            <motion.div
              className="shweta-actions"
              variants={itemVariants}
            >
              {/* FREE ESTIMATE */}

              <Link
                href="/contact"
                className="shweta-button shweta-button-primary"
              >
                <span>
                  Get free estimate
                </span>

                <FiArrowRight
                  className="shweta-arrow"
                />
              </Link>

              {/* CALL */}

              <a
                href={`tel:${PHONE_LINK}`}
                className="shweta-button shweta-button-call"
              >
                <FiPhone />

                <span>
                  Call {PHONE_NUMBER}
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shweta-button shweta-button-whatsapp"
              >
                <FaWhatsapp />

                <span>
                  WhatsApp
                </span>
              </a>
            </motion.div>

            {/* ===============================================
                TRUST ITEMS
            ================================================ */}

            <motion.div
              className="shweta-trust"
              variants={itemVariants}
            >
              {/* EXPERIENCE */}

              <div className="shweta-trust-item">
                <FiCheck />

                <span>
                  <strong>
                    5+
                  </strong>{" "}
                  years of experience
                </span>
              </div>

              {/* CUSTOMERS */}

              <div className="shweta-trust-item">
                <FiCheck />

                <span>
                  <strong>
                    500+
                  </strong>{" "}
                  happy customers
                </span>
              </div>

              {/* STEEL */}

              <div className="shweta-trust-item">
                <FiShield />

                <span>
                  Grade 316 SS rust-free cable
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ===================================================
            SLIDER CONTROLS
        ==================================================== */}

        <div className="shweta-slider-controls">
          {/* DOTS */}

          <div className="shweta-dots">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show hero image ${index + 1}`}
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
              aria-label="Previous image"
              className="shweta-slider-button"
            >
              <FiChevronLeft />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="shweta-slider-button"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* ===================================================
            IMAGE COUNTER
        ==================================================== */}

        <div className="shweta-counter">
          <span className="shweta-counter-active">
            0{currentImage + 1}
          </span>

          <span className="shweta-counter-line">
            /
          </span>

          <span>
            0{HERO_IMAGES.length}
          </span>
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        ==================================================== */}

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
          <span>
            Scroll to discover
          </span>

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

      {/* =====================================================
          FLOATING CALL BUTTON
      ====================================================== */}

      <motion.a
        href={`tel:${PHONE_LINK}`}
        className="shweta-floating-call"
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        whileHover={{
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span className="shweta-floating-icon">
          <FiPhone />
        </span>

        <span className="shweta-floating-text">
          Call {PHONE_NUMBER}
        </span>

        <span className="shweta-mobile-call-text">
          Call
        </span>
      </motion.a>

      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ====================================================== */}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${PHONE_NUMBER}`}
        className="shweta-floating-whatsapp"
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        whileHover={{
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span className="shweta-floating-icon">
          <FaWhatsapp />
        </span>

        <span>
          WhatsApp
        </span>
      </motion.a>

      {/* =====================================================
          COMPONENT CSS
      ====================================================== */}

      <style jsx>{`
        /* =====================================================
           RESET
        ====================================================== */

        .shweta-hero,
        .shweta-hero *,
        .shweta-floating-call,
        .shweta-floating-whatsapp {
          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .shweta-hero {
          position: relative;
          width: 100%;
          min-height: 820px;
          overflow: hidden;
          background: #061a16;
          color: #ffffff;
          isolation: isolate;
        }

        /* =====================================================
           BACKGROUND
        ====================================================== */

        .shweta-hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .shweta-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          will-change: transform, opacity;
        }

        /* =====================================================
           OVERLAY
        ====================================================== */

        .shweta-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(3, 22, 17, 0.94) 0%,
              rgba(4, 29, 23, 0.83) 35%,
              rgba(4, 24, 20, 0.48) 70%,
              rgba(4, 20, 17, 0.25) 100%
            );
        }

        /* =====================================================
           LEFT GRADIENT
        ====================================================== */

        .shweta-hero-left-gradient {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 2;
          width: 72%;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(4, 25, 20, 0.96) 0%,
              rgba(4, 29, 23, 0.9) 40%,
              rgba(4, 29, 23, 0) 100%
            );
        }

        /* =====================================================
           BOTTOM GRADIENT
        ====================================================== */

        .shweta-hero-bottom-gradient {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          height: 280px;
          pointer-events: none;
          background:
            linear-gradient(
              0deg,
              rgba(4, 24, 19, 0.9) 0%,
              rgba(4, 24, 19, 0.45) 35%,
              transparent 100%
            );
        }

        /* =====================================================
           GLOW
        ====================================================== */

        .shweta-glow-one {
          position: absolute;
          top: 20%;
          left: 15%;
          z-index: 3;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: rgba(185, 239, 57, 0.12);
          filter: blur(100px);
          pointer-events: none;
        }

        .shweta-glow-two {
          position: absolute;
          top: 10%;
          right: 20%;
          z-index: 3;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(185, 239, 57, 0.08);
          filter: blur(100px);
          pointer-events: none;
        }

        /* =====================================================
           CONTAINER
        ====================================================== */

        .shweta-hero-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1500px;
          min-height: 820px;
          margin: 0 auto;
          padding:
            110px
            70px
            130px;
        }

        /* =====================================================
           CONTENT
        ====================================================== */

        .shweta-hero-content {
          width: 100%;
          max-width: 920px;
        }

        /* =====================================================
           BRAND
        ====================================================== */

        .shweta-brand {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .shweta-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          flex: 0 0 54px;
          border: 1px solid rgba(185, 239, 57, 0.75);
          border-radius: 15px;
          background: rgba(13, 42, 34, 0.9);
          color: #b9ef39;
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 700;
          box-shadow:
            0 0 30px rgba(185, 239, 57, 0.2);
        }

        .shweta-brand-name {
          font-size: 21px;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .shweta-brand-name span {
          margin-left: 5px;
          color: #b9ef39;
        }

        .shweta-brand-tagline {
          margin-top: 6px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* =====================================================
           KICKER
        ====================================================== */

        .shweta-kicker {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          min-height: 40px;
          margin-bottom: 28px;
          padding: 8px 18px;
          border: 1px solid rgba(185, 239, 57, 0.35);
          border-radius: 999px;
          background: rgba(185, 239, 57, 0.08);
          color: #b9ef39;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
        }

        .shweta-kicker-dot-wrapper {
          position: relative;
          display: flex;
          width: 11px;
          height: 11px;
        }

        .shweta-kicker-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #b9ef39;
          opacity: 0.6;
          animation: shwetaPing 1.7s infinite;
        }

        .shweta-kicker-dot {
          position: relative;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #b9ef39;
        }

        /* =====================================================
           HEADING
        ====================================================== */

        .shweta-heading-wrapper {
          width: 100%;
        }

        .shweta-heading {
          margin: 0;
          color: #ffffff;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
          font-size: clamp(
            50px,
            6vw,
            94px
          );
          font-weight: 850;
          line-height: 0.94;
          letter-spacing: -4px;
        }

        .shweta-heading em {
          display: inline-block;
          margin-top: 12px;
          color: #b9ef39;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-size: 0.88em;
          font-weight: 500;
          font-style: italic;
          letter-spacing: -3px;
        }

        /* =====================================================
           DESCRIPTION
        ====================================================== */

        .shweta-description {
          max-width: 810px;
          margin:
            32px
            0
            0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 18px;
          line-height: 1.75;
        }

        /* =====================================================
           ACTIONS
        ====================================================== */

        .shweta-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 13px;
          margin-top: 34px;
        }

        /* =====================================================
           BUTTON BASE
        ====================================================== */

        .shweta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          min-height: 60px;
          padding:
            0
            25px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            border 0.3s ease;
        }

        .shweta-button:hover {
          transform: translateY(-3px);
        }

        /* =====================================================
           PRIMARY BUTTON
        ====================================================== */

        .shweta-button-primary {
          min-width: 210px;
          background: #b9ef39;
          color: #071b17;
          box-shadow:
            0 10px 35px rgba(185, 239, 57, 0.16);
        }

        .shweta-button-primary:hover {
          background: #c9f45c;
          box-shadow:
            0 15px 45px rgba(185, 239, 57, 0.3);
        }

        .shweta-button-primary:hover .shweta-arrow {
          transform: translateX(5px);
        }

        .shweta-arrow {
          transition: transform 0.3s ease;
        }

        /* =====================================================
           CALL BUTTON
        ====================================================== */

        .shweta-button-call {
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          backdrop-filter: blur(12px);
        }

        .shweta-button-call svg {
          color: #b9ef39;
        }

        .shweta-button-call:hover {
          border-color: rgba(185, 239, 57, 0.65);
          background: rgba(255, 255, 255, 0.1);
        }

        /* =====================================================
           WHATSAPP BUTTON
        ====================================================== */

        .shweta-button-whatsapp {
          background: #25d366;
          color: #ffffff;
          box-shadow:
            0 8px 25px rgba(37, 211, 102, 0.18);
        }

        .shweta-button-whatsapp:hover {
          background: #20bd5a;
          box-shadow:
            0 12px 35px rgba(37, 211, 102, 0.3);
        }

        .shweta-button-whatsapp svg {
          font-size: 21px;
        }

        /* =====================================================
           TRUST
        ====================================================== */

        .shweta-trust {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap:
            12px
            28px;
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .shweta-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 13px;
          line-height: 1.4;
        }

        .shweta-trust-item svg {
          flex: 0 0 auto;
          color: #b9ef39;
          font-size: 18px;
        }

        .shweta-trust-item strong {
          color: #ffffff;
        }

        /* =====================================================
           SLIDER CONTROLS
        ====================================================== */

        .shweta-slider-controls {
          position: absolute;
          right: 65px;
          bottom: 70px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        /* =====================================================
           DOTS
        ====================================================== */

        .shweta-dots {
          display: flex;
          align-items: center;
          gap: 7px;
          padding:
            10px
            13px;
          border:
            1px
            solid
            rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(12px);
        }

        .shweta-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition:
            width 0.4s ease,
            background 0.4s ease;
        }

        .shweta-dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .shweta-dot-active {
          width: 28px;
          background: #b9ef39;
        }

        /* =====================================================
           ARROWS
        ====================================================== */

        .shweta-arrows {
          display: flex;
          gap: 8px;
        }

        .shweta-slider-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.25);
          color: #ffffff;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition:
            all 0.3s ease;
        }

        .shweta-slider-button:hover {
          border-color: #b9ef39;
          background: #b9ef39;
          color: #071b17;
          transform: translateY(-2px);
        }

        /* =====================================================
           COUNTER
        ====================================================== */

        .shweta-counter {
          position: absolute;
          left: 65px;
          bottom: 42px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .shweta-counter-active {
          color: #b9ef39;
        }

        .shweta-counter-line {
          color: rgba(255, 255, 255, 0.25);
        }

        /* =====================================================
           SCROLL
        ====================================================== */

        .shweta-scroll {
          position: absolute;
          left: 50%;
          bottom: 28px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 12px;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.48);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .shweta-scroll-line {
          width: 1px;
          height: 30px;
          background:
            linear-gradient(
              180deg,
              #b9ef39,
              transparent
            );
          transform-origin: top;
        }

        /* =====================================================
           FLOATING CALL
        ====================================================== */

        .shweta-floating-call {
          position: fixed;
          left: 32px;
          bottom: 20px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 58px;
          padding:
            0
            23px;
          border-radius: 999px;
          background: #ff7d36;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          box-shadow:
            0 10px 35px rgba(255, 125, 54, 0.28);
          transition:
            box-shadow 0.3s ease;
        }

        .shweta-floating-call:hover {
          box-shadow:
            0 15px 45px rgba(255, 125, 54, 0.42);
        }

        /* =====================================================
           FLOATING WHATSAPP
        ====================================================== */

        .shweta-floating-whatsapp {
          position: fixed;
          right: 32px;
          bottom: 20px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 58px;
          padding:
            0
            23px;
          border-radius: 999px;
          background: #25d366;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          box-shadow:
            0 10px 35px rgba(37, 211, 102, 0.28);
          transition:
            box-shadow 0.3s ease;
        }

        .shweta-floating-whatsapp:hover {
          box-shadow:
            0 15px 45px rgba(37, 211, 102, 0.42);
        }

        /* =====================================================
           FLOATING ICON
        ====================================================== */

        .shweta-floating-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          font-size: 17px;
        }

        .shweta-mobile-call-text {
          display: none;
        }

        /* =====================================================
           KEYFRAMES
        ====================================================== */

        @keyframes shwetaPing {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }

          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1100px) {
          .shweta-hero-container {
            padding:
              110px
              45px
              130px;
          }

          .shweta-heading {
            font-size: 72px;
          }

          .shweta-hero-left-gradient {
            width: 85%;
          }

          .shweta-slider-controls {
            right: 40px;
          }

          .shweta-counter {
            left: 40px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 768px) {
          .shweta-hero {
            min-height: 760px;
          }

          .shweta-hero-container {
            min-height: 760px;
            padding:
              115px
              22px
              125px;
          }

          .shweta-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(3, 22, 17, 0.88),
                rgba(3, 22, 17, 0.68)
              );
          }

          .shweta-hero-left-gradient {
            width: 100%;
            background:
              linear-gradient(
                90deg,
                rgba(3, 22, 17, 0.85),
                rgba(3, 22, 17, 0.4)
              );
          }

          .shweta-brand {
            margin-bottom: 22px;
          }

          .shweta-logo {
            width: 48px;
            height: 48px;
            flex-basis: 48px;
          }

          .shweta-brand-name {
            font-size: 17px;
          }

          .shweta-brand-tagline {
            font-size: 7px;
            letter-spacing: 1.4px;
          }

          .shweta-kicker {
            max-width: 100%;
            margin-bottom: 23px;
            padding:
              7px
              13px;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .shweta-heading {
            font-size: 48px;
            letter-spacing: -2px;
            line-height: 0.98;
          }

          .shweta-heading em {
            margin-top: 8px;
            font-size: 0.83em;
            letter-spacing: -1.5px;
          }

          .shweta-description {
            margin-top: 25px;
            font-size: 15px;
            line-height: 1.7;
          }

          .shweta-actions {
            flex-direction: column;
            align-items: stretch;
            margin-top: 28px;
          }

          .shweta-button {
            width: 100%;
            min-height: 56px;
          }

          .shweta-trust {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 25px;
            padding-top: 20px;
          }

          .shweta-trust-item {
            font-size: 12px;
          }

          .shweta-slider-controls {
            right: 50%;
            bottom: 78px;
            transform: translateX(50%);
          }

          .shweta-arrows {
            display: none;
          }

          .shweta-counter {
            left: 22px;
            bottom: 33px;
          }

          .shweta-scroll {
            display: none;
          }

          .shweta-floating-call {
            left: 12px;
            bottom: 12px;
            min-height: 52px;
            padding:
              0
              16px;
          }

          .shweta-floating-whatsapp {
            right: 12px;
            bottom: 12px;
            min-height: 52px;
            padding:
              0
              16px;
          }

          .shweta-floating-text {
            display: none;
          }

          .shweta-mobile-call-text {
            display: inline;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 430px) {
          .shweta-hero {
            min-height: 730px;
          }

          .shweta-hero-container {
            min-height: 730px;
            padding:
              105px
              17px
              120px;
          }

          .shweta-heading {
            font-size: 42px;
          }

          .shweta-description {
            font-size: 14px;
          }

          .shweta-kicker {
            font-size: 7.5px;
          }

          .shweta-brand-name {
            font-size: 16px;
          }

          .shweta-brand-tagline {
            font-size: 6.5px;
          }

          .shweta-floating-call,
          .shweta-floating-whatsapp {
            min-height: 50px;
            padding:
              0
              13px;
            font-size: 12px;
          }

          .shweta-floating-icon {
            width: 28px;
            height: 28px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .shweta-kicker-ping {
            animation: none;
          }

          .shweta-scroll-line {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;