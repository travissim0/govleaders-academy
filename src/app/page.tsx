import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { TrainingTracks } from "@/components/TrainingTracks";
import { FeaturedCourses } from "@/components/CourseCard";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeServe } from "@/components/WhoWeServe";
import { WhyGLA } from "@/components/WhyGLA";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Credibility } from "@/components/Credibility";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      {/* Course Discovery Zone — Training Tracks + Featured Courses as one connected block */}
      <TrainingTracks />
      <FeaturedCourses />
      <HowItWorks />
      <WhoWeServe />
      <WhyGLA />
      <ServicesPreview />
      <ResourcesPreview />
      <NewsletterSignup />
      <Credibility />
      <FinalCTA />
    </>
  );
}
