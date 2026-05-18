import type { Metadata } from "next";
import { BlogCardItem, placeholderPosts } from "@/components/BlogCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles, guides, and insights for public-sector professionals. Stay informed on governance, compliance, and leadership.",
};

export default function ResourcesPage() {
  const posts = placeholderPosts;

  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Resources & Insights
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert articles, practical guides, and the latest updates
            for public-sector professionals.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCardItem key={post._id} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate">
                New content coming soon. Subscribe to be notified!
              </p>
            </div>
          )}
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
