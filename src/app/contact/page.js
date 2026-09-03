"use client";

import { useState, useEffect } from "react";
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
  FiMapPin,
  FiSun,
  FiMoon
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

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

  const isDark = theme === "dark";

  return (
    <div className={`relative min-h-screen transition-colors duration-500 flex flex-col justify-between overflow-x-hidden ${isDark ? "text-slate-100" : "text-slate-900"}`}>
      
      {/* Background Image with Clouds, Birds & Land */}
      <div 
        className="fixed inset-0 pointer-events-none bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105 -z-20"
        style={{ backgroundImage: "url('/contact_bg.jpg')" }}
      />

      {/* Dynamic Theme Atmospheric Overlay */}
      <div 
        className={`fixed inset-0 pointer-events-none -z-10 transition-colors duration-500 backdrop-blur-[3px] ${
          isDark 
            ? "bg-[#070a12]/80 via-[#0a0f1d]/75" 
            : "bg-white/65 via-slate-100/60"
        }`} 
      />

      {/* Top Navbar */}
      <header className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Link 
          href="/" 
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group px-3.5 py-2 rounded-full backdrop-blur-md border ${
            isDark 
              ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50" 
              : "bg-white/80 border-slate-200 text-slate-700 hover:text-slate-950 hover:border-indigo-400 shadow-sm"
          }`}
        >
          <FiArrowLeft className="text-base group-hover:-translate-x-1 transition-transform duration-200 text-indigo-500" />
          Back to Portfolio
        </Link>

        {/* Theme Toggle Button & Badge */}
        <div className="flex items-center gap-3">
          <span className={`hidden sm:inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border backdrop-blur-md ${
            isDark 
              ? "text-indigo-400 bg-indigo-950/60 border-indigo-500/30" 
              : "text-indigo-700 bg-indigo-50/80 border-indigo-200 shadow-sm"
          }`}>
            Get in Touch
          </span>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2.5 rounded-full border backdrop-blur-md transition-all duration-300 active:scale-95 shadow-md flex items-center justify-center cursor-pointer ${
              isDark 
                ? "bg-slate-900/80 border-slate-700 text-amber-300 hover:bg-slate-800 hover:border-amber-400/50 shadow-black/40" 
                : "bg-white/90 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 shadow-slate-200/50"
            }`}
          >
            {mounted && isDark ? (
              <FiSun className="text-lg transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <FiMoon className="text-lg transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-6xl mx-auto px-6 py-8 flex-1 flex flex-col justify-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Info & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                Let&apos;s build something <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">extraordinary.</span>
              </h1>
              <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                Have an exciting project in mind, a collaboration opportunity, or just want to say hi? Send me a message and I will get back to you promptly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3.5">
              <div className={`flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-md transition-all ${
                isDark 
                  ? "bg-slate-900/65 border-slate-800/80 hover:border-indigo-500/40" 
                  : "bg-white/80 border-slate-200/90 shadow-sm hover:border-indigo-300"
              }`}>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 text-xl shrink-0">
                  <FiMail />
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>Direct Email</div>
                  <a href="mailto:shaikparveez290@gmail.com" className={`text-sm sm:text-base font-medium transition-colors hover:text-indigo-500 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    shaikparveez290@gmail.com
                  </a>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-md transition-all ${
                isDark 
                  ? "bg-slate-900/65 border-slate-800/80" 
                  : "bg-white/80 border-slate-200/90 shadow-sm"
              }`}>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 text-xl shrink-0">
                  <FiClock />
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>Response Time</div>
                  <div className={`text-sm sm:text-base font-medium ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    Usually replies within 24 hours
                  </div>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-md transition-all ${
                isDark 
                  ? "bg-slate-900/65 border-slate-800/80" 
                  : "bg-white/80 border-slate-200/90 shadow-sm"
              }`}>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>Location</div>
                  <div className={`text-sm sm:text-base font-medium ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    Available Worldwide (Remote)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className={`text-xs uppercase tracking-widest font-semibold mb-3 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Connect on Socials</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/parveezz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all text-lg ${
                    isDark 
                      ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-slate-800" 
                      : "bg-white/90 border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-sm"
                  }`}
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all text-lg ${
                    isDark 
                      ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-slate-800" 
                      : "bg-white/90 border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-sm"
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`relative p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl transition-all duration-300 ${
              isDark 
                ? "bg-slate-900/75 border-slate-800/90 shadow-black/40" 
                : "bg-white/90 border-slate-200/90 shadow-slate-300/40"
            }`}>
              
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>Send a Message</h2>
              <p className={`text-sm mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Your message is stored securely in MongoDB and forwarded directly to my inbox.
              </p>

              {/* Dynamic Backend Response Feedback */}
              {responseState && (
                <div 
                  className={`mb-6 p-5 rounded-2xl border transition-all duration-300 ${
                    responseState.type === "success" 
                      ? isDark 
                        ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200" 
                        : "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm"
                      : isDark
                        ? "bg-rose-950/40 border-rose-500/40 text-rose-200"
                        : "bg-rose-50 border-rose-300 text-rose-900 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {responseState.type === "success" ? (
                      <FiCheckCircle className="text-2xl text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <FiAlertCircle className="text-2xl text-rose-500 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-sm">
                        {responseState.type === "success" ? "Message Delivered!" : "Submission Failed"}
                      </h3>
                      <p className="text-sm opacity-90 leading-relaxed">
                        {responseState.message}
                      </p>
                      {responseState.id && (
                        <p className={`text-xs font-mono pt-1 ${isDark ? "text-emerald-400/80" : "text-emerald-700"}`}>
                          Reference ID: <span className="underline">{responseState.id}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
                        className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                          isDark 
                            ? "bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20" 
                            : "bg-slate-50/80 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20 focus:bg-white"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
                        className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                          isDark 
                            ? "bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20" 
                            : "bg-slate-50/80 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20 focus:bg-white"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                      isDark 
                        ? "bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20" 
                        : "bg-slate-50/80 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20 focus:bg-white"
                    }`}
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
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
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                        isDark 
                          ? "bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20" 
                          : "bg-slate-50/80 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20 focus:bg-white"
                      }`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
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
      <footer className={`w-full max-w-6xl mx-auto px-6 py-6 text-center text-xs border-t z-10 transition-colors ${
        isDark ? "text-slate-400 border-slate-800/80" : "text-slate-600 border-slate-200/80"
      }`}>
        © {new Date().getFullYear()} Parveez. All rights reserved. Powered by Next.js, MongoDB & Tailwind CSS.
      </footer>
    </div>
  );
}
