import Link from "next/link";
import { GraduationCap, BookOpen, ExternalLink, Award, BarChart3, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
              <GraduationCap size={16} />
              Professional Development for Public Servants
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy leading-tight mb-6">
              Online Training for Public-Sector Leaders
            </h1>
            <p className="text-lg text-slate mb-8 max-w-xl">
              GovLeaders Academy provides structured online courses, professional development
              resources, and specialized training solutions for local government, special
              districts, public safety professionals, board members, and public-sector leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                <BookOpen size={18} />
                Browse Courses
              </Link>
              <Link
                href="/courses#tracks"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                View Training Tracks
              </Link>
              <a
                href="https://learn.govleadersacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                <ExternalLink size={18} />
                Enter Learning Portal
              </a>
            </div>
          </div>

          {/* Learning Portal Preview Mockup */}
          <div className="hidden lg:block">
            <div className="relative bg-gray-light rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Top bar */}
              <div className="bg-navy px-6 py-3 flex items-center justify-between">
                <span className="text-white font-heading text-sm font-semibold">GovLeaders Academy</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                </div>
              </div>

              <div className="p-6">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs text-slate mb-1">Your Dashboard</div>
                    <div className="h-3 bg-navy/10 rounded w-40" />
                  </div>
                  <div className="bg-gold/10 text-gold text-xs font-semibold px-2.5 py-1 rounded">
                    21 Courses
                  </div>
                </div>

                {/* Course cards mini */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { title: "Board Governance", hours: "8 hrs", icon: Users },
                    { title: "Open Meetings Act", hours: "4 hrs", icon: BarChart3 },
                    { title: "Leadership Dev", hours: "12 hrs", icon: Award },
                    { title: "Ethics Training", hours: "6 hrs", icon: GraduationCap },
                  ].map((card) => (
                    <div key={card.title} className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 bg-navy rounded flex items-center justify-center">
                          <card.icon size={14} className="text-white" />
                        </div>
                        <span className="text-xs font-medium text-navy leading-tight">{card.title}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate">{card.hours}</span>
                        <div className="w-12 bg-gray-100 rounded-full h-1.5">
                          <div className="bg-gold rounded-full h-1.5" style={{ width: "65%" }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="bg-white rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-navy">Training Progress</span>
                    <span className="text-xs text-gold font-semibold">Certificate Ready</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-navy to-navy-light rounded-full h-2" style={{ width: "78%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
