import type { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { BookOpen, Award, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "Your GovLeaders Academy learner dashboard. Track progress, access courses, and view certificates.",
};

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <>
      <section className="bg-navy py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.firstName || "Learner"}
          </h1>
          <p className="text-gray-300">
            Your training dashboard. Track progress, access courses, and view certificates.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-light rounded-[6px] border border-gray-200 p-6 text-center">
              <BookOpen size={24} className="text-navy mx-auto mb-2" />
              <p className="text-2xl font-bold text-navy">0</p>
              <p className="text-xs text-slate">Enrolled Courses</p>
            </div>
            <div className="bg-gray-light rounded-[6px] border border-gray-200 p-6 text-center">
              <Clock size={24} className="text-navy mx-auto mb-2" />
              <p className="text-2xl font-bold text-navy">0</p>
              <p className="text-xs text-slate">Hours Completed</p>
            </div>
            <div className="bg-gray-light rounded-[6px] border border-gray-200 p-6 text-center">
              <Award size={24} className="text-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-navy">0</p>
              <p className="text-xs text-slate">Certificates Earned</p>
            </div>
          </div>

          {/* Empty state */}
          <div className="bg-gray-light rounded-[6px] border border-gray-200 p-10 text-center">
            <BookOpen size={40} className="text-slate/40 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-navy mb-2">No Courses Yet</h2>
            <p className="text-sm text-slate mb-6 max-w-md mx-auto">
              Browse the GLA course catalog to find practical public-sector training
              that fits your role and goals.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
            >
              Browse Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
