import { BookOpen, Clock, Globe, TrendingUp } from "lucide-react";

export function StatsStrip() {
  return (
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <p className="text-center text-sm text-gray-300 mb-6 max-w-4xl mx-auto">
          Built for special districts, local governments, public safety agencies, elected and
          appointed officials, board members, consultants, public employees, and citizens
          preparing for public service.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: BookOpen, value: "21", label: "Courses" },
            { icon: Clock, value: "110+", label: "Contact Hours" },
            { icon: Globe, value: "100%", label: "Online" },
            { icon: TrendingUp, value: "Growing", label: "Catalog" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 text-gold" size={24} />
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
