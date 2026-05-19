import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GovLeaders Academy, our mission, values, and commitment to practical public-sector training and professional development.",
};

const areas = [
  "Local Government",
  "Special Districts",
  "Water Districts and MUDs",
  "Emergency Services Districts",
  "Law Enforcement",
  "Public Safety",
  "Public Administration",
  "Higher Education",
  "Instructional Design",
  "Adult Learning",
  "College Advising",
  "Curriculum and Assessment",
];

const leadersValues = [
  { letter: "L", word: "Leadership" },
  { letter: "E", word: "Excellence" },
  { letter: "A", word: "Accountability" },
  { letter: "D", word: "Development" },
  { letter: "E", word: "Education" },
  { letter: "R", word: "Responsibility" },
  { letter: "S", word: "Service" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            About GovLeaders Academy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Practical training and development for the people who serve
            communities.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Headquartered in the Greater Houston area, serving public-sector
            professionals, boards, agencies, districts, and organizations.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy">
                Built for Public Service
              </h2>
            </div>
            <div>
              <p className="text-slate text-lg leading-relaxed">
                GovLeaders Academy was created to support the people, boards,
                agencies, districts, and organizations that keep local government
                and public service moving forward. Our work is built around a
                practical understanding of leadership, governance, supervision,
                adult learning, public-sector operations, and organizational
                effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes GLA Different */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy text-center mb-12">
            What Makes GLA Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[6px] p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                Practical Experience
              </h3>
              <p className="text-slate">
                GLA is built around real public-sector experience in local
                government, public safety, special districts, board service,
                supervision, management, and organizational leadership.
              </p>
            </div>
            <div className="bg-white rounded-[6px] p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                Academic and Professional Depth
              </h3>
              <p className="text-slate">
                Our work is informed by advanced education and experience in
                public administration, criminal justice, political science,
                education, instructional design, business, management, data
                analytics, and adult learning.
              </p>
            </div>
            <div className="bg-white rounded-[6px] p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                Structured Online Learning
              </h3>
              <p className="text-slate">
                Courses and services are designed for working adults who need
                clear, practical, and accessible training that connects directly
                to real responsibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Experience */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy text-center mb-12">
            Experience Across Public-Sector Work
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-gray-light rounded-[6px] p-5 text-center"
              >
                <p className="text-navy font-semibold text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-3">
                Mission
              </h3>
              <p className="text-slate leading-relaxed">
                To provide practical, accessible, and credible training,
                advising, and professional development for public-sector
                professionals, board members, employees, and organizations.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-3">
                Vision
              </h3>
              <p className="text-slate leading-relaxed">
                To become a trusted training and development resource for local
                government, special districts, public safety agencies, and
                public-sector professionals seeking to serve with greater
                confidence, competence, and accountability.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-3">
                Values
              </h3>
              <div className="space-y-2 mb-4">
                {leadersValues.map((v) => (
                  <div key={v.letter + v.word} className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-navy text-white font-bold rounded-[6px] text-sm shrink-0">
                      {v.letter}
                    </span>
                    <span className="text-navy font-medium text-sm">
                      {v.word}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-slate text-sm leading-relaxed">
                The LEADERS framework reflects the standards that guide
                GLA&apos;s courses, services, and professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed With Purpose */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy text-center mb-8">
            Designed With Purpose
          </h2>
          <p className="text-slate text-lg leading-relaxed text-center">
            GovLeaders Academy courses, custom training, and exams are developed
            with attention to recognized principles of adult learning,
            instructional design, and assessment quality. Our approach may
            include ADDIE-based course planning, Bloom&apos;s Taxonomy, clear
            learning objectives, measurable outcomes, scenario-based learning,
            practical application, structured assessments, and alignment between
            content, activities, and learner expectations. The goal is simple:
            training should be organized, useful, defensible, and connected to
            the work people actually perform.
          </p>
        </div>
      </section>

      {/* Motto */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-4">
            Move Forward. Lead Better.
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            GovLeaders Academy is here to support the professionals and
            organizations that serve our communities.
          </p>
        </div>
      </section>
    </>
  );
}
