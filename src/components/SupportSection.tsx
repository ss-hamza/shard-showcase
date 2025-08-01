import { Button } from "@/components/ui/button";
import supportImage from "@/assets/support-image.jpg";

const SupportSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src={supportImage} 
              alt="Healthcare professional consultation" 
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
              We're Here to Help You
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              If you have any questions that weren't addressed in our FAQ, please don't 
              hesitate to reach out. Our customer support team is ready to assist you 
              with any inquiries you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;