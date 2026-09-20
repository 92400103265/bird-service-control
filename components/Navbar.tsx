"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   CONTACT DETAILS
========================================================= */

const PHONE_NUMBER = "7065953252";

const PHONE_LINK = "+917065953252";

const WHATSAPP_NUMBER = "917065953252";

const WHATSAPP_MESSAGE =
  "Hello Shweta Invisible Grill, I would like to get a free estimate for invisible grill / bird netting in Gurugram.";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}` +
  `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* =========================================================
   NAVIGATION LINKS
========================================================= */

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#services",
    label: "Services",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/#why-us",
    label: "Why Us",
  },
  {
    href: "/#gallery",
    label: "Gallery",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  const close = () => {
    setOpen(false);
  };

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     CLOSE MENU WHEN ESC IS PRESSED
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ======================================================= */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.header
        className={`site-header ${
          scrolled ? "is-scrolled" : ""
        }`}
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        style={{
          backgroundColor: scrolled
            ? "rgba(4, 27, 21, 0.97)"
            : "rgba(4, 27, 21, 0.90)",

          boxShadow: scrolled
            ? "0 10px 30px rgba(0, 0, 0, 0.25)"
            : "0 5px 20px rgba(0, 0, 0, 0.08)",

          backdropFilter:
            "blur(16px)",
        }}
      >
        {/* ===================================================
            NAV
        ==================================================== */}

        <nav
          className="nav container"
          aria-label="Main navigation"
        >
          {/* ===============================================
              LOGO
          ================================================ */}

          <Link
            className="brand"
            href="/"
            onClick={close}
            aria-label="Shweta Invisible Grill Home"
          >
            {/* LOGO ICON */}

            <motion.span
              className="brand-mark"
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              S
            </motion.span>

            {/* BRAND TEXT */}

            <div className="brand-text">
              <span>
                Shweta{" "}
                <b>
                  Invisible Grill
                </b>
              </span>

              <small className="brand-tagline">
                Safety Grills & Nets · Gurugram
              </small>
            </div>
          </Link>

          {/* ===============================================
              MOBILE MENU BUTTON
          ================================================ */}

          <motion.button
            type="button"
            className="mobile-menu"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
            whileTap={{
              scale: 0.92,
            }}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiX />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiMenu />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* ===============================================
              DESKTOP NAVIGATION
          ================================================ */}

          <div className="nav-links">
            {links.map(
              (
                link,
                index
              ) => (
                <motion.div
                  key={link.label}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      0.1 +
                      index * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}

            {/* =============================================
                PHONE
            ============================================== */}

            <a
              className="nav-call"
              href={`tel:${PHONE_LINK}`}
              onClick={close}
              aria-label={`Call ${PHONE_NUMBER}`}
            >
              <FiPhone />

              <span>
                {PHONE_NUMBER}
              </span>
            </a>

          </div>
        </nav>

        {/* =================================================
            MOBILE MENU
        ================================================== */}

        <AnimatePresence>
          {open && (
            <>
              {/* BACKDROP */}

              <motion.div
                className="mobile-menu-backdrop"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                onClick={close}
              />

              {/* MENU */}

              <motion.div
                className="nav-links is-open"
                initial={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                {/* MOBILE LINKS */}

                {links.map(
                  (
                    link,
                    index
                  ) => (
                    <motion.div
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          0.05 +
                          index * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}

                {/* =========================================
                    MOBILE PHONE
                ========================================== */}

                <motion.a
                  className="nav-call"
                  href={`tel:${PHONE_LINK}`}
                  onClick={close}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay:
                      0.05 +
                      links.length * 0.06,
                  }}
                  aria-label={`Call ${PHONE_NUMBER}`}
                >
                  <FiPhone />

                  <span>
                    Call {PHONE_NUMBER}
                  </span>
                </motion.a>

                {/* =========================================
                    MOBILE WHATSAPP
                ========================================== */}

                <motion.a
                  className="nav-whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay:
                      0.1 +
                      links.length * 0.06,
                  }}
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp />

                  <span>
                    WhatsApp
                  </span>
                </motion.a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* =====================================================
          NAVBAR-SPECIFIC CSS
      ====================================================== */}

      <style jsx>{`

        /* ===================================================
           HEADER
        ==================================================== */

        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          border-bottom:
            1px solid
            rgba(185, 239, 57, 0.10);
          color: #ffffff;
          transition:
            background-color .3s ease,
            box-shadow .3s ease;
        }

        /* ===================================================
           NAV
        ==================================================== */

        .nav {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 70px;
        }

        /* ===================================================
           BRAND
        ==================================================== */

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          text-decoration: none;
        }

        .brand-mark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          flex: 0 0 45px;
          border:
            1px solid
            rgba(185, 239, 57, 0.75);
          border-radius: 13px;
          background:
            rgba(10, 45, 35, 0.85);
          color: #b9ef39;
          font-family:
            Georgia,
            serif;
          font-size: 22px;
          font-weight: 700;
          box-shadow:
            0 0 25px
            rgba(185, 239, 57, 0.16);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-text > span {
          color: #ffffff;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -.4px;
        }

        .brand-text b {
          color: #b9ef39;
        }

        .brand-tagline {
          margin-top: 5px;
          color:
            rgba(255, 255, 255, 0.58);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        /* ===================================================
           DESKTOP LINKS
        ==================================================== */

        .nav-links {
          display: flex;
          align-items: center;
          gap: 31px;
        }

        .nav-links > div {
          display: flex;
        }

        .nav-links a {
          position: relative;
          color:
            rgba(255, 255, 255, 0.82);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition:
            color .25s ease;
        }

        .nav-links a:not(.nav-call):not(.nav-whatsapp)::after {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 2px;
          border-radius: 999px;
          background: #b9ef39;
          content: "";
          transform:
            scaleX(0);
          transform-origin: center;
          transition:
            transform .25s ease;
        }

        .nav-links a:not(.nav-call):not(.nav-whatsapp):hover {
          color: #b9ef39;
        }

        .nav-links a:not(.nav-call):not(.nav-whatsapp):hover::after {
          transform:
            scaleX(1);
        }

        /* ===================================================
           CALL BUTTON
        ==================================================== */

        .nav-call {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding:
            0
            17px;
          border:
            1px solid
            rgba(185, 239, 57, 0.75);
          border-radius: 999px;
          background:
            rgba(185, 239, 57, 0.07);
          color: #b9ef39 !important;
          font-weight: 800 !important;
          transition:
            background .25s ease,
            transform .25s ease,
            box-shadow .25s ease;
        }

        .nav-call svg {
          font-size: 15px;
        }

        .nav-call:hover {
          background:
            #b9ef39;
          color:
            #072019 !important;
          transform:
            translateY(-2px);
          box-shadow:
            0 8px 25px
            rgba(185, 239, 57, .18);
        }

        /* ===================================================
           WHATSAPP
        ==================================================== */

        .nav-whatsapp {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 18px;
          border-radius: 999px;
          background: #25d366;
          color: #ffffff !important;
          font-weight: 800 !important;
          box-shadow:
            0 8px 25px
            rgba(37, 211, 102, .18);
        }

        .nav-whatsapp svg {
          font-size: 18px;
        }

        /* ===================================================
           MOBILE MENU BUTTON
        ==================================================== */

        .mobile-menu {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border:
            1px solid
            rgba(255, 255, 255, 0.18);
          border-radius: 10px;
          background:
            rgba(255, 255, 255, .05);
          color: #ffffff;
          cursor: pointer;
          font-size: 22px;
        }

        .mobile-menu:hover {
          border-color:
            rgba(185, 239, 57, .5);
          color:
            #b9ef39;
        }

        /* ===================================================
           MOBILE BACKDROP
        ==================================================== */

        .mobile-menu-backdrop {
          position: fixed;
          inset: 70px 0 0;
          z-index: -1;
          background:
            rgba(0, 10, 8, .55);
          backdrop-filter:
            blur(3px);
        }

        /* ===================================================
           MOBILE MENU
        ==================================================== */

        @media (max-width: 850px) {

          .nav {
            min-height: 68px;
          }

          .mobile-menu {
            display: flex;
          }

          .nav > .nav-links {
            display: none;
          }

          .nav-links.is-open {
            position: fixed;
            top: 68px;
            left: 15px;
            right: 15px;
            z-index: 1001;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 4px;
            padding: 14px;
            border:
              1px solid
              rgba(185, 239, 57, .15);
            border-radius: 18px;
            background:
              rgba(5, 29, 23, .98);
            box-shadow:
              0 25px 70px
              rgba(0, 0, 0, .35);
            backdrop-filter:
              blur(18px);
          }

          .nav-links.is-open > div {
            display: block;
          }

          .nav-links.is-open a:not(.nav-call):not(.nav-whatsapp) {
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 0 14px;
            border-radius: 10px;
          }

          .nav-links.is-open a:not(.nav-call):not(.nav-whatsapp):hover {
            background:
              rgba(185, 239, 57, .08);
          }

          .nav-links.is-open
          a:not(.nav-call):not(.nav-whatsapp)::after {
            display: none;
          }

          .nav-links.is-open .nav-call,
          .nav-links.is-open .nav-whatsapp {
            width: 100%;
            margin-top: 5px;
          }
        }

        /* ===================================================
           SMALL MOBILE
        ==================================================== */

        @media (max-width: 500px) {

          .nav {
            padding-left: 15px;
            padding-right: 15px;
          }

          .brand-mark {
            width: 42px;
            height: 42px;
            flex-basis: 42px;
          }

          .brand-text > span {
            font-size: 15px;
          }

          .brand-tagline {
            font-size: 6px;
            letter-spacing: 1px;
          }

          .nav-links.is-open {
            left: 10px;
            right: 10px;
          }
        }

        /* ===================================================
           REDUCED MOTION
        ==================================================== */

        @media (prefers-reduced-motion: reduce) {
          .site-header,
          .nav-links a,
          .nav-call,
          .mobile-menu {
            transition: none;
          }
        }

      `}</style>
    </>
  );
}

export default Navbar;