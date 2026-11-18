import "./globals.css";

export const metadata = {
  title: "Hollyoak's Plucky Sprout Squad — Meadowbell",
  description:
    "An animated kids' farming series from Meadowbell. Learn the Ways of the Meadow with Hollyoak's Plucky Sprout Squad!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Grandstander:wght@900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
