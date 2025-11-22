"use client";
import React, { useEffect, useState } from "react";
import { LuNetwork } from "react-icons/lu";
import { HiRectangleGroup } from "react-icons/hi2";
import Navlinks from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggler from "@/components/Helper/ThemeToggler";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] w-full fixed z-[10000]
      ${navBg ? "bg-white shadow-md dark:bg-gray-900" : ""}`}
    >
      <div className="flex items-center h-full justify-between w-[92%] mx-auto">
        <div className="flex items-center sm:space-x-20">

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center">
              <HiRectangleGroup className="w-5 h-5 text-white dark:text-black" />
            </div>
            <h1 className="hidden sm:block md:text-2xl text-cyan-800 font-bold dark:text-white">
              Kabul Hire
            </h1>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {Navlinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-700 font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-8 py-2.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-300 dark:text-black transition-all">
            Login / Register
          </button>
          <button className="px-8 py-2.5 text-sm sm:block hidden rounded-lg bg-cyan-700 hover:bg-cyan-900 text-white transition-all">
            Job Post
          </button>
          <ThemeToggler />
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
