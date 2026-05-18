import Link from "next/link";
import { GraduationCap, BookOpen, ExternalLink } from "lucide-react";

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
              Flexible, expert-led courses built specifically for the unique challenges
              of public-sector leadership. From special districts to city management,
              advance your career on your schedule.
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

          <div className="hidden lg:block">
            <div className="relative bg-gray-light rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="absolute -top-3 -right-3 bg-gold text-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                LIVE PLATFORM
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-navy/10 rounded w-3/4" />
                <div className="h-4 bg-navy/10 rounded w-1/2" />
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {["Special Districts", "Water/MUD", "Leadership", "Ethics"].map((label) => (
                    <div key={label} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                      <div className="w-8 h-8 bg-navy/10 rounded-full mx-auto mb-2" />
                      <span className="text-xs font-medium text-navy">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="h-2 bg-gold/40 rounded flex-1" />
                  <div className="h-2 bg-navy/20 rounded flex-1" />
                  <div className="h-2 bg-gold/40 rounded flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
