"use client";

import { useEffect, useState } from "react";

/* ── Pure-CSS 3D sphere ─────────────────────────────── */
function CSSphere() {
  return (
    <div
      style={{
        position: "relative",
        width: 380,
        height: 380,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: -100,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Core sphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 36% 30%, #BFDBFE 0%, #3B82F6 28%, #2563EB 52%, #1D4ED8 70%, #1E3A8A 88%, #0B1432)",
          animation: "sphere-breathe 5s ease-in-out infinite",
        }}
      />

      {/* Specular highlight */}
      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "21%",
          width: "27%",
          height: "17%",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.5)",
          filter: "blur(6px)",
          transform: "rotate(-15deg)",
          pointerEvents: "none",
        }}
      />

      {/* Secondary soft highlight */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          right: "16%",
          width: "14%",
          height: "10%",
          borderRadius: "50%",
          background: "rgba(96,165,250,0.3)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />

      {/* Ring 1 */}
      <div
        style={{
          position: "absolute",
          width: "135%",
          height: "135%",
          borderRadius: "50%",
          border: "1.5px solid rgba(96,165,250,0.28)",
          animation: "ring-spin-cw 7s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* Ring 2 */}
      <div
        style={{
          position: "absolute",
          width: "165%",
          height: "165%",
          borderRadius: "50%",
          border: "1px solid rgba(147,197,253,0.14)",
          animation: "ring-spin-ccw 12s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* Ring 3 — tilted */}
      <div
        style={{
          position: "absolute",
          width: "150%",
          height: "150%",
          borderRadius: "50%",
          border: "0.5px solid rgba(59,130,246,0.18)",
          animation: "ring-spin-tilt 18s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* Orbiting dots */}
      {[
        { left: "calc(50% - 4px)", top: "-5%",  size: 8,  color: "#60A5FA", delay: "0s",    glow: "#60A5FA" },
        { left: "103%",            top: "44%",  size: 6,  color: "#93C5FD", delay: "1.2s",  glow: "#93C5FD" },
        { left: "calc(50% - 3px)", top: "101%", size: 7,  color: "#3B82F6", delay: "2.4s",  glow: "#3B82F6" },
        { left: "-4%",             top: "44%",  size: 5,  color: "#BFDBFE", delay: "3.6s",  glow: "#BFDBFE" },
      ].map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: d.size,
            height: d.size,
            borderRadius: "50%",
            background: d.color,
            boxShadow: `0 0 ${d.size * 2}px ${d.color}`,
            left: d.left,
            top: d.top,
            animation: `particle-float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: d.delay,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Floating exterior particles */}
      {[
        { cx: -130, cy: -90,  r: 5 },
        { cx:  155, cy: -55,  r: 4 },
        { cx:  170, cy: 130,  r: 6 },
        { cx: -145, cy:  95,  r: 4 },
        { cx:   10, cy: -185, r: 3 },
        { cx:  -90, cy:  165, r: 5 },
        { cx:  130, cy: -150, r: 3 },
      ].map((p, i) => (
        <div
          key={`p-${i}`}
          style={{
            position: "absolute",
            width: p.r * 2,
            height: p.r * 2,
            borderRadius: "50%",
            background: `rgba(96,165,250,${0.3 + i * 0.07})`,
            left: `calc(50% + ${p.cx}px)`,
            top:  `calc(50% + ${p.cy}px)`,
            transform: "translate(-50%,-50%)",
            boxShadow: `0 0 ${p.r * 3}px rgba(96,165,250,0.6)`,
            animation: `particle-float ${3.5 + i * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.45}s`,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}

/* ── Typed text cycling ─────────────────────────────── */
const CYCLING_WORDS = ["Web sur Mesure", "IA Intégrée", "Automatisation", "Performance"];

export default function HeroSection() {
  const [idx,     setIdx]     = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx((i) => (i + 1) % CYCLING_WORDS.length); setVisible(true); }, 450);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#060D1F",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Grid */}
      <div className="grid-bg-dark" style={{ position: "absolute", inset: 0 }} />

      {/* Background glows */}
      <div style={{
        position: "absolute", top: -200, right: -100,
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -150, left: -150,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div
        style={{
          flex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "4rem",
          paddingTop: 68,
          position: "relative",
        }}
        className="hero-grid"
      >
        {/* LEFT — Text */}
        <div style={{ animation: "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both" }}>

          {/* Label */}
          <p style={{
            color: "rgba(148,163,184,0.6)",
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            Agence web & IA — Paris
          </p>

          {/* Headline */}
          <h1 className="font-display" style={{ fontSize: "clamp(2.6rem, 5vw, 4.8rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
            Développez<br />plus vite.
          </h1>
          <div style={{ height: "clamp(3rem, 5.5vw, 5.2rem)", marginBottom: "1rem" }}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
                background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.45s ease, transform 0.45s ease",
                lineHeight: 1.1,
                whiteSpace: "nowrap",
              }}
            >
              {CYCLING_WORDS[idx]}.
            </h1>
          </div>

          {/* Subtitle */}
          <p style={{
            color: "rgba(226,232,240,0.8)",
            fontSize: "1.1rem",
            lineHeight: 1.75,
            maxWidth: 480,
            marginBottom: "2.5rem",
          }}>
            On conçoit vos applications web et on y intègre de l&apos;IA quand ça a du sens — agents, automatisation, traitement de données. Du concret, pas du gadget.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "3.5rem" }}>
            <a
              href="#contact"
              id="hero-cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.75rem",
                borderRadius: 12,
                background: "#2563EB",
                color: "white",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#1D4ED8";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.5)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#2563EB";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.4)";
              }}
            >
              Démarrer un projet
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              id="hero-cta-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.75rem",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Découvrir nos services
            </a>
          </div>

          {/* Trust signal */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2rem" }}>
            <div style={{ display: "flex", gap: "-0.3rem" }}>
              {["#3B82F6", "#2563EB", "#1D4ED8"].map((c, i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: c, border: "2px solid #060D1F",
                  marginLeft: i > 0 ? -8 : 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.65rem", color: "white", fontWeight: 700,
                }}>{["P", "M", "A"][i]}</div>
              ))}
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(148,163,184,0.65)", lineHeight: 1.4 }}>
              Équipe basée à Paris · Développement web & IA
            </p>
          </div>
        </div>

        {/* RIGHT — CSS Sphere */}
        <div
          style={{
            position: "absolute",
            right: "2rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "calc(50% - 4rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fade-in 1.2s ease both",
            pointerEvents: "none",
          }}
          className="hero-sphere"
        >
          <CSSphere />
        </div>
      </div>



      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        animation: "fade-in 2s ease 1s both",
        zIndex: 10,
      }}>
        <span style={{ fontSize: "0.65rem", color: "rgba(148,163,184,0.5)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Défiler
        </span>
        <div style={{
          width: 22, height: 36,
          border: "1.5px solid rgba(148,163,184,0.2)",
          borderRadius: 11,
          display: "flex",
          justifyContent: "center",
          paddingTop: 6,
        }}>
          <div style={{
            width: 4, height: 8,
            borderRadius: 2,
            background: "#3B82F6",
            animation: "float-up-down 1.5s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 5rem !important;
            padding-bottom: 4rem !important;
            text-align: center;
          }
          .hero-sphere { display: none !important; }
        }
      `}</style>
    </section>
  );
}
