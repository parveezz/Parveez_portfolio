export default function ContactHeader() {
  return (
    <div className="space-y-3 sm:space-y-3.5 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
      <span className="inline-block font-mono text-xs font-semibold tracking-widest text-sky-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] uppercase">
        [ CONTACT ]
      </span>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.12] drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]">
        Get in Touch <br className="hidden sm:inline" />
        With Us
      </h1>

      <p className="text-white/95 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] font-normal mx-auto lg:mx-0">
        We would love to hear from you. Whether you have a question, feedback, or want to explore working together, our team is here to listen.
      </p>
    </div>
  );
}
