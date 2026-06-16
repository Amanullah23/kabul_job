"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Tag, Mail, BookOpen } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = ["All", "Career Tips", "Hiring", "Tech", "Workplace", "Salary", "Remote Work"];

const posts = [
  {
    id: 1,
    title: "How to Land Your First Tech Job in Kabul",
    excerpt: "Breaking into the tech industry in Afghanistan can be challenging. Here's a step-by-step guide to help you get your first role — from building your portfolio to acing the interview.",
    category: "Career Tips",
    author: "Ahmad Karimi",
    authorInitial: "A",
    date: "June 10, 2025",
    readTime: "6 min read",
    featured: true,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Top 5 In-Demand Skills for Afghan Developers in 2025",
    excerpt: "The tech landscape is evolving fast. We break down the most sought-after skills that employers in Afghanistan are hiring for right now.",
    category: "Tech",
    author: "Zubair Rahimi",
    authorInitial: "Z",
    date: "June 5, 2025",
    readTime: "4 min read",
    featured: false,
    color: "bg-purple-600",
  },
  {
    id: 3,
    title: "How to Write a Job Post That Attracts Top Talent",
    excerpt: "A great job listing is your first impression. Learn how to write clear, compelling job posts that bring in qualified candidates — not just applicants.",
    category: "Hiring",
    author: "Fatima Noori",
    authorInitial: "F",
    date: "May 28, 2025",
    readTime: "5 min read",
    featured: false,
    color: "bg-emerald-600",
  },
  {
    id: 4,
    title: "Negotiating Your Salary in Afghanistan: A Practical Guide",
    excerpt: "Many professionals leave money on the table by not negotiating. Here's how to confidently discuss compensation with employers in the Afghan job market.",
    category: "Salary",
    author: "Ahmad Karimi",
    authorInitial: "A",
    date: "May 20, 2025",
    readTime: "7 min read",
    featured: false,
    color: "bg-amber-600",
  },
  {
    id: 5,
    title: "Remote Work Opportunities for Afghan Professionals",
    excerpt: "International remote work is now accessible to Afghan talent. Discover the best platforms, tips, and tools to land a remote job with a global company.",
    category: "Remote Work",
    author: "Mina Safi",
    authorInitial: "M",
    date: "May 14, 2025",
    readTime: "5 min read",
    featured: false,
    color: "bg-cyan-600",
  },
  {
    id: 6,
    title: "Building a Positive Workplace Culture in Afghan Companies",
    excerpt: "Culture is everything. Learn what leading Afghan employers are doing differently to retain top talent and build teams that actually thrive.",
    category: "Workplace",
    author: "Fatima Noori",
    authorInitial: "F",
    date: "May 7, 2025",
    readTime: "4 min read",
    featured: false,
    color: "bg-rose-600",
  },
  {
    id: 7,
    title: "How KabulHire is Changing the Job Market in Afghanistan",
    excerpt: "Since launching, KabulHire has helped thousands of professionals find meaningful work. Here's the story behind the platform and where we're headed.",
    category: "Hiring",
    author: "Zubair Rahimi",
    authorInitial: "Z",
    date: "April 30, 2025",
    readTime: "3 min read",
    featured: false,
    color: "bg-indigo-600",
  },
  {
    id: 8,
    title: "10 Interview Tips That Will Get You Hired",
    excerpt: "Interviews are nerve-wracking — but preparation makes all the difference. Here are 10 proven tips to help you walk in confident and walk out with an offer.",
    category: "Career Tips",
    author: "Mina Safi",
    authorInitial: "M",
    date: "April 22, 2025",
    readTime: "6 min read",
    featured: false,
    color: "bg-orange-600",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  "Career Tips": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900",
  "Tech": "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900",
  "Hiring": "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900",
  "Salary": "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900",
  "Remote Work": "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-900",
  "Workplace": "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900",
};

const CategoryBadge = ({ category }: { category: string }) => (
  <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${categoryColors[category] ?? "bg-gray-50 dark:bg-gray-800 text-gray-500 border-gray-100 dark:border-gray-700"}`}>
    <Tag className="w-2.5 h-2.5" />
    {category}
  </span>
);

const BlogCard = ({ post, index }: { post: typeof posts[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
  >
    <Link href={`/blog/${post.id}`} className="group block bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 h-full">

      {/* Color banner */}
      <div className={`${post.color} h-2 w-full`} />

      <div className="p-6 flex flex-col h-[calc(100%-8px)]">
        <div className="flex items-center justify-between mb-4">
          <CategoryBadge category={post.category} />
          <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        <div className="mt-5 pt-4 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 ${post.color} rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
              {post.authorInitial}
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">{post.author}</p>
              <div className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500">
                <Calendar className="w-2.5 h-2.5" />
                {post.date}
              </div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </Link>
  </motion.div>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* ── Header ── */}
      <section className="pt-32 pb-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-950 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="relative w-[88%] mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-3 h-3" />
              KabulHire Blog
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-5">
              Insights for job seekers <br />
              <span className="text-blue-600 dark:text-blue-400">and employers.</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
              Career advice, hiring tips, salary guides, and workplace insights — written for Afghan professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-[88%] mx-auto py-14">

        {/* ── Featured post ── */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-5">
              Featured Post
            </p>
            <Link href={`/blog/${featuredPost.id}`} className="group block bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-900 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300">
              <div className={`${featuredPost.color} h-2 w-full`} />
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <CategoryBadge category={featuredPost.category} />
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900">
                      ⭐ Editor's Pick
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 ${featuredPost.color} rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                      {featuredPost.authorInitial}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{featuredPost.author}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featuredPost.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side decorative */}
                <div className={`hidden lg:flex items-center justify-center ${featuredPost.color} rounded-2xl h-56 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="relative text-center px-8">
                    <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-3" />
                    <p className="text-white font-bold text-lg leading-tight">Read the full article</p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full">
                      {featuredPost.readTime} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ── Category filter ── */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-150 cursor-pointer
                ${activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Blog grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {filtered.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center mb-16">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-gray-300 dark:text-gray-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">No posts in this category</h3>
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">Try selecting a different category.</p>
            <button onClick={() => setActiveCategory("All")} className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
              Show all posts
            </button>
          </div>
        )}

        {/* ── Newsletter ── */}
        <div className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="relative max-w-xl mx-auto">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Stay ahead of the market.
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              Get the latest career tips, job market insights, and hiring guides delivered to your inbox every week — for free.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-6 py-3 rounded-xl">
                ✅ You're subscribed! Welcome aboard.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3 rounded-xl text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 outline-none placeholder-gray-400 border border-transparent focus:border-blue-300"
                />
                <button
                  onClick={() => { if (email) setSubscribed(true); }}
                  className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </div>
            )}
            <p className="text-blue-200 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

      </div>
    </main>
  );
}