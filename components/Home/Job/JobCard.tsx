import Image from "next/image";
import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { BriefcaseIcon } from "lucide-react";

type Props = {
  job: {
    id: number;
    image: string;
    title: string;
    company: string;
    location: string;
    jobType: string;
    urgency: string;
    salary?: string;
    category?: string;
  };
};

const urgencyStyles: Record<string, string> = {
  Urgent: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900",
  Private: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900",
  Contract: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900",
};

const JobCard = ({ job }: Props) => {
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 relative flex flex-col gap-4">

      {/* Bookmark */}
      <button
        onClick={() => setSaved(!saved)}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 cursor-pointer"
        aria-label="Save job"
      >
        {saved
          ? <BsBookmarkFill className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          : <BsBookmark className="w-3.5 h-3.5 text-gray-400" />
        }
      </button>

      {/* Company logo + info */}
      <div className="flex items-center gap-4 pr-8">
        <div className="w-12 h-12 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0">
          <Image
            src={job.image}
            alt={job.company}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
            {job.title}
          </h3>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
            {job.company}
          </p>
        </div>
      </div>

      {/* Meta: location + category */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
          <GrLocation className="w-3.5 h-3.5 shrink-0" />
          <span>{job.location}</span>
        </div>
        {job.category && (
          <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <BriefcaseIcon className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
            <span>{job.category}</span>
          </div>
        )}
      </div>

      {/* Salary */}
      {job.salary && (
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {job.salary}
          <span className="text-xs font-normal text-gray-400 dark:text-gray-500"> / month</span>
        </p>
      )}

      {/* Tags + Apply */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50 dark:border-gray-800">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
            {job.jobType}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${urgencyStyles[job.urgency] ?? urgencyStyles["Private"]}`}>
            {job.urgency}
          </span>
        </div>
        <button className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 transition-all duration-200 cursor-pointer whitespace-nowrap">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;