
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const RootLayoutClient = dynamic(() => import("./RouteLayoutClinet"));

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
         <Analytics />
      </body>
    </html>
  );
}
