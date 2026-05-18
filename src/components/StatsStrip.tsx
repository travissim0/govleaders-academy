import { BookOpen, Clock, Globe, TrendingUp } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "21", label: "Courses" },
  { icon: Clock, value: "130+", label: "Hours of Content" },
  { icon: Globe, value: "100%", label: "Online" },
  { icon: TrendingUp, value: "Growing", label: "Catalog" },
];

export function StatsStrip() {
  return (
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 text-gold" size={28} />
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
