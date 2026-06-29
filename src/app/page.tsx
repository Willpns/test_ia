import HeroSection        from "@/components/sections/HeroSection";
import ServicesSection    from "@/components/sections/ServicesSection";
import ApproachSection    from "@/components/sections/ApproachSection";
import RealisationsSection from "@/components/sections/RealisationsSection";
import ContactSection     from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <RealisationsSection />
      <ContactSection />
    </>
  );
}
