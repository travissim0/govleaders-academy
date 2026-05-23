"use client";

const placeholderOrgs = [
  "Lone Star District Counsel PLLC",
  "Regional Engineering Partners LLC",
  "Gulf Coast Public Finance LLC",
  "Civic Water Advisors LLC",
  "North County ESD #10",
  "Central Valley Utility District",
  "Main Street MUD",
  "Utopia County WCID #1",
  "Oak Ridge Water Authority",
  "Regional Government Advisors LLC",
  "Lone Star Public Safety Association",
  "Civic Partners Consulting Group",
];

export function OrganizationRibbon() {
  return (
    <section className="bg-navy py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
          Built for Organizations Like These
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-12 whitespace-nowrap">
          {[...placeholderOrgs, ...placeholderOrgs].map((org, i) => (
            <span key={`${org}-${i}`} className="text-sm text-gray-300 font-medium">
              {org}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
