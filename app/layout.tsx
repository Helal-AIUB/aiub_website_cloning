import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "../components/layout/LayoutProvider";
// import Navbar from "@/components/Navbar";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiub-website-cloning.vercel.app"),
  title: {
    default: "AIUB | American International University-Bangladesh",
    template: "%s | AIUB Website",
  },
  description: "AIUB website. Get the latest news, notices, faculty information, and academic updates from American International University-Bangladesh.",
  keywords: ["AIUB", "University Bangladesh", "AIUB News", "AIUB Notice", "Computer Science AIUB"],
  authors: [{ name: "aiub" }], 
  openGraph: {
    type: "website",
    title: "AIUB | American International University-Bangladesh",
    description: "Get the latest updates and academic notices from AIUB.",
    siteName: "AIUB Website Clone",
  },
};

// export const metadata: Metadata = {
//   title: "AIUB | American International University-Bangladesh",
//   description: "AIUB website using Next.js",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
