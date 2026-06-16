"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Search, Building2 } from "lucide-react";

export default function EmployersPage() {
  const features = [
    {
      icon: <Users size={35} />,
      title: "Reach Top Talent",
      desc: "Connect with thousands of skilled candidates across Afghanistan.",
    },
    {
      icon: <Search size={35} />,
      title: "Smart Matching",
      desc: "Find the right candidates faster with advanced filtering.",
    },
    {
      icon: <Briefcase size={35} />,
      title: "Easy Job Posting",
      desc: "Create and manage job listings in just a few clicks.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              For Employers
            </span>

            <h1 className="text-5xl font-bold mt-6 text-gray-900 leading-tight">
              Hire The Best Talent For Your Company
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Post jobs, discover qualified candidates, and grow your company
              with KarJo's recruitment platform.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 transition">
                Post a Job
              </button>

              <button className="border border-gray-300 px-7 py-3 rounded-xl hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
              <Building2
                className="text-blue-600 mx-auto mb-6"
                size={70}
              />

              <h3 className="text-2xl font-bold text-center">
                5,000+ Employers
              </h3>

              <p className="text-center text-gray-500 mt-3">
                Trusted by companies and organizations across Afghanistan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Employers Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="text-blue-600 mb-5">{item.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <h3 className="text-5xl font-bold">20K+</h3>
              <p className="mt-3 text-blue-100">Registered Candidates</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">5K+</h3>
              <p className="mt-3 text-blue-100">Employers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">10K+</h3>
              <p className="mt-3 text-blue-100">Jobs Posted</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Start Hiring Today
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join KarJo and connect with talented professionals looking for
            opportunities in Afghanistan.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-xl text-lg hover:bg-blue-700 transition">
            Create Employer Account
          </button>
        </motion.div>
      </section>
    </div>
  );
}