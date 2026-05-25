import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, BarChart3, BookOpen, ExternalLink, CheckCircle, Users } from "lucide-react";
import { getSeriesBySlug, getAllSeries } from "@/lib/sanity";
import type { Series } from "@/types";

export const revalidate = 60;

const placeholderSeries: Series[] = [
  {
    _id: "series-flagship",
    title: "GLA Flagship Series: Foundations of Public Sector Leadership",
    slug: { current: "gla-flagship-series-foundations-of-public-sector-leadership" },
    description: "Texas government, special purpose districts, public finance, and board decision-making. The broadest and most universally applicable introduction to public-sector leadership.",
    courses: [
      { _id: "course-01", title: "How Texas Government Actually Works: A Practical Guide for Public Leaders", slug: { current: "how-texas-government-actually-works-a-practical-guide-for-public-leaders" }, shortDescription: "A practical introduction to Texas government structure, authority, and how public leadership actually functions at the state and local level.", contactHours: 8, level: "Foundations", audience: "All Public Leaders", price: 129, category: "Flagship Series" },
      { _id: "course-02", title: "Special Purpose Districts Explained: Structure, Authority, and Governance", slug: { current: "special-purpose-districts-explained-structure-authority-and-governance" }, shortDescription: "Understand the structure, legal authority, and governance responsibilities of special purpose districts in Texas.", contactHours: 8, level: "Foundations", audience: "Board Members & Staff", price: 129, category: "Flagship Series" },
      { _id: "course-03", title: "Public Finance Demystified: Budgets, Bonds, and the Decisions That Matter", slug: { current: "public-finance-demystified-budgets-bonds-and-the-decisions-that-matter" }, shortDescription: "Learn how public finance works — budgets, bonds, tax rates, and the financial decisions that impact communities.", contactHours: 8, level: "Foundations", audience: "Board Members & Public Officials", price: 129, category: "Flagship Series" },
      { _id: "course-04", title: "Behind Every Vote: How Public Boards Evaluate Information and Make Decisions", slug: { current: "behind-every-vote-how-public-boards-evaluate-information-and-make-decisions" }, shortDescription: "Explore how public boards receive, evaluate, and act on information to make sound governance decisions.", contactHours: 6, level: "Foundations", audience: "Board Members", price: 129, category: "Flagship Series" },
    ] as Series["courses"],
    totalHours: 30,
    individualValue: 516,
    bundlePrice: 399,
    savings: 117,
    accessPeriod: "6 months",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "series-new-board",
    title: "New Board Member Series",
    slug: { current: "new-board-member-series" },
    description: "Roles, responsibilities, consultants, ethics, transparency, and meeting documentation. Designed to help newly elected or appointed board members understand governance responsibilities.",
    courses: [
      { _id: "course-05", title: "The Board Member Playbook: Roles, Responsibilities, and Expectations", slug: { current: "the-board-member-playbook-roles-responsibilities-and-expectations" }, shortDescription: "A comprehensive guide to what board members need to know about their roles, duties, and professional expectations.", contactHours: 6, level: "Foundations", audience: "New Board Members", price: 89, category: "New Board Member Series" },
      { _id: "course-06", title: "Who's at the Table: Understanding Your Consultants and Their Roles", slug: { current: "whos-at-the-table-understanding-your-consultants-and-their-roles" }, shortDescription: "Learn who the key consultants are in public-sector governance and how to work with them effectively.", contactHours: 4, level: "Foundations", audience: "New Board Members", price: 89, category: "New Board Member Series" },
      { _id: "course-07", title: "Ethics, Transparency, and Public Trust", slug: { current: "ethics-transparency-and-public-trust" }, shortDescription: "Build a strong foundation in public-sector ethics, transparency requirements, and maintaining community trust.", contactHours: 6, level: "Foundations", audience: "All Public Officials", price: 99, category: "New Board Member Series" },
      { _id: "course-08", title: "Before the Meeting Starts: Agendas, Minutes, and Documentation", slug: { current: "before-the-meeting-starts-agendas-minutes-and-documentation" }, shortDescription: "Master the documentation that makes public meetings lawful, organized, and effective.", contactHours: 4, level: "Foundations", audience: "Board Members & Staff", price: 89, category: "New Board Member Series" },
    ] as Series["courses"],
    totalHours: 20,
    individualValue: 366,
    bundlePrice: 249,
    savings: 117,
    accessPeriod: "6 months",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "series-governance-legal",
    title: "Water District Governance and Legal Series",
    slug: { current: "water-district-governance-and-legal-series" },
    description: "Open meetings, public records, rate-setting, risk, liability, and procurement. Focused on governance and legal compliance for water district leaders.",
    courses: [
      { _id: "course-09", title: "Open Meetings and Public Records: Staying Compliant and Avoiding Mistakes", slug: { current: "open-meetings-and-public-records-staying-compliant-and-avoiding-mistakes" }, shortDescription: "Navigate open meetings requirements, public records obligations, and common compliance pitfalls for public officials.", contactHours: 6, level: "Foundations", audience: "All Public Officials", price: 99, category: "Water District Governance & Legal Series" },
      { _id: "course-10", title: "Setting the Rate: Understanding Taxes, Revenue, and Community Impact in Water Districts", slug: { current: "setting-the-rate-understanding-taxes-revenue-and-community-impact-in-water-districts" }, shortDescription: "Understand how water districts set tax rates, manage revenue, and balance community impact with operational needs.", contactHours: 6, level: "Foundations", audience: "Board Members & District Staff", price: 89, category: "Water District Governance & Legal Series" },
      { _id: "course-11", title: "What Could Go Wrong: Risk, Liability, and Protecting Yourself as a Board Member", slug: { current: "what-could-go-wrong-risk-liability-and-protecting-yourself-as-a-board-member" }, shortDescription: "Identify common risks, understand personal liability, and learn how to protect yourself and your district.", contactHours: 6, level: "Foundations", audience: "Board Members", price: 89, category: "Water District Governance & Legal Series" },
      { _id: "course-12", title: "Procurement Made Practical: How Water District Contracts Are Evaluated and Awarded", slug: { current: "procurement-made-practical-how-water-district-contracts-are-evaluated-and-awarded" }, shortDescription: "Learn the procurement process for water district contracts — evaluation criteria, legal requirements, and best practices.", contactHours: 6, level: "Intermediate", audience: "Board Members & Administrators", price: 89, category: "Water District Governance & Legal Series" },
    ] as Series["courses"],
    totalHours: 24,
    individualValue: 366,
    bundlePrice: 259,
    savings: 107,
    accessPeriod: "6 months",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "series-operations-leadership",
    title: "Water District Operations and Leadership Series",
    slug: { current: "water-district-operations-and-leadership-series" },
    description: "MUD operations, water systems, communication, stakeholder engagement, and practical leadership. Focused on the operational side of water district management.",
    courses: [
      { _id: "course-13", title: "Inside a MUD: Operations, Infrastructure, and What Drives Decisions", slug: { current: "inside-a-mud-operations-infrastructure-and-what-drives-decisions" }, shortDescription: "Learn how Municipal Utility Districts operate, how infrastructure decisions are made, and what drives day-to-day operations.", contactHours: 6, level: "Intermediate", audience: "District Directors & Staff", price: 99, category: "Water District Operations & Leadership Series" },
      { _id: "course-14", title: "Water Operations Explained: What Operators Do and How Systems Are Managed", slug: { current: "water-operations-explained-what-operators-do-and-how-systems-are-managed" }, shortDescription: "Understand what water system operators do, how treatment and distribution systems work, and how oversight applies.", contactHours: 6, level: "Intermediate", audience: "Board Members & District Staff", price: 99, category: "Water District Operations & Leadership Series" },
      { _id: "course-15", title: "Speaking, Listening, and Leading in Public: Communication and Stakeholder Engagement", slug: { current: "speaking-listening-and-leading-in-public-communication-and-stakeholder-engagement" }, shortDescription: "Develop effective communication skills for public meetings, stakeholder engagement, and community leadership.", contactHours: 4, level: "Intermediate", audience: "Public Leaders & Board Members", price: 99, category: "Water District Operations & Leadership Series" },
      { _id: "course-16", title: "Leading from Your Seat: Practical Leadership in Public Service", slug: { current: "leading-from-your-seat-practical-leadership-in-public-service" }, shortDescription: "Practical leadership skills for public servants — leading effectively regardless of your title or position.", contactHours: 6, level: "Intermediate", audience: "All Public Professionals", price: 99, category: "Water District Operations & Leadership Series" },
    ] as Series["courses"],
    totalHours: 22,
    individualValue: 396,
    bundlePrice: 279,
    savings: 117,
    accessPeriod: "6 months",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
];

export async function generateStaticParams() {
  const series = await getAllSeries();
  if (series.length > 0) {
    return series.map((s) => ({ slug: s.slug.current }));
  }
  return placeholderSeries.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const series = await getSeriesBySlug(slug) ?? placeholderSeries.find((s) => s.slug.current === slug);

  return {
    title: series?.title || "Course Series",
    description: series?.description || "A focused Course Series from GovLeaders Academy.",
  };
}

export default async function SeriesDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanitySeries = await getSeriesBySlug(slug);
  const series = sanitySeries ?? placeholderSeries.find((s) => s.slug.current === slug);

  if (!series) {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-heading font-bold text-navy mb-4">Series Not Found</h1>
          <p className="text-slate mb-8">The Course Series you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-navy-light hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
          <span className="inline-block text-xs font-medium bg-gold/20 text-gold px-2.5 py-1 rounded mb-4">
            Course Series
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            {series.title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            {series.description}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-dark py-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-white">{series.courses.length}</p>
              <p className="text-xs text-gray-400">Courses</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{series.totalHours}</p>
              <p className="text-xs text-gray-400">Contact Hours</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">${series.bundlePrice}</p>
              <p className="text-xs text-gray-400">Series Price</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-400">${series.savings}</p>
              <p className="text-xs text-gray-400">You Save</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course List */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-navy mb-6">Courses in This Series</h2>
              <div className="space-y-4">
                {series.courses.map((course, index) => (
                  <Link
                    key={course._id}
                    href={`/courses/${course.slug.current}`}
                    className="group block bg-gray-light rounded-[6px] border border-gray-200 p-5 hover:border-gold/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-navy rounded-[6px] flex items-center justify-center shrink-0 text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-navy text-sm mb-1 group-hover:text-navy-light transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate line-clamp-2 mb-2">
                          {course.shortDescription}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {course.contactHours} hrs
                          </span>
                          <span className="flex items-center gap-1">
                            <BarChart3 size={12} />
                            {course.level}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={12} />
                            {course.audience}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Pricing Card */}
                <div className="bg-gray-light rounded-[6px] border border-gray-200 p-6 text-center">
                  <p className="text-sm text-slate line-through mb-1">${series.individualValue} if purchased separately</p>
                  <p className="text-3xl font-bold text-navy mb-1">${series.bundlePrice}</p>
                  <p className="text-xs text-green-600 font-semibold mb-5">
                    Save ${series.savings} with the series bundle
                  </p>
                  <a
                    href={series.learnworldsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors mb-3"
                  >
                    Enroll in Series
                    <ExternalLink size={16} />
                  </a>
                  <p className="text-[11px] text-slate">
                    {series.accessPeriod || "6 months"} access to all {series.courses.length} courses
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-gray-light rounded-[6px] border border-gray-200 p-5">
                  <h3 className="font-semibold text-navy text-sm mb-3">Series Benefits</h3>
                  <ul className="space-y-2.5">
                    {[
                      "Structured learning path",
                      "Cost savings vs. individual courses",
                      "Progress tracking across all courses",
                      "Certificate for each completed course",
                      "Self-paced, designed for working adults",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-xs text-slate">
                        <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-dark py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen size={32} className="text-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Forward?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Enroll in the full series and build comprehensive knowledge at your own pace.
          </p>
          <a
            href={series.learnworldsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-navy-dark text-[17px] font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
          >
            <ExternalLink size={20} />
            Enroll on Learning Portal
          </a>
        </div>
      </section>
    </>
  );
}
