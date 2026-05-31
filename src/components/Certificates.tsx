import { Award, CheckCircle } from "lucide-react";

export function Certificates() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Professional Certificates That Document Commitment and Completion
            </h2>
            <p className="text-slate mb-6">
              GLA courses are designed to provide professional, credible certificates of
              completion that document training participation, reinforce accountability, and
              demonstrate a learner's commitment to informed public service.
            </p>
            <p className="text-sm text-slate mb-6">
              As the GLA catalog grows, learners may become eligible for advanced certificate
              pathways, framed completion certificates, and recognition opportunities tied to
              completed course series. Organizations may also use certificates to document
              board, staff, or team participation.
            </p>
            <ul className="space-y-3">
              {[
                "Verifiable certificate for each completed course",
                "Professional recognition for boards and organizations",
                "Documentation of training participation and accountability",
                "Future advanced certificate pathways and recognition programs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate Mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-[6px] border-2 border-navy/10 shadow-lg p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy via-navy-light to-gold rounded-t-[5px]" />
              <div className="text-center">
                <div className="w-12 h-12 bg-navy rounded-[6px] flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-gold" />
                </div>
                <p className="text-[10px] font-semibold text-gold uppercase tracking-widest mb-2">
                  Certificate of Completion
                </p>
                <p className="text-lg font-bold text-navy mb-1">GovLeaders Academy</p>
                <div className="w-12 h-px bg-gold/40 mx-auto my-3" />
                <p className="text-xs text-slate mb-1">This certifies that</p>
                <div className="h-4 bg-gray-100 rounded w-36 mx-auto mb-3" />
                <p className="text-xs text-slate mb-1">has successfully completed</p>
                <div className="h-4 bg-gray-100 rounded w-48 mx-auto mb-4" />
                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="h-3 bg-gray-100 rounded w-16 mb-1" />
                    <p className="text-[9px] text-slate">Date</p>
                  </div>
                  <div className="text-center">
                    <div className="h-3 bg-gray-100 rounded w-16 mb-1" />
                    <p className="text-[9px] text-slate">Contact Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-light rounded-[6px] border border-gray-200 p-5 text-center">
          <p className="text-xs text-slate italic">
            Future GLA Recognition Programs may allow boards or organizations whose members
            complete designated training pathways to receive formal recognition, professional
            certificate materials, and optional branded display items.
          </p>
        </div>
      </div>
    </section>
  );
}
