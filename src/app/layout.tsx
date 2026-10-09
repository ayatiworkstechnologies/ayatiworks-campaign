import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Performance Marketing Agency | Ayatiworks",
  description:
    "Ayatiworks is a premier performance marketing agency delivering measurable return on ad spend across Google, Meta, programmatic, and leading growth channels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}
