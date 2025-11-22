import React from "react";
import { LuNetwork } from "react-icons/lu";
import { HiRectangleGroup } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
        <div className="xl:col-span-2">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center">
              <HiRectangleGroup className="w-5 h-5 text-white dark:text-black" />
            </div>
            <h1 className="hidden sm:block md:text-2xl text-cyan-800 font-bold dark:text-white">
              Kabul Hire
            </h1>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            animi, omnis ad beatae necessitatibus quaerat! Atque fugiat
          </p>
          <div className="mt-5">
            <h1 className="lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium">
              Call Us
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">
              +9378-748-4323
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Kabul, Afghanistan
            </p>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              an20kx@gmail.com
            </p>
          </div>
        </div>
        {/*2th part*/}
        <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            For Candidates
          </h1>
          <p className="footer__link">Browse Jobs</p>
          <p className="footer__link">Browse Categories</p>
          <p className="footer__link">Candidate Dashboard</p>
          <p className="footer__link">Job Alerts</p>
          <p className="footer__link">My Bookmarks</p>
        </div>
        {/*3th part*/}
        <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            For Employers
          </h1>
          <p className="footer__link">Browse Candidates</p>
          <p className="footer__link">Employer Dashboard</p>
          <p className="footer__link">Add Job</p>
          <p className="footer__link">Job Alerts</p>
          <p className="footer__link">My Bookmarks</p>
        </div>
        {/*4th part*/}
        <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            About Us
          </h1>
          <p className="footer__link">Job Page</p>
          <p className="footer__link">Employer Dashboard</p>
          <p className="footer__link">Resume Page</p>
          <p className="footer__link">Blog</p>
          <p className="footer__link">Contact</p>
        </div>
        {/*5th part*/}
        <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Helpfull Resources
          </h1>
          <p className="footer__link">Sit Map</p>
          <p className="footer__link">Terms of Use</p>
          <p className="footer__link">Privacy Center</p>
          <p className="footer__link">Security Center</p>
          <p className="footer__link">Accessilbilty Center</p>
        </div>
      </div>
      <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
        <p className="text-gray-500">@2025 Amanullah Yawari. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
