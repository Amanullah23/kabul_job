import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const JobSearchBar = () => {
  return (
    <div className="w-full max-w-2xl">
      <div className="flex flex-col sm:flex-row items-stretch bg-white dark:bg-gray-900 rounded-2xl shadow-lg shadow-gray-200/60 dark:shadow-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Job title input */}
        <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-800">
          <MdSearch className="text-blue-500 text-xl shrink-0" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
          />
        </div>

        {/* Location input */}
        <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 border-gray-100 dark:border-gray-800">
          <FaMapMarkerAlt className="text-blue-500 text-base shrink-0" />
          <input
            type="text"
            placeholder="City or province"
            className="w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
          />
        </div>

        {/* Search button */}
        <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-8 py-4 transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0">
          Find Jobs
        </button>
      </div>
    </div>
  );
};

export default JobSearchBar;