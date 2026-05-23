"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Send,
  AlertCircle,
  Wrench,
} from "lucide-react";
import { TurnstileWidget } from "@/components/TurnstileWidget";

const targetAudienceOptions = [
  "Board members",
  "Supervisors",
  "Managers",
  "Employees",
  "Public safety personnel",
  "New hires",
  "Volunteers",
  "Other",
];

const courseLengthOptions = [
  "4 contact hours",
  "8 contact hours",
  "16 contact hours",
  "24 contact hours",
  "40 contact hours",
  "60 contact hours",
  "80 contact hours",
  "120 contact hours",
  "More than 120 contact hours (case-by-case review)",
];

const processSteps = [
  { number: "1", label: "Training Inquiry", description: "Organization submits the training need, target audience, timeline, and desired outcomes." },
  { number: "2", label: "Needs Review", description: "GLA reviews the organization's goals, workforce challenges, learning audience, and delivery needs." },
  { number: "3", label: "Training Plan", description: "GLA develops a recommended course structure, format, timeline, and development scope." },
  { number: "4", label: "Course Development", description: "Content is developed using practical instructional design, assessment, and adult learning principles." },
  { number: "5", label: "Review and Revision", description: "The organization reviews the course for accuracy, tone, policy alignment, and operational fit." },
  { number: "6", label: "Launch and Support", description: "Course is launched in the online platform with access, tracking, and support as agreed." },
];

const deliverables = [
  "Self-paced online courses",
  "Instructor-led asynchronous online courses",
  "Digital training programs from 4 to 120 contact hours",
  "Scenario-based assignments",
  "Graded discussions",
  "Written assignments",
  "Projects and practical deliverables",
  "Knowledge checks and exams",
  "Completion tracking",
  "Custom certificates",
  "Organization-exclusive training",
];

