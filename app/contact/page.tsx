"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Send,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    label: "Office Address",
    value: "Kabul, Afghanistan",
    sub: "Serving all Afghan provinces",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    label: "Phone Number",
    value: "+93 78-748-4323",
    sub: "Sat – Thu, 8am – 6pm",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    href: "tel:+93787484323",
  },
  {
    icon: <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    label: "Email Address",
    value: "hello@kabulhire.com",
    sub: "We reply within 24 hours",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    href: "mailto:hello@kabulhire.com",
  },
];

const socials = [
  {
    icon: <FaWhatsapp className="w-5 h-5" />,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/93787484323",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    label: "LinkedIn",
    value: "KabulHire",
    href: "https://linkedin.com",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <FaTwitter className="w-5 h-5" />,
    label: "Twitter / X",
    value: "@KabulHire",
    href: "https://twitter.com",
    color: "bg-sky-500 hover:bg-sky-600",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
    value: "Amanullah23",
    href: "https://github.com/Amanullah23",
    color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
  },
];

const faqs = [
  {
    q: "How do I post a job on KabulHire?",
    a: "Go to the Employers page, fill in the job post form with your company details, job title, description, and salary range. Your listing goes live immediately after submission.",
  },
  {
    q: "Is KabulHire free for job seekers?",
    a: "Yes, completely free. Job seekers can browse all listings, apply to jobs, and create a candidate profile at no cost.",
  },
  {
    q: "How long does a job listing stay active?",
    a: "Depending on your plan — Basic listings stay active for 20 days, Standard for 40 days, and Extended for 60 days. You can always renew or upgrade.",
  },
  {
    q: "Can I post remote jobs on KabulHire?",
    a: "Absolutely. KabulHire supports full-time, part-time, contract, and remote job listings. Just select the job type when posting.",
  },
  {
    q: "How do I contact a candidate directly?",
    a: "Once a candidate applies to your job, you can view their profile and contact them directly through your employer dashboard.",
  },
  {
    q: "Who built KabulHire?",
    a: "KabulHire was designed and developed by Amanullah Yawari, a full-stack developer based in Kabul, Afghanistan. You can view his portfolio at yawari.vercel.app.",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Job Posting Help",
  "Technical Issue",
  "Partnership",
  "Feedback",
  "Other",
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">
          {faq.q}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white dark:bg-gray-900 border-t border-gray-50 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-4">
            {faq.a}
          </p>
        </div>
      )}
    </motion.div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
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
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-5">
              We'd love to <br />
              <span className="text-blue-600 dark:text-blue-400">hear from you.</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
              Have a question, feedback, or need help? Reach out and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-[88%] mx-auto py-14 space-y-14">

        {/* ── Contact info cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {info.href ? (
                <a href={info.href} className="group block bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300">
                  <div className={`w-11 h-11 ${info.bg} rounded-xl flex items-center justify-center mb-4`}>
                    {info.icon}
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{info.label}</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{info.value}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{info.sub}</p>
                </a>
              ) : (
                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6">
                  <div className={`w-11 h-11 ${info.bg} rounded-xl flex items-center justify-center mb-4`}>
                    {info.icon}
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{info.label}</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{info.value}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{info.sub}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Contact form + Social links ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1">Send us a message</h2>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">Fill in the form below and we'll get back to you shortly.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mb-6 max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Ahmad Karimi"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                    <input
                      name="email" value={form.email} onChange={handleChange} type="email"
                      placeholder="ahmad@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="sm:col-span-2 relative">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <select
                      name="subject" value={form.subject} onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      {subjectOptions.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-[42px] w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-xs text-gray-400 dark:text-gray-500">* Required fields</p>
                    <button
                      onClick={handleSubmit}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-200 dark:shadow-blue-900 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column: socials + developer credit */}
          <div className="space-y-5">

            {/* Social links */}
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-5">Connect with us</h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 cursor-pointer ${s.color}`}
                  >
                    {s.icon}
                    <div className="flex-1">
                      <p className="text-xs font-bold">{s.label}</p>
                      <p className="text-xs text-white/70">{s.value}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp quick chat */}
            <a
              href="https://wa.me/93787484323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 rounded-2xl p-5 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Chat on WhatsApp</p>
                <p className="text-xs text-emerald-100 mt-0.5">+93 78-748-4323 · Usually replies fast</p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
            </a>

            {/* Developer credit */}
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6">
              <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold mb-4">
                Built by
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  A
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Amanullah Yawari</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Full-Stack Developer · Kabul, AF</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Designed and developed with Next.js, TypeScript, and Tailwind CSS. Open to freelance and remote work opportunities.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://yawari.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                >
                  Portfolio →
                </a>
                <a
                  href="https://github.com/Amanullah23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer"
                >
                  GitHub →
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── FAQ ── */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-3 max-w-md mx-auto">
              Can't find what you're looking for? Send us a message above.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}