"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#home" className="logo">
        AKSHAY<span>.</span>
      </a>
      <button
        className="menu-btn"
        aria-label="Open menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={`nav${menuOpen ? " open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a
          className="hire-btn"
          href="mailto:akshaypatel9513@gmail.com"
          onClick={closeMenu}
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
