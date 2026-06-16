"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Users, ArrowRight, SlidersHorizontal, X } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const candidates = [
  {
    id: 1,
    name: "Ahmad Khan",
    role: "Frontend Developer",
    location: "Kabul, Afghanistan",
    experience: "4+ Years",
    skills: ["React", "Next.js", "Tailwind"],
    available: true,
  },
  {
    id: 2,
    name: "Sara Mohammadi",
    role: "UI/UX Designer",
    location: "Herat, Afghanistan",
    experience: "5+ Years",
    skills: ["Figma", "Adobe XD", "Illustrator"],
    available: true,
  },
  {
    id: 3,
    name: "Mohammad Ali",
    role: "Backend Developer",
    location: "Mazar, Afghanistan",
    experience: "6+ Years",
    skills: ["Node.js", "Express", "MongoDB"],
    available: false,
  },
  {
    id: 4,
    name: "Fatima Rahimi",
    role: "Project Manager",
    location: "Kabul, Afghanistan",
    experience: "7+ Years",
    skills: ["Agile", "Scrum", "Leadership"],
    available: true,
  },
  {
    id: 5,
    name: "Abdul Wasi",
    role: "Graphic Designer",
    location: "Kandahar, Afghanistan",
    experience: "3+ Years",
    skills: ["Photoshop", "Illustrator", "Branding"],
    available: true,
  },
  {
    id: 6,
    name: "Mina Ahmadi",
    role: "Mobile Developer",
    location: "Balkh, Afghanistan",
    experience: "4+ Years",
    skills: ["Flutter", "Firebase", "Dart"],
    available: false,
  },
];

const roles = ["All Roles", "Frontend Developer", "UI/UX Designer", "Backend Developer", "Project Manager", "Graphic Designer", "Mobile Developer"];
const experienceLevels = ["Any Experience", "1–3 Years", "3–5 Years", "5+ Years"];
const locations = ["All Locations", "Kabul", "Herat", "Mazar", "Kandahar", "Balkh"];

const stats = [
  { value: "20K+", label: "Registered Candidates" },
  { value: "5K+", label: "Companies Hiring" },
  { value: "10K+", label: "Successful Hires" },
];

// ─── Candidate Card ───────────────────────────────────────────────────────────

const CandidateCard = ({ candidate, index }: { candidate: typeof candidates[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 flex flex-col"
  >
    {/* Avatar + name */}
    <div className="flex items-center gap-4 mb-5">
      <div className="relative shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-extrabold">
          {candidate.name.charAt(0)}
        </div>
        {/* Available dot */}
        <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 ${candidate.available ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`} />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">{candidate.name}</h3>
        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">{candidate.role}</p>
      </div>
      <div className="ml-auto">
        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${candidate.available ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900" : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700"}`}>
          {candidate.available ? "Available" : "Hired"}
        </span>
      </div>
    </div>

    {/* Meta */}
    <div className="space-y-2 mb-5">
      <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
        <MapPin className="w-3.5 h-3.5 shrink-0" />
        <span>{candidate.location}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
        <Briefcase className="w-3.5 h-3.5 shrink-0" />
        <span>{candidate.experience} experience</span>
      </div>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5 mb-6">
      {candidate.skills.map((skill) => (
        <span key={skill} className="text-[11px] font-medium px-2.5 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
          {skill}
        </span>
      ))}
    </div>

    {/* CTA */}
    <button className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-all duration-300 cursor-pointer">
      View Profile
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  </motion.div>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function CandidatesPage() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [experienceFilter, setExperienceFilter] = useState("Any Experience");
  const [showFilter, setShowFilter] = useState(false);

  const filtered = candidates.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesLocation = locationFilter === "All Locations" || c.location.includes(locationFilter);
    const matchesRole = roleFilter === "All Roles" || c.role === roleFilter;
    return matchesSearch && matchesLocation && matchesRole;
  });

  const clearFilters = () => {
    setSearch("");
    setLocationFilter("All Locations");
    setRoleFilter("All Roles");
    setExperienceFilter("Any Experience");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-950 rounded-full blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="relative w-[88%] mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Find Top Talent
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-5">
              Discover the best <br />
              <span className="text-blue-600 dark:text-blue-400">Afghan professionals.</span>
            </h1>

            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Search thousands of verified candidates across Afghanistan — from Kabul to Herat — ready to join your team.
            </p>

            {/* Search bar */}
            <div className="flex flex-col sm:flex-row items-stretch bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden max-w-2xl mx-auto">
              <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-800">
                <Search className="text-blue-500 w-4 h-4 shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Name, role, or skill"
                  className="w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
                />
                {search && (
                  <button onClick={() => setSearch("")}>
                    <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 border-gray-100 dark:border-gray-800">
                <MapPin className="text-blue-500 w-4 h-4 shrink-0" />
                <input
                  type="text"
                  value={locationFilter === "All Locations" ? "" : locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value || "All Locations")}
                  placeholder="City or province"
                  className="w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-4 transition-colors cursor-pointer shrink-0">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="w-[88%] mx-auto grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Candidates grid ── */}
      <section className="py-16">
        <div className="w-[88%] mx-auto">

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Featured Candidates
              </h2>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                {filtered.length} professionals found
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {/* Role filter */}
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 outline-none cursor-pointer"
              >
                {roles.map((r) => <option key={r}>{r}</option>)}
              </select>

              {/* Location filter */}
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 outline-none cursor-pointer"
              >
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>

              {/* Clear */}
              <button
                onClick={clearFilters}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 hover:text-blue-600 hover:border-blue-300 transition-all cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((candidate, index) => (
                <CandidateCard key={candidate.id} candidate={candidate} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-300 dark:text-gray-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">No candidates found</h3>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">Try adjusting your search or filters.</p>
              <button onClick={clearFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="pb-24">
        <div className="w-[88%] mx-auto">
          <div className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="relative">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Need the right candidate?
              </h2>
              <p className="text-blue-100 text-sm max-w-md mx-auto leading-relaxed mb-8">
                Join KabulHire today and connect with thousands of verified Afghan professionals looking for new opportunities.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button className="px-8 py-3.5 bg-white text-blue-600 hover:bg-blue-50 text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer">
                  Browse All Candidates
                </button>
                <a href="/employers#post-job" className="px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 text-sm font-semibold rounded-xl transition-all">
                  Post a Job →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}