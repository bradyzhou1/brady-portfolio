"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About Me", href: "/#about" },
  { label: "Academics", href: "/#academic-technical" },
  { label: "ISEF/STS Research", href: "/#research" },
  { label: "ParentLensAI", href: "/#parentlensai" },
  { label: "Other Projects", href: "/#projects" },
  { label: "Music", href: "/#music" },
  { label: "Leadership", href: "/#leadership" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbarInner">
        <Link href="/" className="siteName" onClick={closeMenu}>
          Brady Zhou
        </Link>

        <nav className="navLinks" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`mobileMenuButton ${isMenuOpen ? "isOpen" : ""}`}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setIsMenuOpen((current) => !current);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobileMenu ${isMenuOpen ? "isOpen" : ""}`}
      >
        <nav className="mobileMenuLinks" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="mobileMenuBackdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}