"use client";
import Navlinks from "@/constant/constant";
import Link from "next/link";
//import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div>
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all right-0 duration-500 z-100002 bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 2-[80%] sm:w-[60%] bg-cyan-800 space-7-6 z-1000050 right-0`}
      >
        {Navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.4rem] right-[1.4rem] sm:w-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
