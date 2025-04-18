
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-bold text-xl text-white mb-4">
              LaunchPad<span className="text-purple-400">Dev</span>
            </div>
            <p className="text-sm mb-6">
              Turning startup ideas into reality with professional development services tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Full-Stack Solutions</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-sm hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-sm hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none bg-gray-800 border-gray-700 focus:ring-primary focus:border-primary"
                />
                <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90">
                  <Mail size={16} />
                </Button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LaunchPadDev. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
