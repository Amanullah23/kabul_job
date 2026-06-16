"use client";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { BriefcaseIcon, SlidersHorizontal, X } from "lucide-react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { label: "All Jobs", value: "all", count: 2020 },
  { label: "Engineering", value: "Engineering", count: 540 },
  { label: "Design", value: "Design", count: 210 },
  { label: "Marketing", value: "Marketing", count: 180 },
  { label: "Finance", value: "Finance", count: 160 },
  { label: "Management", value: "Management", count: 130 },
  { label: "Mobile", value: "Mobile", count: 95 },
  { label: "Analytics", value: "Analytics", count: 88 },
];

const jobTypes = ["Full Time", "Part Time", "Remote", "Contract", "Internship"];
const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Director"];
const salaryRanges = ["$0 – $300", "$300 – $600", "$600 – $1,000", "$1,000 – $2,000", "$2,000+"];

const urgencyStyles: Record<string, string> = {
  Urgent: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900",
  Private: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900",
  Contract: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900",
};

const allJobs = [
  { id: 1, image: "/images/j1.png", title: "Senior Frontend Developer", company: "Afghan Telecom", location: "Kabul, AF", jobType: "Full Time", urgency: "Urgent", salary: "$800 – $1,200", category: "Engineering" },
  { id: 2, image: "/images/j2.png", title: "UI/UX Designer", company: "Roshan Mobile", location: "Kabul, AF", jobType: "Full Time", urgency: "Urgent", salary: "$600 – $900", category: "Design" },
  { id: 3, image: "/images/j3.png", title: "Backend Engineer (Node.js)", company: "Azizi Bank", location: "Kabul, AF", jobType: "Full Time", urgency: "Contract", salary: "$900 – $1,400", category: "Engineering" },
  { id: 4, image: "/images/j4.png", title: "Android Developer", company: "Etisalat AF", location: "Mazar-i-Sharif, AF", jobType: "Full Time", urgency: "Urgent", salary: "$700 – $1,000", category: "Mobile" },
  { id: 5, image: "/images/j5.png", title: "Digital Marketing Specialist", company: "AWCC", location: "Herat, AF", jobType: "Part Time", urgency: "Private", salary: "$400 – $600", category: "Marketing" },
  { id: 6, image: "/images/j6.png", title: "Data Analyst", company: "Kabul Bank", location: "Kabul, AF", jobType: "Full Time", urgency: "Urgent", salary: "$750 – $1,100", category: "Analytics" },
  { id: 7, image: "/images/j7.png", title: "Project Manager", company: "Afghan Wireless", location: "Kabul, AF", jobType: "Full Time", urgency: "Contract", salary: "$1,000 – $1,500", category: "Management" },
  { id: 8, image: "/images/j8.png", title: "Network Engineer", company: "Salaam Telecom", location: "Kandahar, AF", jobType: "Full Time", urgency: "Private", salary: "$800 – $1,000", category: "Engineering" },
  { id: 9, image: "/images/j9.png", title: "DevOps Engineer", company: "Turquoise Mountain", location: "Kabul, AF", jobType: "Remote", urgency: "Urgent", salary: "$1,200 – $1,800", category: "Engineering" },
  { id: 10, image: "/images/j1.png", title: "React Native Developer", company: "Roshan Mobile", location: "Kabul, AF", jobType: "Remote", urgency: "Urgent", salary: "$900 – $1,300", category: "Mobile" },
  { id: 11, image: "/images/j2.png", title: "Graphic Designer", company: "Afghan Telecom", location: "Kabul, AF", jobType: "Part Time", urgency: "Private", salary: "$300 – $500", category: "Design" },
  { id: 12, image: "/images/j3.png", title: "Financial Analyst", company: "Azizi Bank", location: "Kabul, AF", jobType: "Full Time", urgency: "Urgent", salary: "$850 – $1,200", category: "Finance" },
];

const ITEMS_PER_PAGE = 6;

// ─── Job Card ─────────────────────────────────────────────────────────────────

