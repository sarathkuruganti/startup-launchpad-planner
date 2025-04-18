
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceSection />
        <PricingSection />
        <PortfolioSection />
        <TestimonialSection />
        <CtaSection />
        <FaqSection />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
