import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Training",
  description:
    "Custom online training programs for public-sector organizations. Self-paced and instructor-led asynchronous courses from 4 to 120 contact hours.",
};

export default function CustomTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
