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
  metadataBase: new URL("https://www.ayatiworks.com"),
  title: {
    default: "Performance Marketing Agency | Ayatiworks",
    template: "%s | Ayatiworks",
  },
  description:
    "Ayatiworks is a premier performance marketing agency delivering measurable return on ad spend across Google, Meta, programmatic, and leading growth channels.",
  applicationName: "Ayatiworks",
  keywords: [
    "performance marketing agency",
    "Google Ads agency",
    "Meta Ads agency",
    "programmatic advertising",
    "ROAS optimization",
    "digital marketing agency India",
  ],
  authors: [{ name: "Ayatiworks", url: "https://www.ayatiworks.com" }],
  creator: "Ayatiworks",
  publisher: "Ayatiworks",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "Ayatiworks",
    title: "Performance Marketing Agency | Ayatiworks",
    description: "Performance marketing built to make every advertising rupee work harder.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Ayatiworks Performance Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Agency | Ayatiworks",
    description: "Performance marketing built to make every advertising rupee work harder.",
    images: ["/opengraph-image"],
  },
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
