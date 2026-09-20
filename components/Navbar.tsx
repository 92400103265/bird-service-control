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
   CONTACT
========================================================= */

const PHONE_NUMBER = "7065953252";
const PHONE_LINK = "+917065953252";

const WHATSAPP_NUMBER = "917065953252";

const WHATSAPP_MESSAGE =
  "Hello Shweta Invisible Grill, I would like to get a free estimate for invisible grill / bird netting in Gurugram.";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(WHATSAPP_MESSAGE);

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ======================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`shweta-navbar ${
          scrolled ? "shweta-navbar-scrolled" : ""
        }`}
      >
        <div className="shweta-navbar-inner">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="shweta-navbar-logo-link"
            onClick={closeMenu}
          >
            <div className="shweta-navbar-logo">
              S
            </div>

            <div className="shweta-navbar-brand">
              <strong>
                Shweta <span>Invisible Grill</span>
              </strong>

              <small>
                SAFETY GRILLS & NETS • GURUGRAM
              </small>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="shweta-desktop-navigation"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="shweta-desktop-link"
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
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <FiPhone />

            <span>{PHONE_NUMBER}</span>
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="shweta-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              className="shweta-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* MOBILE PANEL */}

            <motion.div
              className="shweta-mobile-panel"
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
              {/* PANEL HEADER */}

              <div className="shweta-mobile-header">
                <div>
                  <strong>Menu</strong>

                  <span>
                    Shweta Invisible Grill
                  </span>
                </div>

                <button
                  type="button"
                  className="shweta-mobile-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              {/* LINKS */}

              <nav className="shweta-mobile-navigation">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.label}
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

              {/* MOBILE ACTIONS */}

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
           NAVBAR
        ====================================================== */

        .shweta-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;

          width: 100%;

          z-index: 100000;

          background: rgba(4, 27, 21, 0.96);

          border-bottom: 1px solid
            rgba(185, 239, 57, 0.18);

          backdrop-filter: blur(18px);

          transition:
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .shweta-navbar-scrolled {
          background: rgba(3, 22, 17, 0.99);

          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.22);
        }

        /* =====================================================
           INNER
        ====================================================== */

        .shweta-navbar-inner {
          width: 100%;
          max-width: 1500px;

          min-height: 88px;

          margin: 0 auto;

          padding: 0 48px;

          display: flex;
          align-items: center;

          gap: 30px;
        }

        /* =====================================================
           LOGO LINK
        ====================================================== */

        .shweta-navbar-logo-link {
          display: flex;
          align-items: center;

          gap: 12px;

          flex-shrink: 0;

          text-decoration: none;

          color: #ffffff;
        }

        .shweta-navbar-logo {
          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #b9ef39;

          border-radius: 15px;

          background: #102d24;

          color: #b9ef39;

          font-family: Georgia, serif;

          font-size: 26px;
          font-weight: 700;

          box-shadow:
            0 0 18px rgba(185, 239, 57, 0.12);
        }

        .shweta-navbar-brand {
          display: flex;
          flex-direction: column;
        }

        .shweta-navbar-brand strong {
          color: #ffffff;

          font-size: 19px;
          line-height: 1.1;

          font-weight: 800;

          white-space: nowrap;
        }

        .shweta-navbar-brand strong span {
          color: #b9ef39;
        }

        .shweta-navbar-brand small {
          margin-top: 5px;

          color: rgba(255, 255, 255, 0.68);

          font-size: 8px;
          font-weight: 700;

          letter-spacing: 1.6px;

          white-space: nowrap;
        }

        /* =====================================================
           DESKTOP NAVIGATION
        ====================================================== */

        .shweta-desktop-navigation {
          flex: 1;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 32px;
        }

        .shweta-desktop-link {
          position: relative;

          color: #ffffff;

          font-size: 15px;
          font-weight: 600;

          text-decoration: none;

          padding: 10px 0;

          transition:
            color 0.25s ease;
        }

        .shweta-desktop-link::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 2px;

          width: 0;

          margin: auto;

          background: #b9ef39;

          transition: width 0.25s ease;
        }

        .shweta-desktop-link:hover {
          color: #b9ef39;
        }

        .shweta-desktop-link:hover::after {
          width: 100%;
        }

        /* =====================================================
           PHONE
        ====================================================== */

        .shweta-navbar-phone {
          min-height: 56px;

          padding: 0 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          border: 1px solid #b9ef39;

          border-radius: 999px;

          background: rgba(185, 239, 57, 0.06);

          color: #b9ef39;

          font-size: 15px;
          font-weight: 800;

          text-decoration: none;

          white-space: nowrap;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .shweta-navbar-phone svg {
          width: 18px;
          height: 18px;
        }

        .shweta-navbar-phone:hover {
          background: rgba(185, 239, 57, 0.15);

          transform: translateY(-2px);
        }

        /* =====================================================
           MOBILE MENU BUTTON
        ====================================================== */

        .shweta-menu-button {
          display: none;

          width: 52px;
          height: 52px;

          align-items: center;
          justify-content: center;

          margin-left: auto;

          border: 2px solid #b9ef39;

          border-radius: 13px;

          background: #102d24;

          color: #b9ef39;

          cursor: pointer;

          z-index: 100002;
        }

        .shweta-menu-button svg {
          width: 28px;
          height: 28px;
        }

        .shweta-menu-button:hover {
          background: #163b2e;
        }

        /* =====================================================
           BACKDROP
        ====================================================== */

        .shweta-mobile-backdrop {
          position: fixed;

          inset: 0;

          z-index: 100001;

          background: rgba(0, 0, 0, 0.62);

          backdrop-filter: blur(5px);
        }

        /* =====================================================
           MOBILE PANEL
        ====================================================== */

        .shweta-mobile-panel {
          position: fixed;

          top: 96px;
          left: 15px;
          right: 15px;

          z-index: 100003;

          max-height: calc(100vh - 115px);

          overflow-y: auto;

          padding: 20px;

          border: 1px solid
            rgba(185, 239, 57, 0.25);

          border-radius: 20px;

          background: #061f18;

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.5);
        }

        /* =====================================================
           MOBILE HEADER
        ====================================================== */

        .shweta-mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-bottom: 18px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.12);
        }

        .shweta-mobile-header div {
          display: flex;
          flex-direction: column;
        }

        .shweta-mobile-header strong {
          color: #ffffff;

          font-size: 21px;
        }

        .shweta-mobile-header span {
          margin-top: 4px;

          color: #b9ef39;

          font-size: 11px;
        }

        .shweta-mobile-close {
          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(185, 239, 57, 0.45);

          border-radius: 10px;

          background: #102d24;

          color: #ffffff;

          cursor: pointer;
        }

        .shweta-mobile-close svg {
          width: 23px;
          height: 23px;
        }

        /* =====================================================
           MOBILE NAVIGATION
        ====================================================== */

        .shweta-mobile-navigation {
          padding: 12px 0;
        }

        .shweta-mobile-link {
          min-height: 58px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 10px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);

          color: #ffffff;

          font-size: 17px;
          font-weight: 700;

          text-decoration: none;

          transition:
            color 0.2s ease,
            padding 0.2s ease;
        }

        .shweta-mobile-link svg {
          color: #b9ef39;

          width: 20px;
          height: 20px;
        }

        .shweta-mobile-link:hover,
        .shweta-mobile-link:active {
          color: #b9ef39;

          padding-left: 17px;
        }

        /* =====================================================
           MOBILE ACTIONS
        ====================================================== */

        .shweta-mobile-actions {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;

          margin-top: 12px;
        }

        .shweta-mobile-call,
        .shweta-mobile-whatsapp {
          min-height: 54px;

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
            rgba(185, 239, 57, 0.35);
        }

        .shweta-mobile-whatsapp {
          background: #25d366;
        }

        .shweta-mobile-call svg,
        .shweta-mobile-whatsapp svg {
          width: 20px;
          height: 20px;
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1100px) {
          .shweta-navbar-inner {
            padding: 0 25px;
          }

          .shweta-desktop-navigation {
            gap: 20px;
          }

          .shweta-desktop-link {
            font-size: 13px;
          }

          .shweta-navbar-phone {
            padding: 0 17px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 900px) {
          .shweta-navbar-inner {
            min-height: 76px;

            padding: 0 18px;
          }

          .shweta-desktop-navigation,
          .shweta-navbar-phone {
            display: none;
          }

          .shweta-menu-button {
            display: flex;
          }

          .shweta-navbar-logo {
            width: 46px;
            height: 46px;
          }

          .shweta-navbar-brand strong {
            font-size: 16px;
          }

          .shweta-navbar-brand small {
            font-size: 6.5px;

            letter-spacing: 1.2px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {
          .shweta-navbar-inner {
            padding: 0 12px;
          }

          .shweta-navbar-logo {
            width: 43px;
            height: 43px;
          }

          .shweta-navbar-brand strong {
            font-size: 15px;
          }

          .shweta-navbar-brand small {
            font-size: 6px;
          }

          .shweta-menu-button {
            width: 48px;
            height: 48px;
          }

          .shweta-mobile-panel {
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