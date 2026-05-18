import { Building, Droplets, Flame, Landmark, Users, GraduationCap } from "lucide-react";

const audiences = [
  { icon: Building, title: "Special District Board Members", description: "Elected and appointed officials governing special-purpose districts." },
  { icon: Droplets, title: "Water & Utility District Leaders", description: "Directors and managers of MUDs, WCIDs, and water utilities." },
  { icon: Flame, title: "Emergency Services Commissioners", description: "ESD commissioners and fire district leadership." },
  { icon: Landmark, title: "City & County Officials", description: "Municipal and county elected officials and senior staff." },
  { icon: Users, title: "Public Agency Managers", description: "Department heads, directors, and supervisors in public agencies." },
  { icon: GraduationCap, title: "Aspiring Public Leaders", description: "Professionals preparing for leadership roles in government." },
];

export function WhoWeServe() {
  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Our courses are built for the people who keep public services running.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
              <item.icon size={28} className="text-gold mb-3" />
              <h3 className="font-heading font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
