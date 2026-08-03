import Link from "next/link";
import { FiArrowUpRight, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">B</span><span>Bird <b>Service</b><small>CONTROL · RAJKOT</small></span></div><p>Modern safety and bird protection solutions for homes and businesses across Rajkot.</p></div>
        <div><h3>Quick links</h3><ul><li><Link href="/">Home</Link></li><li><Link href="/about">About</Link></li><li><Link href="/#services">Services</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
        <div><h3>Get in touch</h3><ul className="footer-contact"><li><FiMapPin /> Rajkot, Gujarat</li><li><a href="tel:+918229006831"><FiPhone /> 8229006831</a></li><li><a href="https://wa.me/918229006831" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp <FiArrowUpRight /></a></li></ul></div>
      </div>
      <div className="container footer-bottom"><span>Copyright © 2026 Bird Service Control</span><span>Rajkot, Gujarat</span></div>
    </footer>
  );
}
