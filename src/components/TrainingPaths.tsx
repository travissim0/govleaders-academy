import Link from "next/link";
import { User, Building2, Wrench } from "lucide-react";

const paths = [
  {
    icon: User,
    title: "For Individual Learners",
    description: "Take practical, self-paced courses to strengthen your understanding of governance, leadership, compliance, public finance, and public-sector decision-making.",
    bestFor: [
      "Current public-sector employees",
      "Board members",
      "Aspiring board members",
      "Public safety professionals",
      "Consultants",
      "Citizens interested in public service",
    ],
    cta: "Browse Individual Courses",
    href: "/courses",
  },
  {
    icon: Building2,
    title: "For Boards, Districts, and Organizations",
    description: "Provide structured training access for board members, staff, or professional teams through course series, annual subscriptions, and organization-level learning pathways.",
    bestFor: [
      "Municipal utility districts",
      "Water districts",
      "Emergency services districts",
      "Local government offices",
      "Public-sector agencies",
      "Consulting firms",
      "Professional associations",
    ],
    cta: "Explore Organization Options",
    href: "/services/custom-training",
  },
  {
    icon: Wrench,
    title: "Custom Training and Development",
    description: "Need training built around your organization's specific policies, risks, goals, or workforce needs? GLA can work with your organization to identify needs and develop custom training content.",
    bestFor: [
      "Agencies needing specialized leadership training",
      "Associations needing member education",
      "Organizations with unique compliance or operational topics",
      "Public-sector teams needing customized onboarding",
    ],
    cta: "Request Custom Training",
    href: "/services/custom-training",
  },
];

export function TrainingPaths() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Choose Your Training Path
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            GLA supports individual learners, boards, districts, agencies, and organizations
            through structured online training and specialized development services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.title}
              className="bg-gray-light rounded-[6px] border border-gray-200 p-7 flex flex-col"
            >
              <div className="w-12 h-12 bg-navy/10 rounded-[6px] flex items-center justify-center mb-4">
                <path.icon size={24} className="text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{path.title}</h3>
              <p className="text-sm text-slate mb-4">{path.description}</p>
              <div className="mb-5 flex-1">
                <p className="text-xs font-semibold text-navy mb-2">Best for:</p>
                <ul className="space-y-1">
                  {path.bestFor.map((item) => (
                    <li key={item} className="text-xs text-slate flex items-start gap-2">
                      <span className="text-gold mt-1">&#8226;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={path.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white text-sm font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
              >
                {path.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
