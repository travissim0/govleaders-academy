import Link from "next/link";
import { Building2, Droplets, Flame, Landmark, Users, Scale, ArrowRight } from "lucide-react";

const tracks = [
  {
    icon: Building2,
    title: "Special Districts",
    description: "Governance, compliance, and operations for special-purpose districts.",
    courses: 5,
  },
  {
    icon: Droplets,
    title: "Water / MUD / WCID",
    description: "Training for water utilities, municipal utility districts, and WCIDs.",
    courses: 4,
  },
  {
    icon: Flame,
    title: "Emergency Services Districts",
    description: "Leadership and compliance for ESDs and emergency service providers.",
    courses: 3,
  },
  {
    icon: Landmark,
    title: "Texas Local Government",
    description: "State-specific training for Texas municipalities and counties.",
    courses: 3,
  },
  {
    icon: Users,
    title: "Public Sector Leadership",
    description: "Core leadership skills for managers and executives in government.",
    courses: 4,
  },
  {
    icon: Scale,
    title: "Ethics & Compliance",
    description: "Ethics training, open meetings, public information, and compliance.",
    courses: 2,
  },
];

export function TrainingTracks() {
  return (
    <section id="tracks" className="bg-gray-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Course Discovery</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Training Tracks
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Structured learning paths designed for specific roles and sectors in public-sector governance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <Link
              key={track.title}
              href="/courses"
              className="group flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center shrink-0 group-hover:bg-navy-light transition-colors">
                <track.icon size={20} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-semibold text-navy text-sm">
                    {track.title}
                  </h3>
                  <ArrowRight size={14} className="text-slate group-hover:text-gold transition-colors shrink-0" />
                </div>
                <p className="text-xs text-slate leading-relaxed mb-1.5">{track.description}</p>
                <span className="text-[11px] font-medium text-navy-light">{track.courses} courses</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
