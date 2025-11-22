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
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CompanyData = [
  {
    id: 1,
    image: "/images/j1.png",
    name: "Software",
    location: "Kabul,AF",
    position: "40",
  },
  {
    id: 2,
    image: "/images/j2.png",
    name: "Software",
    location: "Kabul,AF",
    position: "40",
  },
  {
    id: 3,
    image: "/images/j3.png",
    name: "Software",
    location: "Kabul,AF",
    position: "40",
  },
  {
    id: 4,
    image: "/images/j4.png",
    name: "Software",
    location: "Kabul,AF",
    position: "40",
  },
];

const TopCompany = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        subHeading="Some of the companies we've helped recruit excellent applicants over the years."
        heading="Top Company Registered"
      />
      <div className="w-[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {CompanyData.map((data)=>{
            return <TopCompanyCard key={data.id} data={data}/>;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default TopCompany;
