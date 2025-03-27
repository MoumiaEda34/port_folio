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

export const metadata: Metadata = {
  title: "Moumita Ahamed | Full-Stack Developer Portfolio",
  description: "Explore the professional portfolio of Moumita Ahamed, a skilled full-stack developer specializing in Next.js, React, and modern web technologies.",
  keywords: ["Moumita Ahamed", "Portfolio", "Full Stack Developer", "Next.js", "React", "Web Developer"],
  metadataBase: new URL("https://port-folio-qzvn.vercel.app/"),
  openGraph: {
    title: "Moumita Ahamed | Full-Stack Developer",
    description: "Explore the professional projects and skills of Moumita Ahamed.",
    url: "https://port-folio-qzvn.vercel.app/",
    siteName: "Moumita Ahamed Portfolio",
    images: [
      {
        url: "https://port-folio-qzvn.vercel.app/og-image.png", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Moumita Ahamed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
