"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";

const candidates = [
  {
    id: 1,
    name: "Ahmad Khan",
    role: "Frontend Developer",
    location: "Kabul, Afghanistan",
    experience: "4+ Years",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    name: "Sara Mohammadi",
    role: "UI/UX Designer",
    location: "Herat, Afghanistan",
    experience: "5+ Years",
    skills: ["Figma", "Adobe XD", "Illustrator"],
  },
  {
    id: 3,
    name: "Mohammad Ali",
    role: "Backend Developer",
    location: "Mazar, Afghanistan",
    experience: "6+ Years",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    name: "Fatima Rahimi",
    role: "Project Manager",
    location: "Kabul, Afghanistan",
    experience: "7+ Years",
    skills: ["Agile", "Scrum", "Leadership"],
  },
  {
    id: 5,
    name: "Abdul Wasi",
    role: "Graphic Designer",
    location: "Kandahar, Afghanistan",
    experience: "3+ Years",
    skills: ["Photoshop", "Illustrator", "Branding"],
  },
  {
    id: 6,
    name: "Mina Ahmadi",
    role: "Mobile Developer",
    location: "Balkh, Afghanistan",
    experience: "4+ Years",
    skills: ["Flutter", "Firebase", "Dart"],
  },
];

export default function CandidatesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Find Top Talent
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6">
              Discover The Best Candidates In Afghanistan
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Search thousands of professionals and connect with talented
              candidates for your company.
            </p>

            {/* Search */}
            <div className="mt-10 bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Job title or skill"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition">
                <Search size={20} />
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "20K+",
                label: "Registered Candidates",
              },
              {
                number: "5K+",
                label: "Companies",
              },
              {
                number: "10K+",
                label: "Successful Hires",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600">
                  {item.number}
                </h3>
                <p className="text-gray-500 mt-3">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Featured Candidates
              </h2>
              <p className="text-gray-500 mt-2">
                Talented professionals ready to join your company.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                    {candidate.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {candidate.name}
                    </h3>
                    <p className="text-gray-500">
                      {candidate.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {candidate.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {candidate.experience}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {candidate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="mt-8 w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                  View Profile
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-center text-white">
            <Users size={60} className="mx-auto mb-6" />

            <h2 className="text-4xl font-bold">
              Need The Right Candidate?
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Join KarJo today and connect with thousands of professionals
              looking for new opportunities.
            </p>

            <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Browse All Candidates
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}