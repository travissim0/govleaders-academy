import Link from "next/link";
import Image from "next/image";
import { NewsletterSignup } from "./NewsletterSignup";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/insights", label: "Insights and Guides" },
  ],
  Services: [
    { href: "/courses", label: "Course Catalog" },
    { href: "/services/custom-training", label: "Custom Training" },
    { href: "/services/promotional-exams", label: "Promotional Exams" },
    { href: "/services/college-advising", label: "College Advising" },
    { href: "/sponsorships", label: "Sponsorships" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-full.png"
                alt="GovLeaders Academy"
                width={200}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-6 max-w-sm">
              Practical online training, resources, and development solutions for
              public-sector leaders, board members, and the professionals who support them.
            </p>
            <p className="text-xs text-gray-400 italic mb-4">Move Forward. Lead Better.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Connect
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="#newsletter" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  The GLA Brief
                </Link>
              </li>
              <li>
                <a
                  href="https://learn.govleadersacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-gold transition-colors"
                >
                  Learning Portal
                </a>
              </li>
            </ul>
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GovLeaders Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="text-sm text-gray-400 hover:text-gold transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
