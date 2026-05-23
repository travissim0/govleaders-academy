"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Send,
  AlertCircle,
  FileCheck,
} from "lucide-react";
import { TurnstileWidget } from "@/components/TurnstileWidget";

const orgTypeOptions = [
  "Law enforcement agency",
  "Fire department",
  "ESD",
  "City government",
  "County government",
  "Special district",
  "Water district or MUD",
  "Other",
];

const examPurposeOptions = [
  "Sergeant",
  "Lieutenant",
  "Captain",
  "Fire",
  "Civilian supervisor",
  "Civilian management",
  "Entry-level",
  "Other",
];

const processSteps = [
  { number: "1", label: "Inquiry Submitted", description: "Organization provides basic testing needs, number of candidates, exam purpose, and preferred timeline." },
  { number: "2", label: "Scope Review", description: "GLA reviews exam type, source materials, customization needs, proctoring needs, and pricing category." },
  { number: "3", label: "Exam Development or Selection", description: "Organization selects a standard exam or GLA develops a customized version using approved materials." },
  { number: "4", label: "Platform Setup", description: "Exam is configured in the online platform with access controls, timing, instructions, and proctoring if needed." },
  { number: "5", label: "Exam Administration", description: "Candidates complete the exam online individually or as part of a coordinated group testing process." },
  { number: "6", label: "Results and Appeals Support", description: "GLA provides scoring support, reporting, and appeal review assistance when applicable." },
];

const deliverables = [
  "Standard online promotional exams",
  "Customized exams",
  "Agency-specific questions",
  "Online exam preparation courses",
  "Custom online exam preparation courses",
  "Virtual proctoring when needed",
  "Appeal review and findings support",
  "Online entry-level or departmental applicant exams",
];

const pricingAddOns = [
  "Virtual proctoring add-on",
  "Expedited setup option",
  "Study guide development",
  "Online preparation course",
  "Custom preparation course",
  "Appeals review support",
  "Group/Individual testing setup",
  "Policy and procedure integration",
];

