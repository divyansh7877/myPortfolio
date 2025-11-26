"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, Check, AlertCircle, Sparkles } from "lucide-react";
import { submitContactForm } from "@/lib/supabase";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      return;
    }

    setStatus("submitting");

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email || undefined,
        phone: formData.phone || undefined,
        message: formData.message,
      });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-zinc-900/50 border rounded-xl px-4 py-3 pl-12 
    text-zinc-100 placeholder:text-zinc-600 
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-0
    ${focusedField === fieldName
      ? "border-indigo-500/70 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
      : "border-zinc-800 hover:border-zinc-700"
    }
  `;

  const iconClasses = (fieldName: string) => `
    absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300
    ${focusedField === fieldName ? "text-indigo-400" : "text-zinc-500"}
  `;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-zinc-400">Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Have a question or want to work together?
            </span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Drop me a message and I&apos;ll get back to you as soon as I can. No pressure, just a friendly conversation.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name Field */}
          <div className="relative">
            <User className={iconClasses("name")} />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses("name")}
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Mail className={iconClasses("email")} />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("email")}
              />
            </div>
            <div className="relative">
              <Phone className={iconClasses("phone")} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("phone")}
              />
            </div>
          </div>

          {/* Helper text */}
          <p className="text-xs text-zinc-600 px-1">
            Please provide at least one way to reach you (email or phone)
          </p>

          {/* Message Field */}
          <div className="relative">
            <MessageSquare className={`absolute left-4 top-4 w-4 h-4 transition-colors duration-300 ${focusedField === "message" ? "text-indigo-400" : "text-zinc-500"}`} />
            <textarea
              name="message"
              placeholder="What's on your mind?"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              rows={5}
              className={`
                w-full bg-zinc-900/50 border rounded-xl px-4 py-3 pl-12 
                text-zinc-100 placeholder:text-zinc-600 resize-none
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-0
                ${focusedField === "message"
                  ? "border-indigo-500/70 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
                  : "border-zinc-800 hover:border-zinc-700"
                }
              `}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
            className={`
              w-full py-4 rounded-xl font-medium text-base
              flex items-center justify-center gap-3
              transition-all duration-300
              ${status === "success"
                ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-400"
                : status === "error"
                ? "bg-red-500/20 border border-red-500/50 text-red-400"
                : "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              }
              disabled:cursor-not-allowed
            `}
          >
            <AnimatePresence mode="wait">
              {status === "submitting" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </motion.div>
              ) : status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>Message Sent!</span>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Try again?</span>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>

        {/* Trust indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-zinc-600 mt-6"
        >
          Your information is safe and will never be shared with third parties.
        </motion.p>
      </div>
    </section>
  );
}

