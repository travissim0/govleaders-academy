import Link from "next/link";
import { User, Building2 } from "lucide-react";

export function IndividualsAndOrgs() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Training for Individuals and Organizations
          </h2>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Whether you are an individual board member, public-sector employee,
            consultant, or aspiring public leader, or an organization seeking
            training for an entire board, staff group, or leadership team,
            GovLeaders Academy provides structured online training designed for
            practical public-sector work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-light rounded-[6px] p-8 border border-gray-200">
            <div className="w-12 h-12 bg-navy/10 rounded-[6px] flex items-center justify-center mb-4">
              <User size={24} className="text-navy" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">For Individuals</h3>
            <p className="text-slate text-sm mb-5">
              Take individual courses, complete a Course Series, or build your
              own professional development path at your own pace.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-navy text-white text-sm font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
            >
              Browse Courses
            </Link>
          </div>

          <div className="bg-gray-light rounded-[6px] p-8 border border-gray-200">
            <div className="w-12 h-12 bg-navy/10 rounded-[6px] flex items-center justify-center mb-4">
              <Building2 size={24} className="text-navy" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">
              For Boards and Organizations
            </h3>
            <p className="text-slate text-sm mb-5">
              Support full-board training, staff development, onboarding,
              leadership development, and organization-wide learning through
              structured online courses and training solutions.
            </p>
            <Link
              href="/services/custom-training"
              className="inline-flex items-center px-6 py-3 bg-navy text-white text-sm font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
            >
              Request Custom Training Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
