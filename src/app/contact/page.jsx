export const metadata = {
  title: "Contact | Shaik Parveez",
  description: "Contact Shaik Parveez - Frontend Developer",
};

export default function ContactPage() {
  const email = "shaikparveez225@gmail.com";
  const phone = "+91 6302122429";

  return (
    <div className="min-h-screen bg-[#88b7d5] text-white flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center space-y-12 select-none">
      
      {/* Massive Title */}
      <h1 className="font-['Grandstander'] font-black text-7xl sm:text-9xl md:text-[130px] uppercase tracking-tight text-white leading-none">
        Contact
      </h1>

      {/* Large Contact Information */}
      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
        <div>
          <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/75 block mb-1">
            Name
          </span>
          <p className="font-['Grandstander'] font-black text-3xl sm:text-5xl md:text-6xl uppercase text-white">
            Shaik Parveez
          </p>
          <p className="font-['Inter'] font-medium text-base sm:text-xl text-white/90 mt-1">
            Frontend Developer · Invertio Software Solutions
          </p>
        </div>

        <div>
          <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/75 block mb-1">
            Email
          </span>
          <a
            href={`mailto:${email}`}
            className="font-['Grandstander'] font-black text-2xl sm:text-4xl md:text-5xl text-white hover:underline transition-all block break-all"
          >
            {email}
          </a>
        </div>

        <div>
          <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/75 block mb-1">
            Phone &amp; WhatsApp
          </span>
          <a
            href="tel:+916302122429"
            className="font-['Grandstander'] font-black text-2xl sm:text-4xl md:text-5xl text-white hover:underline transition-all block"
          >
            {phone}
          </a>
        </div>

        <div>
          <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/75 block mb-1">
            Location
          </span>
          <p className="font-['Grandstander'] font-black text-2xl sm:text-3xl md:text-4xl text-white">
            Secunderabad, Telangana, India
          </p>
          <p className="font-['Inter'] text-sm sm:text-base text-white/85 mt-1">
            H.No : 6-2-646, Beside Alfatha Cafe, Secunderabad – 500003
          </p>
        </div>
      </div>
    </div>
  );
}
