"use client";

import { motion } from "framer-motion";

import { CallButton } from "@/components/CallButton";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { GoogleMap } from "@/components/GoogleMap";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import {
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   CONTACT DETAILS
========================================================= */

const PHONE_NUMBER = "7065953252";

const PHONE_LINK = "+917065953252";

const WHATSAPP_NUMBER = "917065953252";

const EMAIL =
  "invisiblesafetygrillpatna@gmail.com";

const WHATSAPP_MESSAGE =
  "Hello Shweta Invisible Grill, I would like to get a free estimate for invisible grill / bird netting in Gurugram.";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}` +
  `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="inner-page">

        {/* ===================================================
            PAGE BANNER
        ==================================================== */}

        <section className="page-banner contact-banner">

          <div className="contact-banner-overlay" />

          <motion.div
            className="contact-banner-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <motion.span
              className="eyebrow eyebrow-light"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
            >
              Contact Shweta Invisible Grill
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.65,
              }}
            >
              Let&apos;s protect what{" "}
              <em>
                matters most.
              </em>
            </motion.h1>

            <motion.p
              className="contact-banner-description"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.65,
              }}
            >
              Get a quick quote for invisible grills,
              bird netting, child safety nets,
              balcony safety solutions, bird spikes,
              and artificial grass installation in
              Gurugram and NCR.
            </motion.p>

          </motion.div>

        </section>

        {/* ===================================================
            CONTACT SECTION
        ==================================================== */}

        <section className="contact-page section">

          {/* =================================================
              LEFT CONTACT DETAILS
          ================================================== */}

          <motion.div
            className="contact-details"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >

            {/* ===============================================
                SECTION HEADING
            ================================================ */}

            <span className="eyebrow">
              Speak with our experts
            </span>

            <h2>
              Get a fast, transparent quote today.
            </h2>

            <p>
              We serve apartments, villas,
              high-rise buildings, balconies,
              commercial facilities, and residential
              properties across Gurugram, Hans Enclave,
              Sector 33, and NCR with professional
              safety installations.
            </p>

            {/* ===============================================
                CONTACT CARDS
            ================================================ */}

            <div className="contact-card-list">

              {/* =============================================
                  PHONE
              ============================================== */}

              <motion.a
                href={`tel:${PHONE_LINK}`}
                className="detail-card"
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
                aria-label={`Call Shweta Invisible Grill at ${PHONE_NUMBER}`}
              >
                <span className="detail-card-icon">
                  <FiPhone />
                </span>

                <span>
                  <strong>
                    Call Us Directly
                  </strong>

                  +91 {PHONE_NUMBER}

                  <small>
                    Tap to call
                  </small>
                </span>
              </motion.a>

              {/* =============================================
                  WHATSAPP
              ============================================== */}

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-card whatsapp-detail-card"
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
                aria-label="Chat with Shweta Invisible Grill on WhatsApp"
              >
                <span className="detail-card-icon whatsapp-card-icon">
                  <FaWhatsapp />
                </span>

                <span>
                  <strong>
                    WhatsApp Us
                  </strong>

                  +91 {PHONE_NUMBER}

                  <small>
                    Send your requirements and photos
                  </small>
                </span>
              </motion.a>

              {/* =============================================
                  EMAIL
              ============================================== */}

              <motion.a
                href={`mailto:${EMAIL}`}
                className="detail-card"
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <span className="detail-card-icon">
                  <FiMail />
                </span>

                <span>
                  <strong>
                    Email Us
                  </strong>

                  {EMAIL}

                  <small>
                    Send us your project details
                  </small>
                </span>
              </motion.a>

              {/* =============================================
                  ADDRESS
              ============================================== */}

              <motion.div
                className="detail-card"
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <span className="detail-card-icon">
                  <FiMapPin />
                </span>

                <span>
                  <strong>
                    Office & Workshop Address
                  </strong>

                  Rajeev Chowk, near Jain Complex,
                  Hans Enclave, Sector 33,
                  Gurugram, Haryana 122004

                  <small>
                    Gurugram service location
                  </small>
                </span>
              </motion.div>

              {/* =============================================
                  WORKING HOURS
              ============================================== */}

              <motion.div
                className="detail-card"
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <span className="detail-card-icon">
                  <FiClock />
                </span>

                <span>
                  <strong>
                    Working Hours
                  </strong>

                  Monday – Sunday:
                  8:00 AM – 8:00 PM

                  <small>
                    Available all 7 days
                  </small>
                </span>
              </motion.div>

            </div>

            {/* ===============================================
                QUICK CTA
            ================================================ */}

            <motion.div
              className="contact-quick-actions"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
            >

              <a
                href={`tel:${PHONE_LINK}`}
                className="contact-call-button"
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
                className="contact-whatsapp-button"
              >
                <FaWhatsapp />

                <span>
                  Chat on WhatsApp
                </span>
              </a>

            </motion.div>

          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <motion.div
            className="contact-form-wrapper"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            <ContactForm />
          </motion.div>

        </section>

        {/* ===================================================
            MAP
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <GoogleMap />
        </motion.div>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

      {/* =====================================================
          FLOATING WHATSAPP
      ====================================================== */}

      <WhatsAppButton />

      {/* =====================================================
          FLOATING CALL
      ====================================================== */}

      <CallButton />

      {/* =====================================================
          CONTACT PAGE CSS
      ====================================================== */}

      <style jsx>{`

        /* ===================================================
           BANNER
        ==================================================== */

        .contact-banner {
          position: relative;
          overflow: hidden;
          min-height: 430px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              110deg,
              rgba(4, 27, 21, 0.97),
              rgba(8, 48, 38, 0.80)
            ),
            url("/images/hero-3.jpg")
            center / cover
            no-repeat;
        }

        .contact-banner-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(185, 239, 57, 0.12),
              transparent 35%
            );
          pointer-events: none;
        }

        .contact-banner-content {
          position: relative;
          z-index: 2;
          width: min(
            1200px,
            calc(100% - 48px)
          );
          margin-inline: auto;
        }

        .contact-banner h1 {
          max-width: 780px;
          margin: 0;
          color: #ffffff;
          font-size:
            clamp(
              46px,
              6vw,
              76px
            );
          font-weight: 850;
          line-height: 1.03;
          letter-spacing: -3px;
        }

        .contact-banner h1 em {
          color: #b9ef39;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-weight: 500;
          font-style: italic;
        }

        .contact-banner-description {
          max-width: 700px;
          margin:
            24px
            0
            0;
          color:
            rgba(
              255,
              255,
              255,
              0.78
            );
          font-size: 16px;
          line-height: 1.75;
        }

        /* ===================================================
           CONTACT PAGE
        ==================================================== */

        .contact-page {
          display: grid;
          grid-template-columns:
            0.9fr
            1.1fr;
          gap: 65px;
          align-items: start;
        }

        /* ===================================================
           CONTACT DETAILS
        ==================================================== */

        .contact-details h2 {
          margin:
            0
            0
            18px;
          color: #09251f;
          font-size:
            clamp(
              35px,
              4vw,
              52px
            );
          font-weight: 850;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .contact-details > p {
          margin:
            0
            0
            30px;
          color: #667970;
          font-size: 15px;
          line-height: 1.8;
        }

        /* ===================================================
           CARD LIST
        ==================================================== */

        .contact-card-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        /* ===================================================
           DETAIL CARD
        ==================================================== */

        .detail-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding:
            19px
            20px;
          border:
            1px
            solid
            rgba(
              9,
              37,
              31,
              0.10
            );
          border-radius: 15px;
          background: #ffffff;
          color: inherit;
          text-decoration: none;
          box-shadow:
            0
            7px
            20px
            rgba(
              8,
              35,
              29,
              0.05
            );
          transition:
            border-color
            .25s ease,
            box-shadow
            .25s ease;
        }

        .detail-card:hover {
          border-color:
            rgba(
              31,
              138,
              91,
              0.35
            );
          box-shadow:
            0
            14px
            34px
            rgba(
              8,
              35,
              29,
              0.10
            );
        }

        /* ===================================================
           ICON
        ==================================================== */

        .detail-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          flex:
            0
            0
            43px;
          border-radius: 12px;
          background:
            rgba(
              185,
              239,
              57,
              0.13
            );
          color: #567b16;
          font-size: 19px;
        }

        .whatsapp-card-icon {
          background:
            rgba(
              37,
              211,
              102,
              0.12
            );
          color: #25d366;
          font-size: 21px;
        }

        /* ===================================================
           CARD TEXT
        ==================================================== */

        .detail-card > span:last-child {
          display: flex;
          min-width: 0;
          flex-direction: column;
          color: #63766e;
          font-size: 13px;
          line-height: 1.55;
        }

        .detail-card strong {
          margin-bottom: 3px;
          color: #09251f;
          font-size: 14px;
          font-weight: 800;
        }

        .detail-card small {
          margin-top: 4px;
          color:
            rgba(
              99,
              118,
              110,
              0.70
            );
          font-size: 10px;
          font-weight: 600;
        }

        /* ===================================================
           WHATSAPP CARD
        ==================================================== */

        .whatsapp-detail-card {
          border-color:
            rgba(
              37,
              211,
              102,
              0.16
            );
        }

        .whatsapp-detail-card:hover {
          border-color:
            rgba(
              37,
              211,
              102,
              0.55
            );
        }

        /* ===================================================
           QUICK ACTIONS
        ==================================================== */

        .contact-quick-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 25px;
        }

        .contact-call-button,
        .contact-whatsapp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 52px;
          padding:
            0
            20px;
          border-radius: 11px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition:
            transform
            .25s ease,
            box-shadow
            .25s ease;
        }

        .contact-call-button {
          border:
            1px
            solid
            rgba(
              9,
              37,
              31,
              0.14
            );
          background: #09271f;
          color: #ffffff;
        }

        .contact-whatsapp-button {
          background: #25d366;
          color: #ffffff;
          box-shadow:
            0
            8px
            24px
            rgba(
              37,
              211,
              102,
              0.16
            );
        }

        .contact-call-button:hover,
        .contact-whatsapp-button:hover {
          transform:
            translateY(-3px);
        }

        /* ===================================================
           FORM WRAPPER
        ==================================================== */

        .contact-form-wrapper {
          width: 100%;
        }

        /* ===================================================
           TABLET
        ==================================================== */

        @media (
          max-width: 980px
        ) {

          .contact-page {
            grid-template-columns:
              1fr;
            gap: 45px;
          }

        }

        /* ===================================================
           MOBILE
        ==================================================== */

        @media (
          max-width: 700px
        ) {

          .contact-banner {
            min-height: 390px;
          }

          .contact-banner-content {
            width:
              calc(
                100% - 32px
              );
          }

          .contact-banner h1 {
            font-size: 44px;
            letter-spacing: -2px;
          }

          .contact-banner-description {
            font-size: 14px;
          }

          .contact-page {
            gap: 35px;
          }

          .contact-details h2 {
            font-size: 38px;
            letter-spacing: -1.5px;
          }

          .contact-quick-actions {
            flex-direction: column;
          }

          .contact-call-button,
          .contact-whatsapp-button {
            width: 100%;
          }

        }

        /* ===================================================
           SMALL MOBILE
        ==================================================== */

        @media (
          max-width: 430px
        ) {

          .contact-banner h1 {
            font-size: 38px;
          }

          .detail-card {
            padding:
              16px
              15px;
          }

          .detail-card-icon {
            width: 39px;
            height: 39px;
            flex-basis: 39px;
          }

        }

      `}</style>
    </>
  );
}