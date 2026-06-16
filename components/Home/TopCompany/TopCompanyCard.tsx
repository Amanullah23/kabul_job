import Image from "next/image";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { BriefcaseIcon } from "lucide-react";

type Props = {
  data: {
    id: number;
    image: string;
    name: string;
    location: string;
    position: string;
    industry?: string;
  };
};

const TopCompanyCard = ({ data }: Props) => {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 m-3 flex flex-col items-center text-center hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300">

      {/* Logo */}
      <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <Image
          src={data.image}
          alt={data.name}
          width={56}
          height={56}
          className="object-contain"
        />
      </div>

      {/* Company name */}
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-4">
        {data.name}
      </h3>

      {/* Industry */}
      {data.industry && (
        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-medium">
          {data.industry}
        </p>
      )}

      {/* Location */}
      <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-2">
        <GrLocation className="w-3 h-3 shrink-0" />
        <span>{data.location}</span>
      </div>

      {/* Open positions button */}
      <button className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-all duration-300 cursor-pointer">
        <BriefcaseIcon className="w-3.5 h-3.5" strokeWidth={2} />
        {data.position} Open Positions
      </button>
    </div>
  );
};

export default TopCompanyCard;