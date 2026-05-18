import { CheckCircle } from "lucide-react";

const credentials = [
  "Decades of combined public-sector leadership experience",
  "Courses developed by practitioners who've served in government roles",
  "Content aligned with state-specific legal and regulatory frameworks",
  "Trusted by special districts, municipalities, and public agencies",
];

export function Credibility() {
  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Built by Public-Sector Professionals
          </h2>
          <p className="text-lg text-slate mb-8">
            GovLeaders Academy was founded on a simple belief: public-sector leaders deserve
            training that&apos;s built for them — not adapted from the corporate world.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {credentials.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200">
                <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
