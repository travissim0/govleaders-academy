"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/services/custom-training", label: "For Organizations" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-full.png"
              alt="GovLeaders Academy"
              width={220}
              height={48}
              className="hidden sm:block h-10 w-auto"
              priority
            />
            <Image
              src="/images/logo-monogram.png"
              alt="GLA"
              width={60}
              height={40}
              className="sm:hidden h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-dark-text hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://learn.govleadersacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 bg-navy text-white text-[16px] font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
            >
              Learning Portal
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[15px] font-semibold text-dark-text hover:text-navy transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://learn.govleadersacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-7 py-3 bg-navy text-white text-[16px] font-semibold rounded-[6px] hover:bg-navy-dark transition-colors"
            >
              Learning Portal
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
