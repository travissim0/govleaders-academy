import Link from "next/link";
import { Clock, BarChart3, ArrowRight, ExternalLink, Monitor } from "lucide-react";
import type { Course } from "@/types";

const placeholderCourses: Course[] = [
  {
    _id: "1",
    title: "Special District Board Governance Essentials",
    slug: { current: "board-governance" },
    shortDescription: "Master the fundamentals of board governance, fiduciary duties, and meeting procedures for special district board members.",
    category: "Special Districts",
    audience: "Board Members",
    contactHours: 8,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "2",
    title: "Texas Open Meetings Act Compliance",
    slug: { current: "open-meetings" },
    shortDescription: "Comprehensive training on the Texas Open Meetings Act requirements, common violations, and best practices.",
    category: "Ethics & Compliance",
    audience: "All Public Officials",
    contactHours: 4,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "3",
    title: "Public Sector Leadership Development",
    slug: { current: "leadership-dev" },
    shortDescription: "Build essential leadership competencies tailored for the unique dynamics of public-sector management.",
    category: "Public Sector Leadership",
    audience: "Managers & Directors",
    contactHours: 12,
    level: "Intermediate",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "4",
    title: "Water District Operations & Compliance",
    slug: { current: "water-district-ops" },
    shortDescription: "Operational best practices and regulatory compliance essentials for MUD, WCID, and water district leadership.",
    category: "Water / MUD / WCID",
    audience: "District Directors",
    contactHours: 10,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "5",
    title: "ESD Commissioner Leadership",
    slug: { current: "esd-leadership" },
    shortDescription: "Governance, budgeting, and leadership training designed for Emergency Services District commissioners.",
    category: "Emergency Services Districts",
    audience: "ESD Commissioners",
    contactHours: 6,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "6",
    title: "Public Information Act Essentials",
    slug: { current: "pia-essentials" },
    shortDescription: "Navigate Texas Public Information Act requirements, records requests, and compliance obligations for public officials.",
    category: "Ethics & Compliance",
    audience: "All Public Officials",
    contactHours: 5,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
];

function CourseCardItem({ course }: { course: Course }) {
  return (
    <a
      href={course.learnworldsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:border-gold/40 hover:-translate-y-1"
    >
      <div className="h-36 bg-gradient-to-br from-navy to-navy-light relative flex items-end p-4">
        <div className="absolute top-3 right-3 flex gap-1.5">
          <span className="text-[10px] font-semibold bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-sm">
            {course.level}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-white text-sm leading-tight pr-8">
          {course.title}
        </h3>
      </div>
      <div className="p-4">
        <span className="inline-block text-[11px] font-medium bg-gold/10 text-gold px-2 py-0.5 rounded mb-2">
          {course.category}
        </span>
        <p className="text-sm text-slate mb-3 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3 text-xs text-slate">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {course.contactHours} hrs
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 size={12} />
              {course.level}
            </span>
          </div>
          <ArrowRight size={14} className="text-navy group-hover:text-gold transition-colors" />
        </div>
      </div>
    </a>
  );
}

function PortalCallout() {
  return (
    <div className="bg-navy/5 border border-navy/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
        <Monitor size={20} className="text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-heading font-semibold text-navy text-sm mb-1">
          Enrollment, certificates, and progress tracking happen in the Learning Portal
        </h4>
        <p className="text-xs text-slate">
          When you enroll in a course, you&apos;ll access your learner dashboard, complete
          training modules, take assessments, and earn certificates — all through our
          dedicated learning platform.
        </p>
      </div>
      <a
        href="https://learn.govleadersacademy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-light transition-colors whitespace-nowrap"
      >
        Visit Portal <ExternalLink size={14} />
      </a>
    </div>
  );
}

export function FeaturedCourses({ courses }: { courses?: Course[] }) {
  const displayCourses = courses && courses.length > 0 ? courses : placeholderCourses;

  return (
    <section className="bg-gray-light pt-0 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* View Full Catalog CTA - top */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-2">
              Featured Courses
            </h2>
            <p className="text-slate">
              Start with our most popular courses chosen by public-sector professionals.
            </p>
          </div>
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors"
          >
            View Full Catalog
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {displayCourses.map((course) => (
            <CourseCardItem key={course._id} course={course} />
          ))}
        </div>

        {/* Portal callout */}
        <PortalCallout />

        {/* View Full Catalog CTA - bottom */}
        <div className="text-center mt-8">
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            View Full Catalog — 21 Courses, 130+ Hours
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export { CourseCardItem, placeholderCourses };
