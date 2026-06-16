"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  BriefcaseIcon,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { BiCheck } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    step: "01",
    icon: <BriefcaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" strokeWidth={2} />,
    title: "Create your account",
    desc: "Sign up as an employer in minutes. No setup fees, no contracts — just a simple profile for your company.",
  },
  {
    step: "02",
    icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" strokeWidth={2} />,
    title: "Post your job listing",
    desc: "Fill in the job title, description, requirements, and salary range. Your listing goes live immediately.",
  },
  {
    step: "03",
    icon: <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" strokeWidth={2} />,
    title: "Review applications",
    desc: "Receive applications directly to your dashboard. Filter, shortlist, and connect with the best candidates.",
  },
  {
    step: "04",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" strokeWidth={2} />,
    title: "Hire with confidence",
    desc: "All candidates are verified. Schedule interviews and make your hire — all within KabulHire.",
  },
];

const plans = [
  {
    type: "Basic",
    price: "199",
    desc: "Perfect for small businesses hiring occasionally.",
    features: [
      "1 active job posting",
      "Job displayed for 20 days",
      "Basic candidate search",
      "Email support",
      "Standard placement",
    ],
    highlighted: false,
  },
  {
    type: "Standard",
    price: "399",
    desc: "Best for growing teams with regular hiring needs.",
    features: [
      "5 job postings per month",
      "Job displayed for 40 days",
      "2 featured job slots",
      "Priority candidate search",
      "Premium Support 24/7",
    ],
    highlighted: true,
  },
  {
    type: "Extended",
    price: "799",
    desc: "For large companies with high-volume hiring.",
    features: [
      "Unlimited job postings",
      "Job displayed for 60 days",
      "10 featured job slots",
      "Advanced analytics dashboard",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

const companies = [
  { name: "Afghan Telecom", industry: "Telecom" },
  { name: "Roshan Mobile", industry: "Mobile" },
  { name: "Azizi Bank", industry: "Finance" },
  { name: "Etisalat AF", industry: "Telecom" },
  { name: "AWCC", industry: "Wireless" },
  { name: "Kabul Bank", industry: "Finance" },
  { name: "Afghan Wireless", industry: "Wireless" },
  { name: "Salaam Telecom", industry: "Telecom" },
];

const jobCategories = [
  "Engineering", "Design", "Marketing", "Finance",
  "Management", "Customer Service", "Health & Care", "Analytics",
];

const jobTypes = ["Full Time", "Part Time", "Remote", "Contract", "Internship"];

// ─── Sub-components ────────────────────────────────────────────────────────────

const PlanCard = ({ plan }: { plan: typeof plans[0] }) => (
  <div className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300
    ${plan.highlighted
      ? "bg-blue-600 border border-blue-600 shadow-2xl shadow-blue-200 dark:shadow-blue-900 scale-105"
      : "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"}`}
  >
    {plan.highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow-md whitespace-nowrap">
          ⭐ Most Popular
        </div>
      </div>
    )}

    <h3 className={`text-xs font-semibold tracking-widest uppercase mb-2 ${plan.highlighted ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`}>
      {plan.type}
    </h3>
    <div className="flex items-end gap-1 mb-1">
      <span className={`text-5xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
        ${plan.price}
      </span>
    </div>
    <p className={`text-sm mb-2 ${plan.highlighted ? "text-blue-200" : "text-gray-400 dark:text-gray-500"}`}>per month</p>
    <p className={`text-sm mb-6 leading-snug ${plan.highlighted ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}>{plan.desc}</p>

    <div className={`border-t mb-6 ${plan.highlighted ? "border-blue-500" : "border-gray-100 dark:border-gray-800"}`} />

    <ul className="space-y-3 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? "bg-white/20" : "bg-blue-50 dark:bg-blue-900/30"}`}>
            <BiCheck className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-blue-600 dark:text-blue-400"}`} />
          </div>
          <span className={`text-sm leading-snug ${plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>{f}</span>
        </li>
      ))}
    </ul>

    <Link
      href="/post-job"
      className={`mt-8 w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer block
        ${plan.highlighted
          ? "bg-white text-blue-600 hover:bg-blue-50"
          : "border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white"}`}
    >
      Get Started
    </Link>
  </div>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────

const EmployersPage = () => {
  const [form, setForm] = useState({
    company: "", email: "", jobTitle: "", category: "", jobType: "", location: "", salary: "", description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.company || !form.email || !form.jobTitle) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">

     {/* ── Hero ── */}
<section className="pt-32 pb-20 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-950 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
  <div className="w-[88%] mx-auto relative text-center max-w-3xl mx-auto">
    <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      For Employers
    </div>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
      Find the right people <br />
      <span className="text-blue-600 dark:text-blue-400">for your team.</span>
    </h1>
    <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto leading-relaxed mb-10">
      KabulHire connects Afghan employers with thousands of verified professionals. Post jobs, review applications, and hire faster — all in one place.
    </p>
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <a href="#post-job" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-200 dark:shadow-blue-900">
        <BriefcaseIcon className="w-4 h-4" strokeWidth={2} />
        Post a Job Now
      </a>
      <a href="#how-it-works" className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 text-sm font-semibold rounded-xl transition-all bg-white dark:bg-gray-900">
        How it works →
      </a>
    </div>

    {/* Stats */}
    <div className="mt-14 flex items-center justify-center gap-10 flex-wrap">
      {[
        { value: "12,000+", label: "Verified candidates" },
        { value: "500+", label: "Active employers" },
        { value: "2,020+", label: "Live job listings" },
        { value: "93%", label: "Hire success rate" },
      ].map((s) => (
        <div key={s.label}>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950">
        <div className="w-[88%] mx-auto">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 text-center">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm max-w-md mx-auto mb-14">
            From posting to hiring — KabulHire makes it simple in 4 easy steps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.step} data-aos="fade-up" data-aos-delay={i * 100} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-blue-100 dark:border-blue-900 z-10" />
                )}
                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-extrabold text-gray-100 dark:text-gray-800">{step.step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured companies ── */}
      <section className="py-16 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
        <div className="w-[88%] mx-auto">
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest mb-8">
            Trusted by leading Afghan companies
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {companies.map((c) => (
              <div key={c.name} className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center hover:border-blue-200 dark:hover:border-blue-800 transition-all">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <BriefcaseIcon className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight">{c.name}</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{c.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950">
        <div className="w-[88%] mx-auto">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 text-center">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-3 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm mb-4">
            All plans include a <span className="text-blue-600 dark:text-blue-400 font-medium">7-day free trial</span>. No credit card required.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {plans.map((plan) => <PlanCard key={plan.type} plan={plan} />)}
          </div>
          <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-10">
            Need a custom plan?{" "}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* ── Post a Job Form ── */}
      <section id="post-job" className="pt-20 pb-24 bg-white dark:bg-gray-950">
        <div className="w-[88%] mx-auto max-w-3xl">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 text-center">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-3 tracking-tight">
            Post your first job
          </h2>
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm mb-12">
            Fill in the details below and your listing will go live instantly.
          </p>

          {submitted ? (
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-16 text-center shadow-lg">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Job Posted Successfully!</h3>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">
                Your listing is now live. You'll start receiving applications shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ company: "", email: "", jobTitle: "", category: "", jobType: "", location: "", salary: "", description: "" }); }}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
              >
                Post Another Job
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Company name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Company Name *</label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    placeholder="e.g. Afghan Telecom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Contact Email *</label>
                  <input
                    name="email" value={form.email} onChange={handleChange} type="email"
                    placeholder="hr@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Job title */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Job Title *</label>
                  <input
                    name="jobTitle" value={form.jobTitle} onChange={handleChange}
                    placeholder="e.g. Senior Frontend Developer"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Category */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    name="category" value={form.category} onChange={handleChange}
                    className="w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="">Select category</option>
                    {jobCategories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-[42px] w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Job type */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Job Type</label>
                  <select
                    name="jobType" value={form.jobType} onChange={handleChange}
                    className="w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="">Select type</option>
                    {jobTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-[42px] w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Location</label>
                  <input
                    name="location" value={form.location} onChange={handleChange}
                    placeholder="e.g. Kabul, AF"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Salary */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Salary Range (USD / month)</label>
                  <input
                    name="salary" value={form.salary} onChange={handleChange}
                    placeholder="e.g. $800 – $1,200"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Description */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Job Description</label>
                  <textarea
                    name="description" value={form.description} onChange={handleChange}
                    placeholder="Describe the role, responsibilities, and requirements..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-gray-400 dark:text-gray-500">* Required fields</p>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-200 dark:shadow-blue-900 cursor-pointer"
                >
                  <BriefcaseIcon className="w-4 h-4" strokeWidth={2} />
                  Post Job Now
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative w-[88%] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to find your next hire?
          </h2>
          <p className="text-blue-100 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Join 500+ Afghan companies already using KabulHire to build their teams.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#post-job"
              className="px-8 py-3.5 bg-white text-blue-600 hover:bg-blue-50 text-sm font-bold rounded-xl transition-all shadow-md"
            >
              Post a Job — It's Free
            </a>
            <Link
              href="/find-job"
              className="px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 text-sm font-semibold rounded-xl transition-all"
            >
              Browse Candidates →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default EmployersPage;