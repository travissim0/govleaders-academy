import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with GovLeaders Academy. Questions about courses, custom training, promotional exams, or college advising.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question or ready to get started? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-light rounded-xl p-6">
                <Mail size={24} className="text-gold mb-3" />
                <h3 className="font-heading font-semibold text-navy mb-1">Email</h3>
                <p className="text-sm text-slate">info@govleadersacademy.com</p>
              </div>
              <div className="bg-gray-light rounded-xl p-6">
                <MapPin size={24} className="text-gold mb-3" />
                <h3 className="font-heading font-semibold text-navy mb-1">Based In</h3>
                <p className="text-sm text-slate">Texas, USA</p>
              </div>
              <div className="bg-gray-light rounded-xl p-6">
                <Clock size={24} className="text-gold mb-3" />
                <h3 className="font-heading font-semibold text-navy mb-1">Response Time</h3>
                <p className="text-sm text-slate">Within 1-2 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
