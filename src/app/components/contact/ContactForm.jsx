"use client";

import { useState } from "react";
import { FiCheckCircle, FiAlertCircle, FiMail, FiUser } from "react-icons/fi";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    businessName: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      businessName: "",
      message: "",
    });
    setResponseState(null);
    toast.info("Form fields cleared");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseState(null);

    const toastId = toast.loading("Sending your message...");

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const subjectLine = formData.businessName 
      ? `Inquiry from ${formData.businessName}` 
      : "Portfolio Contact Inquiry";
    
    const messageContent = formData.phone 
      ? `Phone: ${formData.phone}\n\n${formData.message}`
      : formData.message;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName || "Anonymous",
          email: formData.email,
          subject: subjectLine,
          message: messageContent,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(data.message || "Message sent successfully!", {
          id: toastId,
          description: "Thank you for reaching out. We will respond within 24 hours.",
        });

        setResponseState({
          type: "success",
          message: data.message || "Message sent successfully!",
          id: data.data?.id,
        });

        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          businessName: "",
          message: "",
        });
      } else {
        const errorMsg = data.error || "Something went wrong. Please check your network or Atlas IP.";
        toast.error("Message delivery error", {
          id: toastId,
          description: errorMsg.length > 80 ? errorMsg.substring(0, 80) + "..." : errorMsg,
        });

        setResponseState({
          type: "error",
          message: errorMsg,
        });
      }
    } catch (err) {
      toast.error("Network error", {
        id: toastId,
        description: "Failed to connect to server. Please check your connection.",
      });

      setResponseState({
        type: "error",
        message: "Failed to connect to the server. Please check your network connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-[#1F2A24]/60 backdrop-blur-md shadow-2xl rounded-2xl p-5 sm:p-7 relative border border-white/20 mx-auto">
      {/* Top Close Icon */}
      <button 
        type="button" 
        onClick={handleClear}
        aria-label="Clear Form"
        className="absolute top-0 right-0 w-9 h-9 bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white text-sm transition-colors rounded-tr-2xl cursor-pointer"
      >
        ✕
      </button>

      {/* Card Header */}
      <div className="mb-3.5 sm:mb-4 pt-0.5">
        <h2 className="text-lg sm:text-xl tracking-wide uppercase text-[#F5EFE6] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          GET IN <span className="font-bold text-[#C9A66B]">TOUCH</span>
        </h2>
        <p className="text-xs text-[#F5EFE6]/80 font-normal mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          24/7 We will answer your questions and project inquiries
        </p>
      </div>

      {/* Dynamic In-Card Feedback Alert */}
      {responseState && (
        <div 
          className={`mb-3 p-2.5 rounded-lg border text-xs font-normal transition-all ${
            responseState.type === "success" 
              ? "bg-[#2F5D50]/80 border-emerald-400 text-emerald-100" 
              : "bg-rose-950/70 border-rose-400 text-rose-200"
          }`}
        >
          <div className="flex items-start gap-2">
            {responseState.type === "success" ? (
              <FiCheckCircle className="text-sm text-emerald-300 shrink-0 mt-0.5" />
            ) : (
              <FiAlertCircle className="text-sm text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-medium text-xs">{responseState.message}</div>
              {responseState.id && (
                <div className="text-[10px] font-mono opacity-80">
                  Ref: {responseState.id}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {/* First Name */}
          <div className="relative flex items-center border border-white/25 rounded-lg px-2.5 sm:px-3 py-1.5 focus-within:border-[#C9A66B] focus-within:bg-black/35 transition-all bg-black/20 min-h-[44px] sm:min-h-[46px]">
            <FiUser className="text-[#C9A66B] text-base mr-2 shrink-0" />
            <div className="w-full flex flex-col justify-center">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#C9A66B] font-semibold leading-none">
                First Name
              </span>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full bg-transparent text-xs text-white font-medium focus:outline-none placeholder-white/50 pt-0.5"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="relative flex items-center border border-white/25 rounded-lg px-2.5 sm:px-3 py-1.5 focus-within:border-[#C9A66B] focus-within:bg-black/35 transition-all bg-black/20 min-h-[44px] sm:min-h-[46px]">
            <FiUser className="text-[#C9A66B] text-base mr-2 shrink-0" />
            <div className="w-full flex flex-col justify-center">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#C9A66B] font-semibold leading-none">
                Last Name
              </span>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-transparent text-xs text-white font-medium focus:outline-none placeholder-white/50 pt-0.5"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="relative flex items-center border border-white/25 rounded-lg px-2.5 sm:px-3 py-2 focus-within:border-[#C9A66B] focus-within:bg-black/35 transition-all bg-black/20 min-h-[42px] sm:min-h-[44px]">
          <FiMail className="text-[#C9A66B] text-base mr-2 shrink-0" />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-transparent text-xs text-white font-medium focus:outline-none placeholder-white/50"
          />
        </div>

        {/* Phone */}
        <div className="relative flex items-center border border-white/25 rounded-lg px-2.5 sm:px-3 py-2 focus-within:border-[#C9A66B] focus-within:bg-black/35 transition-all bg-black/20 min-h-[42px] sm:min-h-[44px]">
          <svg 
            className="w-4 h-4 text-[#C9A66B] mr-2 shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.5" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
          </svg>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone / WhatsApp"
            className="w-full bg-transparent text-xs text-white font-medium focus:outline-none placeholder-white/50"
          />
        </div>

        {/* Message Textarea */}
        <div className="border border-white/25 rounded-lg px-2.5 sm:px-3 py-2 focus-within:border-[#C9A66B] focus-within:bg-black/35 transition-all bg-black/20">
          <textarea
            name="message"
            required
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project or message..."
            className="w-full bg-transparent text-xs text-white font-medium focus:outline-none placeholder-white/50 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 sm:py-3 px-6 rounded-lg font-semibold text-xs sm:text-sm text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-[0.99] shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-1 border border-[#2F5D50]/50"
        >
          {loading ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </div>
  );
}
