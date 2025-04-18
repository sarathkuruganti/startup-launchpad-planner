
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, MonitorSmartphone, BrainCircuit, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    features: ["iOS & Android Development", "Cross-Platform Solutions", "Intuitive UI/UX Design", "Performance Optimization"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive websites and web applications with modern technologies and frameworks.",
    features: ["Frontend Development", "Backend Engineering", "Progressive Web Apps", "E-commerce Solutions"],
  },
  {
    icon: MonitorSmartphone,
    title: "Full-Stack Solutions",
    description: "End-to-end development services from database design to user interface implementation.",
    features: ["API Development", "Database Architecture", "System Integration", "Cloud Deployment"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
    features: ["Data Analysis", "Predictive Models", "Natural Language Processing", "Computer Vision"],
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in developing high-quality applications tailored to startups and innovative ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5">
                  <a href="#booking">
                    Learn More <ArrowRight size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
