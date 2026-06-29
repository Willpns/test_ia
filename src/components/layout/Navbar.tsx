"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Services",     href: "#services"     },
  { label: "Approche",     href: "#approche"      },
  { label: "Réalisations", href: "#realisations"  },
  { label: "Contact",      href: "#contact"       },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        background:   isLight ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: isLight ? "blur(20px)" : "none",
        borderBottom: isLight ? "1px solid #E2E8F0" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
              color: isLight ? "#0F172A" : "#FFFFFF",
              transition: "color 0.3s",
            }}
          >
            Business<span style={{ color: "#3B82F6" }}>IA</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "0.25rem",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  display: "block",
                  padding: "0.45rem 1rem",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isLight ? "#475569" : "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = isLight ? "#2563EB" : "#FFFFFF";
                  (e.target as HTMLElement).style.background = isLight ? "#EFF6FF" : "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = isLight ? "#475569" : "rgba(255,255,255,0.65)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
          <a
            href="#contact"
            id="nav-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.55rem 1.25rem",
              borderRadius: 10,
              background: "#2563EB",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#1D4ED8";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#2563EB";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.3)";
            }}
            className="nav-cta-desktop"
          >
            Nous contacter
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            id="nav-menu-toggle"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              padding: "0.4rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            className="burger-btn"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  borderRadius: 2,
                  background: isLight ? "#1E293B" : "#FFFFFF",
                  transition: "all 0.25s",
                  transformOrigin: "center",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  transform:
                    i === 0 && menuOpen ? "rotate(45deg) translate(5px,5px)" :
                    i === 2 && menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? 320 : 0,
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(20px)",
          borderBottom: menuOpen ? "1px solid #E2E8F0" : "none",
        }}
        className="mobile-menu"
      >
        <div style={{ padding: "1rem 2rem 1.5rem" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.85rem 1rem",
                borderRadius: 8,
                color: "#475569",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#2563EB"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "#475569"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: "0.75rem",
              padding: "0.85rem 1rem",
              borderRadius: 10,
              background: "#2563EB",
              color: "white",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Nous contacter
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .nav-cta-desktop { display: inline-flex !important; }
          .burger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
