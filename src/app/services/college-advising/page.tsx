"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Send,
  AlertCircle,
  GraduationCap,
} from "lucide-react";

const educationLevelOptions = [
  "No college credit",
  "Some college, no degree",
  "Associate degree",
  "Bachelor's degree",
  "Master's degree",
  "Doctoral degree",
];

const desiredDegreeLevelOptions = [
  "Associate degree",
  "Bachelor's degree",
  "Master's degree",
  "Doctoral degree",
  "Not sure yet",
];

const publicSectorAffiliationOptions = [
  "Law enforcement",
  "Fire/EMS",
  "City government",
  "County government",
  "Special district",
  "Water district or MUD",
  "State government",
  "Federal government",
  "Military",
  "Other public sector",
];

const mainGoalOptions = [
  "Start a degree",
  "Finish a degree",
  "Explore options",
  "Maximize transfer credit",
  "Career advancement",
  "Meet a job requirement",
  "Other",
];

const supportLevelOptions = [
  "Degree Pathway Review",
  "Degree Completion Plan",
  "Guided Enrollment Support",
  "Ongoing Education Support",
  "Not sure yet",
];

const alternativeCreditOptions = [
  "CLEP",
  "DSST",
  "Sophia",
  "Study.com",
  "StraighterLine",
  "ACE or Credly",
  "Military credit",
  "Professional training",
  "Not sure",
];

const processSteps = [
  { number: "1", label: "Initial Inquiry" },
  { number: "2", label: "Document Review" },
  { number: "3", label: "Goal Alignment" },
  { number: "4", label: "Pathway Recommendation" },
  { number: "5", label: "Application and Advising Support" },
  { number: "6", label: "Ongoing Support" },
];

const deliverables = [
  "Identify current academic standing",
  "Review unofficial transcripts",
  "Discuss education and career goals",
  "Review alternative credit sources",
  "Identify gaps",
  "Compare pathways",
  "Understand transfer-friendly options",
  "Prepare for official advising",
  "Navigate applications",
  "Build a practical education plan",
];

const serviceLevels = [
  {
    title: "Degree Pathway Review",
    description:
      "A single session to evaluate where you stand academically and discuss your options. Ideal if you want a quick overview before making decisions.",
  },
  {
    title: "Degree Completion Plan",
    description:
      "A structured review of your transcripts, alternative credits, and goals, resulting in a written plan outlining the most efficient path to your degree.",
  },
  {
    title: "Guided Enrollment Support",
    description:
      "Hands-on help with the application and enrollment process, including navigating admissions, financial aid basics, and course registration.",
  },
  {
    title: "Ongoing Education Support",
    description:
      "Continued advising throughout your degree program. Includes periodic check-ins, schedule adjustments, and support as your goals or circumstances change.",
  },
];

