import Navbar from "@/components/ui/layout/Navbar";
import HeroSection from "@/components/ui/sections/HeroSection";
import FeaturesSection from "@/components/ui/sections/FeaturesSection";
import PackagesSection from "@/components/ui/sections/PackagesSection";
import TestimonialsSection from "@/components/ui/sections/TestimonialsSection";
import FAQSection from "@/components/ui/sections/FAQSection";
import Footer from "@/components/ui/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PackagesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
