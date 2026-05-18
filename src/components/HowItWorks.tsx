import { Search, ListChecks, UserPlus, Award } from "lucide-react";

const steps = [
  { icon: Search, step: "1", title: "Browse", description: "Explore our catalog of courses by topic, track, or role." },
  { icon: ListChecks, step: "2", title: "Choose", description: "Select courses that match your development goals." },
  { icon: UserPlus, step: "3", title: "Enroll", description: "Sign up through our learning portal and start immediately." },
  { icon: Award, step: "4", title: "Complete", description: "Finish at your pace and earn your certificate of completion." },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Getting started is simple. Four steps to advancing your public-sector career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={item.title} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gold/30" />
              )}
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <item.icon size={32} className="text-white" />
                <span className="absolute -top-1 -right-1 w-7 h-7 bg-gold text-navy-dark text-xs font-bold rounded-full flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
