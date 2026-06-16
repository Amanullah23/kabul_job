"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

type Props = {
  category: {
    id: number;
    categoryName: string;
    openPositions: number;
    icon: React.JSX.Element;
    color: string;
  };
};

const CategoryCard = ({ category }: Props) => {
  return (
    <Tilt scale={1.05} transitionSpeed={400} tiltMaxAngleX={8} tiltMaxAngleY={8}>
      <Link href={`/find-job?category=${encodeURIComponent(category.categoryName)}`}>
        <div className="group p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 cursor-pointer text-center">

          {/* Icon container */}
          <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${category.color}`}>
            {category.icon}
          </div>

          {/* Name */}
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
            {category.categoryName}
          </h3>

          {/* Position count */}
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {category.openPositions} open positions
          </p>

          {/* Hover CTA */}
          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Browse jobs →
          </p>
        </div>
      </Link>
    </Tilt>
  );
};

export default CategoryCard;