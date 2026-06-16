import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import JobCard from "./JobCard";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    image: "/images/j1.png",
    title: "Senior Frontend Developer",
    company: "Afghan Telecom",
    location: "Kabul, AF",
    jobType: "Full Time",
    urgency: "Urgent",
    salary: "$800 – $1,200",
    category: "Engineering",
  },
  {
    id: 2,
    image: "/images/j2.png",
    title: "UI/UX Designer",
    company: "Roshan Mobile",
    location: "Kabul, AF",
    jobType: "Full Time",
    urgency: "Urgent",
    salary: "$600 – $900",
    category: "Design",
  },
  {
    id: 3,
    image: "/images/j3.png",
    title: "Backend Engineer (Node.js)",
    company: "Azizi Bank",
    location: "Kabul, AF",
    jobType: "Full Time",
    urgency: "Contract",
    salary: "$900 – $1,400",
    category: "Engineering",
  },
  {
    id: 4,
    image: "/images/j4.png",
    title: "Android Developer",
    company: "Etisalat AF",
    location: "Mazar-i-Sharif, AF",
    jobType: "Full Time",
    urgency: "Urgent",
    salary: "$700 – $1,000",
    category: "Mobile",
  },
  {
    id: 5,
    image: "/images/j5.png",
    title: "Digital Marketing Specialist",
    company: "AWCC",
    location: "Herat, AF",
    jobType: "Part Time",
    urgency: "Private",
    salary: "$400 – $600",
    category: "Marketing",
  },
  {
    id: 6,
    image: "/images/j6.png",
    title: "Data Analyst",
    company: "Kabul Bank",
    location: "Kabul, AF",
    jobType: "Full Time",
    urgency: "Urgent",
    salary: "$750 – $1,100",
    category: "Analytics",
  },
  {
    id: 7,
    image: "/images/j7.png",
    title: "Project Manager",
    company: "Afghan Wireless",
    location: "Kabul, AF",
    jobType: "Full Time",
    urgency: "Contract",
    salary: "$1,000 – $1,500",
    category: "Management",
  },
  {
    id: 8,
    image: "/images/j8.png",
    title: "Network Engineer",
    company: "Salaam Telecom",
    location: "Kandahar, AF",
    jobType: "Full Time",
    urgency: "Private",
    salary: "$800 – $1,000",
    category: "Networking",
  },
  {
    id: 9,
    image: "/images/j9.png",
    title: "DevOps Engineer",
    company: "Turquoise Mountain",
    location: "Kabul, AF",
    jobType: "Remote",
    urgency: "Urgent",
    salary: "$1,200 – $1,800",
    category: "Engineering",
  },
];

const Job = () => {
  return (
    <section className="pt-20 pb-24 bg-white dark:bg-gray-950">
      <SectionHeading
        heading="Featured Jobs"
        subHeading="Hand-picked opportunities from top Afghan employers — updated daily."
      />

      {/* Filter pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mt-6">
        {["All", "Full Time", "Part Time", "Remote", "Contract"].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 cursor-pointer
              ${filter === "All"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="w-[90%] sm:w-[85%] mt-12 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 80}
          >
            <JobCard job={job} />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/find-job"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md shadow-blue-200 dark:shadow-blue-900"
        >
          Browse All Jobs →
        </Link>
      </div>
    </section>
  );
};

export default Job;