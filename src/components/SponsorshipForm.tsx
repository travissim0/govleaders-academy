"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { TurnstileWidget } from "./TurnstileWidget";

const orgTypes = [
  "Engineering firm",
  "Law firm",
  "Bookkeeping or accounting firm",
  "Tax firm",
  "Water operations firm",
  "Public finance firm",
  "Technology or website provider",
  "Equipment, service, or product vendor",
  "Contractor",
  "Public-sector consultant",
  "Professional association",
  "Public entity or board",
  "Other",
];

const sponsorshipInterests = [
  "Course Sponsorship",
  "Course Series Sponsorship",
  "Multiple Course Sponsorship",
  "Advertising Opportunity",
  "Not sure yet",
];

const topicAreas = [
  "MUDs",
  "WCIDs",
  "Water districts",
  "ESDs",
  "Special districts",
  "Board governance",
  "Public finance",
  "Public safety",
  "Leadership",
  "Operations",
  "Compliance",
  "Consultants and vendors",
  "Other",
];

const practitionerOptions = ["Yes", "No", "Maybe"];
const renewalOptions = ["Yes", "No", "Maybe"];

export function SponsorshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orgName: "",
    orgWebsite: "",
    orgType: "",
    sponsorshipInterest: "",
    topicArea: "",
    practitionerContent: "",
    annualRenewal: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const turnstileToken = useRef("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    const messageBody = [
      `Organization: ${formData.orgName}`,
      `Website: ${formData.orgWebsite || "Not provided"}`,
      `Organization Type: ${formData.orgType}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Sponsorship Interest: ${formData.sponsorshipInterest}`,
      `Topic/Course Area: ${formData.topicArea}`,
      `Practitioner Content: ${formData.practitionerContent}`,
      `Annual Renewal Interest: ${formData.annualRenewal}`,
      formData.budget ? `Estimated Budget: ${formData.budget}` : "",
      "",
      `Message: ${formData.message}`,
    ].filter(Boolean).join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.orgName,
          role: "",
          inquiryType: "Sponsorship",
          message: messageBody,
          turnstileToken: turnstileToken.current,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "", email: "", phone: "", orgName: "", orgWebsite: "",
          orgType: "", sponsorshipInterest: "", topicArea: "",
          practitionerContent: "", annualRenewal: "", budget: "", message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
        <h3 className="font-heading text-2xl font-bold text-navy mb-2">Inquiry Submitted</h3>
        <p className="text-slate">We will review your information and respond within 1-2 business days.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-navy-light hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const selectClasses = "w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white text-sm";
  const inputClasses = "w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sp-name" className="block text-sm font-medium text-navy mb-1">Name *</label>
          <input type="text" id="sp-name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="sp-email" className="block text-sm font-medium text-navy mb-1">Email *</label>
          <input type="email" id="sp-email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sp-phone" className="block text-sm font-medium text-navy mb-1">Phone</label>
          <input type="tel" id="sp-phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="sp-orgWebsite" className="block text-sm font-medium text-navy mb-1">Organization Website</label>
          <input type="url" id="sp-orgWebsite" name="orgWebsite" value={formData.orgWebsite} onChange={handleChange} className={inputClasses} placeholder="https://" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sp-orgName" className="block text-sm font-medium text-navy mb-1">Organization Name *</label>
          <input type="text" id="sp-orgName" name="orgName" required value={formData.orgName} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="sp-orgType" className="block text-sm font-medium text-navy mb-1">Organization Type *</label>
          <select id="sp-orgType" name="orgType" required value={formData.orgType} onChange={handleChange} className={selectClasses}>
            <option value="">Select type</option>
            {orgTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sp-sponsorshipInterest" className="block text-sm font-medium text-navy mb-1">Sponsorship Interest *</label>
          <select id="sp-sponsorshipInterest" name="sponsorshipInterest" required value={formData.sponsorshipInterest} onChange={handleChange} className={selectClasses}>
            <option value="">Select interest</option>
            {sponsorshipInterests.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="sp-topicArea" className="block text-sm font-medium text-navy mb-1">Topic or Course Area of Interest *</label>
          <select id="sp-topicArea" name="topicArea" required value={formData.topicArea} onChange={handleChange} className={selectClasses}>
            <option value="">Select topic</option>
            {topicAreas.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sp-practitionerContent" className="block text-sm font-medium text-navy mb-1">Interested in providing practitioner content?</label>
          <select id="sp-practitionerContent" name="practitionerContent" value={formData.practitionerContent} onChange={handleChange} className={selectClasses}>
            <option value="">Select</option>
            {practitionerOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="sp-annualRenewal" className="block text-sm font-medium text-navy mb-1">Interested in annual renewal?</label>
          <select id="sp-annualRenewal" name="annualRenewal" value={formData.annualRenewal} onChange={handleChange} className={selectClasses}>
            <option value="">Select</option>
            {renewalOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sp-budget" className="block text-sm font-medium text-navy mb-1">Estimated Sponsorship Budget (optional)</label>
        <input type="text" id="sp-budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClasses} placeholder="Optional" />
      </div>

      <div>
        <label htmlFor="sp-message" className="block text-sm font-medium text-navy mb-1">Message</label>
        <textarea id="sp-message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Tell us about your organization and sponsorship goals" />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      <TurnstileWidget onSuccess={(token) => { turnstileToken.current = token; }} />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        {status === "submitting" ? "Submitting..." : "Request Sponsorship Information"}
      </button>
    </form>
  );
}