const JobCard = ({ job }: { job: typeof allJobs[0] }) => {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 relative flex flex-col gap-3">
      <button
        onClick={() => setSaved(!saved)}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 cursor-pointer"
      >
        {saved
          ? <BsBookmarkFill className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          : <BsBookmark className="w-3.5 h-3.5 text-gray-400" />}
      </button>

      <div className="flex items-center gap-3 pr-8">
        <div className="w-11 h-11 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0">
          <Image src={job.image} alt={job.company} width={36} height={36} className="object-contain" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{job.title}</h3>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{job.company}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
          <GrLocation className="w-3 h-3 shrink-0" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
          <BriefcaseIcon className="w-3 h-3 shrink-0" strokeWidth={2} />
          <span>{job.category}</span>
        </div>
      </div>

      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
        {job.salary}
        <span className="text-xs font-normal text-gray-400 dark:text-gray-500"> / month</span>
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-gray-50 dark:border-gray-800">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
            {job.jobType}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${urgencyStyles[job.urgency] ?? urgencyStyles["Private"]}`}>
            {job.urgency}
          </span>
        </div>
        <button className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-600 transition-all duration-200 cursor-pointer">
          Apply Now
        </button>
      </div>
    </div>
  );
};

// ─── Filter Sidebar ───────────────────────────────────────────────────────────

const FilterSidebar = ({
  selectedTypes, setSelectedTypes,
  selectedExperience, setSelectedExperience,
  selectedSalary, setSelectedSalary,
  onClear,
}: {
  selectedTypes: string[];
  setSelectedTypes: (v: string[]) => void;
  selectedExperience: string[];
  setSelectedExperience: (v: string[]) => void;
  selectedSalary: string;
  setSelectedSalary: (v: string) => void;
  onClear: () => void;
}) => {
  const toggle = (arr: string[], val: string, set: (v: string[]) => void) => {
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  return (
    <aside className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 sticky top-24 space-y-7">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white">Filters</h2>
        <button onClick={onClear} className="text-xs text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
          Clear all
        </button>
      </div>

      {/* Job Type */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggle(selectedTypes, type, setSelectedTypes)}
                className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 accent-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Experience */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Experience</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedExperience.includes(level)}
                onChange={() => toggle(selectedExperience, level, setSelectedExperience)}
                className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 accent-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Salary */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Salary Range</h3>
        <div className="space-y-2">
          {salaryRanges.map((range) => (
            <label key={range} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="salary"
                checked={selectedSalary === range}
                onChange={() => setSelectedSalary(range)}
                className="w-4 h-4 border-gray-300 dark:border-gray-600 accent-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {range}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

const FindJobPage = () => {
  const [search, setSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedSalary, setSelectedSalary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [sortBy, setSortBy] = useState("Latest");

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedExperience([]);
    setSelectedSalary("");
    setActiveCategory("all");
    setSearch("");
    setLocationSearch("");
  };

  // Filter logic
  const filtered = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = job.location.toLowerCase().includes(locationSearch.toLowerCase());
    const matchesCategory = activeCategory === "all" || job.category === activeCategory;
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.jobType);
    return matchesSearch && matchesLocation && matchesCategory && matchesType;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const activeFiltersCount = selectedTypes.length + selectedExperience.length + (selectedSalary ? 1 : 0);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* ── Hero banner ── */}
      <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 pt-28 pb-12">
        <div className="w-[88%] mx-auto">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            Browse Opportunities
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
            Find Your Next Job
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 max-w-lg">
            {filtered.length} open positions across Afghanistan — updated daily.
          </p>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row items-stretch bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden max-w-2xl">
            <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-800">
              <MdSearch className="text-blue-500 text-xl shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                placeholder="Job title or company"
                className="w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 border-gray-100 dark:border-gray-800">
              <FaMapMarkerAlt className="text-blue-500 text-base shrink-0" />
              <input
                type="text"
                value={locationSearch}
                onChange={(e) => { setLocationSearch(e.target.value); setCurrentPage(1); }}
                placeholder="City or province"
                className="w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-4 transition-colors cursor-pointer shrink-0">
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="w-[88%] mx-auto py-10">

        {/* ── Category tabs ── */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => { setActiveCategory(cat.value); setCurrentPage(1); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-150 cursor-pointer
                ${activeCategory === cat.value
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {cat.label}
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeCategory === cat.value ? "bg-white/20 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* ── Content: sidebar + grid ── */}
        <div className="flex gap-8 items-start">

          {/* Sidebar — desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <FilterSidebar
              selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}
              selectedExperience={selectedExperience} setSelectedExperience={setSelectedExperience}
              selectedSalary={selectedSalary} setSelectedSalary={setSelectedSalary}
              onClear={clearFilters}
            />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span> jobs
              </p>
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setShowMobileFilter(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-4 pr-8 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 outline-none cursor-pointer"
                  >
                    <option>Latest</option>
                    <option>Salary: High to Low</option>
                    <option>Salary: Low to High</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Job grid */}
            {paginated.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paginated.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                  <BriefcaseIcon className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">No jobs found</h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">Try adjusting your search or filters.</p>
                <button onClick={clearFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  Clear all filters
                </button>
              </div>
            )}

            {/* ── Pagination ── */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 hover:border-blue-400 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-9 h-9 rounded-xl text-sm font-medium transition-all cursor-pointer
                      ${currentPage === i + 1
                        ? "bg-blue-600 text-white border border-blue-600"
                        : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 hover:border-blue-400 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile filter drawer ── */}
      <>
        <div
          onClick={() => setShowMobileFilter(false)}
          className={`fixed inset-0 z-[100000] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden
            ${showMobileFilter ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />
        <div className={`fixed top-0 left-0 h-full w-[85%] sm:w-[360px] z-[100001] bg-white dark:bg-gray-950 shadow-2xl
          transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto
          ${showMobileFilter ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-950 z-10">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white">Filters</h2>
            <button onClick={() => setShowMobileFilter(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="p-6">
            <FilterSidebar
              selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}
              selectedExperience={selectedExperience} setSelectedExperience={setSelectedExperience}
              selectedSalary={selectedSalary} setSelectedSalary={setSelectedSalary}
              onClear={clearFilters}
            />
          </div>
          <div className="sticky bottom-0 px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
            <button
              onClick={() => setShowMobileFilter(false)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      </>
    </main>
  );
};

export default FindJobPage;