import { Search, ListChecks, UserPlus, Award, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, step: "1", title: "Browse Courses and Series", description: "Explore individual courses, Course Series, and specialty topics designed for public-sector work." },
  { icon: ListChecks, step: "2", title: "Select the Training That Fits", description: "Choose one course, several individual courses, a full Course Series, or an organizational training option." },
  { icon: UserPlus, step: "3", title: "Enroll Through the Learning Portal", description: "Course enrollment, access, payments, certificates, and progress tracking are handled through the GLA Learning Portal." },
  { icon: Award, step: "4", title: "Complete and Apply", description: "Complete training online and apply practical knowledge to board service, district operations, leadership, governance, public safety, or professional development." },
];

export function HowItWorks() {
  return (
    <section className="bg-navy-dark py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How GovLeaders Academy Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From browsing to certification: four steps to advancing your public-sector career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div key={item.title} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-6 left-[calc(100%-8px)] z-10 text-gold/40">
                  <ArrowRight size={16} />
                </div>
              )}
              <div className="bg-white/5 border border-white/10 rounded-[6px] p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold rounded-[6px] flex items-center justify-center">
                    <span className="text-navy-dark font-bold text-sm">{item.step}</span>
                  </div>
                  <item.icon size={22} className="text-white/60" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
