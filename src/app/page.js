"use client";

import { useState } from "react";

export default function Home() {
  const [dbStatus, setDbStatus] = useState(null);
  const [checkingDb, setCheckingDb] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const checkBackendAndDb = async () => {
    setCheckingDb(true);
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setDbStatus(data);
    } catch (err) {
      setDbStatus({ error: "Failed to connect to backend route", details: err.message });
    } finally {
      setCheckingDb(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setFormStatus(data);
      if (res.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      setFormStatus({ success: false, error: "Network error sending message" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", padding: "4rem 2rem", fontFamily: "system-ui, sans-serif", background: "#0a0a0c", color: "#f3f4f6" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header */}
        <header style={{ marginBottom: "3rem", textAlign: "center" }}>
          <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#6366f1", fontWeight: 600 }}>
            Full-Stack Next.js + MongoDB + Nodemailer
          </span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, margin: "0.75rem 0", background: "linear-gradient(135deg, #fff 30%, #a5b4fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Backend Configured
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 1.5rem auto" }}>
            Your backend is wired with <strong>MongoDB Atlas</strong> for data persistence and <strong>Nodemailer</strong> for instant Gmail alerts.
          </p>
          <div>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(99, 102, 241, 0.35)",
              }}
            >
              Open Dedicated Contact Page &rarr;
            </a>
          </div>
        </header>

        {/* Status Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#13141c", border: "1px solid #232533", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ color: "#34d399", fontWeight: 700, marginBottom: "0.5rem" }}>🍃 MongoDB Atlas</div>
            <p style={{ color: "#9ca3af", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "1rem" }}>
              Stores contact inquiries and projects directly into your database.
            </p>
            <button
              onClick={checkBackendAndDb}
              disabled={checkingDb}
              style={{
                background: "#059669",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: checkingDb ? "not-allowed" : "pointer",
              }}
            >
              {checkingDb ? "Checking Connection..." : "Test MongoDB Connection"}
            </button>

            {dbStatus && (
              <div style={{ marginTop: "1rem", background: "#0a0a0c", padding: "0.75rem", borderRadius: "6px", border: "1px solid #27272a" }}>
                <pre style={{ margin: 0, fontSize: "0.75rem", color: dbStatus.database === "connected" ? "#34d399" : "#f87171" }}>
                  {JSON.stringify(dbStatus, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div style={{ background: "#13141c", border: "1px solid #232533", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ color: "#818cf8", fontWeight: 700, marginBottom: "0.5rem" }}>✉️ Nodemailer (Gmail)</div>
            <p style={{ color: "#9ca3af", fontSize: "0.95rem", lineHeight: 1.5 }}>
              Automatically forwards new contact messages straight to your inbox (<code>shaikparveez290@gmail.com</code>).
            </p>
          </div>
        </section>

        {/* Live Test Contact Form */}
        <section style={{ background: "#13141c", border: "1px solid #232533", borderRadius: "12px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.5rem", color: "#e5e7eb" }}>
            Test Full-Stack Flow (Form → MongoDB → Email)
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            Submit a test message below to verify saving to MongoDB and email delivery simultaneously:
          </p>

          <form onSubmit={handleSendMessage} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  background: "#0a0a0c",
                  border: "1px solid #27272a",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "0.95rem",
                }}
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  background: "#0a0a0c",
                  border: "1px solid #27272a",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "0.95rem",
                }}
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={{
                background: "#0a0a0c",
                border: "1px solid #27272a",
                padding: "0.75rem",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "0.95rem",
              }}
            />

            <textarea
              placeholder="Your Message *"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                background: "#0a0a0c",
                border: "1px solid #27272a",
                padding: "0.75rem",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "0.95rem",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              disabled={submitting}
              style={{
                background: "#4f46e5",
                color: "#fff",
                border: "none",
                padding: "0.85rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: submitting ? "not-allowed" : "pointer",
                transition: "opacity 0.2s",
              }}
            >
              {submitting ? "Processing..." : "Send Test Message"}
            </button>
          </form>

          {formStatus && (
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                borderRadius: "8px",
                border: formStatus.success ? "1px solid #059669" : "1px solid #dc2626",
                background: formStatus.success ? "rgba(5, 150, 105, 0.1)" : "rgba(220, 38, 38, 0.1)",
              }}
            >
              <h4 style={{ margin: "0 0 0.5rem 0", color: formStatus.success ? "#34d399" : "#f87171" }}>
                {formStatus.success ? "✓ Message Handled" : "✗ Submission Error"}
              </h4>
              <pre style={{ margin: 0, fontSize: "0.85rem", color: "#d1d5db", overflowX: "auto" }}>
                {JSON.stringify(formStatus, null, 2)}
              </pre>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
