import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { TrainingPaths } from "@/components/TrainingPaths";
import { LeadMagnet } from "@/components/LeadMagnet";
import { TrainingTracks } from "@/components/TrainingTracks";
import { FeaturedCourses } from "@/components/CourseCard";
import { Certificates } from "@/components/Certificates";
import { HowItWorks } from "@/components/HowItWorks";
import { ForOrganizations } from "@/components/ForOrganizations";
import { WhoWeServe } from "@/components/WhoWeServe";
import { OrganizationRibbon } from "@/components/OrganizationRibbon";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Testimonials } from "@/components/Testimonials";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FinalCTA } from "@/components/FinalCTA";
import { getFeaturedCourses, getFeaturedPosts } from "@/lib/sanity";

export const revalidate = 60;

export default async function Home() {
  const [courses, posts] = await Promise.all([
    getFeaturedCourses(),
    getFeaturedPosts(),
  ]);

  return (
    <>
      <Hero />
      <StatsStrip />
      <TrainingPaths />
      <LeadMagnet />
      <TrainingTracks />
      <FeaturedCourses courses={courses} />
      <Certificates />
      <HowItWorks />
      <ForOrganizations />
      <WhoWeServe />
      <OrganizationRibbon />
      <ServicesPreview />
      <Testimonials />
      <ResourcesPreview posts={posts} />
      <NewsletterSignup />
      <FinalCTA />
    </>
  );
}
