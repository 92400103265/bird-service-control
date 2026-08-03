import { FiFeather, FiGrid, FiHome, FiShield, FiSun, FiTrendingUp } from "react-icons/fi";

const services = [
  { icon: FiFeather, title: "Bird Net Installation", text: "High-quality bird net solutions for balconies, windows and buildings.", image: "/images/bird-net.jpg" },
  { icon: FiGrid, title: "Invisible Grill", text: "Modern stainless-steel invisible grills for safety and beauty.", image: "/images/invisible-grill.jpg" },
  { icon: FiShield, title: "Child Safety", text: "Protect children from balcony accidents using invisible grills and safety nets.", image: "/images/child-safety.jpg" },
  { icon: FiSun, title: "Artificial Grass", text: "Premium quality artificial grass for homes, terraces and gardens.", image: "/images/grass.jpg" },
  { icon: FiHome, title: "Balcony Safety Net", text: "Keep children and pets safe with durable balcony safety nets.", image: "/images/work1.jpg" },
  { icon: FiTrendingUp, title: "Bird Spike", text: "Prevent pigeons from sitting on roofs and ledges.", image: "/images/work2.jpg" },
];

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <span className="eyebrow">What we do</span>
        <h2>Complete protection for <em>every space.</em></h2>
        <p>Practical safety installations designed for modern homes and commercial properties.</p>
      </div>
      <div className="services-grid">
        {services.map(({ icon: Icon, title, text, image }, index) => (
          <article className="service-card" key={title}>
            <div className="service-image" style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(16, 35, 32, .64)), url(${image})` }} />
            <div className="service-content"><span className="service-number">0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p><a href="/contact">Get a quote <span>→</span></a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
