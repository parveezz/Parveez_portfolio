import "./globals.css";
import Navbar from "./components/Navbar";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parveez.dev";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "Shaik Parveez | Frontend Developer at Invertio Software Solutions",
  description:
    "Portfolio of Shaik Parveez — Frontend Developer at Invertio Software Solutions specializing in React.js, Next.js, responsive web applications, and performance-focused UI.",
  keywords: [
    "Shaik Parveez",
    "Frontend Developer",
    "Invertio Software Solutions",
    "React.js Developer",
    "Next.js Developer",
    "PostgreSQL",
    "SEO Optimization",
    "Web Application Developer",
    "Hyderabad Telangana",
  ],
  authors: [{ name: "Shaik Parveez", url: baseUrl }],
  creator: "Shaik Parveez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Shaik Parveez | Portfolio",
    title: "Shaik Parveez | Frontend Developer",
    description:
      "Frontend Developer at Invertio Software Solutions. Building responsive, accessible, and performance-focused web apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Parveez | Frontend Developer",
    description:
      "Frontend Developer at Invertio Software Solutions. Building responsive, accessible, and performance-focused web apps.",
    creator: "@parveezz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shaik Parveez",
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Invertio Software Solutions",
      location: "Hyderabad, Telangana, India",
    },
    alumnusOf: {
      "@type": "EducationalOrganization",
      name: "Malla Reddy Institute of Technology and Science and Engineering",
    },
    email: "mailto:shaikparveez225@gmail.com",
    telephone: "+91-6302122429",
    address: {
      "@type": "PostalAddress",
      streetAddress: "H.No : 6-2-646, Beside Alfatha Cafe",
      addressLocality: "Secunderabad",
      addressRegion: "Telangana",
      postalCode: "500003",
      addressCountry: "IN",
    },
    url: baseUrl,
    sameAs: [
      "https://github.com/parveezz",
      "https://www.linkedin.com/in/shaik-parveez",
    ],
    knowsAbout: [
      "Frontend Development",
      "React.js",
      "Next.js",
      "PostgreSQL",
      "Search Engine Optimization (SEO)",
      "PHP",
      "REST APIs",
      "UI Motion & Animations",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Grandstander:wght@900&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
