import type { Metadata } from "next";
import { TrainingTracks } from "@/components/TrainingTracks";
import { FeaturedCourses } from "@/components/CourseCard";
import { ExternalLink } from "lucide-react";
import { getFeaturedCourses } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse online training courses for public-sector leaders. Special districts, local government, ethics, compliance, and leadership development.",
};

export default async function CoursesPage() {
  const courses = await getFeaturedCourses();

  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Course Catalog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our growing library of professional development courses
            designed specifically for public-sector leaders.
          </p>
        </div>
      </section>

      <TrainingTracks />
      <FeaturedCourses courses={courses} />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-slate mb-8 max-w-xl mx-auto">
            Visit our full learning portal to browse all available courses, enroll, and begin your training today.
          </p>
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors text-lg"
          >
            <ExternalLink size={20} />
            View Full Catalog on Learning Portal
          </a>
        </div>
      </section>
    </>
  );
}
