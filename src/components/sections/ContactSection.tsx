"use client";
import { useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";

type FormField = "name" | "email" | "company" | "service" | "message";
type FormData  = Record<FormField, string>;
const INIT: FormData = { name: "", email: "", company: "", service: "", message: "" };

const SERVICE_OPTIONS = [
  "Développement Front-end",
  "Développement Back-end",
  "API & Intégrations",
  "Agents & LLM",
  "Automatisation Métier",
  "Traitement de Données",
  "Projet complet Web + IA",
];

export default function ContactSection() {
  const [form,     setForm]     = useState<FormData>(INIT);
  const [errors,   setErrors]   = useState<Partial<FormData>>({});
  const [sent,     setSent]     = useState(false);
  const [loading,  setLoading]  = useState(false);

  const hRef = useRef<HTMLDivElement>(null);
  const hVis = useInView(hRef, { threshold: 0.2 });

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim())    e.name    = "Nom requis";
    if (!form.email.trim())   e.email   = "Email requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.message.trim()) e.message = "Message requis";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1300));
    setLoading(false);
    setSent(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as FormField]) setErrors(err => ({ ...err, [name]: undefined }));
  };

  const inputStyle = (field: FormField): React.CSSProperties => ({
    width: "100%",
    padding: "0.85rem 1.1rem",
    borderRadius: 10,
    border: `1.5px solid ${errors[field] ? "#FCA5A5" : "#E2E8F0"}`,
    background: errors[field] ? "#FFF5F5" : "#FFFFFF",
    color: "#0F172A",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
  });

  return (
    <section id="contact" style={{ background: "#FFFFFF", padding: "8rem 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", bottom: -100, right: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        ref={hRef}
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}
      >
        {/* Section header */}
        <div style={{
          textAlign: "center",
          marginBottom: "4.5rem",
          opacity:   hVis ? 1 : 0,
          transform: hVis ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <p className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>
            <span style={{ width: 20, height: 1, background: "#2563EB", display: "inline-block" }} />
            Contact
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 900,
            color: "#0F172A",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}>
            Parlons de votre{" "}
            <span className="text-gradient-dark">prochain projet.</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Décrivez-nous votre besoin. On revient vers vous sous 24h avec une première analyse et une estimation gratuite.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3rem",
          alignItems: "start",
        }} className="contact-grid">

          {/* LEFT — Info */}
          <div>
            {/* Contact details */}
            <div style={{ marginBottom: "2rem" }}>
              {[
                {
                  icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  label: "Email",
                  val:   "hello@business-ia.fr",
                  href:  "mailto:hello@business-ia.fr",
                },
                {
                  icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                  label: "Téléphone",
                  val:   "+33 1 23 45 67 89",
                  href:  "tel:+33123456789",
                },
                {
                  icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  label: "Localisation",
                  val:   "Paris, France — Remote friendly",
                  href:  "#",
                },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.1rem 1.25rem",
                    borderRadius: 12,
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    textDecoration: "none",
                    marginBottom: "0.75rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE";
                    (e.currentTarget as HTMLElement).style.background = "#EFF6FF";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                    (e.currentTarget as HTMLElement).style.background = "#F8FAFC";
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "#EFF6FF", color: "#2563EB",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#94A3B8", fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: "0.875rem", color: "#1E293B", fontWeight: 600 }}>{item.val}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Commitment box */}
            <div style={{
              padding: "1.75rem",
              borderRadius: 16,
              background: "#060D1F",
              color: "white",
            }}>
              <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Ce qu&apos;on vous garantit</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Réponse sous 24h, même le vendredi soir",
                  "Première analyse technique gratuite",
                  "Devis détaillé, pas de mauvaise surprise",
                  "Un seul interlocuteur de A à Z",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "rgba(226,232,240,0.75)" }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: "rgba(37,99,235,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <svg width="10" height="10" fill="none" stroke="#60A5FA" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 20,
            padding: "2.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "#EFF6FF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}>
                  <svg width="28" height="28" fill="none" stroke="#2563EB" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: "1.4rem", color: "#0F172A", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
                  Message envoyé !
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 320, margin: "0 auto 1.5rem" }}>
                  Merci {form.name.split(" ")[0]}. Notre équipe reviendra vers vous dans les 24 heures ouvrées.
                </p>
                <button
                  onClick={() => { setSent(false); setForm(INIT); }}
                  style={{ background: "none", border: "none", color: "#2563EB", fontWeight: 600, cursor: "pointer", fontSize: "0.875rem" }}
                >
                  Envoyer un autre message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate id="contact-form">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-row">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                      Nom complet <span style={{ color: "#3B82F6" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={onChange}
                      style={inputStyle("name")}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#3B82F6"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = errors.name ? "#FCA5A5" : "#E2E8F0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                    {errors.name && <p style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                      Email professionnel <span style={{ color: "#3B82F6" }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@entreprise.fr"
                      value={form.email}
                      onChange={onChange}
                      style={inputStyle("email")}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#3B82F6"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = errors.email ? "#FCA5A5" : "#E2E8F0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                    {errors.email && <p style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-row">
                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                      Société
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Mon Entreprise"
                      value={form.company}
                      onChange={onChange}
                      style={inputStyle("company")}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#3B82F6"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "#E2E8F0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                      Type de besoin
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      style={{ ...inputStyle("service"), cursor: "pointer", appearance: "none" }}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#3B82F6"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "#E2E8F0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    >
                      <option value="">Sélectionnez...</option>
                      {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                    Votre projet <span style={{ color: "#3B82F6" }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre besoin, vos contraintes et vos objectifs..."
                    value={form.message}
                    onChange={onChange}
                    style={{ ...inputStyle("message"), resize: "none" }}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = "#3B82F6"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)"; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = errors.message ? "#FCA5A5" : "#E2E8F0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  />
                  {errors.message && <p style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "0.95rem",
                    borderRadius: 12,
                    background: loading ? "#93C5FD" : "#2563EB",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#1D4ED8"; }}
                  onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#2563EB"; }}
                >
                  {loading ? (
                    <>
                      <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "ring-spin-cw 0.7s linear infinite" }} />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p style={{ textAlign: "center", fontSize: "0.72rem", color: "#CBD5E1", marginTop: "1rem" }}>
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
