import { ClipboardCheck } from "lucide-react";

export function LeadMagnet() {
  return (
    <section className="bg-navy py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-16 h-16 bg-gold/20 rounded-[6px] flex items-center justify-center shrink-0">
            <ClipboardCheck size={32} className="text-gold" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">
              Free Board Member Readiness Check
            </h2>
            <p className="text-gray-300 text-sm max-w-2xl">
              Thinking about serving on a public-sector board, newly appointed, or already
              serving? Take the free Board Member Readiness Check to evaluate your understanding
              of governance, meetings, ethics, public funds, oversight, and decision-making
              responsibilities.
            </p>
          </div>
          <a
            href="https://learn.govleadersacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 bg-gold text-navy-dark font-semibold rounded-[6px] hover:bg-gold/90 transition-colors whitespace-nowrap"
          >
            Take the Free Readiness Check
          </a>
        </div>
      </div>
    </section>
  );
}
