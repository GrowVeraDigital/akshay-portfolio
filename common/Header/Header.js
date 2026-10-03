"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/Logo.png";
import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link href="/" className="logo">
        <Image src={Logo} alt="Growvera Digital" height={40} priority />
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
          href="https://wa.me/918734839513?text=Hi%20Akshay,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
