import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import AISection from "@/components/AISection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FAQSection />
      <AISection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
