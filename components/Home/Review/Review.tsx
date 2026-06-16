"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const reviews = [
  {
    image: "/images/u1.png",
    username: "Ahmad Karimi",
    userRole: "Software Engineer · Kabul",
    title: "Found my dream job in under a week!",
    review:
      "I had been searching for months on other platforms with no luck. KabulHire connected me with a top tech company in Kabul within days. The search filters are spot-on and the application process was incredibly smooth.",
    rating: 5,
  },
  {
    image: "/images/u2.png",
    username: "Fatima Noori",
    userRole: "UI/UX Designer · Mazar-i-Sharif",
    title: "The best job platform for Afghan professionals.",
    review:
      "As a designer, I was worried about finding remote opportunities locally. KabulHire had listings I couldn't find anywhere else. I landed a remote position with an international company — truly life-changing.",
    rating: 5,
  },
  {
    image: "/images/u3.png",
    username: "Zubair Rahimi",
    userRole: "HR Manager · Herat",
    title: "Hiring has never been this easy.",
    review:
      "We've been using KabulHire to recruit talent across Afghanistan. The quality of candidates is outstanding and the employer dashboard gives us all the tools we need. Highly recommend for any growing business.",
    rating: 4,
  },
];

const Review = () => {
  return (
    <section className="pt-20 pb-24 bg-white dark:bg-gray-950">
      <SectionHeading
        heading="What Our Users Say"
        subHeading="Thousands of professionals and employers trust KabulHire to find the right match."
      />

      {/* Star summary */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
          4.9 out of 5 — based on 200+ reviews
        </span>
      </div>

      <div className="w-[90%] mx-auto mt-14">
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          dotListClass="custom-dot-list"
          itemClass="pb-4"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Review;