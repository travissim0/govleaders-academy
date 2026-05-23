import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { TrainingTracks } from "@/components/TrainingTracks";
import { FeaturedCourses } from "@/components/CourseCard";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeServe } from "@/components/WhoWeServe";
import { WhyGLA } from "@/components/WhyGLA";
import { OrganizationRibbon } from "@/components/OrganizationRibbon";
import { IndividualsAndOrgs } from "@/components/IndividualsAndOrgs";
import { ServicesPreview } from "@/components/ServicesPreview";
import { BuiltForService } from "@/components/BuiltForService";
import { Testimonials } from "@/components/Testimonials";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Credibility } from "@/components/Credibility";
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
      <TrainingTracks />
      <FeaturedCourses courses={courses} />
      <IndividualsAndOrgs />
      <HowItWorks />
      <WhoWeServe />
      <WhyGLA />
      <OrganizationRibbon />
      <ServicesPreview />
      <BuiltForService />
      <Testimonials />
      <ResourcesPreview posts={posts} />
      <NewsletterSignup />
      <Credibility />
      <FinalCTA />
    </>
  );
}
