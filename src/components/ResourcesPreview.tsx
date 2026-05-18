import Link from "next/link";
import { BlogCardItem, placeholderPosts } from "./BlogCard";
import type { Post } from "@/types";

export function ResourcesPreview({ posts }: { posts?: Post[] }) {
  const displayPosts = posts && posts.length > 0 ? posts : placeholderPosts;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Expert articles, guides, and updates for public-sector professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <BlogCardItem key={post._id} post={post} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
