import Link from "next/link";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Annual access options for organizations",
  "Seat-based access for board members, staff, or teams",
  "Course series aligned to governance, leadership, compliance, and public-sector operations",
  "Certificates of completion for eligible courses",
  "Completion tracking and documentation",
  "Scalable training for boards, agencies, districts, and associations",
  "Custom training available as a separate service",
];

export function ForOrganizations() {
  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">
              B2B / B2G
            </p>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Training Options for Boards, Districts, Agencies, and Associations
            </h2>
            <p className="text-slate mb-6">
              GLA is designed to support both individual learners and organizations. Boards,
              districts, agencies, consulting firms, and associations can use GLA course series
              or annual access options to provide consistent, practical training across teams.
            </p>
            <Link
              href="/for-organizations"
              className="inline-flex items-center px-8 py-3.5 bg-navy text-white font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
            >
              Explore Organization Options
            </Link>
          </div>
          <div>
            <ul className="space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-[6px] p-4 border border-gray-200">
                  <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
