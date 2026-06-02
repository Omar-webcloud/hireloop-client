import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import JobsSection from "@/components/JobsSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0b0b0f] font-sans antialiased overflow-x-hidden">
      <StatsSection />
      
      <div id="jobs">
        <JobsSection />
      </div>
      <div id="company">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <CtaSection />
      <Footer />
    </div>
    
  );
}
