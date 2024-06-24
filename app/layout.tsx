import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // those below bad for accessibility
  // userScalable: false,
};

export const metadata: Metadata = {
  title: "Radchenko Andrii | Web Developer",
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
        className={`relative h-[100vh] w-full flex flex-col overflow-clip bg-backgroundDark`}
      >
        {children}
      </body>
    </html>
  );
}
