
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "../components/Header.jsx";
import Pagetransition from "../components/Pagetransiton.jsx";
import StairTransition from "../components/StairTransition.jsx";
import RootLayoutClient from "./RouteLayoutClinet"

import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrains",
});

export const metadata: Metadata = {
  title: "khalid chater",
  description: "My Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html
      lang='en'
      className=''>
      <body className={`${JetBrainsMono.variable} font-sans`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
