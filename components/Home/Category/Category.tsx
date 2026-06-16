import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { LuRocket } from "react-icons/lu";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

const categoryData = [
  {
    id: 1,
    categoryName: "Accounting & Finance",
    openPositions: 48,
    icon: <GiTakeMyMoney className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    color: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    id: 2,
    categoryName: "Technology & IT",
    openPositions: 134,
    icon: <FaLaptopCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 3,
    categoryName: "Marketing",
    openPositions: 62,
    icon: <IoMegaphoneOutline className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    color: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    id: 4,
    categoryName: "Design & Creative",
    openPositions: 57,
    icon: <PiPaintBrushDuotone className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: 5,
    categoryName: "Project Management",
    openPositions: 39,
    icon: <LuRocket className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    color: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    id: 6,
    categoryName: "Customer Service",
    openPositions: 44,
    icon: <RiCustomerService2Fill className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
    color: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    id: 7,
    categoryName: "Health & Care",
    openPositions: 31,
    icon: <MdOutlineMedicalServices className="w-6 h-6 text-red-600 dark:text-red-400" />,
    color: "bg-red-50 dark:bg-red-900/20",
  },
  {
    id: 8,
    categoryName: "Engineering",
    openPositions: 76,
    icon: <HiOutlineWrenchScrewdriver className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    color: "bg-orange-50 dark:bg-orange-900/20",
  },
];

const Category = () => {
  return (
    <section className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950">
      <SectionHeading
        heading="Popular Job Categories"
        subHeading="2,020 jobs live across Afghanistan — 293 added today."
      />

      <div className="w-[88%] mx-auto mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData.map((category, index) => (
          <div
            key={category.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 80}
          >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/find-job"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Browse all categories →
        </Link>
      </div>
    </section>
  );
};

export default Category;