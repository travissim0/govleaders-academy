import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-navy-dark py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Strengthen Public-Sector Decision-Making?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Whether you are an individual learner, board member, public employee, consultant,
          agency leader, or organization seeking structured training access, GovLeaders Academy
          provides practical online courses built for real public-sector responsibilities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-navy-dark text-[17px] font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
          >
            Browse Courses
          </Link>
          <Link
            href="/services/custom-training"
            className="inline-flex items-center gap-2 px-9 py-4 border border-white text-white text-[17px] font-semibold rounded-[6px] hover:bg-white hover:text-navy-dark transition-colors"
          >
            Explore Organization Options
          </Link>
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 border border-white/40 text-white text-[17px] font-semibold rounded-[6px] hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={18} />
            Enter Learning Portal
          </a>
        </div>
      </div>
    </section>
  );
}
