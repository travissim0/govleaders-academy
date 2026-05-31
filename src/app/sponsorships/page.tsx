import type { Metadata } from "next";
import {
  Target,
  BookOpen,
  Heart,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  MessageSquare,
  Shield,
  Calendar,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { SponsorshipForm } from "@/components/SponsorshipForm";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities",
  description:
    "Reach public-sector decision-makers, board members, district professionals, and the organizations that support them through focused course sponsorship opportunities with GovLeaders Academy.",
};

export default function SponsorshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sponsorship Opportunities
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-3">
            Focused visibility for organizations that serve public-sector decision-makers.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            GovLeaders Academy offers sponsorship opportunities for organizations that serve
            local government, special districts, MUDs, WCIDs, water districts, ESDs, public
            safety agencies, and public-sector professionals. Sponsorships allow aligned
            organizations to support practical public-sector training while reaching a focused
            audience of board members, public officials, district staff, consultants, vendors,
            and public-sector decision-makers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-dark font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
            >
              Request Sponsorship Information
            </a>
            <a
              href="#options"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-[6px] hover:bg-white/20 transition-colors border border-white/20"
            >
              Explore Sponsorship Options
            </a>
          </div>
        </div>
      </section>

      {/* Why Sponsor With GLA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Why Sponsor With GLA</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Course sponsorship connects your organization with the public-sector professionals
              who make governance, operations, and purchasing decisions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Reach a Focused Audience",
                description: "Connect with board members, district leaders, public employees, consultants, vendors, and public-sector professionals who are actively learning about governance, operations, leadership, compliance, and decision-making.",
              },
              {
                icon: BookOpen,
                title: "Align With Relevant Courses",
                description: "Sponsor courses that connect directly to your organization's work, audience, expertise, or public-sector service area.",
              },
              {
                icon: Heart,
                title: "Support Practical Training",
                description: "Help expand access to structured, professional training designed for the people who serve communities.",
              },
              {
                icon: RefreshCw,
                title: "Build Long-Term Visibility",
                description: "Sponsorships are structured as 12-month opportunities, with renewal options available when the sponsorship term ends.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-light rounded-[6px] border border-gray-200 p-6">
                <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-navy text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section id="options" className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Sponsorship Options</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Choose the sponsorship level that aligns with your organization's goals and audience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Course Sponsorship */}
            <div className="bg-white rounded-[6px] border border-gray-200 p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center">
                  <BookOpen size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy">Course Sponsorship</h3>
              </div>
              <p className="text-sm text-slate mb-4">
                Sponsor one GLA course for a 12-month term. Course sponsorships are exclusive
                by course and may include sponsor recognition on the course page, inside the
                course experience, and on eligible course certificates.
              </p>
              <p className="text-xs font-semibold text-navy mb-2">Best for:</p>
              <p className="text-xs text-slate mb-4">
                Organizations that want to align with a specific topic, course audience, or
                area of professional expertise.
              </p>
              <p className="text-xs font-semibold text-navy mb-2">Examples:</p>
              <ul className="text-xs text-slate space-y-1.5 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#8226;</span>
                  An engineering firm sponsoring a course on MUD operations or infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#8226;</span>
                  A law firm sponsoring a course on open meetings or public records
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#8226;</span>
                  A bookkeeping or tax firm sponsoring a course on public finance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#8226;</span>
                  A public safety vendor sponsoring a course on contract policing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#8226;</span>
                  A communications firm sponsoring a course on public engagement
                </li>
              </ul>
              <a href="#inquiry" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors text-sm">
                Inquire About Course Sponsorship <ArrowRight size={14} />
              </a>
            </div>

            {/* Course Series Sponsorship */}
            <div className="bg-white rounded-[6px] border border-gray-200 p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-navy-dark text-[10px] font-bold uppercase px-3 py-1 rounded-bl-[6px]">
                Premium
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy">Course Series Sponsorship</h3>
              </div>
              <p className="text-sm text-slate mb-4">
                Sponsor a full Course Series for a 12-month term when available. Course Series
                sponsorships are ideal for organizations seeking broader visibility across a
                related group of courses.
              </p>
              <p className="text-xs font-semibold text-navy mb-2">Best for:</p>
              <p className="text-xs text-slate mb-4">
                Organizations that want broader alignment with governance, leadership, compliance,
                public finance, water district operations, or public-sector decision-making.
              </p>
              <p className="text-xs font-semibold text-navy mb-2">Availability:</p>
              <p className="text-xs text-slate mb-6 flex-1">
                Course Series sponsorships are offered when the full series is available and not
                already divided across separate individual course sponsors. This ensures clear,
                exclusive visibility for the series sponsor.
              </p>
              <a href="#inquiry" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors text-sm">
                Inquire About Series Sponsorship <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Sponsors May Receive */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">What Sponsors May Receive</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Exclusive sponsorship recognition for one course or Course Series",
              "Sponsor name and logo on the course or series page",
              "Sponsor recognition inside the course introduction or overview",
              "A short sponsor information segment inside the sponsored course",
              "\"Course sponsored by\" recognition on eligible certificates",
              "Optional practitioner interview or supplemental commentary",
              "Sponsor listing on the GLA Sponsorships page",
              "5 to 15 course invitation seats, depending on sponsorship level",
              "Renewal opportunity at the end of the 12-month sponsorship term",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3">
                <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-slate">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Information Segment */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center mb-4">
                <MessageSquare size={20} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-navy mb-3">A Practical Sponsor Introduction</h2>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Sponsored courses may include a short sponsor information segment that helps
                learners understand who the sponsor is, what the organization does, and how its
                work connects to the course topic or public-sector audience.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                This segment is consistent with the course experience. It is not a hard sales
                pitch. The intent is similar to a brief professional introduction, presented in
                a format that matches GLA's course style and instructional tone.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-navy mb-3 uppercase tracking-wider">Possible Formats</p>
              <ul className="space-y-3">
                {[
                  "Short video introduction",
                  "Brief written sponsor profile",
                  "Practitioner perspective segment",
                  "Short interview clip",
                  "Field-based insight connected to the course topic",
                  "\"What boards should know\" style commentary",
                ].map((format) => (
                  <li key={format} className="flex items-center gap-3 text-sm text-slate">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    {format}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate mt-4 italic">
                All sponsor information is reviewed and approved by GLA before publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Seats */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-[6px] p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-[6px] flex items-center justify-center shrink-0">
                <Users size={20} className="text-gold" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Invitation Seats for Sponsored Courses</h2>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Course sponsorships include a limited number of invitation seats for the
                  sponsored course, generally ranging from 5 to 15 seats depending on the
                  sponsorship level.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  These seats give sponsors an opportunity to experience the course, share access
                  with selected team members, or invite a small number of stakeholders to benefit
                  from the training. They are intended to support meaningful engagement with the
                  sponsored course and help sponsors better understand the learning experience
                  their sponsorship supports.
                </p>
                <p className="text-xs text-gray-400">
                  Invitation seats are separate from organizational subscriptions, full-board
                  access, staff training packages, or enterprise training agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Recognition + Practitioner Perspective */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[6px] border border-gray-200 p-6">
              <Award size={24} className="text-gold mb-3" />
              <h3 className="font-bold text-navy mb-2">Certificate Recognition</h3>
              <p className="text-sm text-slate leading-relaxed">
                Sponsored courses may include sponsor recognition on eligible certificates
                using language such as &quot;Course sponsored by [Sponsor Name].&quot; Certificate
                placement and design will follow GLA's brand standards and certificate format.
              </p>
            </div>
            <div className="bg-white rounded-[6px] border border-gray-200 p-6">
              <MessageSquare size={24} className="text-gold mb-3" />
              <h3 className="font-bold text-navy mb-2">Practitioner Perspective</h3>
              <p className="text-sm text-slate leading-relaxed">
                Sponsors may be invited to contribute practical insight connected to the
                sponsored course topic. This may include a short interview, written commentary,
                field-based example, or supplemental perspective that helps learners understand
                how the topic applies in real public-sector work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards + Annual Terms */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-light rounded-[6px] flex items-center justify-center shrink-0">
              <Shield size={20} className="text-navy" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-2">Professional Standards</h2>
              <p className="text-sm text-slate leading-relaxed">
                GovLeaders Academy maintains editorial and instructional responsibility for all
                course content, assessments, certificates, and learning materials. Sponsorship
                recognition and practitioner contributions are included only when they align with
                the course purpose, learner needs, and GLA's professional standards. Sponsored
                courses will be clearly identified so learners understand when a course is
                supported by a sponsoring organization.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-light rounded-[6px] flex items-center justify-center shrink-0">
              <Calendar size={20} className="text-navy" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-2">Annual Sponsorship Terms</h2>
              <p className="text-sm text-slate leading-relaxed">
                Course and Course Series sponsorships are generally structured as 12-month
                opportunities. Sponsors may request renewal at the end of the sponsorship term,
                subject to availability, sponsor fit, and GLA approval. Sponsorship availability
                may vary by course, Course Series, topic, and existing sponsorship commitments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-light rounded-[6px] flex items-center justify-center shrink-0">
              <Megaphone size={20} className="text-navy" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-2">Additional Advertising Opportunities</h2>
              <p className="text-sm text-slate leading-relaxed">
                GLA may also consider future advertising opportunities connected to resources,
                downloadable guides, newsletters, or other public-sector content. These
                opportunities are separate from course and Course Series sponsorships and will
                be reviewed for audience fit, professionalism, and brand alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-gray-light py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate">
            Sponsorship pricing varies based on the course, Course Series, contact hours,
            sponsorship scope, and availability. Please submit an inquiry to discuss current
            sponsorship opportunities.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Interested in Sponsoring a Course or Course Series?
            </h2>
            <p className="text-slate max-w-xl mx-auto">
              Connect with GovLeaders Academy to discuss available sponsorship opportunities,
              audience fit, course alignment, and annual sponsorship options.
            </p>
          </div>
          <SponsorshipForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-dark py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Support Public-Sector Training. Reach the Right Audience.
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            GLA sponsorships provide focused, audience-aligned visibility for organizations
            that already serve, support, or want to reach public-sector decision-makers.
          </p>
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-navy-dark text-[17px] font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
          >
            Request Sponsorship Information
          </a>
        </div>
      </section>
    </>
  );
}
