import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GovLeaders Academy privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-heading font-bold text-navy mb-6">
          Privacy Policy
        </h1>
        <div className="bg-gray-light rounded-[6px] border border-gray-200 p-8">
          <p className="text-slate">
            This page is currently under development and will be finalized
            before GovLeaders Academy begins public enrollment, payment
            processing, or full public launch.
          </p>
        </div>
      </div>
    </section>
  );
}
