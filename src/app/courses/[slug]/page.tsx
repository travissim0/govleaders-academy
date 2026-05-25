import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, BarChart3, Users, ExternalLink, BookOpen, Calendar } from "lucide-react";
import { getCourseBySlug, getAllCourses } from "@/lib/sanity";
import { placeholderCourses } from "@/components/CourseCard";

export const revalidate = 60;

export async function generateStaticParams() {
  const courses = await getAllCourses();
  if (courses.length > 0) {
    return courses.map((course) => ({ slug: course.slug.current }));
  }
  return placeholderCourses.map((course) => ({ slug: course.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug) ?? placeholderCourses.find((c) => c.slug.current === slug);

  return {
    title: course?.title || "Course",
    description: course?.shortDescription || "Online training for public-sector professionals from GovLeaders Academy.",
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanityCourse = await getCourseBySlug(slug);
  const course = sanityCourse ?? placeholderCourses.find((c) => c.slug.current === slug);

  if (!course) {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-heading font-bold text-navy mb-4">Course Not Found</h1>
          <p className="text-slate mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
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
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block text-xs font-medium bg-gold/20 text-gold px-2.5 py-1 rounded">
              {course.category}
            </span>
            <span className="inline-block text-xs font-medium bg-white/10 text-gray-200 px-2.5 py-1 rounded">
              {course.level}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>
      </section>

      {/* Details + CTA */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">Course Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-light rounded-[6px] p-4">
                    <Clock size={20} className="text-navy-light shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Contact Hours</p>
                      <p className="font-semibold text-navy">{course.contactHours} hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-light rounded-[6px] p-4">
                    <BarChart3 size={20} className="text-navy-light shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Level</p>
                      <p className="font-semibold text-navy">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-light rounded-[6px] p-4">
                    <Users size={20} className="text-navy-light shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Audience</p>
                      <p className="font-semibold text-navy">{course.audience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-light rounded-[6px] p-4">
                    <Calendar size={20} className="text-navy-light shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Access Period</p>
                      <p className="font-semibold text-navy">{course.accessPeriod || "6 months"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {course.category !== "Standalone" && (
                <div className="bg-gray-light rounded-[6px] border border-gray-200 p-5">
                  <div className="flex items-start gap-3">
                    <BookOpen size={20} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-navy text-sm mb-1">
                        Part of the {course.category}
                      </h3>
                      <p className="text-xs text-slate">
                        This course is part of a focused Course Series. Complete the full series
                        to build comprehensive knowledge in this area and save compared to
                        purchasing courses individually.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold text-navy mb-4">What You Will Learn</h2>
                <p className="text-slate leading-relaxed">
                  {course.shortDescription} This course is designed for working professionals
                  and can be completed at your own pace within the access period. All content
                  is delivered through our online Learning Portal with progress tracking,
                  assessments, and a certificate of completion.
                </p>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="md:col-span-1">
              <div className="sticky top-8 bg-gray-light rounded-[6px] border border-gray-200 p-6 text-center">
                {course.price && (
                  <p className="text-3xl font-bold text-navy mb-1">${course.price}</p>
                )}
                <p className="text-xs text-slate mb-6">
                  {course.accessPeriod || "6 months"} access
                </p>
                <a
                  href={course.learnworldsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors mb-3"
                >
                  Enroll Now
                  <ExternalLink size={16} />
                </a>
                <p className="text-[11px] text-slate">
                  Enrollment and payment handled securely through our Learning Portal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-dark py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Forward?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Enroll today and start building practical knowledge you can apply immediately.
          </p>
          <a
            href={course.learnworldsUrl}
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
