import type { Metadata } from "next";
import { TrainingTracks } from "@/components/TrainingTracks";
import { FeaturedCourses, CourseCardItem, placeholderCourses } from "@/components/CourseCard";
import { ExternalLink } from "lucide-react";
import { getFeaturedCourses, getAllCourses } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Courses and Series",
  description: "Browse online training courses and Course Series for public-sector leaders. Special districts, water districts, local government, governance, and leadership development.",
};

export default async function CoursesPage() {
  const [courses, allCourses] = await Promise.all([
    getFeaturedCourses(),
    getAllCourses(),
  ]);

  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Courses and Series
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose a single course, complete a focused Course Series, or bundle related
            courses to save while building practical public-sector knowledge.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-light rounded-[6px] border border-gray-200 p-6 sm:p-8 text-center">
            <p className="text-slate max-w-3xl mx-auto">
              Course Series are grouped and bundled courses designed to help learners build
              practical knowledge in a focused area. Learners may take individual courses,
              complete a full series, or combine multiple series based on their role,
              organization, or career goals. Course Series may also provide cost savings
              compared to purchasing each course individually.
            </p>
          </div>
        </div>
      </section>

      <TrainingTracks />
      <FeaturedCourses courses={courses} />

      {/* Browse by Topic */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 text-center">
            Browse by Topic
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Texas Government",
              "Special Districts",
              "MUDs and Water Districts",
              "Board Governance",
              "Ethics and Compliance",
              "Public Finance",
              "Public Safety",
              "Leadership and Supervision",
              "District Operations",
              "Consultants and Vendors",
            ].map((topic) => (
              <div
                key={topic}
                className="bg-gray-light rounded-[6px] p-4 text-center border border-gray-200 hover:border-gold/30 transition-colors"
              >
                <p className="text-sm font-semibold text-navy">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              All Courses
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Browse the complete GLA catalog. Take a single course for focused professional
              development or complete a full Course Series.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(allCourses.length > 0 ? allCourses : placeholderCourses).map((course) => (
              <CourseCardItem key={course._id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Audience */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 text-center">
            Browse by Audience
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "New Board Members",
              "Elected and Appointed Officials",
              "Water District Leaders",
              "MUD and WCID Board Members",
              "District Staff",
              "Consultants and Vendors",
              "Public Safety Professionals",
              "City and County Officials",
              "Aspiring Public Leaders",
              "Full Boards and Organizations",
            ].map((audience) => (
              <div
                key={audience}
                className="bg-white rounded-[6px] p-4 text-center border border-gray-200 hover:border-gold/30 transition-colors"
              >
                <p className="text-sm font-semibold text-navy">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-light rounded-[6px] border border-gray-200 p-6 sm:p-8 text-sm text-slate">
            <h3 className="font-semibold text-navy text-base mb-2">Texas-Specific Content</h3>
            <p>
              Many GovLeaders Academy courses are designed with Texas local government,
              special districts, and public-sector operations in mind. However, many
              leadership, governance, ethics, supervision, communication, and organizational
              topics apply broadly across public-sector settings. Course descriptions will
              clearly identify when content is Texas-specific, when it is broadly applicable,
              and when learners outside Texas may need to compare the material to their own
              state or local requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Visit our Learning Portal to browse the full catalog, enroll, and begin your training today.
          </p>
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-navy-dark text-[17px] font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
          >
            <ExternalLink size={20} />
            View Full Catalog on Learning Portal
          </a>
        </div>
      </section>
    </>
  );
}
