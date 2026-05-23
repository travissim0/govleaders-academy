import Link from "next/link";

export function BuiltForService() {
  return (
    <section className="bg-gray-light py-16 sm:py-20 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          Built for Practical Public Service
        </h2>
        <p className="text-lg text-slate max-w-3xl mx-auto mb-8">
          GovLeaders Academy is designed for the people who serve communities directly.
          Our courses and services are built around real responsibilities, not theory alone.
          Whether you are serving on a board, leading a team, preparing for promotion,
          supporting district operations, or finishing your education, GLA provides structured
          support that helps you move forward.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center px-7 py-3 bg-navy text-white text-[16px] font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
          >
            Explore Courses
          </Link>
          <Link
            href="/services/custom-training"
            className="inline-flex items-center px-7 py-3 border border-navy text-navy text-[16px] font-semibold rounded-[6px] hover:bg-gray-light transition-colors"
          >
            Request Custom Training Information
          </Link>
          <Link
            href="/services/promotional-exams"
            className="inline-flex items-center px-7 py-3 border border-navy text-navy text-[16px] font-semibold rounded-[6px] hover:bg-gray-light transition-colors"
          >
            Request Promotional Exam Information
          </Link>
          <Link
            href="/services/college-advising"
            className="inline-flex items-center px-7 py-3 border border-navy text-navy text-[16px] font-semibold rounded-[6px] hover:bg-gray-light transition-colors"
          >
            Request College Advising Information
          </Link>
        </div>
      </div>
    </section>
  );
}
