import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-navy-dark py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
          Ready to Invest in Your Leadership?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Join public-sector professionals who are building stronger communities through
          better-prepared leadership. Start your first course today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Browse Courses
          </Link>
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy-dark transition-colors"
          >
            <ExternalLink size={18} />
            Enter Learning Portal
          </a>
        </div>
      </div>
    </section>
  );
}
