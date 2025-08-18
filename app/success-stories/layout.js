"use client";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer1 from "../Components/FooterTest/Footer";
import Header from "../Components/Header/Header";
import { usePathname } from "next/navigation";

const cairo = Cairo({ subsets: ["latin"], variable: "--font-cairo" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${cairo.variable} ${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen`}
      >
        <Header />
        {children}
         <Footer1 />
      </body>
    </html>
  );
}
