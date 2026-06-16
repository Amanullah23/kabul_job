"use client";
import { usePathname } from "next/navigation";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

export default function NavFooterWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavFooter = ["/login", "/register"].includes(pathname);

  return (
    <>
      {!hideNavFooter && <ResponsiveNav />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}