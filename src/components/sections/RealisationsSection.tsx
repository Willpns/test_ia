"use client";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const CASES = [
  {
    id: "case-ecommerce",
    tag: "Web & Paiement",
    metric: "+40%",
    metricSub: "de conversion",
    title: "Refonte de boutique et tunnel Stripe",
    desc: "Création d'un site e-commerce ultra-rapide avec Next.js et Stripe Checkout. Ajout d'une relance automatique par e-mail en cas de panier abandonné.",
    tech: ["Next.js", "Stripe", "Tailwind", "Resend"],
    accent: "from-blue-700 to-blue-900",
  },
  {
    id: "case-automation",
    tag: "Automatisation",
    metric: "5 h",
    metricSub: "gagnées / semaine",
    title: "Saisie automatique de factures dans le CRM",
    desc: "Mise en place d'un workflow Make (Zapier) qui récupère les PDFs de factures reçus par email, extrait les données avec l'API OpenAI, et crée les fiches clients.",
    tech: ["Make.com", "OpenAI API", "Google Workspace"],
    accent: "from-blue-600 to-blue-800",
  },
  {
    id: "case-dashboard",
    tag: "Plateforme Web",
    metric: "2 min",
    metricSub: "pour générer un rapport",
    title: "Portail client avec espace membre sécurisé",
    desc: "Développement d'un dashboard client avec authentification et gestion des abonnements. Base de données synchronisée en temps réel pour le suivi des dossiers.",
    tech: ["Next.js", "Supabase", "Tailwind", "Stripe"],
    accent: "from-blue-500 to-blue-700",
  },
];



function CaseCard({ c, index }: { c: (typeof CASES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { threshold: 0.12 });

  return (
    <div
      ref={ref}
      id={c.id}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 20,
        overflow: "hidden",
        opacity:   vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(37,99,235,0.12), 0 2px 6px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
      }}
    >
      {/* Top gradient bar */}
      <div style={{
        height: 4,
        background: `linear-gradient(90deg, #2563EB, #1E3A8A)`,
        opacity: 0.8 + index * 0.07,
      }} />

      <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Tag */}
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
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          width: "fit-content",
        }}>
          {c.tag}
        </div>

        {/* Metric */}
        <div style={{ marginBottom: "0.5rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <span style={{
            fontSize: "3rem",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            background: "linear-gradient(135deg, #2563EB, #1E3A8A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {c.metric}
          </span>
          <span style={{ color: "#94A3B8", fontSize: "0.8rem", fontWeight: 500 }}>{c.metricSub}</span>
        </div>

        <h3 style={{
          fontWeight: 800,
          fontSize: "1.05rem",
          color: "#0F172A",
          lineHeight: 1.35,
          marginBottom: "0.875rem",
          letterSpacing: "-0.01em",
          flex: 1,
        }}>
          {c.title}
        </h3>

        <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          {c.desc}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {c.tech.map((t) => (
            <span key={t} style={{
              padding: "0.25rem 0.6rem",
              borderRadius: 6,
              background: "#F1F5F9",
              border: "1px solid #E2E8F0",
              color: "#475569",
              fontSize: "0.72rem",
              fontWeight: 600,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RealisationsSection() {
  const hRef = useRef<HTMLDivElement>(null);
  const hVis = useInView(hRef, { threshold: 0.25 });

  return (
    <section id="realisations" style={{ background: "#F8FAFC", padding: "8rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div
          ref={hRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "4rem",
            opacity:   hVis ? 1 : 0,
            transform: hVis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="real-header"
        >
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>
              <span style={{ width: 20, height: 1, background: "#2563EB", display: "inline-block" }} />
              Réalisations
            </p>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}>
              Des résultats<br />
              <span className="text-gradient-dark">mesurables.</span>
            </h2>
          </div>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.8, alignSelf: "center" }}>
            Pas de lorem ipsum ici. Ce sont des projets réels, avec des résultats concrets mesurés après mise en production.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
          marginBottom: "5rem",
        }} className="cases-grid">
          {CASES.map((c, i) => <CaseCard key={c.id} c={c} index={i} />)}
        </div>


      </div>

      <style>{`
        @media (max-width: 900px) {
          .real-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
