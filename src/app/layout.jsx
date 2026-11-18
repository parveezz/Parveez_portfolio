import "./globals.css";
import { Toaster } from "sonner";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parveez.dev";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "Shaik Parveez | Portfolio — Something New is Coming",
  description:
    "Portfolio of Shaik Parveez — Full-Stack Developer specializing in Next.js, React, Node.js, and modern web experiences. Rebuilding with an all-new design.",
  keywords: [
    "Shaik Parveez",
    "Full-Stack Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Shaik Parveez", url: baseUrl }],
  creator: "Shaik Parveez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Shaik Parveez | Portfolio",
    title: "Shaik Parveez | Coming Soon",
    description:
      "Crafting scalable full-stack web experiences. A reimagined portfolio is on its way.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Parveez | Coming Soon",
    description: "Rebuilding something exceptional.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans bg-[#0c120e] text-[#F5EFE6] selection:bg-[#2F5D50] selection:text-[#F5EFE6]" suppressHydrationWarning>
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
