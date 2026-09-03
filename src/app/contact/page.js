"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FiMail, 
  FiUser, 
  FiMessageSquare, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiArrowLeft,
  FiClock,
  FiMapPin
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseState(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setResponseState({
          type: "success",
          message: data.message || "Message sent and saved successfully!",
          id: data.data?.id,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseState({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setResponseState({
        type: "error",
        message: "Failed to connect to the server. Please check your network connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute -bottom-40 right-10 w-[500px] h-[400px] bg-blue-600/15 blur-3xl rounded-full" />
      </div>

      {/* Top Navbar */}
      <header className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 group"
        >
          <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-200 text-indigo-400" />
          Back to Portfolio
        </Link>
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400/80 bg-indigo-950/60 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
          Get in Touch
        </span>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-6xl mx-auto px-6 py-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Context */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                Let&apos;s build something <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">extraordinary.</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                Have an exciting project in mind, a collaboration opportunity, or just want to say hi? Send me a message and I will get back to you promptly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-colors backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
                  <FiMail />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Direct Email</div>
                  <a href="mailto:shaikparveez290@gmail.com" className="text-sm sm:text-base font-medium text-slate-200 hover:text-indigo-300 transition-colors">
                    shaikparveez290@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl">
                  <FiClock />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Response Time</div>
                  <div className="text-sm sm:text-base font-medium text-slate-200">
                    Usually replies within 24 hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
                  <FiMapPin />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Location</div>
                  <div className="text-sm sm:text-base font-medium text-slate-200">
                    Available Worldwide (Remote)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">Connect on Socials</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/parveezz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all text-lg"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all text-lg"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800/90 shadow-2xl backdrop-blur-xl">
              
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-slate-400 text-sm mb-8">
                Your message is stored securely in MongoDB and forwarded directly to my inbox.
              </p>

              {/* Dynamic Backend Response Feedback */}
              {responseState && (
                <div 
                  className={`mb-6 p-5 rounded-2xl border transition-all duration-300 ${
                    responseState.type === "success" 
                      ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200" 
                      : "bg-rose-950/40 border-rose-500/40 text-rose-200"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {responseState.type === "success" ? (
                      <FiCheckCircle className="text-2xl text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <FiAlertCircle className="text-2xl text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-sm">
                        {responseState.type === "success" ? "Message Delivered!" : "Submission Failed"}
                      </h3>
                      <p className="text-sm opacity-90 leading-relaxed">
                        {responseState.message}
                      </p>
                      {responseState.id && (
                        <p className="text-xs font-mono text-emerald-400/80 pt-1">
                          Reference ID: <span className="underline">{responseState.id}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <FiUser className="text-lg" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/70 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <FiMail className="text-lg" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/70 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 bg-slate-950/70 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-500">
                      <FiMessageSquare className="text-lg" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Parveez, I would like to discuss..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-950/70 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending to Server...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-base" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-6 text-center text-xs text-slate-600 border-t border-slate-900">
        © {new Date().getFullYear()} Parveez. All rights reserved. Powered by Next.js, MongoDB & Tailwind CSS.
      </footer>
    </div>
  );
}
