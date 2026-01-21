import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pathoconnect | Pathoconnect",
  description: "Pathoconnect Phlebotomy App and Sample Collection Software for Clinical Pathology",
  keywords: ["pathoconnect", "phlebotomy", "sample collection", "clinical pathology","phlebo", "sample collection software", "clinical pathology software",],
  openGraph: {
    title: "Pathoconnect | Pathoconnect",
    description: "Pathoconnect Phlebotomy App and Sample Collection Software for Clinical Pathology",
    url: "https://www.pathoconnect.net",
    siteName: "Pathoconnect",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
