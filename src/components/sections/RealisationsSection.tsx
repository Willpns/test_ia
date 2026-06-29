"use client";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const CASES = [
  {
    id: "case-ecommerce",
    tag: "E-commerce",
    metric: "+34%",
    metricSub: "de panier moyen",
    title: "Recommandations produit pour une boutique en ligne",
    desc: "Intégration d'un moteur de suggestions basé sur l'historique d'achat. Les recommandations sont contextuelles, pas aléatoires, et le panier moyen a suivi.",
    tech: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    accent: "from-blue-700 to-blue-900",
  },
  {
    id: "case-automation",
    tag: "Automatisation",
    metric: "2 min",
    metricSub: "au lieu de 45",
    title: "Traitement automatique de demandes de devis",
    desc: "Un agent IA qui lit les demandes entrantes (email, PDF), en extrait les infos clés et génère une première réponse structurée. Le commercial n'a plus qu'à valider.",
    tech: ["FastAPI", "LangChain", "Claude", "Redis"],
    accent: "from-blue-600 to-blue-800",
  },
  {
    id: "case-dashboard",
    tag: "Data & IA",
    metric: "6",
    metricSub: "sources connectées",
    title: "Dashboard avec requêtes en langage naturel",
    desc: "Les dirigeants posent leurs questions en français, le système interroge les bases de données et renvoie des réponses visuelles. Plus besoin de passer par la tech.",
    tech: ["React", "FastAPI", "Mistral", "ClickHouse"],
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
