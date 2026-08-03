"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/" onClick={close}>
          <span className="brand-mark">B</span>
          <span>Bird <b>Service</b><small>CONTROL · RAJKOT</small></span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <FiX /> : <FiMenu />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => <Link key={link.label} href={link.href} onClick={close}>{link.label}</Link>)}
          <a className="nav-call" href="tel:+918229006831" onClick={close}><FiPhone /> 8229006831</a>
        </div>
      </nav>
    </header>
  );
}
