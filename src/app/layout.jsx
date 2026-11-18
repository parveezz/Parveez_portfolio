import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parveez.dev";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "Shaik Parveez | Frontend Web Developer",
  description:
    "Portfolio of Shaik Parveez — Frontend Web Developer specializing in Next.js, React, modern UI motion architecture, and scalable web applications.",
  keywords: [
    "Shaik Parveez",
    "Frontend Web Developer",
    "Next.js Developer",
    "React.js Developer",
    "UI/UX Engineer",
    "JavaScript Developer",
    "Web Application Developer",
    "Hyderabad",
  ],
  authors: [{ name: "Shaik Parveez", url: baseUrl }],
  creator: "Shaik Parveez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Shaik Parveez | Portfolio",
    title: "Shaik Parveez | Frontend Web Developer",
    description:
      "Crafting high-performance, responsive web applications with Next.js, React, and modern UI motion architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Parveez | Frontend Web Developer",
    description:
      "Crafting high-performance, responsive web applications with Next.js, React, and modern UI motion architecture.",
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
    jobTitle: "Frontend Web Developer & Software Engineer",
    url: baseUrl,
    sameAs: [
      "https://github.com/parveezz",
      "https://www.linkedin.com/in/shaik-parveez",
    ],
    knowsAbout: [
      "Frontend Development",
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "UI Motion & Animations",
      "Node.js",
      "RESTful APIs",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Grandstander:wght@900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
