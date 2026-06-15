import React from "react";
import JobSearchBar from "./JobSearchBar";
import Image from "next/image";

const popularTags = ["Designer", "Developer", "Web", "iOS", "PHP", "Engineer"];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      {/* Blue accent blob top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-950 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="relative w-[90%] md:w-[85%] mx-auto py-24 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div data-aos="fade-right">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            2,020 jobs live today
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Find the job <br />
            <span className="text-blue-600 dark:text-blue-400">
              you actually want.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
            Browse thousands of opportunities across Kabul and Afghanistan —
            full-time, part-time, and remote roles updated daily.
          </p>

          {/* Search bar */}
          <div className="mt-8">
            <JobSearchBar />
          </div>

          {/* Popular tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium mr-1">
              Popular:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer bg-white dark:bg-gray-900"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-10 flex items-center gap-8">
            {[
              { value: "2,020+", label: "Live jobs" },
              { value: "500+", label: "Companies" },
              { value: "293", label: "Added today" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="mx-auto hidden xl:flex justify-center items-center relative"
        >
          {/* Decorative ring */}
          <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dashed border-blue-100 dark:border-blue-900 animate-spin-slow pointer-events-none" />
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 dark:shadow-blue-950">
            <Image
              src="/images/hero.png"
              alt="Find your next job"
              width={520}
              height={520}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;