import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Promotional Exams",
  description:
    "Online written promotional exams for public safety agencies, local governments, and public-sector organizations.",
};

export default function PromotionalExamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
