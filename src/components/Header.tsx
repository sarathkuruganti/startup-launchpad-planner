
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl text-brand-700">
            Vtellu
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button 
            asChild 
            variant="default" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            <a href="#booking">Book a Consultation</a>
          </Button>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-1.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild 
                variant="default" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#booking">Book a Consultation</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
