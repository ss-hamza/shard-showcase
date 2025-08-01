import { Button } from "@/components/ui/button";

const AISection = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Try asking our AI chat!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            AI Chat goes here.
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;