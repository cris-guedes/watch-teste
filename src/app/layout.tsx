import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { AppContextProvider } from "@/core/client/hooks/app/useAppContext/AppContextProvider";
import { Navbar } from "@/core/client/components/festival/Header";

export const metadata: Metadata = {
  title: "W Festival - Live Music Experience",
  description: "Experience the best music festivals live from anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white font-sans`}
      >
        <AppContextProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
