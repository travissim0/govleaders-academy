import { Clock, BarChart3 } from "lucide-react";
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
];

function CourseCardItem({ course }: { course: Course }) {
  return (
    <a
      href={course.learnworldsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:border-gold/30"
    >
      <div className="h-40 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
        <span className="text-white/20 font-heading font-bold text-4xl">GLA</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-gold/10 text-gold px-2 py-1 rounded">
            {course.category}
          </span>
          <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
            {course.level}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-navy mb-2 group-hover:text-navy-light transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-slate mb-4 line-clamp-2">
          {course.shortDescription}
        </p>
        <div className="flex items-center gap-4 text-xs text-slate">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {course.contactHours} hours
          </span>
          <span className="flex items-center gap-1">
            <BarChart3 size={14} />
            {course.level}
          </span>
        </div>
      </div>
    </a>
  );
}

export function FeaturedCourses({ courses }: { courses?: Course[] }) {
  const displayCourses = courses && courses.length > 0 ? courses : placeholderCourses;

  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Start with our most popular courses chosen by public-sector professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map((course) => (
            <CourseCardItem key={course._id} course={course} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
          >
            View Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
}

export { CourseCardItem, placeholderCourses };
