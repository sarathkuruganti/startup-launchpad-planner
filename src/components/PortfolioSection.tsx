
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HealthTech Mobile App",
    description: "A patient-doctor communication platform with real-time chat and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "E-commerce Platform",
    description: "A complete online shopping solution with user authentication, product catalog, and payment processing.",
    image: "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web App",
    technologies: ["React", "Express", "PostgreSQL"],
  },
  {
    title: "AI Content Manager",
    description: "An AI-powered system that helps businesses manage and optimize their content strategy.",
    image: "https://images.unsplash.com/photo-1655720708112-0aecadf9a207?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "AI Solution",
    technologies: ["Python", "TensorFlow", "Next.js"],
  },
  {
    title: "Fintech Dashboard",
    description: "A comprehensive financial analytics dashboard for tracking investments and market trends.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web App",
    technologies: ["Vue.js", "Django", "D3.js"],
  },
  {
    title: "Logistics Management System",
    description: "An end-to-end logistics platform with real-time tracking and route optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Full-Stack",
    technologies: ["React", "Node.js", "GraphQL"],
  },
  {
    title: "Social Media Analytics",
    description: "AI-powered tool that analyzes social media engagement and provides actionable insights.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "AI Solution",
    technologies: ["Python", "React", "AWS"],
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of the projects we've delivered for startups and businesses.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category ? "bg-primary" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-100 transition-all hover:shadow-md hover:border-primary/20">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="mt-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5">
                  <a href="#booking">
                    View Case Study <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <a href="#booking">Start Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
