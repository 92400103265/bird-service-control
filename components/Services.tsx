"use client";

import { motion, type Variants } from "framer-motion";

import {
  FiFeather,
  FiGrid,
  FiHome,
  FiShield,
  FiSun,
  FiTrendingUp,
  FiArrowRight,
  FiPhone,
  FiCheck,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   CONTACT DETAILS
========================================================= */

const PHONE_NUMBER = "7065953252";

const PHONE_LINK = "+917065953252";

const WHATSAPP_NUMBER = "917065953252";

const WHATSAPP_MESSAGE =
  "Hello Shweta Invisible Grill, I would like to get a free estimate for your services in Gurugram.";

/* =========================================================
   WHATSAPP URL
========================================================= */

const whatsappUrl =
  `https://wa.me/${WHATSAPP_NUMBER}` +
  `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: FiGrid,

    title: "Invisible Grill Installation",

    text:
      "Ultra-strong 316 marine-grade stainless steel wire ropes providing unblocked views, fire safety escape access, and high tensile strength.",

    image: "/images/invisible-grill.jpg",

    tag: "316 SS",

    accent: "Safety",
  },

  {
    icon: FiFeather,

    title: "Bird Net Installation",

    text:
      "Durable Garware nylon and HDPE pigeon nets for balconies, windows, ducts, and open areas. UV-stabilized, discreet, and humane.",

    image: "/images/bird-net.jpg",

    tag: "Bird Protection",

    accent: "Clean Balcony",
  },

  {
    icon: FiShield,

    title: "Child & Pet Safety Net",

    text:
      "Heavy-duty safety barriers designed to help protect children and pets on high-rise balconies, stairwells, windows, and large openings.",

    image: "/images/child-safety.jpg",

    tag: "Child Safety",

    accent: "Protection",
  },

  {
    icon: FiSun,

    title: "Premium Artificial Grass",

    text:
      "Lush, natural-looking synthetic turf for balconies, terraces, gardens, and indoor spaces with excellent drainage and easy maintenance.",

    image: "/images/grass.jpg",

    tag: "Artificial Grass",

    accent: "Green Space",
  },

  {
    icon: FiHome,

    title: "Balcony Safety Net",

    text:
      "Custom-fitted safety netting for apartments, high-rise buildings, and villas in Gurugram to provide an additional safety barrier.",

    image: "/images/work1.jpg",

    tag: "Balcony Safety",

    accent: "Custom Fit",
  },

  {
    icon: FiTrendingUp,

    title: "Anti-Bird Spikes",

    text:
      "Polycarbonate and stainless-steel bird spikes designed to discourage pigeons and birds from settling on ledges, AC units, pipes, and other surfaces.",

    image: "/images/work2.jpg",

    tag: "Bird Control",

    accent: "Pigeon Control",
  },

  {
    icon: FiShield,

    title: "Pigeon Control Solutions",

    text:
      "Practical bird-control solutions for balconies, windows, ducts, AC outdoor units, and other areas where pigeons commonly enter or settle.",

    image: "/images/hero-3.jpg",

    tag: "Pigeon Control",

    accent: "Bird Prevention",
  },
];

/* =========================================================
   SECTION ANIMATION
========================================================= */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   SERVICES COMPONENT
========================================================= */

export function Services() {
  return (
    <section
      className="shweta-services"
      id="services"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="shweta-services-glow shweta-services-glow-one" />

      <div className="shweta-services-glow shweta-services-glow-two" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="shweta-services-container">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          className="shweta-services-heading"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* EYEBROW */}

          <motion.span
            className="shweta-services-eyebrow"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className="shweta-services-eyebrow-dot" />

            WHAT WE DO
          </motion.span>

          {/* HEADING */}

          <h2>
            Complete protection for{" "}
            <em>every space.</em>
          </h2>

          {/* DESCRIPTION */}

          <p>
            Premium safety installations and bird-control
            solutions by{" "}
            <strong>
              Shweta Invisible Grill
            </strong>{" "}
            for modern homes, apartments, balconies,
            terraces, and commercial spaces across Gurugram.
          </p>

          {/* HEADER CONTACT */}

          <div className="shweta-services-contact">

            <a
              href={`tel:${PHONE_LINK}`}
              className="shweta-services-phone"
            >
              <span className="shweta-services-contact-icon">
                <FiPhone />
              </span>

              <span>
                Call {PHONE_NUMBER}
              </span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shweta-services-whatsapp"
            >
              <span className="shweta-services-contact-icon">
                <FaWhatsapp />
              </span>

              <span>
                WhatsApp
              </span>
            </a>

          </div>
        </motion.div>

        {/* ===================================================
            SERVICES GRID
        ==================================================== */}

        <motion.div
          className="shweta-services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
        >
          {services.map(
            (
              {
                icon: Icon,
                title,
                text,
                image,
                tag,
                accent,
              },
              index
            ) => (
              <motion.article
                key={title}
                className="shweta-service-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                {/* =========================================
                    IMAGE
                ========================================== */}

                <div className="shweta-service-image-wrapper">

                  <motion.img
                    src={image}
                    alt={title}
                    className="shweta-service-image"
                    loading="lazy"
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="shweta-service-image-overlay" />

                  {/* NUMBER */}

                  <div className="shweta-service-number">
                    0{index + 1}
                  </div>

                  {/* TAG */}

                  <div className="shweta-service-tag">
                    {tag}
                  </div>

                </div>

                {/* =========================================
                    CONTENT
                ========================================== */}

                <div className="shweta-service-content">

                  {/* ICON */}

                  <motion.div
                    className="shweta-service-icon"
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <Icon />
                  </motion.div>

                  {/* ACCENT */}

                  <span className="shweta-service-accent">
                    {accent}
                  </span>

                  {/* TITLE */}

                  <h3>
                    {title}
                  </h3>

                  {/* TEXT */}

                  <p>
                    {text}
                  </p>

                  {/* FEATURES */}

                  <div className="shweta-service-feature">

                    <FiCheck />

                    <span>
                      Professional installation
                    </span>

                  </div>

                  <div className="shweta-service-feature">

                    <FiCheck />

                    <span>
                      Gurugram & NCR service
                    </span>

                  </div>

                  {/* QUOTE */}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shweta-service-link"
                  >
                    <span>
                      Get a free quote
                    </span>

                    <FiArrowRight
                      className="shweta-service-arrow"
                    />
                  </a>

                </div>
              </motion.article>
            )
          )}
        </motion.div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          className="shweta-services-bottom"
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
            margin: "-50px",
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="shweta-services-bottom-content">

            <div>
              <span>
                NEED HELP CHOOSING A SERVICE?
              </span>

              <h3>
                Let&apos;s protect your space.
              </h3>
            </div>

            <div className="shweta-services-bottom-actions">

              <a
                href={`tel:${PHONE_LINK}`}
                className="shweta-services-bottom-call"
              >
                <FiPhone />

                Call {PHONE_NUMBER}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shweta-services-bottom-whatsapp"
              >
                <FaWhatsapp />

                Chat on WhatsApp

                <FiArrowRight />
              </a>

            </div>

          </div>

        </motion.div>

      </div>

      {/* =====================================================
          COMPONENT CSS
      ====================================================== */}

      <style jsx>{`

        /* =====================================================
           SERVICES SECTION
        ====================================================== */

        .shweta-services {
          position: relative;
          overflow: hidden;
          padding:
            110px
            0
            120px;
          background:
            #f5f7f2;
          color:
            #09221c;
        }

        /* =====================================================
           CONTAINER
        ====================================================== */

        .shweta-services-container {
          position: relative;
          z-index: 2;
          width: calc(100% - 48px);
          max-width: 1420px;
          margin: 0 auto;
        }

        /* =====================================================
           DECORATIVE GLOW
        ====================================================== */

        .shweta-services-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }

        .shweta-services-glow-one {
          top: 80px;
          left: -150px;
          background:
            rgba(185, 239, 57, 0.13);
        }

        .shweta-services-glow-two {
          right: -150px;
          bottom: 200px;
          background:
            rgba(10, 61, 48, 0.08);
        }

        /* =====================================================
           SECTION HEADING
        ====================================================== */

        .shweta-services-heading {
          max-width: 850px;
          margin:
            0
            auto
            65px;
          text-align: center;
        }

        /* =====================================================
           EYEBROW
        ====================================================== */

        .shweta-services-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding:
            8px
            16px;
          border:
            1px
            solid
            rgba(7, 38, 30, 0.14);
          border-radius: 999px;
          background:
            rgba(255, 255, 255, 0.7);
          color:
            #55725f;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .shweta-services-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background:
            #9dcc2f;
          box-shadow:
            0 0 12px
            rgba(157, 204, 47, 0.6);
        }

        /* =====================================================
           HEADING
        ====================================================== */

        .shweta-services-heading h2 {
          margin:
            20px
            0
            18px;
          color:
            #08231d;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
          font-size:
            clamp(42px, 5vw, 70px);
          font-weight:
            850;
          line-height:
            0.98;
          letter-spacing:
            -3px;
        }

        .shweta-services-heading h2 em {
          color:
            #a7d933;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-weight:
            500;
          font-style:
            italic;
        }

        /* =====================================================
           DESCRIPTION
        ====================================================== */

        .shweta-services-heading > p {
          max-width: 720px;
          margin:
            0
            auto;
          color:
            #63756d;
          font-size:
            16px;
          line-height:
            1.8;
        }

        .shweta-services-heading > p strong {
          color:
            #193a30;
        }

        /* =====================================================
           CONTACT
        ====================================================== */

        .shweta-services-contact {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .shweta-services-phone,
        .shweta-services-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 45px;
          padding:
            0
            18px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .shweta-services-phone:hover,
        .shweta-services-whatsapp:hover {
          transform:
            translateY(-3px);
        }

        .shweta-services-phone {
          border:
            1px
            solid
            rgba(8, 35, 29, 0.16);
          background:
            rgba(255, 255, 255, 0.7);
          color:
            #16362c;
        }

        .shweta-services-whatsapp {
          background:
            #25d366;
          color:
            white;
          box-shadow:
            0 8px 25px
            rgba(37, 211, 102, 0.15);
        }

        .shweta-services-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
        }

        /* =====================================================
           SERVICES GRID
        ====================================================== */

        .shweta-services-grid {
          display: grid;
          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );
          gap:
            24px;
        }

        /* =====================================================
           SERVICE CARD
        ====================================================== */

        .shweta-service-card {
          position: relative;
          overflow: hidden;
          min-height:
            570px;
          border:
            1px
            solid
            rgba(10, 45, 35, 0.08);
          border-radius:
            22px;
          background:
            #ffffff;
          box-shadow:
            0
            15px
            45px
            rgba(8, 35, 29, 0.07);
          transition:
            box-shadow 0.35s ease;
        }

        .shweta-service-card:hover {
          box-shadow:
            0
            25px
            65px
            rgba(8, 35, 29, 0.14);
        }

        /* =====================================================
           IMAGE
        ====================================================== */

        .shweta-service-image-wrapper {
          position: relative;
          height:
            245px;
          overflow: hidden;
        }

        .shweta-service-image {
          display: block;
          width:
            100%;
          height:
            100%;
          object-fit:
            cover;
          object-position:
            center;
          transition:
            transform 0.7s ease;
        }

        .shweta-service-card:hover
        .shweta-service-image {
          transform:
            scale(1.08);
        }

        /* =====================================================
           IMAGE OVERLAY
        ====================================================== */

        .shweta-service-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(4, 24, 19, 0.05),
              rgba(4, 24, 19, 0.62)
            );
        }

        /* =====================================================
           NUMBER
        ====================================================== */

        .shweta-service-number {
          position: absolute;
          top: 18px;
          left: 20px;
          color:
            rgba(255, 255, 255, 0.9);
          font-size:
            13px;
          font-weight:
            800;
          letter-spacing:
            2px;
        }

        /* =====================================================
           TAG
        ====================================================== */

        .shweta-service-tag {
          position: absolute;
          right: 17px;
          bottom: 17px;
          padding:
            7px
            11px;
          border:
            1px
            solid
            rgba(255, 255, 255, 0.2);
          border-radius:
            999px;
          background:
            rgba(0, 0, 0, 0.25);
          color:
            white;
          font-size:
            9px;
          font-weight:
            800;
          letter-spacing:
            1px;
          text-transform:
            uppercase;
          backdrop-filter:
            blur(8px);
        }

        /* =====================================================
           CONTENT
        ====================================================== */

        .shweta-service-content {
          position: relative;
          padding:
            0
            27px
            27px;
        }

        /* =====================================================
           ICON
        ====================================================== */

        .shweta-service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width:
            58px;
          height:
            58px;
          margin-top:
            -29px;
          margin-bottom:
            18px;
          border:
            5px
            solid
            #ffffff;
          border-radius:
            16px;
          background:
            #b9ef39;
          color:
            #09231d;
          font-size:
            22px;
          box-shadow:
            0
            8px
            25px
            rgba(185, 239, 57, 0.2);
          transition:
            transform 0.3s ease;
        }

        .shweta-service-card:hover
        .shweta-service-icon {
          transform:
            rotate(6deg)
            scale(1.06);
        }

        /* =====================================================
           ACCENT
        ====================================================== */

        .shweta-service-accent {
          display:
            block;
          margin-bottom:
            8px;
          color:
            #8aaa25;
          font-size:
            9px;
          font-weight:
            800;
          letter-spacing:
            1.6px;
          text-transform:
            uppercase;
        }

        /* =====================================================
           TITLE
        ====================================================== */

        .shweta-service-content h3 {
          margin:
            0
            0
            11px;
          color:
            #09251e;
          font-size:
            22px;
          font-weight:
            850;
          line-height:
            1.15;
          letter-spacing:
            -0.5px;
        }

        /* =====================================================
           TEXT
        ====================================================== */

        .shweta-service-content p {
          min-height:
            82px;
          margin:
            0;
          color:
            #687971;
          font-size:
            13px;
          line-height:
            1.7;
        }

        /* =====================================================
           FEATURES
        ====================================================== */

        .shweta-service-feature {
          display:
            flex;
          align-items:
            center;
          gap:
            7px;
          margin-top:
            8px;
          color:
            #61736b;
          font-size:
            11px;
          font-weight:
            600;
        }

        .shweta-service-feature svg {
          color:
            #93c52a;
          font-size:
            14px;
        }

        /* =====================================================
           LINK
        ====================================================== */

        .shweta-service-link {
          display:
            flex;
          align-items:
            center;
          justify-content:
            space-between;
          margin-top:
            20px;
          padding-top:
            17px;
          border-top:
            1px
            solid
            rgba(8, 35, 29, 0.09);
          color:
            #173b30;
          font-size:
            13px;
          font-weight:
            850;
          text-decoration:
            none;
        }

        .shweta-service-arrow {
          color:
            #8ebc25;
          transition:
            transform 0.3s ease;
        }

        .shweta-service-link:hover
        .shweta-service-arrow {
          transform:
            translateX(6px);
        }

        /* =====================================================
           BOTTOM CTA
        ====================================================== */

        .shweta-services-bottom {
          margin-top:
            55px;
          padding:
            35px;
          border-radius:
            24px;
          background:
            #09271f;
          color:
            white;
          box-shadow:
            0
            20px
            60px
            rgba(8, 35, 29, 0.12);
        }

        .shweta-services-bottom-content {
          display:
            flex;
          align-items:
            center;
          justify-content:
            space-between;
          gap:
            30px;
        }

        .shweta-services-bottom-content > div:first-child
        span {
          color:
            #b9ef39;
          font-size:
            9px;
          font-weight:
            800;
          letter-spacing:
            2px;
        }

        .shweta-services-bottom-content h3 {
          margin:
            7px
            0
            0;
          font-size:
            30px;
          font-weight:
            850;
          letter-spacing:
            -1px;
        }

        /* =====================================================
           BOTTOM ACTIONS
        ====================================================== */

        .shweta-services-bottom-actions {
          display:
            flex;
          align-items:
            center;
          gap:
            10px;
          flex-wrap:
            wrap;
        }

        .shweta-services-bottom-call,
        .shweta-services-bottom-whatsapp {
          display:
            inline-flex;
          align-items:
            center;
          justify-content:
            center;
          gap:
            9px;
          min-height:
            52px;
          padding:
            0
            19px;
          border-radius:
            10px;
          font-size:
            12px;
          font-weight:
            800;
          text-decoration:
            none;
          transition:
            transform 0.3s ease;
        }

        .shweta-services-bottom-call:hover,
        .shweta-services-bottom-whatsapp:hover {
          transform:
            translateY(-3px);
        }

        .shweta-services-bottom-call {
          border:
            1px
            solid
            rgba(255, 255, 255, 0.18);
          color:
            white;
        }

        .shweta-services-bottom-whatsapp {
          background:
            #25d366;
          color:
            white;
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1050px) {
          .shweta-services-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .shweta-services-bottom-content {
            flex-direction:
              column;
            align-items:
              flex-start;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {
          .shweta-services {
            padding:
              75px
              0
              80px;
          }

          .shweta-services-container {
            width:
              calc(100% - 30px);
          }

          .shweta-services-heading {
            margin-bottom:
              42px;
          }

          .shweta-services-heading h2 {
            font-size:
              43px;
            letter-spacing:
              -2px;
          }

          .shweta-services-heading > p {
            font-size:
              14px;
            line-height:
              1.7;
          }

          .shweta-services-grid {
            grid-template-columns:
              1fr;
            gap:
              20px;
          }

          .shweta-service-card {
            min-height:
              auto;
          }

          .shweta-service-image-wrapper {
            height:
              230px;
          }

          .shweta-service-content p {
            min-height:
              auto;
          }

          .shweta-services-bottom {
            padding:
              25px;
          }

          .shweta-services-bottom-content h3 {
            font-size:
              25px;
          }

          .shweta-services-bottom-actions {
            width:
              100%;
            flex-direction:
              column;
            align-items:
              stretch;
          }

          .shweta-services-bottom-call,
          .shweta-services-bottom-whatsapp {
            width:
              100%;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 430px) {
          .shweta-services-heading h2 {
            font-size:
              37px;
          }

          .shweta-services-contact {
            flex-direction:
              column;
          }

          .shweta-services-phone,
          .shweta-services-whatsapp {
            width:
              100%;
            justify-content:
              center;
          }

          .shweta-service-content {
            padding:
              0
              21px
              23px;
          }
        }

      `}</style>
    </section>
  );
}

export default Services;