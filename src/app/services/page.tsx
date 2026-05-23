import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Wrench, FileCheck, GraduationCap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Course catalog, custom training, promotional exam services, and college advising for public-sector organizations and professionals.",
};

const services = [
  {
    icon: BookOpen,
    title: "Course Catalog",
    description: "21 structured online courses and Course Series covering governance, leadership, operations, ethics, public finance, and more. 100% online, self-paced, with certificates of completion.",
    href: "/courses",
    cta: "Browse Courses",
  },
  {
    icon: Wrench,
    title: "Custom Training",
    description: "Tailored online training, board orientation, leadership development, policy-based training, and organization-specific coursework built around your real needs.",
    href: "/services/custom-training",
    cta: "Request Custom Training Information",
  },
  {
    icon: FileCheck,
    title: "Online Promotional Exams",
    description: "Structured, online exam solutions for public safety agencies, local governments, and public-sector organizations that need a professional, defensible testing process.",
    href: "/services/promotional-exams",
    cta: "Request Promotional Exam Information",
  },
  {
    icon: GraduationCap,
    title: "College Advising",
    description: "Degree pathway planning for public-sector professionals seeking legitimate, accredited, affordable, and practical education options.",
    href: "/services/college-advising",
    cta: "Request College Advising Information",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            GovLeaders Academy provides online training, custom course development,
            promotional exam services, and college advising for public-sector professionals
            and organizations.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[6px] border border-gray-200 p-8 flex flex-col"
              >
                <div className="w-14 h-14 bg-navy/10 rounded-[6px] flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-navy" />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-3">{service.title}</h2>
                <p className="text-slate mb-6 flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white text-[16px] font-semibold rounded-[6px] hover:bg-navy-dark transition-colors self-start"
                >
                  {service.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions About Our Services?
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            We would love to discuss how we can support your organization or your career.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-navy-dark text-[17px] font-semibold rounded-[6px] hover:bg-gold/90 transition-colors"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
