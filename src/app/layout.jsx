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

export const metadata = {
  title: "Parveez | Full-Stack Developer",
  description: "Full-stack portfolio built with Next.js 15, React, Node.js, MongoDB Atlas, and Nodemailer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
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
