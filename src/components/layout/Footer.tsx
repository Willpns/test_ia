"use client";

const COLS = {
  Solutions: [
    { label: "Développement Web",   href: "#services" },
    { label: "Intégration IA",      href: "#services" },
    { label: "Automatisation",      href: "#services" },
    { label: "APIs & Intégrations", href: "#services" },
  ],
  Agence: [
    { label: "Notre Approche",  href: "#approche" },
    { label: "Réalisations",    href: "#realisations" },
  ],
  Contact: [
    { label: "Nous écrire",          href: "#contact" },
    { label: "hello@business-ia.fr", href: "mailto:hello@business-ia.fr" },
    { label: "+33 1 23 45 67 89",    href: "tel:+33123456789" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#060D1F", color: "white" }}>
      {/* Top section */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", marginBottom: "1.25rem" }}>
              <span style={{
                width: 32, height: 32, borderRadius: 10,
                background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 12px rgba(37,99,235,0.4)",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "white" }}>
                Business<span style={{ color: "#60A5FA" }}>IA</span>
              </span>
            </a>
            <p style={{ color: "rgba(148,163,184,0.7)", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: 280, marginBottom: "1.75rem" }}>
              On construit des applications web solides et on y intègre de l&apos;IA quand ça apporte une vraie valeur.
            </p>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "GitHub",   path: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(148,163,184,0.7)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "#2563EB";
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,0.7)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(COLS).map(([title, links]) => (
            <div key={title}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", marginBottom: "1.25rem" }}>
                {title}
              </p>
              <ul style={{ listStyle: "none" }}>
                {links.map(l => (
                  <li key={l.label} style={{ marginBottom: "0.7rem" }}>
                    <a
                      href={l.href}
                      style={{ color: "rgba(148,163,184,0.65)", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = "#60A5FA"; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(148,163,184,0.65)"; }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "1.25rem 2rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "0.75rem",
        }}>
          <p style={{ color: "rgba(148,163,184,0.4)", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Business IA. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Mentions légales", "Politique de confidentialité"].map(l => (
              <a key={l} href="#" style={{ color: "rgba(148,163,184,0.4)", fontSize: "0.78rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "#60A5FA"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(148,163,184,0.4)"; }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
