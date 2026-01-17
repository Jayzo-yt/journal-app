import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/components/Squares.css";
import SquaresClient from "@/components/ui/SquaresClient";
import { Header } from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Journal App",
  description: "Journal App using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`relative min-h-screen flex flex-col font-sans ${geistSans.variable} ${geistMono.variable} bg-[#f2f1f4]`}>
        style="background-color: lightblue;"
        <div className="relative z-10 w-full flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="mt-auto mx-auto px-4 w-full py-4 flex items-center justify-center border-t text-sm text-gray-500 border-black ">
            2026 &copy; Journal App
            developed by Jayzo
          </footer>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
