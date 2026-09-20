"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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
   CONTACT DETAILS
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
   FRAMER MOTION
========================================================= */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   HERO COMPONENT
========================================================= */

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  /* =======================================================
     AUTOMATIC IMAGE SLIDER
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) =>
        previous === HERO_IMAGES.length - 1 ? 0 : previous + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     NEXT IMAGE
  ======================================================= */

  const nextImage = () => {
    setCurrentImage((previous) =>
      previous === HERO_IMAGES.length - 1 ? 0 : previous + 1
    );
  };

  /* =======================================================
     PREVIOUS IMAGE
  ======================================================= */

  const previousImage = () => {
    setCurrentImage((previous) =>
      previous === 0 ? HERO_IMAGES.length - 1 : previous - 1
    );
  };

  /* =======================================================
     WHATSAPP URL
  ======================================================= */

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <section
        id="home"
        className="relative min-h-[760px] overflow-hidden bg-[#071b17] text-white"
      >
        {/* =====================================================
            BACKGROUND SLIDER
        ====================================================== */}

        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentImage}
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
                scale: 1.03,
              }}
              transition={{
                duration: 1.3,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${HERO_IMAGES[currentImage]})`,
              }}
            />
          </AnimatePresence>
        </div>

        {/* =====================================================
            DARK OVERLAY
        ====================================================== */}

        <div className="absolute inset-0 bg-[#041612]/55" />

        {/* =====================================================
            LEFT DARK GRADIENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#041713]
            via-[#09241e]/95
            to-transparent
          "
        />

        {/* =====================================================
            BOTTOM GRADIENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-52
            bg-gradient-to-t
            from-[#041713]
            via-[#041713]/70
            to-transparent
          "
        />

        {/* =====================================================
            DECORATIVE GLOW
        ====================================================== */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[20%]
            top-[25%]
            h-64
            w-64
            rounded-full
            bg-[#b7ef3b]/20
            blur-[120px]
          "
        />

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[760px]
            max-w-[1450px]
            items-center
            px-6
            pb-28
            pt-24
            sm:px-10
            lg:px-16
            xl:px-20
          "
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[880px]"
          >
            {/* =================================================
                BRAND / SMALL LOGO
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                mb-8
                flex
                items-center
                gap-4
              "
            >
              {/* LOGO ICON */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#b7ef3b]/60
                  bg-[#102c25]/90
                  text-2xl
                  font-extrabold
                  text-[#b7ef3b]
                  shadow-[0_0_30px_rgba(183,239,59,0.25)]
                  backdrop-blur-md
                "
              >
                S
              </motion.div>

              {/* BRAND NAME */}

              <div className="hidden sm:block">
                <div className="text-xl font-extrabold leading-tight">
                  Shweta
                  <span className="ml-1 text-[#b7ef3b]">
                    Invisible Grill
                  </span>
                </div>

                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Safety Grills & Nets • Gurugram
                </div>
              </div>
            </motion.div>

            {/* =================================================
                KICKER
            ================================================== */}

            <motion.p
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#b7ef3b]/30
                bg-[#b7ef3b]/10
                px-5
                py-2.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#b7ef3b]
                backdrop-blur-md
                sm:text-xs
              "
              variants={itemVariants}
            >
              <span className="relative flex h-3 w-3">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#b7ef3b]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-3
                    w-3
                    rounded-full
                    bg-[#b7ef3b]
                  "
                />
              </span>

              Gurugram&apos;s trusted safety & invisible grill partner
            </motion.p>

            {/* =================================================
                HERO HEADING
            ================================================== */}

            <motion.h1
              variants={itemVariants}
              className="
                text-5xl
                font-extrabold
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]
              "
            >
              Protect your space.

              <br />

              <motion.em
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="
                  mt-3
                  inline-block
                  font-serif
                  font-medium
                  italic
                  text-[#b7ef3b]
                "
              >
                Keep it beautiful.
              </motion.em>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              className="
                mt-8
                max-w-[800px]
                text-base
                leading-8
                text-white/80
                sm:text-lg
                md:text-[19px]
              "
              variants={itemVariants}
            >
              Expert bird netting, 316-grade stainless steel invisible grills,
              child safety nets, and lush artificial grass installation by{" "}
              <strong className="font-bold text-white">
                Shweta Invisible Grill
              </strong>{" "}
              across Gurugram, Hans Enclave, Sector 33, and NCR.
            </motion.p>

            {/* =================================================
                ACTION BUTTONS
            ================================================== */}

            <motion.div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
              "
              variants={itemVariants}
            >
              {/* CONTACT */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-[62px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#b7ef3b]
                  px-8
                  text-base
                  font-extrabold
                  text-[#081c17]
                  shadow-[0_0_35px_rgba(183,239,59,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#c8f65e]
                  hover:shadow-[0_10px_40px_rgba(183,239,59,0.28)]
                "
              >
                Get free estimate

                <FiArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* CALL */}

              <a
                href={`tel:${PHONE_LINK}`}
                className="
                  group
                  inline-flex
                  min-h-[62px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/25
                  bg-white/[0.06]
                  px-8
                  text-base
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#b7ef3b]/60
                  hover:bg-white/[0.10]
                "
              >
                <FiPhone className="text-[#b7ef3b]" />

                Call {PHONE_NUMBER}
              </a>

              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  min-h-[62px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#25D366]
                  px-7
                  text-base
                  font-bold
                  text-white
                  shadow-[0_0_30px_rgba(37,211,102,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#20bd5a]
                "
              >
                <FaWhatsapp className="text-xl" />

                WhatsApp
              </a>
            </motion.div>

            {/* =================================================
                TRUST SECTION
            ================================================== */}

            <motion.div
              className="
                mt-10
                flex
                flex-wrap
                gap-x-8
                gap-y-4
                border-t
                border-white/10
                pt-7
                text-sm
                font-medium
                text-white/85
              "
              variants={itemVariants}
            >
              <span className="flex items-center gap-2">
                <FiCheck className="text-lg text-[#b7ef3b]" />

                <span>
                  <strong className="text-white">
                    5+
                  </strong>{" "}
                  years of experience
                </span>
              </span>

              <span className="flex items-center gap-2">
                <FiCheck className="text-lg text-[#b7ef3b]" />

                <span>
                  <strong className="text-white">
                    500+
                  </strong>{" "}
                  happy customers
                </span>
              </span>

              <span className="flex items-center gap-2">
                <FiShield className="text-lg text-[#b7ef3b]" />

                <span>
                  Grade 316 SS rust-free cable
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            SLIDER DOTS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-24
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            backdrop-blur-lg
            md:left-auto
            md:right-12
            md:translate-x-0
          "
        >
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-500

                ${
                  currentImage === index
                    ? "w-8 bg-[#b7ef3b]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>

        {/* =====================================================
            SLIDER ARROWS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-8
            right-10
            z-20
            hidden
            gap-3
            md:flex
          "
        >
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            type="button"
            onClick={previousImage}
            aria-label="Previous hero image"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/20
              text-white
              backdrop-blur-md
              transition-all
              hover:border-[#b7ef3b]
              hover:bg-[#b7ef3b]
              hover:text-[#071b17]
            "
          >
            <FiChevronLeft size={22} />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            type="button"
            onClick={nextImage}
            aria-label="Next hero image"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/20
              text-white
              backdrop-blur-md
              transition-all
              hover:border-[#b7ef3b]
              hover:bg-[#b7ef3b]
              hover:text-[#071b17]
            "
          >
            <FiChevronRight size={22} />
          </motion.button>
        </div>

        {/* =====================================================
            IMAGE NUMBER
        ====================================================== */}

        <div
          className="
            absolute
            bottom-10
            left-8
            z-20
            hidden
            items-center
            gap-2
            text-xs
            font-extrabold
            tracking-[0.2em]
            text-white/50
            md:flex
          "
        >
          <span className="text-[#b7ef3b]">
            0{currentImage + 1}
          </span>

          <span>
            /
          </span>

          <span>
            0{HERO_IMAGES.length}
          </span>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            items-center
            gap-3
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/50
            lg:flex
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          Scroll to discover

          <motion.span
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="
              block
              h-8
              w-px
              bg-gradient-to-b
              from-[#b7ef3b]
              to-transparent
            "
          />
        </motion.div>
      </section>

      {/* =========================================================
          FLOATING CALL BUTTON
      ========================================================== */}

      <motion.a
        href={`tel:${PHONE_LINK}`}
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
          scale: 0.96,
        }}
        className="
          fixed
          bottom-5
          left-5
          z-[100]
          flex
          min-h-[58px]
          items-center
          gap-3
          rounded-full
          bg-[#ff7a35]
          px-5
          font-bold
          text-white
          shadow-[0_10px_35px_rgba(255,122,53,0.3)]
          sm:left-8
          sm:px-7
        "
      >
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/15
          "
        >
          <FiPhone size={19} />
        </span>

        <span className="hidden sm:inline">
          Call {PHONE_NUMBER}
        </span>

        <span className="sm:hidden">
          Call
        </span>
      </motion.a>

      {/* =========================================================
          FLOATING WHATSAPP BUTTON
      ========================================================== */}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
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
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.96,
        }}
        aria-label={`WhatsApp ${PHONE_NUMBER}`}
        className="
          fixed
          bottom-5
          right-5
          z-[100]
          flex
          min-h-[58px]
          items-center
          gap-3
          rounded-full
          bg-[#25D366]
          px-5
          font-bold
          text-white
          shadow-[0_10px_35px_rgba(37,211,102,0.3)]
          sm:right-8
          sm:px-7
        "
      >
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/15
          "
        >
          <FaWhatsapp size={22} />
        </span>

        <span>
          WhatsApp
        </span>
      </motion.a>
    </>
  );
}

export default Hero;