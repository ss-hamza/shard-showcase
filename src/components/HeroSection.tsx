import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-navy/80"></div>
      <div className="relative z-10 text-center text-navy-foreground px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Questions Answered
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Explore our FAQ to find answers to common questions about our precision health platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-navy-foreground text-navy-foreground hover:bg-navy-foreground hover:text-navy text-lg px-8 py-3"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;