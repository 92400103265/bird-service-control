import { FiCheckCircle, FiClock, FiHeart, FiShield, FiStar, FiTool } from "react-icons/fi";

const benefits = [
  { icon: FiStar, title: "5+ Years Experience", text: "Proven expertise on hundreds of installations." },
  { icon: FiHeart, title: "500+ Happy Customers", text: "Friendly service with lasting customer trust." },
  { icon: FiTool, title: "Professional Installation", text: "Trained hands, clean work and careful finishing." },
  { icon: FiCheckCircle, title: "Affordable Price", text: "Clear, fair quotes with no hidden surprises." },
  { icon: FiShield, title: "Quality Material", text: "Durable materials selected for everyday safety." },
  { icon: FiClock, title: "24×7 Support", text: "Responsive help when you need to reach us." },
];

export function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="container why-container">
        <div className="why-intro"><span className="eyebrow eyebrow-light">Why choose us</span><h2>Built on care.<br /><em>Made to last.</em></h2><p>We bring together dependable material, skilled installation and the personal attention of a local Rajkot team.</p><div className="rating"><span>★★★★★</span><strong>Trusted by 500+ customers</strong></div></div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
