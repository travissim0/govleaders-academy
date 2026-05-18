import Link from "next/link";
import { Wrench, FileCheck, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Custom Training",
    description: "Tailored training programs designed for your organization's specific needs and goals.",
    href: "/services#custom-training",
  },
  {
    icon: FileCheck,
    title: "Promotional Exam Services",
    description: "Comprehensive exam development and administration for public-sector promotions.",
    href: "/services#promo-exams",
  },
  {
    icon: GraduationCap,
    title: "College Pathway Advising",
    description: "Guidance for public-sector professionals pursuing higher education credentials.",
    href: "/services#college-advising",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Beyond the Catalog
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Additional services to support your organization and your career.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-gold/30 transition-all"
            >
              <service.icon size={28} className="text-navy mb-4" />
              <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-navy-light transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
