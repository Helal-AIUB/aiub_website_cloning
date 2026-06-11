"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  

  const isAuthPage = pathname === "/login" || pathname === "/signup" || pathname === "/dashboard" ;

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}