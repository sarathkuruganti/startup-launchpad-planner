
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl text-brand-700">
            LaunchPad<span className="text-purple-600">Dev</span>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <Button asChild variant="default" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <a href="#booking">Book a Consultation</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col p-4 bg-white border-t">
          <a 
            href="#services" 
            className="py-2 text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className="py-2 text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#portfolio" 
            className="py-2 text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            className="py-2 text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <Button 
            asChild 
            variant="default" 
            className="mt-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#booking">Book a Consultation</a>
          </Button>
        </nav>
      )}
    </header>
  );
}
