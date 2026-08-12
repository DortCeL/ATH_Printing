import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ServicesSection from "@/components/ServicesSection";
import MajorWorksSection from "@/components/MajorWorksSection";
import MachinerySection from "@/components/MachinerySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<div className='min-h-screen bg-background'>
			<Navbar />
			<HeroSection />
			<OverviewSection />
			<ServicesSection />
			<MajorWorksSection />
			<MachinerySection />
			{/* <PricingSection /> */}
			<LocationsSection />
			{/* <ContactSection /> */}
			<TestimonialsSection />
			{/* <FAQSection /> */}
			<Footer />
			<ChatBot />
		</div>
	);
};

export default Index;
