import Link from "next/link";
import { Building2, Droplets, Flame, Landmark, Users, Scale } from "lucide-react";

const tracks = [
  {
    icon: Building2,
    title: "Special Districts",
    description: "Governance, compliance, and operations for special-purpose districts.",
  },
  {
    icon: Droplets,
    title: "Water / MUD / WCID",
    description: "Training for water utilities, municipal utility districts, and WCIDs.",
  },
  {
    icon: Flame,
    title: "Emergency Services Districts",
    description: "Leadership and compliance for ESDs and emergency service providers.",
  },
  {
    icon: Landmark,
    title: "Texas Local Government",
    description: "State-specific training for Texas municipalities and counties.",
  },
  {
    icon: Users,
    title: "Public Sector Leadership",
    description: "Core leadership skills for managers and executives in government.",
  },
  {
    icon: Scale,
    title: "Ethics & Compliance",
    description: "Ethics training, open meetings, public information, and compliance.",
  },
];

export function TrainingTracks() {
  return (
    <section id="tracks" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Training Tracks
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Structured learning paths designed for specific roles and sectors in public-sector governance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <Link
              key={track.title}
              href="/courses"
              className="group bg-gray-light rounded-xl p-6 hover:shadow-lg transition-all border border-transparent hover:border-gold/30"
            >
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors">
                <track.icon size={24} className="text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                {track.title}
              </h3>
              <p className="text-sm text-slate">{track.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
