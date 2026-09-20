"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiPhone,
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

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}` +
  `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Why Us",
    href: "/#why-us",
  },
  {
    label: "Gallery",
    href: "/#gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     CLOSE MENU WHEN SCREEN BECOMES DESKTOP
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     PREVENT BODY SCROLL WHEN MENU OPEN
  ======================================================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`shweta-navbar ${
          isScrolled ? "shweta-navbar-scrolled" : ""
        }`}
      >
        <div className="shweta-navbar-container">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="shweta-navbar-brand"
            onClick={closeMenu}
            aria-label="Shweta Invisible Grill Home"
          >
            <span className="shweta-navbar-logo">
              S
            </span>

            <span className="shweta-navbar-brand-text">
              <strong>
                Shweta <span>Invisible Grill</span>
              </strong>

              <small>
                SAFETY GRILLS & NETS • GURUGRAM
              </small>
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="shweta-desktop-nav"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shweta-nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* =================================================
              DESKTOP PHONE
          ================================================= */}

          <a
            href={`tel:${PHONE_LINK}`}
            className="shweta-navbar-phone"
            aria-label={`Call Shweta Invisible Grill at ${PHONE_NUMBER}`}
          >
            <FiPhone aria-hidden="true" />

            <span>{PHONE_NUMBER}</span>
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="shweta-mobile-menu-button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              className="shweta-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* MENU */}

            <motion.div
              className="shweta-mobile-menu"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {/* MOBILE MENU HEADER */}

              <div className="shweta-mobile-menu-header">
                <div>
                  <strong>Menu</strong>

                  <span>
                    Shweta Invisible Grill
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="shweta-mobile-close"
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              {/* MOBILE LINKS */}

              <nav
                className="shweta-mobile-links"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="shweta-mobile-link"
                      onClick={closeMenu}
                    >
                      <span>{link.label}</span>

                      <FiChevronRight />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* MOBILE CONTACT BUTTONS */}

              <div className="shweta-mobile-actions">

                <a
                  href={`tel:${PHONE_LINK}`}
                  className="shweta-mobile-call"
                  onClick={closeMenu}
                >
                  <FiPhone />

                  <span>
                    Call {PHONE_NUMBER}
                  </span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shweta-mobile-whatsapp"
                  onClick={closeMenu}
                >
                  <FaWhatsapp />

                  <span>
                    WhatsApp
                  </span>
                </a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          NAVBAR CSS
      ====================================================== */}

      <style jsx>{`

        /* =====================================================
           HEADER
        ====================================================== */

        .shweta-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;

          z-index: 99990;

          width: 100%;

          background: rgba(4, 27, 21, 0.82);

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);

          backdrop-filter: blur(16px);

          transition:
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .shweta-navbar-scrolled {
          background: rgba(4, 27, 21, 0.97);

          box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.16);
        }

        /* =====================================================
           CONTAINER
        ====================================================== */

        .shweta-navbar-container {
          width: 100%;
          max-width: 1500px;

          min-height: 86px;

          margin: 0 auto;

          padding: 0 45px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 30px;
        }

        /* =====================================================
           BRAND
        ====================================================== */

        .shweta-navbar-brand {
          display: flex;
          align-items: center;

          gap: 12px;

          color: #ffffff;

          text-decoration: none;

          flex-shrink: 0;
        }

        .shweta-navbar-logo {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(185, 239, 57, 0.8);

          border-radius: 14px;

          background: rgba(185, 239, 57, 0.08);

          color: #b9ef39;

          font-family: Georgia, serif;

          font-size: 24px;
          font-weight: 700;

          box-shadow:
            0 0 25px rgba(185, 239, 57, 0.1);
        }

        .shweta-navbar-brand-text {
          display: flex;
          flex-direction: column;
        }

        .shweta-navbar-brand-text strong {
          font-size: 18px;
          line-height: 1.1;
          font-weight: 800;
          white-space: nowrap;
        }

        .shweta-navbar-brand-text strong span {
          color: #b9ef39;
        }

        .shweta-navbar-brand-text small {
          margin-top: 5px;

          color: rgba(255, 255, 255, 0.52);

          font-size: 8px;
          font-weight: 700;

          letter-spacing: 1.6px;

          white-space: nowrap;
        }

        /* =====================================================
           DESKTOP NAV
        ====================================================== */

        .shweta-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 30px;

          flex: 1;
        }

        .shweta-nav-link {
          position: relative;

          color: rgba(255, 255, 255, 0.55);

          font-size: 14px;
          font-weight: 700;

          text-decoration: none;

          transition:
            color 0.25s ease;
        }

        .shweta-nav-link::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -8px;

          width: 0;
          height: 2px;

          background: #b9ef39;

          transition: width 0.25s ease;
        }

        .shweta-nav-link:hover {
          color: #b9ef39;
        }

        .shweta-nav-link:hover::after {
          width: 100%;
        }

        /* =====================================================
           PHONE
        ====================================================== */

        .shweta-navbar-phone {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 50px;

          padding: 0 22px;

          border: 1px solid
            rgba(185, 239, 57, 0.65);

          border-radius: 999px;

          color: #b9ef39;

          font-size: 14px;
          font-weight: 800;

          text-decoration: none;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .shweta-navbar-phone svg {
          width: 17px;
          height: 17px;
        }

        .shweta-navbar-phone:hover {
          background: rgba(185, 239, 57, 0.1);

          transform: translateY(-2px);
        }

        /* =====================================================
           MOBILE BUTTON
        ====================================================== */

        .shweta-mobile-menu-button {
          display: none;

          width: 48px;
          height: 48px;

          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(185, 239, 57, 0.4);

          border-radius: 12px;

          background: rgba(255, 255, 255, 0.05);

          color: #b9ef39;

          cursor: pointer;
        }

        .shweta-mobile-menu-button svg {
          width: 25px;
          height: 25px;
        }

        /* =====================================================
           MOBILE BACKDROP
        ====================================================== */

        .shweta-mobile-backdrop {
          position: fixed;

          inset: 0;

          z-index: 99991;

          background: rgba(0, 0, 0, 0.55);

          backdrop-filter: blur(4px);
        }

        /* =====================================================
           MOBILE MENU
        ====================================================== */

        .shweta-mobile-menu {
          position: fixed;

          top: 92px;
          left: 15px;
          right: 15px;

          z-index: 99992;

          max-height: calc(100vh - 110px);

          overflow-y: auto;

          padding: 20px;

          border: 1px solid
            rgba(185, 239, 57, 0.18);

          border-radius: 20px;

          background: #071e18;

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.4);
        }

        /* =====================================================
           MOBILE HEADER
        ====================================================== */

        .shweta-mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-bottom: 18px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.1);
        }

        .shweta-mobile-menu-header div {
          display: flex;
          flex-direction: column;
        }

        .shweta-mobile-menu-header strong {
          color: #ffffff;

          font-size: 20px;
          font-weight: 800;
        }

        .shweta-mobile-menu-header span {
          margin-top: 4px;

          color: rgba(255, 255, 255, 0.5);

          font-size: 11px;
        }

        .shweta-mobile-close {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(255, 255, 255, 0.12);

          border-radius: 10px;

          background: rgba(255, 255, 255, 0.05);

          color: #ffffff;

          cursor: pointer;
        }

        .shweta-mobile-close svg {
          width: 22px;
          height: 22px;
        }

        /* =====================================================
           MOBILE LINKS
        ====================================================== */

        .shweta-mobile-links {
          display: flex;
          flex-direction: column;

          padding: 12px 0;
        }

        .shweta-mobile-link {
          width: 100%;

          min-height: 56px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 10px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.07);

          color: #ffffff;

          font-size: 16px;
          font-weight: 700;

          text-decoration: none;

          transition:
            color 0.2s ease,
            padding 0.2s ease;
        }

        .shweta-mobile-link svg {
          color: #b9ef39;

          width: 19px;
          height: 19px;

          transition:
            transform 0.2s ease;
        }

        .shweta-mobile-link:hover {
          color: #b9ef39;

          padding-left: 16px;
        }

        .shweta-mobile-link:hover svg {
          transform: translateX(4px);
        }

        /* =====================================================
           MOBILE ACTIONS
        ====================================================== */

        .shweta-mobile-actions {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;

          margin-top: 10px;
        }

        .shweta-mobile-call,
        .shweta-mobile-whatsapp {
          min-height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          border-radius: 12px;

          color: #ffffff;

          font-size: 13px;
          font-weight: 800;

          text-decoration: none;
        }

        .shweta-mobile-call {
          background: #124237;

          border: 1px solid
            rgba(185, 239, 57, 0.3);
        }

        .shweta-mobile-whatsapp {
          background: #25d366;
        }

        .shweta-mobile-call svg,
        .shweta-mobile-whatsapp svg {
          width: 19px;
          height: 19px;
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1100px) {
          .shweta-navbar-container {
            padding: 0 25px;
          }

          .shweta-desktop-nav {
            gap: 18px;
          }

          .shweta-nav-link {
            font-size: 13px;
          }

          .shweta-navbar-phone {
            padding: 0 16px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 900px) {
          .shweta-navbar-container {
            min-height: 76px;

            padding: 0 18px;
          }

          .shweta-desktop-nav,
          .shweta-navbar-phone {
            display: none;
          }

          .shweta-mobile-menu-button {
            display: flex;
          }

          .shweta-navbar-logo {
            width: 45px;
            height: 45px;

            flex-basis: 45px;
          }

          .shweta-navbar-brand-text strong {
            font-size: 16px;
          }

          .shweta-navbar-brand-text small {
            font-size: 6.5px;

            letter-spacing: 1.2px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {
          .shweta-navbar-container {
            padding: 0 13px;
          }

          .shweta-navbar-logo {
            width: 42px;
            height: 42px;

            flex-basis: 42px;
          }

          .shweta-navbar-brand-text strong {
            font-size: 15px;
          }

          .shweta-navbar-brand-text small {
            font-size: 6px;
          }

          .shweta-mobile-menu {
            top: 82px;

            left: 10px;
            right: 10px;

            padding: 16px;
          }

          .shweta-mobile-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;