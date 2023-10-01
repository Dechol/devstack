import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  varible: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  varible: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevStack",
  description: "community dev platform",
  icons: {
    icon: "/assets/images/site-log.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <ThemeProvider>
            <h1 className="h1-bold">hello world</h1>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
