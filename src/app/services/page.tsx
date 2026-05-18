import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, FileCheck, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom training, promotional exam services, and college pathway advising for public-sector organizations and professionals.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Beyond our course catalog, we offer specialized services to support
            your organization and your professional growth.
          </p>
        </div>
      </section>

      <section id="custom-training" className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Wrench size={28} className="text-navy" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">Custom Training</h2>
              <p className="text-slate mb-6">
                Every organization has unique challenges. We develop tailored training programs
                that address your specific operational, legal, and leadership needs. From
                single-topic workshops to comprehensive development programs, our custom training
                is built around your goals.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Needs assessment and curriculum design",
                  "Organization-specific case studies and scenarios",
                  "Flexible delivery: online, in-person, or hybrid",
                  "Ongoing program evaluation and updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?inquiry=Custom+Training"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                Inquire About Custom Training
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-gray-light rounded-2xl p-8 lg:p-12">
              <div className="space-y-4">
                <div className="h-3 bg-navy/10 rounded w-3/4" />
                <div className="h-3 bg-navy/10 rounded w-1/2" />
                <div className="h-3 bg-gold/20 rounded w-2/3" />
                <div className="grid grid-cols-3 gap-3 mt-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="w-8 h-8 bg-navy/10 rounded-full mx-auto mb-2" />
                      <div className="h-2 bg-navy/10 rounded w-2/3 mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="promo-exams" className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-full" />
                  <div>
                    <div className="h-3 bg-navy/10 rounded w-32 mb-1" />
                    <div className="h-2 bg-navy/5 rounded w-20" />
                  </div>
                </div>
                {[85, 92, 78, 95].map((score, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 bg-navy/10 rounded w-24" />
                    <div className="flex-1 bg-gray-100 rounded-full h-3">
                      <div className="bg-gold rounded-full h-3" style={{ width: `${score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <FileCheck size={28} className="text-navy" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">Promotional Exam Services</h2>
              <p className="text-slate mb-6">
                Fair, rigorous, and defensible promotional exams for public-sector agencies.
                We handle the full lifecycle — from job analysis and exam development to
                administration and scoring — so your promotions are based on merit.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Job task analysis and competency mapping",
                  "Written, oral, and assessment center exams",
                  "Legally defensible exam development process",
                  "Scoring, ranking, and detailed reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?inquiry=Promotional+Exams"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                Inquire About Exam Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="college-advising" className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={28} className="text-navy" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">College Pathway Advising</h2>
              <p className="text-slate mb-6">
                Advancing in public service often requires a degree. Our advising service helps
                working professionals navigate higher education — choosing the right programs,
                managing timelines, and maximizing credit for prior experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Program selection aligned to career goals",
                  "Credit-for-experience evaluation guidance",
                  "Application and enrollment support",
                  "Ongoing academic advising for working professionals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?inquiry=College+Advising"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                Inquire About College Advising
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-gray-light rounded-2xl p-8 lg:p-12">
              <div className="space-y-4">
                {[
                  { label: "Associate Degree", w: "w-1/3" },
                  { label: "Bachelor's Degree", w: "w-2/3" },
                  { label: "Master's Degree", w: "w-full" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-sm font-medium text-navy mb-2">{item.label}</div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className={`h-2 bg-gold rounded-full ${item.w}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Have Questions About Our Services?
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            We&apos;d love to discuss how we can support your organization or your career.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors text-lg"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
