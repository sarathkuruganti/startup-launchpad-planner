
import { useState } from "react";
import { Check, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const pricingPlans = [
  {
    name: "Free Consultation",
    price: "Free",
    description: "Perfect for startups exploring their options",
    features: [
      { text: "30-minute consultation call", included: true },
      { text: "Basic project assessment", included: true },
      { text: "Development recommendations", included: true },
      { text: "Budget estimation", included: true },
      { text: "Timeline overview", included: true },
      { text: "Tech stack recommendations", included: false, tooltip: "Available in our paid plans" },
      { text: "Prototype development", included: false, tooltip: "Available in our paid plans" },
      { text: "Ongoing support", included: false, tooltip: "Available in our paid plans" },
    ],
    ctaText: "Book Consultation",
    popular: false,
  },
  {
    name: "Startup Essential",
    price: "$999",
    description: "Ideal for MVPs and early-stage startups",
    features: [
      { text: "In-depth project scoping", included: true },
      { text: "UI/UX design (5 screens)", included: true },
      { text: "Core functionality development", included: true },
      { text: "Basic API integration", included: true },
      { text: "Tech stack consultation", included: true },
      { text: "1-week delivery for simple features", included: true },
      { text: "30-day support", included: true },
      { text: "Advanced integrations", included: false, tooltip: "Available in Scale plan" },
    ],
    ctaText: "Start Project",
    popular: true,
  },
  {
    name: "Growth",
    price: "$2,499",
    description: "For startups ready to scale their product",
    features: [
      { text: "Complete project planning", included: true },
      { text: "UI/UX design (10+ screens)", included: true },
      { text: "Full-featured development", included: true },
      { text: "Complex API integrations", included: true },
      { text: "Database architecture", included: true },
      { text: "2-4 weeks delivery", included: true },
      { text: "3-month support", included: true },
      { text: "Performance optimization", included: true },
    ],
    ctaText: "Start Project",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established startups with complex needs",
    features: [
      { text: "End-to-end project management", included: true },
      { text: "Complete UI/UX design system", included: true },
      { text: "Enterprise-grade development", included: true },
      { text: "Custom API development", included: true },
      { text: "Scalable cloud architecture", included: true },
      { text: "Custom timeline", included: true },
      { text: "12-month support & maintenance", included: true },
      { text: "Dedicated development team", included: true },
    ],
    ctaText: "Contact Us",
    popular: false,
  },
];

export default function PricingSection() {
  const [billingInterval, setBillingInterval] = useState("monthly");

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your startup's development needs, with options for every stage of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl border bg-white shadow-sm transition-all ${
                plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-white text-center">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="ml-1 text-sm font-medium text-gray-500">
                      {billingInterval === "monthly" ? "/project" : "/year"}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 shrink-0 text-gray-300" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.text}
                      </span>
                      {feature.tooltip && !feature.included && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>{feature.tooltip}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href="#booking">{plan.ctaText}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution? <a href="#booking" className="text-primary font-medium underline hover:text-primary/80">Contact us</a> for tailored pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
