import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Pricing | HireLoop",
  description: "Simple, transparent pricing for job seekers and recruiters.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] pt-12">
      <PricingSection />
    </div>
  );
}
