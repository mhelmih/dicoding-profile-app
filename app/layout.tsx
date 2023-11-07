"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Lexend_Deca } from "next/font/google";
import { useSelectedLayoutSegments } from "next/navigation";
import "./globals.css";

const lexend = Lexend_Deca({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegments();

  const navRoutes = [
    {
      name: "Home",
      path: "/",
      current: segment.length === 0,
    },
    // {
    //   name: "Projects",
    //   path: "/projects",
    //   current: segment[0] === "projects",
    // },
    // {
    //   name: "Blogs",
    //   path: "/blogs",
    //   current: segment[0] === "blogs",
    // },
    {
      name: "About",
      path: "/about",
      current: segment[0] === "about",
    },
  ];

  return (
    <html lang="en">
      <head>
        <title>Muhammad Helmi Hibatullah</title>
        <meta name="description" content="Full-stack Web Developer Portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${lexend.className}`}>
        <Navbar routes={navRoutes} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
