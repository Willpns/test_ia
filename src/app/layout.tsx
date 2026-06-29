import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Business IA — Agence Web & Intelligence Artificielle",
  description:
    "Business IA conçoit des applications web sur mesure et intègre des modules d'intelligence artificielle pour maximiser votre ROI. Agents IA, LLM, automatisation, développement React & Next.js.",
  keywords: [
    "agence web IA",
    "développement web sur mesure",
    "intelligence artificielle",
    "agents LLM",
    "automatisation",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Business IA" }],
  openGraph: {
    title: "Business IA — Agence Web & Intelligence Artificielle",
    description:
      "Solutions web sur mesure et intégration IA pour les entreprises. Agents intelligents, automatisation, LLM.",
    type: "website",
    locale: "fr_FR",
    siteName: "Business IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business IA — Agence Web & Intelligence Artificielle",
    description:
      "Solutions web sur mesure et intégration IA pour les entreprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
