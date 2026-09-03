import Navbar from "../components/Navbar";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactFooterBar from "../components/contact/ContactFooterBar";

export const metadata = {
  title: "Contact & Hire | Get in Touch with Shaik Parveez",
  description:
    "Get in touch with Shaik Parveez for full-time Full-Stack Developer roles, freelance opportunities, web engineering contracts, or technical consultations.",
  keywords: [
    "Contact Shaik Parveez",
    "Hire Full-Stack Developer",
    "Hire React Developer Hyderabad",
    "Next.js Consultant",
    "Shaik Parveez Email",
    "Shaik Parveez Phone",
    "Software Engineer for Hire",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen overflow-y-auto lg:overflow-hidden w-full bg-[url('/meadow_contact_bg.jpg')] bg-cover bg-top bg-no-repeat flex flex-col justify-between font-normal">
      {/* Modern Responsive Sticky Navbar */}
      <Navbar />

      {/* Main Content Area: Responsive Grid */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-2 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-6">
            <ContactHeader />
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Lower White Section */}
      <ContactFooterBar />
    </div>
  );
}
