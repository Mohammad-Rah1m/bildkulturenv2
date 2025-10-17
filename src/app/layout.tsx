import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Providers } from "./Providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bildkulturen",
  description: "Bildkulturen website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen overflow-hidden`}
      >
        <Providers>
        <div className="flex h-full w-full">
          {/* Fixed Sidebar */}
          <div className="py-4 pl-4">
            <Sidebar />
          </div>

          {/* Content Area */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Sticky Header */}
            <div className="p-4">
              <Header />
            </div>

            {/* Scrollable Main Content */}
            <main className="flex-1 overflow-y-auto pl-4 pb-4">{children}</main>
          </div>
        </div>
        </Providers>
      </body>
    </html>
  );
}
