"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link href="/" className="logo">
        AKSHAY<span>.</span>
      </Link>
      <button
        className="menu-btn"
        aria-label="Open menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={`nav${menuOpen ? " open" : ""}`}>
        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link href="/#projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link
          href="/services"
          className={pathname === "/services" ? "active" : ""}
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </Link>
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
