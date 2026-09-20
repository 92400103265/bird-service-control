"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    src: "/images/invisible-grill.jpg",
    title: "Balcony Invisible Grill",
    category: "Invisible Grill",
    tag: "High-Rise Apartment",
    className: "gallery-large",
  },
  {
    src: "/images/bird-net.jpg",
    title: "Pigeon Protection Netting",
    category: "Bird Net",
    tag: "Anti-Bird Mesh",
    className: "",
  },
  {
    src: "/images/grass.jpg",
    title: "Artificial Grass Turf",
    category: "Artificial Grass",
    tag: "Terrace Landscape",
    className: "",
  },
  {
    src: "/images/work1.jpg",
    title: "Balcony Safety Net",
    category: "Safety Net",
    tag: "Child & Pet Safety",
    className: "",
  },
  {
    src: "/images/child-safety.jpg",
    title: "Window Invisible Grill",
    category: "Invisible Grill",
    tag: "Safe & Unobstructed",
    className: "",
  },
  {
    src: "/images/work3.jpg",
    title: "Full Terrace Safety Grill",
    category: "Invisible Grill",
    tag: "Completed Project",
    className: "gallery-wide",
  },
];

const categories = ["All", "Invisible Grill", "Bird Net", "Artificial Grass", "Safety Net"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <section className="section gallery-section" id="gallery">
      <motion.div
        className="section-heading gallery-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">Our work</span>
        <h2>
          Protection, <em>beautifully done.</em>
        </h2>
        <p>A glimpse of real balcony safety and invisible grill installations by our Gurugram team.</p>
      </motion.div>

      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="gallery-grid">
        <AnimatePresence>
          {filteredPhotos.map((photo) => (
            <motion.figure
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className={`gallery-item ${photo.className}`}
              key={photo.title}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <figcaption>
                <span>{photo.tag}</span>
                <strong>{photo.title}</strong>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}