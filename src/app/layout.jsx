import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parveez.dev";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shaik Parveez | Full-Stack Developer",
    template: "%s | Shaik Parveez",
  },
  description:
    "Full-Stack Developer with nearly 1 year of professional experience at Invertio Software Solutions. Specializing in Next.js, React, Node.js, Express, MongoDB Atlas, PostgreSQL, and modern web architecture.",
  keywords: [
    "Shaik Parveez",
    "Full-Stack Developer",
    "Frontend Developer",
    "Software Engineer Hyderabad",
    "Next.js 15 Developer",
    "React.js Developer",
    "Invertio Software Solutions",
    "MongoDB Atlas",
    "PostgreSQL",
    "Tailwind CSS",
    "Web Developer Hyderabad",
  ],
  authors: [{ name: "Shaik Parveez", url: baseUrl }],
  creator: "Shaik Parveez",
  publisher: "Shaik Parveez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Shaik Parveez | Portfolio",
    title: "Shaik Parveez | Full-Stack Developer",
    description:
      "Crafting scalable full-stack web experiences with Next.js, React, Node.js, and cloud databases.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Parveez | Full-Stack Developer",
    description:
      "Crafting scalable full-stack web experiences with Next.js, React, Node.js, and cloud databases.",
    creator: "@parveezz",
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
};

export default function RootLayout({ children }) {
  // Google Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shaik Parveez",
    jobTitle: "Full-Stack Developer & Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Invertio Software Solutions Pvt. Ltd.",
      url: "https://invertiosolutions.com/",
    },
    alumnusOf: {
      "@type": "CollegeOrUniversity",
      name: "Malla Reddy Institute of Technology and Science (MRITS)",
    },
    url: baseUrl,
    sameAs: [
      "https://github.com/parveezz",
      "https://www.linkedin.com/in/shaik-parveez",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs",
      "SEO Optimization",
    ],
  };

  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} antialiased font-sans`} suppressHydrationWarning>
        {children}
        <WhatsAppButton />
        {/* Modern Toast Notifications */}
        <Toaster 
          position="top-right" 
          richColors 
          closeButton
          toastOptions={{
            style: {
              fontFamily: "var(--font-poppins), sans-serif",
              borderRadius: "1rem",
            },
          }}
        />
      </body>
    </html>
  );
}
