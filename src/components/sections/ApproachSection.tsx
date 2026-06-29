"use client";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const STEPS = [
  {
    num: "01",
    title: "Audit & Cadrage",
    sub: "Compréhension métier",
    body: "On prend le temps de comprendre votre activité, vos process et vos contraintes. On en sort avec un cahier des charges clair et un planning réaliste.",
    duration: "1–2 semaines",
  },
  {
    num: "02",
    title: "Architecture & Design",
    sub: "Prototype validé",
    body: "On dessine l'architecture technique, on choisit les bons outils, et on vous présente les maquettes avant d'écrire la moindre ligne de code.",
    duration: "2–3 semaines",
  },
  {
    num: "03",
    title: "Développement & IA",
    sub: "Livraisons régulières",
    body: "On avance par sprints courts. Les fonctionnalités IA sont intégrées au fur et à mesure, testées en conditions réelles et ajustées avec vous.",
    duration: "4–8 semaines",
  },
  {
    num: "04",
    title: "Mise en production",
    sub: "Suivi continu",
    body: "Déploiement, monitoring, formation de vos équipes. On reste disponibles après le lancement pour ajuster et faire évoluer le projet.",
    duration: "Continu",
  },
];

function Step({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { threshold: 0.15 });

  return (
    <div
      ref={ref}
      id={`step-${step.num}`}
      style={{
        position: "relative",
        opacity:   vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* Connector line (desktop) */}
      {index < STEPS.length - 1 && (
        <div style={{
          position: "absolute",
          top: 22,
          left: "calc(100% - 0px)",
          width: "100%",
          height: 1,
          background: "linear-gradient(90deg, #CBD5E1, transparent)",
          zIndex: 0,
          display: "none",
        }} className="step-connector" />
      )}

      {/* Number */}
      <div style={{
        position: "relative",
        zIndex: 1,
        width: 48,
        height: 48,
        borderRadius: 14,
        background: "linear-gradient(135deg, #2563EB, #1E3A8A)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 900,
        fontSize: "0.9rem",
        color: "#FFFFFF",
        letterSpacing: "-0.01em",
        marginBottom: "1.5rem",
        boxShadow: "0 6px 20px rgba(37,99,235,0.3)",
      }}>
        {step.num}
      </div>

      {/* Sub label */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.25rem 0.7rem",
        borderRadius: 100,
        background: "#EFF6FF",
        border: "1px solid #DBEAFE",
        color: "#2563EB",
        fontSize: "0.68rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: "0.85rem",
      }}>
        {step.sub}
      </div>

      <h3 style={{
        fontWeight: 800,
        fontSize: "1.15rem",
        color: "#0F172A",
        letterSpacing: "-0.02em",
        marginBottom: "0.75rem",
        lineHeight: 1.2,
      }}>
        {step.title}
      </h3>

      <p style={{
        fontSize: "0.875rem",
        color: "#64748B",
        lineHeight: 1.75,
        marginBottom: "1rem",
      }}>
        {step.body}
      </p>

      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        color: "#94A3B8",
        fontSize: "0.78rem",
        fontWeight: 500,
      }}>
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" />
        </svg>
        {step.duration}
      </div>
    </div>
  );
}

export default function ApproachSection() {
  const hRef = useRef<HTMLDivElement>(null);
  const hVis = useInView(hRef, { threshold: 0.25 });

  return (
    <section id="approche" style={{ background: "#FFFFFF", padding: "8rem 0", position: "relative", overflow: "hidden" }}>
      {/* Background big number decoration */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: -60,
        transform: "translateY(-50%)",
        fontSize: "clamp(200px, 25vw, 320px)",
        fontWeight: 900,
        color: "rgba(37,99,235,0.03)",
        letterSpacing: "-0.05em",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
      }}>
        IA
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div
          ref={hRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "5rem",
            opacity:   hVis ? 1 : 0,
            transform: hVis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="approach-header"
        >
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>
              <span style={{ width: 20, height: 1, background: "#2563EB", display: "inline-block" }} />
              Notre Approche
            </p>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}>
              Un process rodé,<br />
              <span className="text-gradient-dark">de A à Z.</span>
            </h2>
          </div>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.8, alignSelf: "center" }}>
            On ne vous vend pas une méthodologie en 47 slides. Voici comment on travaille concrètement, du premier échange à la mise en production.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "3rem",
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Desktop horizontal rule */}
          <div style={{
            position: "absolute",
            top: 23,
            left: 48,
            right: 48,
            height: 1,
            background: "linear-gradient(90deg, #DBEAFE, #93C5FD 50%, #DBEAFE)",
            zIndex: 0,
          }} className="steps-line" />
          {STEPS.map((s, i) => <Step key={s.num} step={s} index={i} />)}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: "5rem",
          padding: "2rem 2.5rem",
          borderRadius: 16,
          border: "1px solid #E2E8F0",
          background: "#F8FAFC",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: "#EFF6FF", display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg width="20" height="20" fill="none" stroke="#2563EB" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0F172A", marginBottom: "0.25rem" }}>
              On s&apos;engage sur les délais et la qualité
            </p>
            <p style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.6 }}>
              Réponse sous 24h, code testé avant livraison, et un interlocuteur dédié tout au long du projet.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .steps-line { display: none !important; }
          .approach-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .promise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
