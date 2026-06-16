import Image from "next/image";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { BriefcaseIcon, Users, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

const features = [
  "Post jobs and receive applications within hours",
  "Access a pool of verified Afghan professionals",
  "Smart matching based on skills and experience",
  "Dedicated employer dashboard and analytics",
];

const stats = [
  { icon: <Users className="w-4 h-4" />, value: "12,000+", label: "Registered candidates" },
  { icon: <BriefcaseIcon className="w-4 h-4" />, value: "500+", label: "Hiring companies" },
  { icon: <TrendingUp className="w-4 h-4" />, value: "93%", label: "Successful placements" },
];

const Info = () => {
  return (
    <section className="pt-20 pb-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="w-[88%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Image + floating cards ── */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 dark:shadow-blue-950">
            <Image
              src="/images/a.png"
              alt="Hire top talent in Afghanistan"
              width={700}
              height={700}
              className="object-cover w-full"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating stat card — top right */}
          <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-5 py-4 shadow-lg shadow-gray-100 dark:shadow-gray-900 hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">93%</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Success rate</p>
            </div>
          </div>

          {/* Floating card — bottom left */}
          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-5 py-4 shadow-lg shadow-gray-100 dark:shadow-gray-900 hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
              <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">12,000+</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Verified candidates</p>
            </div>
          </div>

          {/* Trust badge */}
          <div className="absolute bottom-6 right-4 bg-blue-600 rounded-2xl px-4 py-3 shadow-lg hidden sm:flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <p className="text-xs font-semibold text-white">Verified Employers Only</p>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay={150}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            For Employers
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Hire the best talent <br />
            <span className="text-blue-600 dark:text-blue-400">across Afghanistan.</span>
          </h2>

          <p className="mt-5 text-gray-500 dark:text-gray-400 leading-relaxed text-base max-w-md">
            Post your job openings and connect with thousands of qualified Afghan
            professionals — from Kabul to Herat. Fast, simple, and effective hiring.
          </p>

          {/* Feature checklist */}
          <ul className="mt-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <BiCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 text-center"
              >
                <div className="w-7 h-7 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-2">
                  {stat.icon}
                </div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <Link
              href="/post-job"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md shadow-blue-200 dark:shadow-blue-900"
            >
              <BriefcaseIcon className="w-4 h-4" strokeWidth={2} />
              Post a Job
            </Link>
            <Link
              href="/employers"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-semibold rounded-xl transition-all duration-200 bg-white dark:bg-gray-900"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;