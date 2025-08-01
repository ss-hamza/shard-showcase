import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    column1: [
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Blog Posts", href: "#blog" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQs", href: "#faq" },
    ],
    column2: [
      { label: "Testimonials", href: "#testimonials" },
      { label: "Resources", href: "#resources" },
      { label: "Careers", href: "#careers" },
    ]
  };

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookies Settings", href: "#cookies" },
  ];

  return (
    <footer className="bg-navy py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-card rounded-2xl p-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-primary text-2xl font-bold">
                  <span className="text-purple-400">🧬</span>
                  BIOHACK
                </div>
                <span className="text-navy text-lg font-medium">GENOMICS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
                Rewrite the Future of Your Brain Health
              </h3>
              <p className="text-muted-foreground mb-6">
                The world's leader in predicting and preventing Alzheimer's and Dementia.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div>
                {footerLinks.column1.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground hover:text-navy transition-colors mb-3"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                {footerLinks.column2.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground hover:text-navy transition-colors mb-3"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xl font-bold">f</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-navy-foreground/20">
          <p className="text-navy-foreground/80 text-sm mb-4 md:mb-0">
            © 2025 Biohack Genomics. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-navy-foreground/80 hover:text-navy-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;