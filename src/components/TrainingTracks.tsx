import Link from "next/link";
import { Star, Users, Scale, Droplets, Wrench, ArrowRight } from "lucide-react";

const series = [
  {
    icon: Star,
    title: "Foundations of Public Sector Leadership",
    tag: "Flagship Series",
    slug: "gla-flagship-series-foundations-of-public-sector-leadership",
    description: "Texas government, special purpose districts, public finance, and board decision-making.",
    courses: 4,
    contactHours: 30,
    price: "$399",
  },
  {
    icon: Users,
    title: "New Board Member Series",
    tag: "Course Series",
    slug: "new-board-member-series",
    description: "Roles, responsibilities, consultants, ethics, transparency, and meeting documentation.",
    courses: 4,
    contactHours: 22,
    price: "$249",
  },
  {
    icon: Scale,
    title: "Water District Governance and Legal Series",
    tag: "Course Series",
    slug: "water-district-governance-and-legal-series",
    description: "Open meetings, public records, rate-setting, risk, liability, and procurement.",
    courses: 4,
    contactHours: 24,
    price: "$259",
  },
  {
    icon: Droplets,
    title: "Water District Operations and Leadership Series",
    tag: "Course Series",
    slug: "water-district-operations-and-leadership-series",
    description: "MUD operations, water systems, communication, stakeholder engagement, and practical leadership.",
    courses: 4,
    contactHours: 22,
    price: "$279",
  },
  {
    icon: Wrench,
    title: "Standalone Specialty Courses",
    tag: "Individual",
    slug: "",
    description: "Focused topics including elections, parks planning, contract policing, and consultant guidance.",
    courses: 5,
    contactHours: 22,
    price: "$69 to $149",
  },
];

export function TrainingTracks() {
  return (
    <section id="series" className="bg-gray-light py-16 sm:py-20 border-t-4 border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Course Discovery</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Course Series
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Take one course, complete a full Course Series, or bundle related courses for a more
            structured and cost-effective learning path.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {series.map((item) => (
            <Link
              key={item.title}
              href={item.slug ? `/courses/series/${item.slug}` : "/courses"}
              className="group flex flex-col bg-white rounded-[6px] p-5 border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 bg-navy rounded-[6px] flex items-center justify-center shrink-0 group-hover:bg-navy-light transition-colors">
                  <item.icon size={20} className="text-white" />
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                  item.tag === "Flagship Series"
                    ? "text-gold bg-gold/10"
                    : "text-slate bg-gray-100"
                }`}>
                  {item.tag}
                </span>
              </div>
              <h3 className="font-semibold text-navy text-sm mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate leading-relaxed mb-3 flex-1">{item.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-slate">{item.courses} courses &middot; {item.contactHours} hrs &middot; {item.price}</span>
                <ArrowRight size={14} className="text-slate group-hover:text-gold transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
