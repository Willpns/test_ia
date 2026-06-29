"use client";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const WEB_SERVICES = [
  {
    id: "svc-frontend",
    title: "Front-end sur Mesure",
    desc: "Des interfaces React / Next.js rapides, soignées et accessibles. On code au pixel près, avec des animations légères et une compatibilité navigateurs testée.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "svc-backend",
    title: "Back-end & Architecture",
    desc: "APIs REST ou GraphQL solides, bases de données bien pensées, architecture qui tient la charge. Node.js, Python, PostgreSQL — on choisit le bon outil pour le bon job.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    id: "svc-api",
    title: "API & Intégrations",
    desc: "On connecte vos outils entre eux : Stripe, CRM, ERP, webhooks. Votre écosystème technique fonctionne comme un tout, pas en silos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M8 9l3 3-3 3M13 15h3" />
        <rect x="2" y="4" width="20" height="16" rx="3" />
      </svg>
    ),
  },
];

const AI_SERVICES = [
  {
    id: "svc-agents",
    title: "Agents & LLM",
    desc: "Agents autonomes basés sur les meilleurs modèles du marché. Extraction de données, génération de contenu, analyse de documents — pour automatiser ce qui peut l'être.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "svc-automation",
    title: "Automatisation Métier",
    desc: "Vous avez des tâches répétitives qui prennent des heures ? On les automatise. Traitement de documents, orchestration de workflows, scripts intelligents.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: "svc-data",
    title: "Traitement de Données",
    desc: "Vos données ont de la valeur, encore faut-il pouvoir les exploiter. On crée des pipelines clairs et des tableaux de bord qui servent vraiment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M7 12l3-3 3 3 4-4" /><rect x="2" y="3" width="20" height="18" rx="2" />
      </svg>
    ),
  },
];

function Card({ service, accent, index }: { service: (typeof WEB_SERVICES)[0]; accent: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { threshold: 0.12 });

  return (
    <div
      ref={ref}
      id={service.id}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 16,
        padding: "2rem",
        opacity:   vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${index * 0.1}s, transform 0.65s ease ${index * 0.1}s`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 8px 30px rgba(37,99,235,0.1), 0 2px 8px rgba(0,0,0,0.04)";
        el.style.transform = "translateY(-3px)";
        el.style.borderColor = "#BFDBFE";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
        el.style.borderColor = "#E2E8F0";
      }}
    >
      {/* Subtle top accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${accent}, transparent)`,
        opacity: 0,
        transition: "opacity 0.3s",
        borderRadius: "16px 16px 0 0",
      }} className="card-accent" />

      {/* Icon */}
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: "#EFF6FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2563EB",
        marginBottom: "1.25rem",
        transition: "all 0.25s",
      }}>
        {service.icon}
      </div>

      <h3 style={{
        fontWeight: 800,
        fontSize: "1.05rem",
        color: "#0F172A",
        marginBottom: "0.75rem",
        letterSpacing: "-0.01em",
      }}>
        {service.title}
      </h3>

      <p style={{
        fontSize: "0.875rem",
        color: "#64748B",
        lineHeight: 1.75,
      }}>
        {service.desc}
      </p>
    </div>
  );
}

function CategoryHeader({ label, tag, dark = false }: { label: string; tag: string; dark?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.3rem 0.8rem",
        borderRadius: 6,
        background: dark ? "#1E3A8A" : "#EFF6FF",
        color: dark ? "#BFDBFE" : "#1D4ED8",
        fontSize: "0.68rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>
        {tag}
      </div>
      <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
    </div>
  );
}

export default function ServicesSection() {
  const hRef  = useRef<HTMLDivElement>(null);
  const hVis  = useInView(hRef, { threshold: 0.25 });

  return (
    <section id="services" style={{ background: "#F8FAFC", padding: "8rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div
          ref={hRef}
          style={{
            maxWidth: 640,
            marginBottom: "5rem",
            opacity:   hVis ? 1 : 0,
            transform: hVis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="section-label" style={{ marginBottom: "1.2rem" }}>
            <span style={{ width: 20, height: 1, background: "#2563EB", display: "inline-block" }} />
            Services & Expertises
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 900,
            color: "#0F172A",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}>
            Deux expertises.<br />
            <span className="text-gradient-dark">Un seul partenaire.</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Du front-end à l&apos;intégration d&apos;IA, on gère tout en interne. Un seul interlocuteur, moins de friction, des résultats plus rapides.
          </p>
        </div>

        {/* Web */}
        <div style={{ marginBottom: "3.5rem" }}>
          <CategoryHeader label="Développement Web" tag="Web" dark={false} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {WEB_SERVICES.map((s, i) => (
              <Card key={s.id} service={s} accent="#3B82F6" index={i} />
            ))}
          </div>
        </div>

        {/* AI */}
        <div>
          <CategoryHeader label="Intelligence Artificielle" tag="IA" dark={true} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {AI_SERVICES.map((s, i) => (
              <Card key={s.id} service={s} accent="#1D4ED8" index={i} />
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          marginTop: "4rem",
          padding: "2rem 2.5rem",
          borderRadius: 16,
          background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              Un projet en tête ?
            </p>
            <p style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.01em" }}>
              Discutons-en. Première estimation gratuite.
            </p>
          </div>
          <a
            href="#contact"
            id="services-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.8rem 1.6rem",
              borderRadius: 10,
              background: "#FFFFFF",
              color: "#1E3A8A",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Demander un devis
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
