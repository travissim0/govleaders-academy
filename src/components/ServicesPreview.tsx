import Link from "next/link";
import { Wrench, FileCheck, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Custom Training",
    description: "Tailored online training, board orientation, leadership development, and organization-specific coursework.",
    href: "/services/custom-training",
  },
  {
    icon: FileCheck,
    title: "Promotional Exam Services",
    description: "Online promotional exam support, assessment tools, and leadership development for public safety organizations.",
    href: "/services/promotional-exams",
  },
  {
    icon: GraduationCap,
    title: "College Advising",
    description: "Degree pathway planning for public-sector professionals seeking legitimate, accredited, affordable, and practical education options.",
    href: "/services/college-advising",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-slate uppercase tracking-wider mb-2">Additional Services</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
            Beyond the Course Catalog
          </h2>
          <p className="text-slate max-w-xl mx-auto text-sm">
            GLA also offers specialized services to support organizations and individual professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-start gap-3 p-4 rounded-[6px] border border-gray-200 hover:border-gold/30 hover:bg-gray-light/50 transition-all"
            >
              <service.icon size={20} className="text-slate mt-0.5 shrink-0 group-hover:text-navy transition-colors" />
              <div>
                <h3 className="font-semibold text-sm text-navy mb-1 group-hover:text-navy-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-light transition-colors"
          >
            Learn More About Our Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
