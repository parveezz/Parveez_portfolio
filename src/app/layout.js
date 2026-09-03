import "./globals.css";

export const metadata = {
  title: "Portfolio | Full-Stack",
  description: "Modern portfolio with unified frontend and backend on Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
