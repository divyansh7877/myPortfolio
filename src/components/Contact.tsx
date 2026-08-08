"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import CalEmbed from "./CalEmbed";

const endpoint = "https://usebasin.com/f/142559bbead8";
type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!String(data.get("email") || "").trim() && !String(data.get("phone") || "").trim()) {
      setError("Add an email address or phone number so I can reply.");
      return;
    }
    setError("");
    setStatus("submitting");
    try {
      const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="portfolio-section site-container">
      <div className="section-heading-row"><p className="section-index">06 / Contact</p><p className="section-index">San Francisco · Remote</p></div>
      <div className="contact-grid">
        <div className="contact-intro">
          <h2 className="contact-title">Build something useful.</h2>
          <p className="contact-copy">Have a hard data problem, an intelligent product, or a research idea? Send the brief—or book a focused conversation.</p>
          <CalEmbed />
          <a href="mailto:da3245@nyu.edu" className="contact-email">da3245@nyu.edu</a>
        </div>
        <form className="contact-form-shell" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="form-field"><span className="form-label">Name *</span><input className="form-input" name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label className="form-field"><span className="form-label">Email</span><input className="form-input" name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
            <label className="form-field"><span className="form-label">Phone</span><input className="form-input" name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label>
            <label className="form-field form-field-full"><span className="form-label">Message *</span><textarea className="form-input" name="message" rows={6} required placeholder="What are you working on?" /></label>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <p className="form-status" aria-live="polite">{status === "success" ? "Message received. I’ll be in touch soon." : status === "error" ? "The message did not send. Please email me directly." : "Email or phone is required so I can reply."}</p>
          <button className="button-primary" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : <>Send message <Send size={15}/></>}</button>
        </form>
      </div>
    </section>
  );
}
