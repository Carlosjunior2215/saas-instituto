import { Navbar } from '@/components/Navbar';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { WhyTrustSection } from '@/sections/WhyTrustSection';
import { SpecialtiesSection } from '@/sections/SpecialtiesSection';
import { DifferentialsSection } from '@/sections/DifferentialsSection';
import { TeamSection } from '@/sections/TeamSection';
import { StructureSection } from '@/sections/StructureSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FAQSection } from '@/sections/FAQSection';
import { ContactSection } from '@/sections/ContactSection';
import { LocationSection } from '@/sections/LocationSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />
      <HeroSection />
      <AboutSection />
      <WhyTrustSection />
      <SpecialtiesSection />
      <DifferentialsSection />
      <TeamSection />
      <StructureSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <LocationSection />
      <Footer />
    </>
  );
}
