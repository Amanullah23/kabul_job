"use client";
import Navlinks from "@/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgClose } from "react-icons/cg";
import { BriefcaseIcon } from "lucide-react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const pathname = usePathname();
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-[100000] bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[360px] z-[100001]
          bg-white dark:bg-gray-950 shadow-2xl
          transform transition-transform duration-400 ease-in-out ${navOpen}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
              <BriefcaseIcon className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              Kabul<span className="text-blue-600">Hire</span>
            </span>
          </div>
          <button
            onClick={closeNav}
            aria-label="Close menu"
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <CgClose className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 gap-1">
          {Navlinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={closeNav}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                  ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
          <Link
            href="/login"
            onClick={closeNav}
            className="w-full text-center py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Sign in
          </Link>
          <Link
            href="/post-job"
            onClick={closeNav}
            className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;