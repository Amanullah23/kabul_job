"use client";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { BriefcaseIcon } from "lucide-react";
import Navlinks from "@/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggler from "@/components/Helper/ThemeToggler";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-300
        ${
          navBg
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
            : "bg-transparent"
        }`}
    >
      <div className="w-[92%] mx-auto h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900">
            <BriefcaseIcon className="w-4.5 h-4.5 text-white" strokeWidth={2} />
          </div>
          <span className="hidden sm:block text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Kabul<span className="text-blue-600">Hire</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {Navlinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-150"
          >
            Sign in
          </Link>
          <Link
            href="/post-job"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-all duration-150 shadow-sm shadow-blue-200 dark:shadow-blue-900"
          >
            Post a Job
          </Link>
          <ThemeToggler />
          <button
            onClick={openNav}
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <HiBars3BottomRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Nav;