export default function CollegeAdvisingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentEducationLevel: "",
    desiredDegreeLevel: "",
    fieldOfInterest: "",
    currentProfession: "",
    publicSectorAffiliation: "",
    hasUnofficialTranscripts: "",
    alternativeCredits: [] as string[],
    mainGoal: "",
    preferredSupportLevel: "",
    additionalNotes: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCreditCheckbox(option: string) {
    setFormData((prev) => {
      const current = prev.alternativeCredits;
      if (current.includes(option)) {
        return {
          ...prev,
          alternativeCredits: current.filter((o) => o !== option),
        };
      }
      return { ...prev, alternativeCredits: [...current, option] };
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
          inquiryType: "College Advising",
          message: `Phone: ${formData.phone || "Not provided"}
Current Education Level: ${formData.currentEducationLevel || "Not specified"}
Desired Degree Level: ${formData.desiredDegreeLevel || "Not specified"}
Field of Interest: ${formData.fieldOfInterest || "Not provided"}
Current Profession: ${formData.currentProfession || "Not provided"}
Public-Sector Affiliation: ${formData.publicSectorAffiliation || "Not specified"}
Has Unofficial Transcripts: ${formData.hasUnofficialTranscripts || "Not specified"}
Alternative Credit Sources: ${formData.alternativeCredits.length > 0 ? formData.alternativeCredits.join(", ") : "None selected"}
Main Goal: ${formData.mainGoal || "Not specified"}
Preferred Support Level: ${formData.preferredSupportLevel || "Not specified"}
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
            College Advising for Public-Sector Professionals
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical degree pathway planning for adults who want legitimate,
            affordable, and accredited education options.
          </p>
        </div>
      </section>

      {/* Main copy */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 bg-navy/10 rounded-[6px] flex items-center justify-center mb-6">
                <GraduationCap size={28} className="text-navy" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                College Advising for Public-Sector Professionals
              </h2>
              <p className="text-slate mb-4">
                Do you have no college, some college, a lot of college, or a
                degree you want to build on? GovLeaders Academy helps
                public-sector professionals understand where they stand, what
                options may be available, and how to move forward through
                legitimate, accredited, and affordable education pathways.
              </p>
              <p className="text-slate mb-4">
                GLA believes education matters in public service. A strong
                public-sector workforce should be built through a combination of
                training, education, and experience. Formal education is not the
                only measure of competence, but it can strengthen credibility,
                improve decision-making, expand career options, and support more
                effective public service.
              </p>
              <p className="text-slate mb-4">
                Our College Advising service helps clients review their academic
                background, identify remaining degree requirements and
                educational gaps, compare legitimate and accredited degree
                pathway options, and prepare for official advising, admissions,
                and registration steps. A major goal of GLA college advising is
                to help clients avoid unnecessary student debt by identifying
                practical, accredited, transfer-friendly, and cost-conscious
                pathways whenever possible.
              </p>
              <p className="text-slate mb-4">
                GLA is not a school. GLA does not issue degrees. GLA does not
                replace official college advising. GLA helps clients prepare for
                official college and university advising. GLA respects education
                privacy and will not share personal or education information
                without permission.
              </p>
              <p className="text-slate mb-4">
                Your information is kept confidential. GLA follows FERPA
                principles when handling education records and will not share
                your personal or academic information without your written
                consent.
              </p>
              <p className="text-slate mb-6">
                GLA also provides{" "}
                <Link
                  href="/services/custom-training"
                  className="text-navy font-semibold underline hover:text-gold transition-colors"
                >
                  custom online training
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/promotional-exams"
                  className="text-navy font-semibold underline hover:text-gold transition-colors"
                >
                  online promotional exams
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

      {/* Service levels */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
            College Advising Options
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {serviceLevels.map((level) => (
              <div
                key={level.title}
                className="bg-white rounded-[6px] p-6 border border-gray-200"
              >
                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                  {level.title}
                </h3>
                <p className="text-sm text-slate">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-gray-light rounded-[6px] p-6 border border-gray-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy">
                    {step.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-slate">
              <ArrowRight size={16} className="text-gold" />
              <span>
                Support is available at every stage, from initial planning
                through enrollment and beyond.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy mb-2 text-center">
            Submit an Advising Inquiry
          </h2>
          <p className="text-slate text-center mb-10">
            Tell us about your education goals. There is no cost or obligation
            to inquire.
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

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="currentEducationLevel"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Current Education Level
                  </label>
                  <select
                    id="currentEducationLevel"
                    name="currentEducationLevel"
                    value={formData.currentEducationLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select level</option>
                    {educationLevelOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="desiredDegreeLevel"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Desired Degree Level
                  </label>
                  <select
                    id="desiredDegreeLevel"
                    name="desiredDegreeLevel"
                    value={formData.desiredDegreeLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select level</option>
                    {desiredDegreeLevelOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fieldOfInterest"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Field of Interest
                  </label>
                  <input
                    type="text"
                    id="fieldOfInterest"
                    name="fieldOfInterest"
                    value={formData.fieldOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentProfession"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Current Profession
                  </label>
                  <input
                    type="text"
                    id="currentProfession"
                    name="currentProfession"
                    value={formData.currentProfession}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="publicSectorAffiliation"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Public-Sector Affiliation
                  </label>
                  <select
                    id="publicSectorAffiliation"
                    name="publicSectorAffiliation"
                    value={formData.publicSectorAffiliation}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select affiliation</option>
                    {publicSectorAffiliationOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="hasUnofficialTranscripts"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Do you have unofficial transcripts?
                  </label>
                  <select
                    id="hasUnofficialTranscripts"
                    name="hasUnofficialTranscripts"
                    value={formData.hasUnofficialTranscripts}
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

              {/* Alternative credit checkboxes */}
              <div>
                <span className="block text-sm font-medium text-navy mb-2">
                  Do you have alternative credit sources? (select all that
                  apply)
                </span>
                <div className="grid sm:grid-cols-3 gap-2">
                  {alternativeCreditOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-sm text-navy cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.alternativeCredits.includes(option)}
                        onChange={() => handleCreditCheckbox(option)}
                        className="rounded-[6px] border-gray-300 text-navy focus:ring-navy"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="mainGoal"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Main Goal
                  </label>
                  <select
                    id="mainGoal"
                    name="mainGoal"
                    value={formData.mainGoal}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select goal</option>
                    {mainGoalOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferredSupportLevel"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Preferred Support Level
                  </label>
                  <select
                    id="preferredSupportLevel"
                    name="preferredSupportLevel"
                    value={formData.preferredSupportLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                  >
                    <option value="">Select level</option>
                    {supportLevelOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
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

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {status === "submitting"
                  ? "Submitting..."
                  : "Submit Advising Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
