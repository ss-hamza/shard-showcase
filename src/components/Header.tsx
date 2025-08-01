import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "How it works", href: "/how-it-works" },
    { label: "The Science", href: "#science" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Our Team", href: "#team" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="bg-navy px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-primary text-2xl font-bold">
            <span className="text-purple-400">🧬</span>
            BIOHACK
          </div>
          <span className="text-navy-foreground text-lg font-medium">GENOMICS</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-navy-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-navy-foreground text-navy-foreground hover:bg-navy-foreground hover:text-navy">
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;