export default function PromotionalExamsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organizationName: "",
    organizationType: "",
    expectedTestTakers: "",
    examPurpose: "",
    preferredExamType: "",
    includeAgencyPolicies: "",
    needStudyGuides: "",
    needPrepCourse: "",
    needProctoring: "",
    desiredTimeline: "",
    additionalNotes: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const turnstileToken = useRef("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          turnstileToken: turnstileToken.current,
          inquiryType: "Promotional Exams",
          message: `Phone: ${formData.phone || "Not provided"}
Organization: ${formData.organizationName || "Not provided"}
Organization Type: ${formData.organizationType || "Not specified"}
Expected Test Takers: ${formData.expectedTestTakers || "Not provided"}
Exam Purpose: ${formData.examPurpose || "Not specified"}
Preferred Exam Type: ${formData.preferredExamType || "Not specified"}
Include Agency Policies: ${formData.includeAgencyPolicies || "Not specified"}
Study Guides Needed: ${formData.needStudyGuides || "Not specified"}
Prep Course Needed: ${formData.needPrepCourse || "Not specified"}
Virtual Proctoring Needed: ${formData.needProctoring || "Not specified"}
Desired Timeline: ${formData.desiredTimeline || "Not provided"}
Additional Notes: ${formData.additionalNotes || "None"}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Online Promotional Exams
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Structured, online exam solutions for public safety agencies, local
            governments, and public-sector organizations.
          </p>
        </div>
      </section>

      {/* Main copy */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 bg-navy/10 rounded-[6px] flex items-center justify-center mb-6">
                <FileCheck size={28} className="text-navy" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                Professional Online Exam Services
              </h2>
              <p className="text-slate mb-4">
                GovLeaders Academy provides online written promotional exams for
                public safety agencies, local governments, and public-sector
                organizations. Our exams are built to be fair, structured, and
                professionally administered.
              </p>
              <p className="text-slate mb-4">
                All exams are delivered online. GLA does not currently offer
                in-person exam administration or assessment center services.
                Candidates need a computer with internet access. If virtual
                proctoring is selected, a webcam and microphone are also
                required.
              </p>
              <p className="text-slate mb-6">
                We also offer{" "}
                <Link
                  href="/services/custom-training"
                  className="text-navy font-semibold underline hover:text-gold transition-colors"
                >
                  custom online training
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/college-advising"
                  className="text-navy font-semibold underline hover:text-gold transition-colors"
                >
                  college advising
                </Link>{" "}
                as separate services.
              </p>
            </div>

            {/* Deliverables */}
            <div className="bg-gray-light rounded-[6px] p-8">
              <h3 className="text-xl font-heading font-bold text-navy mb-4">
                What GLA Can Deliver
              </h3>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-gold shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">
              Exam Pricing
            </h2>
            <p className="text-slate mb-4">
              Pricing is based on the scope of your exam, the number of
              candidates, and any additional options or upgrades you select. GLA
              provides a clear quote after reviewing your needs.
            </p>
            <p className="text-slate">
              The following add-ons and options are available to customize your
              exam experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {pricingAddOns.map((item) => (
              <div
                key={item}
                className="bg-white rounded-[6px] p-4 border border-gray-200 text-center"
              >
                <span className="text-sm font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider text-center mb-2">
            Step by Step
          </p>
          <h2 className="text-3xl font-heading font-bold text-navy mb-12 text-center">
            Online Promotional Exam Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0 z-10 ring-4 ring-white">
                    <span className="text-white font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-0.5 bg-navy/20 flex-1 min-h-8" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3 className="font-heading font-bold text-navy text-lg mb-1">
                    {step.label}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy mb-2 text-center">
            Submit an Exam Inquiry
          </h2>
          <p className="text-slate text-center mb-10">
            Tell us about your exam needs. There is no cost or obligation to
            inquire.
          </p>

          {status === "success" ? (
            <div className="text-center py-12">
              <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
              <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                Inquiry Submitted!
              </h3>
              <p className="text-slate">
                We will review your inquiry and follow up within 1-2 business
                days.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-navy-light hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name, Email, Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organizationName"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    required
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="organizationType"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Organization Type
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select type</option>
                    {orgTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="expectedTestTakers"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Expected Number of Test Takers
                  </label>
                  <input
                    type="text"
                    id="expectedTestTakers"
                    name="expectedTestTakers"
                    value={formData.expectedTestTakers}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="examPurpose"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Exam Purpose
                  </label>
                  <select
                    id="examPurpose"
                    name="examPurpose"
                    value={formData.examPurpose}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select purpose</option>
                    {examPurposeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferredExamType"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Preferred Exam Type
                  </label>
                  <select
                    id="preferredExamType"
                    name="preferredExamType"
                    value={formData.preferredExamType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="Standard GLA">Standard GLA</option>
                    <option value="Customized">Customized</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="includeAgencyPolicies"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Should agency policies be included?
                  </label>
                  <select
                    id="includeAgencyPolicies"
                    name="includeAgencyPolicies"
                    value={formData.includeAgencyPolicies}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="needStudyGuides"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Are study guides needed?
                  </label>
                  <select
                    id="needStudyGuides"
                    name="needStudyGuides"
                    value={formData.needStudyGuides}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="needPrepCourse"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Is an online prep course needed?
                  </label>
                  <select
                    id="needPrepCourse"
                    name="needPrepCourse"
                    value={formData.needPrepCourse}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="needProctoring"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Is virtual proctoring needed?
                  </label>
                  <select
                    id="needProctoring"
                    name="needProctoring"
                    value={formData.needProctoring}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="desiredTimeline"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Desired Timeline
                </label>
                <input
                  type="text"
                  id="desiredTimeline"
                  name="desiredTimeline"
                  value={formData.desiredTimeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={4}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                />
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {status === "submitting"
                  ? "Submitting..."
                  : "Submit Exam Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
