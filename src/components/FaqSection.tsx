
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What services do you offer for startups?",
    answer: "We provide a full range of development services for startups, including mobile app development (iOS & Android), web development, full-stack solutions, and AI/machine learning implementation. Our services are tailored to each startup's specific needs and budget."
  },
  {
    question: "How much does it cost to build an app or website?",
    answer: "The cost varies depending on the complexity, features, and platforms required. We offer packages starting from our free consultation to our enterprise solutions. During your initial consultation, we'll assess your needs and provide a detailed quote based on your specific requirements."
  },
  {
    question: "How long does the development process take?",
    answer: "Development timelines vary by project complexity. Simple applications may take 2-4 weeks, while more complex solutions might require 2-6 months. We work with you to establish realistic timelines and milestones, keeping you updated throughout the process."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we provide ongoing maintenance and support packages to ensure your application continues to run smoothly after launch. Our support packages include bug fixes, security updates, and minor enhancements, with options for different levels of support based on your needs."
  },
  {
    question: "Can you help with an existing project that needs improvements?",
    answer: "Absolutely. We offer code reviews, performance optimization, feature additions, and redesigns for existing applications. Our team can analyze your current solution and recommend the best approach to enhance its functionality, performance, and user experience."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our team has expertise in a wide range of technologies including React, React Native, Node.js, Python, Django, Flutter, Firebase, AWS, TensorFlow, and more. We select the most appropriate tech stack for your specific project requirements to ensure optimal performance and scalability."
  },
  {
    question: "Do I own the source code after development?",
    answer: "Yes, you will own the complete source code for your project. We believe in transparent development practices and provide full ownership of the final product to our clients, including all source files, assets, and documentation."
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and pricing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="mb-4 text-gray-600">
              Don't see your question here? Contact us directly and we'll get back to you.
            </p>
            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <a href="#booking">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
