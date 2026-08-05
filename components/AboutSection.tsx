import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiAward, FiShield, FiUsers } from "react-icons/fi";

const metrics = [
  { icon: FiAward, value: "5+", label: "Years Experience" },
  { icon: FiUsers, value: "500+", label: "Happy Customers" },
  { icon: FiShield, value: "100%", label: "Safety Focused" },
];

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="about-visual">
        <Image src="/images/about.jpg" alt="Balcony safety installation" fill sizes="(max-width: 850px) 100vw, 48vw" priority={false} />
        <div className="experience-card"><strong>5</strong><span>Years of<br />trusted service</span></div>
      </div>
      <div className="about-copy">
        <span className="eyebrow">Who we are</span>
        <h2>Safety solutions that <em>feel like home.</em></h2>
        <p>Bird Service Control helps Patna families and businesses protect balconies, windows, terraces and open spaces without compromising the look of their property.</p>
        <p>From discreet invisible grills to durable pigeon nets, every installation is measured, planned and completed by our experienced local team.</p>
        <div className="metrics">
          {metrics.map(({ icon: Icon, value, label }) => <div key={label}><Icon /><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <Link href="/about" className="text-link">More about us <FiArrowRight /></Link>
      </div>
    </section>
  );
}
