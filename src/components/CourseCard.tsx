import Link from "next/link";
import { Clock, BarChart3, ArrowRight, ExternalLink, Monitor } from "lucide-react";
import type { Course } from "@/types";

const courseTags: Record<string, string[]> = {
  "1": ["Texas-Specific", "Foundational", "Board Governance"],
  "2": ["Texas-Specific", "Foundational", "Special Districts"],
  "3": ["Broadly Applicable", "Foundational", "Board Governance"],
  "4": ["Texas-Specific", "Compliance", "Board Governance"],
  "5": ["Texas-Specific", "Water Districts", "Operations"],
  "6": ["Texas-Specific", "Public Safety", "Water Districts"],
};

const placeholderCourses: Course[] = [
  {
    _id: "1",
    title: "How Texas Government Actually Works: A Practical Guide for Public Leaders",
    slug: { current: "texas-government" },
    shortDescription: "A practical introduction to Texas government structure, authority, and how public leadership actually functions at the state and local level.",
    category: "Flagship Series",
    audience: "All Public Leaders",
    contactHours: 8,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "2",
    title: "Special Purpose Districts Explained: Structure, Authority, and Governance",
    slug: { current: "special-districts" },
    shortDescription: "Understand the structure, legal authority, and governance responsibilities of special purpose districts in Texas.",
    category: "Flagship Series",
    audience: "Board Members & Staff",
    contactHours: 8,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "3",
    title: "The Board Member Playbook: Roles, Responsibilities, and Expectations",
    slug: { current: "board-member-playbook" },
    shortDescription: "A comprehensive guide to what board members need to know about their roles, duties, and professional expectations.",
    category: "New Board Member Series",
    audience: "New Board Members",
    contactHours: 6,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "4",
    title: "Open Meetings and Public Records: Staying Compliant and Avoiding Mistakes",
    slug: { current: "open-meetings" },
    shortDescription: "Navigate open meetings requirements, public records obligations, and common compliance pitfalls for public officials.",
    category: "Governance and Legal Series",
    audience: "All Public Officials",
    contactHours: 6,
    level: "Foundations",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "5",
    title: "Inside a MUD: Operations, Infrastructure, and What Drives Decisions",
    slug: { current: "inside-a-mud" },
    shortDescription: "Learn how Municipal Utility Districts operate, how infrastructure decisions are made, and what drives day-to-day operations.",
    category: "Operations and Leadership Series",
    audience: "District Directors & Staff",
    contactHours: 6,
    level: "Intermediate",
    learnworldsUrl: "https://learn.govleadersacademy.com",
    featured: true,
  },
  {
    _id: "6",
    title: "Contract Policing for Water Districts: How Public Safety Partnerships Really Work",
    slug: { current: "contract-policing" },
    shortDescription: "Understand how water districts establish and manage contract policing relationships for community public safety.",
    category: "Standalone",
    audience: "Board Members & Administrators",
    contactHours: 4,
    level: "Intermediate",
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
      className="group bg-white rounded-[6px] border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:border-gold/40 hover:-translate-y-1 flex flex-col"
    >
      <div className="h-36 bg-gradient-to-br from-navy to-navy-light relative flex items-end p-4">
        <div className="absolute top-3 right-3 flex gap-1.5">
          <span className="text-[10px] font-semibold bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-sm">
            {course.level}
          </span>
        </div>
        <h3 className="font-semibold text-white text-sm leading-tight pr-8">
          {course.title}
        </h3>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="inline-block text-[11px] font-medium bg-gold/10 text-gold px-2 py-0.5 rounded">
            {course.category}
          </span>
          {(courseTags[course._id] || []).map((tag) => (
            <span key={tag} className="inline-block text-[10px] font-medium bg-navy/5 text-navy px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate mb-3 line-clamp-2 leading-relaxed flex-1">
          {course.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
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
    <div className="bg-navy/5 border border-navy/10 rounded-[6px] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="w-10 h-10 bg-navy rounded-[6px] flex items-center justify-center shrink-0">
        <Monitor size={20} className="text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-navy text-sm mb-1">
          Enrollment, certificates, and progress tracking happen in the Learning Portal
        </h4>
        <p className="text-xs text-slate">
          When you enroll in a course, you will access your learner dashboard, complete
          training modules, take assessments, and earn certificates through our
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
    <section className="bg-gray-light pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-16 h-0.5 bg-gold/40 mx-auto mb-10" />

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-2">
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
            className="hidden sm:inline-flex items-center gap-2 px-7 py-3 bg-navy text-white text-[16px] font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
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

        <PortalCallout />

        <div className="text-center mt-8">
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 bg-navy text-white text-[17px] font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
          >
            View Full Catalog: 21 Courses, 110+ Contact Hours
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export { CourseCardItem, placeholderCourses };
