import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // those below bad for accessibility
  // maximumScale: 1,
  // userScalable: false,
};

export const metadata: Metadata = {
  title: "R.A. Portfolio ",
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-full flex flex-col overflow-hidden bg-backgroundDark`}
      >
        {children}
      </body>
    </html>
  );
}
