import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import NavFooterWrapper from "@/components/Hoc/NavFooterWrapper";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobs Portal | Landing Page",
  description: "Job Portal in Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <NavFooterWrapper>
            {children}
          </NavFooterWrapper>
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}