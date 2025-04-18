
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50" />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-block font-medium text-sm py-1 px-3 rounded-full bg-purple-100 text-purple-700">
              Turn your startup ideas into reality
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Startup</span> With Professional Development
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              From mobile apps to web platforms and AI solutions - we bring your vision to life with expert development at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                <a href="#booking" className="flex items-center gap-2">
                  Book a Free Consultation <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
          <div className="relative p-6">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-2 md:p-4 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Development in progress" 
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-8 right-0 w-40 h-40 bg-blue-500/10 rounded-full translate-x-1/2 translate-y-1/3 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
