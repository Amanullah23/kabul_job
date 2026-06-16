import React from "react";
import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const footerLinks = [
  {
    title: "For Candidates",
    links: [
      { label: "Browse Jobs", href: "/find-job" },
      { label: "Browse Categories", href: "/find-job#categories" },
      { label: "Candidate Dashboard", href: "/dashboard" },
      { label: "Job Alerts", href: "/dashboard/alerts" },
      { label: "My Bookmarks", href: "/dashboard/bookmarks" },
    ],
  },
  {
    title: "For Employers",
    links: [
      { label: "Browse Candidates", href: "/candidates" },
      { label: "Employer Dashboard", href: "/employers/dashboard" },
      { label: "Post a Job", href: "/post-job" },
      { label: "Job Alerts", href: "/employers/alerts" },
      { label: "My Bookmarks", href: "/employers/bookmarks" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Jobs Page", href: "/find-job" },
      { label: "Resume Page", href: "/candidates" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Employers", href: "/employers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Site Map", href: "/sitemap" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Security Center", href: "/security" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

const socials = [
  { icon: <FaFacebookF className="w-3.5 h-3.5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="w-3.5 h-3.5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn className="w-3.5 h-3.5" />, href: "#", label: "LinkedIn" },
  { icon: <FaInstagram className="w-3.5 h-3.5" />, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="w-[90%] mx-auto pt-16 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900">
                <BriefcaseIcon className="w-4.5 h-4.5 text-white" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                Kabul<span className="text-blue-600">Hire</span>
              </span>
            </Link>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Afghanistan's leading job platform connecting talented professionals
              with top employers across Kabul and beyond.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-blue-600">📍</span> Kabul, Afghanistan
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-blue-600">📞</span> +93 78-748-4323
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-blue-600">✉️</span> hello@kabulhire.com
              </p>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © 2026 <span className="text-gray-600 dark:text-gray-400 font-medium">KabulHire</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy
            </Link>
            <Link href="/sitemap" className="text-xs text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;