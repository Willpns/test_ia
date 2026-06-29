"use client";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const WEB_SERVICES = [
  {
    id: "svc-vitrine",
    title: "Sites Vitrines & Landing Pages",
    desc: "Des sites modernes pour présenter votre activité, vos services ou vos produits. Optimisés pour mobile, rapides (Next.js / Tailwind) et structurés pour le SEO (référencement naturel).",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "svc-ecommerce",
    title: "E-commerce & Boutiques en ligne",
    desc: "Création de boutiques en ligne fluides et performantes avec paiement sécurisé via Stripe, gestion de catalogue et suivi de commandes intégrés.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    id: "svc-apps",
    title: "Applications Web & Plateformes",
    desc: "Développement d'outils internes, de portails clients ou de tableaux de bord sur mesure. On choisit la stack la plus adaptée à votre besoin.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
  },
];

const AI_SERVICES = [
  {
    id: "svc-chatbots",
    title: "Assistant Client Intelligent 24/7",
    desc: "Ne laissez plus un client sans réponse, même à 2h du matin. Contrairement aux robots rigides, cet assistant est entraîné sur vos données (FAQ, fiches produits). Il conseille vos visiteurs et résout leurs doutes en temps réel. Bénéfice clé : Réduction de 40% des tickets support et augmentation des ventes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "svc-search",
    title: "Moteur de Recherche Prédictif",
    desc: "Vos visiteurs ne trouvent pas vos produits avec une recherche classique ? Notre moteur IA comprend l'intention, les synonymes et les fautes. Si un client cherche 'tenue mariage été', il trouvera vos costumes légers sans que vous ayez à taguer manuellement vos produits. Bénéfice clé : Amélioration de l'expérience et hausse du panier moyen.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
  },
  {
    id: "svc-catalog",
    title: "Automatisation de Catalogue",
    desc: "Divisez par dix le temps de gestion de votre site. Ajoutez un produit, l'IA s'occupe du reste : rédaction SEO instantanée, traduction ultra-fidèle, et description des images pour l'accessibilité. Bénéfice clé : Gain de temps massif, ce qui prenait des jours se fait en quelques secondes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
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
