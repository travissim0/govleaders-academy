import { Target, Clock, Shield, Award } from "lucide-react";

const benefits = [
  { icon: Target, title: "Built for Public Sector", description: "Every course addresses the unique legal, ethical, and operational realities of government work." },
  { icon: Clock, title: "Learn on Your Schedule", description: "100% online, self-paced courses that fit around your responsibilities." },
  { icon: Shield, title: "Expert-Developed Content", description: "Curriculum designed by professionals with decades of public-sector experience." },
  { icon: Award, title: "Certificates of Completion", description: "Earn verifiable certificates to demonstrate your professional development." },
];

export function WhyGLA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Why GovLeaders Academy
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Purpose-built training that understands the demands of public service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-slate">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
