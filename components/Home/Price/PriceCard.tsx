import React from "react";
import { BiCheck } from "react-icons/bi";
import { BriefcaseIcon, Star } from "lucide-react";

type Props = {
  type: "Basic" | "Standard" | "Extended";
  price: string;
};

const features: Record<string, string[]> = {
  Basic: [
    "1 job posting per month",
    "Job displayed for 20 days",
    "Basic candidate search",
    "Email support",
    "Standard listing placement",
  ],
  Standard: [
    "5 job postings per month",
    "Job displayed for 40 days",
    "2 featured job slots",
    "Priority candidate search",
    "Premium Support 24/7",
  ],
  Extended: [
    "Unlimited job postings",
    "Job displayed for 60 days",
    "10 featured job slots",
    "Advanced analytics dashboard",
    "Dedicated account manager",
  ],
};

const styles: Record<string, { card: string; badge: string; price: string; btn: string }> = {
  Basic: {
    card: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
    badge: "",
    price: "text-gray-900 dark:text-white",
    btn: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white",
  },
  Standard: {
    card: "bg-blue-600 border border-blue-600 shadow-2xl shadow-blue-200 dark:shadow-blue-900 scale-105",
    badge: "",
    price: "text-white",
    btn: "bg-white text-blue-600 hover:bg-blue-50",
  },
  Extended: {
    card: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
    badge: "",
    price: "text-gray-900 dark:text-white",
    btn: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white",
  },
};

const isStandard = (type: string) => type === "Standard";

const PriceCard = ({ price, type }: Props) => {
  const s = styles[type];
  const featureList = features[type];
  const highlighted = isStandard(type);

  return (
    <div className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${s.card}`}>

      {/* Recommended badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow-md whitespace-nowrap">
            <Star className="w-3 h-3 fill-amber-900" />
            Most Popular
          </div>
        </div>
      )}

      {/* Icon + Plan name */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${highlighted ? "bg-white/20" : "bg-blue-50 dark:bg-blue-900/30"}`}>
        <BriefcaseIcon className={`w-5 h-5 ${highlighted ? "text-white" : "text-blue-600 dark:text-blue-400"}`} strokeWidth={2} />
      </div>

      <h3 className={`text-sm font-semibold tracking-widest uppercase mb-2 ${highlighted ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`}>
        {type}
      </h3>

      {/* Price */}
      <div className="flex items-end gap-1 mb-1">
        <span className={`text-5xl font-extrabold tracking-tight ${s.price}`}>
          ${price}
        </span>
      </div>
      <p className={`text-sm mb-8 ${highlighted ? "text-blue-200" : "text-gray-400 dark:text-gray-500"}`}>
        per month, billed monthly
      </p>

      {/* Divider */}
      <div className={`border-t mb-6 ${highlighted ? "border-blue-500" : "border-gray-100 dark:border-gray-800"}`} />

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {featureList.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${highlighted ? "bg-white/20" : "bg-blue-50 dark:bg-blue-900/30"}`}>
              <BiCheck className={`w-3 h-3 ${highlighted ? "text-white" : "text-blue-600 dark:text-blue-400"}`} />
            </div>
            <span className={`text-sm leading-snug ${highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className={`mt-8 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${s.btn}`}>
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;