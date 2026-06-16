import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import PriceCard from "./PriceCard";

const plans = [
  { type: "Basic" as const, price: "199", delay: 0 },
  { type: "Standard" as const, price: "399", delay: 100 },
  { type: "Extended" as const, price: "799", delay: 200 },
];

const Price = () => {
  return (
    <section className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950">
      <SectionHeading
        subHeading="Flexible plans for job seekers and employers of all sizes."
        heading="Simple, Transparent Pricing"
      />

      {/* Toggle hint */}
      <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-3">
        All plans include a <span className="text-blue-600 dark:text-blue-400 font-medium">7-day free trial</span>. No credit card required.
      </p>

      <div className="w-[88%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
        {plans.map(({ type, price, delay }) => (
          <div
            key={type}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={delay}
          >
            <PriceCard type={type} price={price} />
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-12">
        Need a custom plan?{" "}
        <a href="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Contact us
        </a>{" "}
        and we'll build one for you.
      </p>
    </section>
  );
};

export default Price;