import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}