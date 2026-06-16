"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopCompanyCard from "./TopCompanyCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CompanyData = [
  {
    id: 1,
    image: "/images/j1.png",
    name: "Afghan Telecom",
    location: "Kabul, AF",
    position: "12",
    industry: "Telecommunications",
  },
  {
    id: 2,
    image: "/images/j2.png",
    name: "Roshan Mobile",
    location: "Kabul, AF",
    position: "8",
    industry: "Mobile Networks",
  },
  {
    id: 3,
    image: "/images/j3.png",
    name: "Azizi Bank",
    location: "Kabul, AF",
    position: "15",
    industry: "Banking & Finance",
  },
  {
    id: 4,
    image: "/images/j4.png",
    name: "Etisalat AF",
    location: "Mazar-i-Sharif, AF",
    position: "6",
    industry: "Telecommunications",
  },
  {
    id: 5,
    image: "/images/j1.png",
    name: "AWCC",
    location: "Herat, AF",
    position: "10",
    industry: "Wireless Services",
  },
  {
    id: 6,
    image: "/images/j2.png",
    name: "Kabul Bank",
    location: "Kabul, AF",
    position: "9",
    industry: "Banking & Finance",
  },
];

const TopCompany = () => {
  return (
    <section className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950">
      <SectionHeading
        heading="Top Companies Hiring Now"
        subHeading="Leading Afghan companies trust KabulHire to find exceptional talent."
      />

      {/* Stats row */}
      <div className="flex items-center justify-center gap-8 mt-6">
        {[
          { value: "500+", label: "Companies registered" },
          { value: "2,020+", label: "Open positions" },
          { value: "98%", label: "Satisfaction rate" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="w-[88%] mx-auto mt-12">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
          itemClass="h-full"
        >
          {CompanyData.map((data) => (
            <TopCompanyCard key={data.id} data={data} />
          ))}
        </Carousel>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="/employers"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          View all companies →
        </a>
      </div>
    </section>
  );
};

export default TopCompany;