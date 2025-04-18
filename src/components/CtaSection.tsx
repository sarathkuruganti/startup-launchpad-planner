
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/95 to-accent/95 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Startup Idea?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Book your free consultation today and take the first step toward turning your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#pricing">View Packages</a>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="#booking" className="flex items-center gap-2">
                Book Free Consultation <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