export default function CustomTrainingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organizationName: "",
    organizationType: "",
    targetAudience: [] as string[],
    trainingTopic: "",
    primaryGoal: "",
    preferredFormat: "",
    estimatedLearners: "",
    desiredCourseLength: "",
    shouldRemainExclusive: "",
    desiredTimeline: "",
    hasExistingMaterials: "",
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

  function handleCheckbox(option: string) {
    setFormData((prev) => {
      const current = prev.targetAudience;
      if (current.includes(option)) {
        return {
          ...prev,
          targetAudience: current.filter((o) => o !== option),
        };
      }
      return { ...prev, targetAudience: [...current, option] };
    });
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
          inquiryType: "Custom Training",
          message: `Phone: ${formData.phone || "Not provided"}
Organization: ${formData.organizationName || "Not provided"}
Organization Type: ${formData.organizationType || "Not provided"}
Target Audience: ${formData.targetAudience.length > 0 ? formData.targetAudience.join(", ") : "Not specified"}
Training Topic: ${formData.trainingTopic || "Not provided"}
Primary Goal: ${formData.primaryGoal || "Not provided"}
Preferred Format: ${formData.preferredFormat || "Not specified"}
Estimated Learners: ${formData.estimatedLearners || "Not provided"}
Desired Course Length: ${formData.desiredCourseLength || "Not specified"}
Should Remain Exclusive: ${formData.shouldRemainExclusive || "Not specified"}
Desired Timeline: ${formData.desiredTimeline || "Not provided"}
Has Existing Materials: ${formData.hasExistingMaterials || "Not specified"}
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
            Custom Online Training
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Digital training built around your organization&apos;s real needs,
            challenges, and workforce goals.
          </p>
        </div>
      </section>

      {/* Main copy */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 bg-navy/10 rounded-[6px] flex items-center justify-center mb-6">
                <Wrench size={28} className="text-navy" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                Training Designed for Your Organization
              </h2>
              <p className="text-slate mb-4">
                GovLeaders Academy develops custom online training for
                public-sector organizations. Whether you need a focused course
                on a single topic or a comprehensive program spanning multiple
                subject areas, we build digital training that reflects your
                policies, your challenges, and your workforce goals.
              </p>
              <p className="text-slate mb-4">
                All custom training is delivered online. We offer self-paced and
                instructor-led asynchronous formats. GLA does not provide
                in-person training. Programs can range from 4 to 120 contact
                hours. Requests above 120 contact hours are reviewed on a
                case-by-case basis.
              </p>
              <p className="text-slate mb-6">
                If you are also looking for{" "}
                <Link
                  href="/services/promotional-exams"
                  className="text-navy font-semibold underline hover:text-gold transition-colors"
                >
                  online promotional exams
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/college-advising"
                  className="text-navy font-semibold underline hover:text-gold transition-colors"
                >
                  college advising
                </Link>
                , those services are available separately.
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

      {/* Premium training */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">
              Premium Online Training
            </h2>
            <p className="text-slate mb-4">
              Our premium training option follows a university-style online
              format. Courses include structured modules, meaningful
              assignments, graded discussions, and direct instructor engagement
              throughout the program.
            </p>
            <p className="text-slate">
              This format is ideal for organizations that want more than passive
              content. Learners receive feedback, participate in scenario-based
              exercises, and complete practical deliverables that connect
              directly to their roles.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">
              Custom Training Pricing
            </h2>
            <p className="text-slate mb-4">
              Every custom training project is different. Pricing depends on the
              scope of the program, the number of contact hours, course
              complexity, and the level of instructor involvement required.
            </p>
            <p className="text-slate">
              After reviewing your training needs, GLA will provide a detailed
              quote outlining the scope, deliverables, timeline, and pricing for
              your project. There is no obligation when you submit an inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider text-center mb-2">
            Step by Step
          </p>
          <h2 className="text-3xl font-heading font-bold text-navy mb-12 text-center">
            Custom Training Development Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0 z-10 ring-4 ring-gray-light">
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
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy mb-2 text-center">
            Submit a Training Inquiry
          </h2>
          <p className="text-slate text-center mb-10">
            Tell us about your training needs. There is no cost or obligation to
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

              <div>
                <label
                  htmlFor="organizationType"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Organization Type
                </label>
                <input
                  type="text"
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>

              {/* Target audience checkboxes */}
              <div>
                <span className="block text-sm font-medium text-navy mb-2">
                  Target Audience (select all that apply)
                </span>
                <div className="grid sm:grid-cols-2 gap-2">
                  {targetAudienceOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-sm text-navy cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.targetAudience.includes(option)}
                        onChange={() => handleCheckbox(option)}
                        className="rounded-[6px] border-gray-300 text-navy focus:ring-navy"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="trainingTopic"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Training Topic
                </label>
                <input
                  type="text"
                  id="trainingTopic"
                  name="trainingTopic"
                  value={formData.trainingTopic}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="primaryGoal"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Primary Training Goal
                </label>
                <input
                  type="text"
                  id="primaryGoal"
                  name="primaryGoal"
                  value={formData.primaryGoal}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="preferredFormat"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Preferred Format
                  </label>
                  <select
                    id="preferredFormat"
                    name="preferredFormat"
                    value={formData.preferredFormat}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select a format</option>
                    <option value="Self-paced online">Self-paced online</option>
                    <option value="Instructor-led asynchronous">
                      Instructor-led asynchronous
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="estimatedLearners"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Estimated Number of Learners
                  </label>
                  <input
                    type="text"
                    id="estimatedLearners"
                    name="estimatedLearners"
                    value={formData.estimatedLearners}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="desiredCourseLength"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Desired Course Length
                </label>
                <select
                  id="desiredCourseLength"
                  name="desiredCourseLength"
                  value={formData.desiredCourseLength}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                >
                  <option value="">Select a course length</option>
                  {courseLengthOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="shouldRemainExclusive"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Should the course remain exclusive to your organization?
                  </label>
                  <select
                    id="shouldRemainExclusive"
                    name="shouldRemainExclusive"
                    value={formData.shouldRemainExclusive}
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
                    htmlFor="desiredTimeline"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Desired Launch Timeline
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
              </div>

              <div>
                <label
                  htmlFor="hasExistingMaterials"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Do you have existing materials to build from?
                </label>
                <select
                  id="hasExistingMaterials"
                  name="hasExistingMaterials"
                  value={formData.hasExistingMaterials}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Some">Some</option>
                </select>
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
                  : "Submit Training Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
