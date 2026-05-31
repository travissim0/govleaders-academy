"use client";

const disciplines = [
  "Local Government",
  "Special Districts",
  "Water Districts",
  "MUDs and WCIDs",
  "Emergency Services Districts",
  "Law Enforcement",
  "Public Safety",
  "Public Administration",
  "Higher Education",
  "Instructional Design",
  "Adult Learning",
  "College Advising",
  "Curriculum Development",
  "Assessment Design",
  "Business and Management",
  "Data Analytics",
  "Leadership Development",
  "Public Finance",
  "Board Governance",
  "Compliance and Ethics",
];

export function DisciplineBanner() {
  return (
    <section className="bg-navy py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm font-semibold text-white mb-1">
          Built From Practical and Professional Experience
        </p>
        <p className="text-center text-xs text-gray-400">
          GLA&apos;s course design and services are informed by experience across public
          service, higher education, governance, leadership, and adult learning.
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-discipline-scroll gap-8 whitespace-nowrap">
          {[...disciplines, ...disciplines].map((item, i) => (
            <span key={`${item}-${i}`} className="text-sm text-gray-300 font-medium flex items-center gap-8">
              {item}
              <span className="text-gold/40">&#8226;</span>
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes disciplineScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-discipline-scroll {
          animation: disciplineScroll 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
