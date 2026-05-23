"use client";

import { useState, useRef } from "react";
import { Mail } from "lucide-react";
import { TurnstileWidget } from "./TurnstileWidget";

export function NewsletterSignup({ variant = "section" }: { variant?: "section" | "footer" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const turnstileToken = useRef("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, turnstileToken: turnstileToken.current }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
        <TurnstileWidget onSuccess={(token) => { turnstileToken.current = token; }} />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-3 py-2 rounded-[6px] bg-white/10 border border-white/20 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gold text-navy-dark text-sm font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
        >
          Subscribe
        </button>
        {status === "success" && <span className="text-xs text-green-400 self-center">Subscribed!</span>}
      </form>
    );
  }

  return (
    <section id="newsletter" className="bg-navy py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="mx-auto text-gold mb-4" size={40} />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Subscribe to The GLA Brief
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Subscribe to The GLA Brief for practical updates, public-sector training insights,
          course announcements, and leadership resources from GovLeaders Academy.
        </p>
        <TurnstileWidget onSuccess={(token) => { turnstileToken.current = token; }} />
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-[6px] bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <button
            type="submit"
            className="px-7 py-3 bg-gold text-navy-dark font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-sm text-green-400">Thanks for subscribing!</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
