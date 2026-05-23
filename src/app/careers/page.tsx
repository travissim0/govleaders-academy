import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, Users, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at GovLeaders Academy. We welcome interest from instructors, subject matter experts, and professionals who understand public service.",
};

const filterCategories = [
  {
    label: "Location",
    options: ["Greater Houston", "DFW", "Remote"],
  },
  {
    label: "Classification",
    options: ["Full-time", "Part-time", "Contract"],
  },
  {
    label: "Type",
    options: [
      "Instructor",
      "Subject Matter Expert",
      "Instructional Design",
      "College Advising",
      "Sales and Partnerships",
      "Technology and Platform Support",
      "Administration",
      "Marketing and Communications",
    ],
  },
  {
    label: "Experience Area",
    options: [
      "Local Government",
      "Special Districts",
      "Public Safety",
      "Water Districts and Utilities",
      "Emergency Services Districts",
      "Public Administration",
      "Higher Education",
      "Adult Learning",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Careers at GovLeaders Academy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join a team dedicated to strengthening public-sector leadership
            through practical training and professional education.
          </p>
        </div>
      </section>

      {/* About Working at GLA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-navy/10 rounded-[6px] flex items-center justify-center">
                <Users size={24} className="text-navy" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
                Working With GLA
              </h2>
            </div>
            <p className="text-slate leading-relaxed">
              GovLeaders Academy supports public-sector professionals, board
              members, employees, and organizations through practical online
              training, advising, course development, and professional education
              services. Working with GLA means contributing to training that
              helps people serve their communities with greater confidence,
              competence, and professionalism. Our work is focused on real
              public-sector needs, including leadership development, governance,
              supervision, public safety, special districts, local government,
              and adult education. We are not currently hiring, but we welcome
              future interest from qualified instructors, subject matter
              experts, instructional designers, advisors, and professionals
              who understand public service and adult learning.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-3">
              Current Openings
            </h2>
            <p className="text-slate">
              Browse available positions at GovLeaders Academy.
            </p>
          </div>

          {/* Filters (placeholder / greyed out) */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <Filter size={18} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Filter Positions
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filterCategories.map((category) => (
                <div
                  key={category.label}
                  className="bg-white rounded-[6px] border border-gray-200 p-4 opacity-50 cursor-not-allowed select-none"
                >
                  <h3 className="text-sm font-semibold text-navy mb-3">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.options.map((option) => (
                      <span
                        key={option}
                        className="inline-block text-xs bg-gray-light text-gray-400 border border-gray-200 rounded-[6px] px-2.5 py-1"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No openings message */}
          <div className="bg-white rounded-[6px] border border-gray-200 p-10 text-center">
            <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-5">
              <Briefcase size={26} className="text-gold" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-navy mb-2">
              No Open Positions
            </h3>
            <p className="text-slate max-w-md mx-auto">
              There are no open positions at this time. Please check back for
              future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Why GLA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy text-center mb-10">
            Why GovLeaders Academy
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Users size={24} className="text-gold" />,
                title: "Work That Supports Public Service",
                desc: "Contribute to training, advising, and course development that helps public-sector professionals, board members, and organizations serve their communities with greater confidence and competence.",
              },
              {
                icon: <Briefcase size={24} className="text-gold" />,
                title: "Practical Professional Contribution",
                desc: "Collaborate on work that connects directly to real public-sector responsibilities, including governance, leadership development, supervision, public safety, special districts, and adult learning.",
              },
              {
                icon: <MapPin size={24} className="text-gold" />,
                title: "Flexible Opportunities",
                desc: "We value results over rigid structures. Many roles support remote or hybrid arrangements across Texas and beyond.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-light rounded-[6px] p-6 text-center"
              >
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Interested in Future Opportunities?
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            We welcome hearing from professionals who share our commitment to
            public-sector excellence. Reach out to introduce yourself.
          </p>
          <a
            href="/contact?inquiry=Careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-dark font-semibold rounded-[6px] hover:bg-gold/90 transition-colors text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
