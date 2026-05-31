import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users,
  BookOpen,
  Award,
  BarChart3,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Organizations",
  description:
    "Structured training access for boards, districts, agencies, associations, and public-sector organizations. Course series, annual subscriptions, seat-based access, and custom training.",
};

export default function ForOrganizationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Training Options for Organizations
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            Provide structured training access for board members, staff, and professional
            teams through course series, annual subscriptions, and organization-level
            learning pathways.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            GovLeaders Academy supports boards, districts, agencies, consulting firms,
            associations, and public-sector organizations that need consistent, practical
            training across teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?inquiry=Partnership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-dark font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
            >
              Request Organization Information
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-[6px] hover:bg-white/10 transition-colors"
            >
              Browse Course Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Built for Public-Sector Organizations
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Organization training options are designed for teams, boards, and agencies
              that need structured professional development across multiple people.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Municipal Utility Districts",
              "Water Districts and WCIDs",
              "Emergency Services Districts",
              "Local Government Offices",
              "Public-Sector Agencies",
              "Consulting Firms",
              "Professional Associations",
              "Public Safety Organizations",
            ].map((org) => (
              <div key={org} className="bg-gray-light rounded-[6px] border border-gray-200 p-4 text-center">
                <p className="text-sm font-semibold text-navy">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Access Options */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Organization Access Options
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Choose the training structure that fits your organization's size, goals, and
              professional development needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course Series Access */}
            <div className="bg-white rounded-[6px] border border-gray-200 p-7 flex flex-col">
              <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center mb-4">
                <Layers size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Course Series Access</h3>
              <p className="text-sm text-slate mb-4 flex-1">
                Provide your board or team access to a focused Course Series aligned to
                governance, leadership, compliance, public finance, or district operations.
                Series-based training provides consistent instruction across all participants.
              </p>
              <ul className="space-y-2 mb-5">
                {["4 courses per series", "Structured learning path", "Certificates for each course", "6-month access"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate">
                    <CheckCircle size={14} className="text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
              >
                View Course Series <ArrowRight size={14} />
              </Link>
            </div>

            {/* Annual Subscription */}
            <div className="bg-white rounded-[6px] border-2 border-gold/40 p-7 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gold text-navy-dark text-[10px] font-bold uppercase px-3 py-1 rounded-bl-[6px]">
                Most Popular
              </div>
              <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center mb-4">
                <Building2 size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Annual Subscription</h3>
              <p className="text-sm text-slate mb-4 flex-1">
                Full catalog access for your organization on an annual basis. Provide board
                members, staff, or teams with access to all GLA courses and Course Series
                with completion tracking and certificate documentation.
              </p>
              <ul className="space-y-2 mb-5">
                {["Full catalog access", "Seat-based pricing", "Completion tracking", "Annual renewal", "Certificate documentation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate">
                    <CheckCircle size={14} className="text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?inquiry=Partnership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
              >
                Request Pricing <ArrowRight size={14} />
              </Link>
            </div>

            {/* Board/Staff Packages */}
            <div className="bg-white rounded-[6px] border border-gray-200 p-7 flex flex-col">
              <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center mb-4">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Board and Staff Packages</h3>
              <p className="text-sm text-slate mb-4 flex-1">
                Training packages designed for full boards, leadership teams, or staff groups.
                Provide consistent onboarding, governance training, or professional development
                for a defined group of participants.
              </p>
              <ul className="space-y-2 mb-5">
                {["5 to 15+ seats", "Flexible course selection", "Group onboarding support", "Bulk pricing available"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate">
                    <CheckCircle size={14} className="text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?inquiry=Partnership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
              >
                Ask About Packages <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Organizations Get */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            What Organization Access Includes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: BookOpen, text: "Access to GLA courses and Course Series" },
              { icon: Users, text: "Seat-based access for board members, staff, or teams" },
              { icon: Award, text: "Certificates of completion for eligible courses" },
              { icon: BarChart3, text: "Completion tracking and documentation" },
              { icon: Layers, text: "Course series aligned to governance, leadership, compliance, and operations" },
              { icon: Shield, text: "Scalable training for boards, agencies, districts, and associations" },
              { icon: Building2, text: "Organization-level administration and reporting" },
              { icon: ArrowRight, text: "Custom training available as a separate service" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 bg-gray-light rounded-[6px] p-4 border border-gray-200">
                <item.icon size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-navy">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Organizations */}
      <section className="bg-navy-dark py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            How Organization Access Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Reach Out", description: "Contact GLA to discuss your organization's training needs, team size, and goals." },
              { step: "2", title: "Choose Your Access", description: "Select course series, annual subscription, or a board/staff package that fits." },
              { step: "3", title: "Onboard Your Team", description: "Members access training through the GLA Learning Portal with individual accounts." },
              { step: "4", title: "Track and Document", description: "Monitor completion, earn certificates, and document professional development." },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 border border-white/10 rounded-[6px] p-5">
                <div className="w-8 h-8 bg-gold rounded-[6px] flex items-center justify-center mb-3">
                  <span className="text-navy-dark font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Training Callout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-light rounded-[6px] border border-gray-200 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-navy mb-2">
                Need Training Built for Your Organization?
              </h3>
              <p className="text-sm text-slate">
                In addition to standard course access and subscriptions, GLA can develop
                custom training for agencies, associations, districts, and organizations with
                specific needs. Custom training may include leadership development, onboarding,
                compliance topics, policy-specific instruction, or professional development
                programs built around your organization's goals.
              </p>
            </div>
            <Link
              href="/services/custom-training"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors whitespace-nowrap shrink-0"
            >
              Request Custom Training
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-gray-light py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate">
            Organization pricing varies based on the number of seats, access level, course
            selection, and subscription length. Contact GLA to discuss options that fit your
            organization's needs and budget.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-dark py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Train Your Board or Team?
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Connect with GovLeaders Academy to discuss training access, subscriptions,
            board packages, and organization options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?inquiry=Partnership"
              className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-navy-dark text-[17px] font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
            >
              Request Organization Information
            </Link>
            <a
              href="https://learn.govleadersacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 border border-white/30 text-white text-[17px] font-semibold rounded-[6px] hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={18} />
              View Learning Portal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
