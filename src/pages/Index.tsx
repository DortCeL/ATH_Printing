import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TechnologySection />
      <TestimonialsSection />
      <LocationsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
