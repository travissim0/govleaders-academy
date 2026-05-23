import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities",
  description:
    "Reach public-sector decision-makers, board members, district professionals, and the organizations that support them through GLA sponsorships.",
};

export default function SponsorshipsPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sponsorship Opportunities
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Reach public-sector decision-makers, board members, district
            professionals, and the organizations that support them.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate mb-6">
            GovLeaders Academy may offer sponsorship opportunities for
            organizations that serve local government, special districts, water
            districts, MUDs, WCIDs, ESDs, public safety agencies, and
            public-sector professionals. Sponsorships may include course content
            sponsorships, Course Series sponsorships, newsletter sponsorships,
            resource sponsorships, or other professional brand placement
            opportunities.
          </p>
          <p className="text-slate mb-6">
            Sponsorships are intended for organizations whose services align
            with GLA&apos;s public-sector audience. All sponsorship opportunities
            are subject to review and approval to ensure they fit the GLA brand,
            audience, and professional standards.
          </p>

          <div className="bg-gray-light rounded-[6px] border border-gray-200 p-8 text-center mt-10">
            <h2 className="text-2xl font-bold text-navy mb-3">
              Interested in Sponsorship?
            </h2>
            <p className="text-slate mb-6">
              This page is currently under development. For sponsorship
              inquiries, please contact us directly.
            </p>
            <Link
              href="/contact?inquiry=Partnership"
              className="inline-flex items-center px-8 py-4 bg-navy text-white text-[16px] font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
            >
              Request Sponsorship Information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
