
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
    name: "Free",
    price: "₹0",
    description: "Perfect for testing your startup idea",
    features: [
      { text: "Choice of app (up to 20 screens) or website (up to 15 pages)", included: true },
      { text: "Supports up to 5,000 users", included: true },
      { text: "Built with React Native and Firebase", included: true },
      { text: "Basic email support", included: true },
      { text: "Firebase integration", included: true },
      { text: "Source code", included: false, tooltip: "Available in paid plans" },
      { text: "Priority support", included: false, tooltip: "Available in paid plans" },
      { text: "App store deployment", included: false, tooltip: "Available in paid plans" },
    ],
    ctaText: "Get Started Free",
    popular: false,
  },
  {
    name: "Startup Essential",
    price: "₹29,999",
    description: "Perfect for launching your startup",
    features: [
      { text: "App (30 screens) and website (20 pages)", included: true },
      { text: "Supports up to 50,000 users", included: true },
      { text: "Built with React Native and Firebase", included: true },
      { text: "Source code included", included: true },
      { text: "Priority email support", included: true },
      { text: "Free Play Store & App Store deployment", included: true },
      { text: "Custom cloud options", included: false, tooltip: "Available in Growth plan" },
      { text: "24/7 support", included: false, tooltip: "Available in Enterprise plan" },
    ],
    ctaText: "Get Started",
    popular: true,
  },
  {
    name: "Growth",
    price: "₹59,999",
    description: "For startups ready to scale",
    features: [
      { text: "App (50 screens) and website (40 pages)", included: true },
      { text: "Supports up to 100,000 users", included: true },
      { text: "Custom cloud storage options", included: true },
      { text: "Choice of coding languages", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "Advanced security features", included: true },
      { text: "Performance optimization", included: true },
    ],
    ctaText: "Get Started",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₹99,999",
    description: "For large-scale applications",
    features: [
      { text: "Unlimited screens and pages", included: true },
      { text: "Unlimited users", included: true },
      { text: "Custom architecture & infrastructure", included: true },
      { text: "Advanced security & compliance", included: true },
      { text: "24/7 premium support", included: true },
      { text: "Dedicated development team", included: true },
      { text: "Custom integrations", included: true },
      { text: "SLA guarantees", included: true },
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
