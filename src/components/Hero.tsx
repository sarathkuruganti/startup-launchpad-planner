
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-blue-50/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.05),transparent_50%)]" />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-medium text-sm py-1 px-3 rounded-full bg-purple-100 text-purple-700">
                <Sparkles className="w-3.5 h-3.5" />
                Turn your ideas into reality
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Launch Your Vision with{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
                  Professional Development
                </span>
                <span className="absolute inset-x-0 bottom-0 h-3 bg-purple-200/40 -rotate-1" />
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              From cutting-edge mobile apps to scalable web platforms - we transform your vision into reality with expert development solutions at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
              >
                <a href="#booking" className="flex items-center gap-2">
                  Book a Free Consultation 
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="#pricing" className="flex items-center gap-2">
                  View Pricing <Rocket size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium py-1 px-2.5 rounded-full bg-blue-50 text-blue-600">
                <Code2 className="w-3.5 h-3.5" /> React Native
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium py-1 px-2.5 rounded-full bg-orange-50 text-orange-600">
                Firebase
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium py-1 px-2.5 rounded-full bg-green-50 text-green-600">
                Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium py-1 px-2.5 rounded-full bg-purple-50 text-purple-600">
                Next.js
              </span>
            </div>
          </div>

          <div className="relative lg:ml-4">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-2 md:p-4 border border-gray-100 animate-fade-in [animation-delay:200ms]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Development workspace" 
                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
            <div className="absolute bottom-8 right-0 w-48 h-48 bg-blue-500/10 rounded-full translate-x-1/2 translate-y-1/3 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-gray-100/[0.08] -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
