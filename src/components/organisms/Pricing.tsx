import { FC } from "react";
import { PricingCard } from "@/components";

const Pricing: FC = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <PricingCard
            title="Basic"
            price={29}
            features={[
              "720p Video Rendering",
              "2GB Cloud Storage",
              "Basic Video Templates",
            ]}
            buttonText="Get Started"
          />
          <PricingCard
            title="Pro"
            price={59}
            features={[
              "1080p Video Rendering",
              "10GB Cloud Storage",
              "Premium Video Templates",
              "Collaboration Tools",
            ]}
            buttonText="Get Started"
            popular
          />
          <PricingCard
            title="Enterprise"
            price={99}
            features={[
              "4K Video Rendering",
              "Unlimited Cloud Storage",
              "Custom Video Templates",
              "Advanced Collaboration Tools",
              "Dedicated Support",
            ]}
            buttonText="Get Started"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
