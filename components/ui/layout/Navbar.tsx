"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "6281234567890";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Beranda" },
    { href: "#paket", label: "Paket" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#faq", label: "FAQ" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "var(--transition)",
        background: scrolled ? "rgba(255,253,245,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : undefined,
        boxShadow: scrolled ? "0 2px 20px rgba(31,77,58,0.1)" : undefined,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 700,
              color: scrolled ? "var(--green-dark)" : "#fff",
              transition: "var(--transition)",
            }}
          >
            <span
              style={{
                width: 38,
                height: 38,
                background: "var(--green-dark)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#F8E9A1">
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </span>
            Umrohinaja
          </a>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 14px",
                    borderRadius: 8,
                    color: scrolled ? "var(--text-mid)" : "rgba(255,255,255,0.85)",
                    transition: "var(--transition)",
                    display: "block",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Konsultasi+Umroh`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#25D366",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "9px 20px",
                borderRadius: 100,
                transition: "var(--transition)",
                boxShadow: "0 3px 12px rgba(37,211,102,0.35)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden"
            style={{
              flexDirection: "column",
              gap: 5,
              cursor: "pointer",
              padding: 6,
              border: "none",
              background: "none",
              display: "flex",
            }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: scrolled ? "var(--green-dark)" : "#fff",
                  borderRadius: 2,
                  transition: "var(--transition)",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : menuOpen && i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : undefined,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 0,
            right: 0,
            background: "rgba(255,253,245,0.98)",
            backdropFilter: "blur(16px)",
            padding: "16px 24px 24px",
            borderBottom: "1px solid rgba(31,77,58,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: "0 12px 40px rgba(31,77,58,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "var(--text-mid)",
                padding: "12px 16px",
                borderRadius: 10,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "#25D366",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: 100,
              marginTop: 8,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Konsultasi WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
