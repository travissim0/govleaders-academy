import { CheckCircle } from "lucide-react";

const credentials = [
  "Public-sector leadership experience in local government and board governance",
  "Higher education and course development experience in instructional design",
  "Practical training design for working adults in public service roles",
  "Content aligned with Texas legal and regulatory frameworks",
];

export function Credibility() {
  return (
    <section className="bg-gray-light py-16 sm:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">Move Forward. Lead Better.</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Built for Public-Sector Professionals
          </h2>
          <p className="text-lg text-slate mb-3">
            GovLeaders Academy exists to help public-sector leaders and those who support
            them build competence, develop structured knowledge, and make more informed
            decisions in their roles.
          </p>
          <p className="text-slate mb-8">
            Our mission is to advance the public sector by developing knowledgeable, capable
            leaders through relevant education and training.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {credentials.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-[6px] p-4 border border-gray-200">
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
