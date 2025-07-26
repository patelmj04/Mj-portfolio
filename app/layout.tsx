import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mit Patel | Software Developer",
  description:
    "Mit Patel's portfolio showcasing projects and skills in web development. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Mit Patel",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "Projects",
  ],
  authors: [{ name: "Mit Patel" }],
  creator: "Mit Patel",
  publisher: "Mit Patel",
  openGraph: {
    title: "Mit Patel ",
    description:
      "Explore the portfolio of Mit Patel, a passionate Full Stack Developer creating modern and responsive web applications.",
    url: "https://patelmj.tech", // Replace with your actual domain
    siteName: "Mit Patel Portfolio",
    images: [
      {
        url: "/Mjj.png", // Path to your Open Graph image
        width: 800,
        height: 600,
        alt: "Mit Patel Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mit Patel",
    description:
      "Check out Mit Patel's portfolio. A showcase of skills in full-stack development.",
    creator: "@your-twitter-handle", // Replace with your Twitter handle
    images: ["/Mjj.png"], // Path to your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favcon.png",
    shortcut: "/favcon.png",
    apple: "/favcon.png",
  },
  assets: ["https:/patelmj.tech/assets"], // Replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
