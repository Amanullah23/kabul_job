import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

type Props = {
  image: string;
  username: string;
  title: string;
  userRole: string;
  review: string;
  rating?: number;
};

const ReviewCard = ({ image, username, title, userRole, review, rating = 5 }: Props) => {
  return (
    <div className="w-full lg:w-[65%] mx-auto bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl px-10 py-10 shadow-lg shadow-gray-100 dark:shadow-gray-900">

      {/* Quote icon */}
      <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
        <FaQuoteLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      </div>

      {/* Review title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      {/* Review text */}
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
        {review}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-100 dark:border-gray-800 my-6" />

      {/* Footer: avatar + name + stars */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 shrink-0">
            <Image
              src={image}
              alt={username}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {username}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              {userRole}
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400" : "text-gray-200 dark:text-gray-700"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;