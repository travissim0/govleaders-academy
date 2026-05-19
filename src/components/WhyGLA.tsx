import { Target, Clock, Shield, Award } from "lucide-react";

const benefits = [
  { icon: Target, title: "Practical, Not Theoretical", description: "Every course is built around real-world application: governance, operations, and decision-making that public-sector professionals face daily." },
  { icon: Clock, title: "Self-Paced, 100% Online", description: "Complete training on your schedule with 6- or 12-month access. No travel, no scheduling conflicts." },
  { icon: Shield, title: "Built by Practitioners", description: "Curriculum developed by professionals with direct experience in Texas special districts, local government, and public-sector leadership." },
  { icon: Award, title: "Certificates of Completion", description: "Earn verifiable certificates that demonstrate your professional development and commitment to better governance." },
];

export function WhyGLA() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Why GovLeaders Academy
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Training designed for the people who lead, govern, manage, and support public organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-[6px] flex items-center justify-center shrink-0">
                <item.icon size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-slate">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
