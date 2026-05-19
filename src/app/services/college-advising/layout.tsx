import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Advising",
  description:
    "College advising for public-sector professionals. Degree planning, transcript review, and enrollment support.",
};

export default function CollegeAdvisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
