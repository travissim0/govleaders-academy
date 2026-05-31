import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Building2,
  Wrench,
  Target,
  Clock,
  Shield,
  Compass,
  CheckCircle,
  Lightbulb,
  BarChart3,
  RefreshCw,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { ValuesAccordion } from "@/components/ValuesAccordion";
import { DisciplineBanner } from "@/components/DisciplineBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GovLeaders Academy, our mission, values, and commitment to practical public-sector training and professional development.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            About GovLeaders Academy
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Practical online training for the people who govern, manage, support, and serve
            public-sector organizations.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            GovLeaders Academy was built to help public-sector professionals, board members,
            district leaders, employees, consultants, and organizations strengthen their
            knowledge, credibility, and decision-making through structured online training
            and professional development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy-dark font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
            >
              Browse Courses
            </Link>
            <Link
              href="/services/custom-training"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold rounded-[6px] hover:bg-white/10 transition-colors"
            >
              Explore Organization Options
            </Link>
          </div>
        </div>
      </section>

      {/* What GovLeaders Academy Provides */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">
              What GovLeaders Academy Provides
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              GLA supports individual learners, full boards, agencies, districts, associations,
              and public-sector organizations through structured online training, Course Series,
              organizational training options, and specialized development services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Individual Courses",
                description: "Practical, self-paced training for board members, public-sector employees, consultants, public safety professionals, and individuals preparing for public service.",
                cta: "Browse Courses",
                href: "/courses",
              },
              {
                icon: Users,
                title: "Course Series",
                description: "Grouped and bundled courses that help learners and organizations build structured knowledge in focused areas such as governance, leadership, compliance, public finance, and district operations.",
                cta: "View Course Series",
                href: "/courses",
              },
              {
                icon: Building2,
                title: "Organization Training",
                description: "Training options for boards, districts, agencies, firms, associations, and public-sector organizations seeking consistent learning across teams.",
                cta: "Explore Options",
                href: "/services/custom-training",
              },
              {
                icon: Wrench,
                title: "Specialized Services",
                description: "Custom Training, Promotional Exams, College Advising, and Sponsorship opportunities for organizations or professionals needing support beyond standard courses.",
                cta: "Explore Services",
                href: "/services",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-light rounded-[6px] border border-gray-200 p-6 flex flex-col">
                <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-navy text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate leading-relaxed mb-4 flex-1">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-navy-light transition-colors"
                >
                  {item.cta} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Public Service */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy">Built for Public Service</h2>
            </div>
            <div>
              <p className="text-slate leading-relaxed">
                GovLeaders Academy was created to support the people, boards, agencies, districts,
                and organizations that keep local government and public service moving forward.
                Our work is built around a practical understanding of leadership, governance,
                supervision, adult learning, public-sector operations, and organizational
                effectiveness.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "21", label: "Courses" },
              { value: "110+", label: "Contact Hours" },
              { value: "100%", label: "Online Training" },
              { value: "Growing", label: "Course Catalog" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-[6px] border border-gray-200 p-5 text-center">
                <p className="text-2xl font-bold text-navy">{stat.value}</p>
                <p className="text-xs text-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Discipline Banner */}
      <DisciplineBanner />

      {/* What Makes GLA Different */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            What Makes GLA Different
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Practical Public-Sector Focus",
                description: "Training is built around the decisions, responsibilities, and challenges public-sector professionals actually face.",
              },
              {
                icon: Clock,
                title: "Designed for Working Adults",
                description: "Courses are structured for busy board members, employees, public safety professionals, consultants, and leaders who need practical information without unnecessary complexity.",
              },
              {
                icon: Compass,
                title: "Built With Instructional Purpose",
                description: "GLA courses are developed with clear objectives, practical examples, structured assessments, and real-world application.",
              },
              {
                icon: Building2,
                title: "Connected to Organizational Needs",
                description: "GLA supports individuals, full boards, districts, agencies, associations, and organizations seeking scalable training options.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-light rounded-[6px] border border-gray-200 p-6">
                <item.icon size={24} className="text-gold mb-3" />
                <h3 className="font-semibold text-navy text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Mission, Vision, and Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-[6px] border border-gray-200 p-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-3">Mission</h3>
              <p className="text-sm text-slate leading-relaxed">
                To provide practical, accessible, and credible training, advising, and
                professional development for public-sector professionals, board members,
                employees, and organizations.
              </p>
            </div>
            <div className="bg-white rounded-[6px] border border-gray-200 p-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-3">Vision</h3>
              <p className="text-sm text-slate leading-relaxed">
                To become a trusted training and development resource for local government,
                special districts, public safety agencies, and public-sector professionals
                seeking to serve with greater confidence, competence, and accountability.
              </p>
            </div>
          </div>
          <ValuesAccordion />
        </div>
      </section>

      {/* Designed With Purpose */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Designed With Purpose</h2>
            <p className="text-slate max-w-2xl mx-auto">
              GLA courses are built to be organized, useful, defensible, and connected to the
              work people actually perform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Clear Objectives", description: "Training begins with defined learning goals." },
              { icon: Lightbulb, title: "Practical Application", description: "Content connects to real public-sector responsibilities." },
              { icon: Users, title: "Scenario-Based Learning", description: "Courses use examples and situations learners may actually face." },
              { icon: BarChart3, title: "Structured Assessments", description: "Knowledge checks and assessments support learning and accountability." },
              { icon: Clock, title: "Adult Learning Principles", description: "Courses are designed for working adults, not traditional classroom-only learners." },
              { icon: RefreshCw, title: "Continuous Improvement", description: "Courses can be updated as laws, practices, and public-sector needs change." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4">
                <div className="w-9 h-9 bg-gold/10 rounded-[6px] flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate mt-8 max-w-2xl mx-auto">
            Our course development approach may draw from recognized instructional design
            practices, including ADDIE-based planning, Bloom&apos;s Taxonomy, assessment
            alignment, and measurable learning outcomes.
          </p>
        </div>
      </section>

      {/* Not a Generic Course Marketplace */}
      <section className="bg-navy py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield size={32} className="text-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Not a Generic Course Marketplace
          </h2>
          <p className="text-gray-300 mb-6">
            GovLeaders Academy is built specifically for public-sector work. Our focus is not
            random professional development or generic leadership content. GLA courses are
            designed around governance, operations, compliance, leadership, public safety,
            special districts, local government, and the real responsibilities of public service.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy-dark font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
          >
            View Courses and Series
          </Link>
        </div>
      </section>

      {/* How GLA Supports Learners and Organizations */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            How GLA Supports Learners and Organizations
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "For Individual Learners",
                description: "Take individual courses or Course Series to build practical knowledge at your own pace.",
                cta: "Browse Courses",
                href: "/courses",
              },
              {
                title: "For Boards and Organizations",
                description: "Use GLA for board training, staff development, organization access, subscriptions, and consistent professional development.",
                cta: "Explore Organization Options",
                href: "/services/custom-training",
              },
              {
                title: "For Specialized Needs",
                description: "Request custom training, promotional exam support, college advising, or sponsorship information.",
                cta: "Explore Services",
                href: "/services",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-light rounded-[6px] border border-gray-200 p-7 flex flex-col">
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-slate mb-5 flex-1">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white text-sm font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="bg-navy-dark py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-4">
            Move Forward. Lead Better.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            That phrase reflects the purpose behind GovLeaders Academy: helping public-sector
            professionals, board members, employees, and organizations take the next practical
            step toward stronger leadership, better decisions, and more effective service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-navy-dark text-[17px] font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
            >
              Browse Courses
            </Link>
            <a
              href="https://learn.govleadersacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 border border-white/30 text-white text-[17px] font-semibold rounded-[6px] hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={18} />
              Enter Learning Portal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
