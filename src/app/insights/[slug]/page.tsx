import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getPostBySlug } from "@/lib/sanity";
import { placeholderPosts } from "@/components/BlogCard";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug) ?? placeholderPosts.find((p) => p.slug.current === slug);

  return {
    title: post?.seoTitle || post?.title || "Insight",
    description: post?.seoDescription || post?.excerpt || "Read this insight from GovLeaders Academy.",
  };
}

export default async function InsightPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanityPost = await getPostBySlug(slug);
  const post = sanityPost ?? placeholderPosts.find((p) => p.slug.current === slug);

  if (!post) {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-heading font-bold text-navy mb-4">Post Not Found</h1>
          <p className="text-slate mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-navy-light hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Insights
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-navy py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>
          <span className="inline-block text-xs font-medium bg-gold/20 text-gold px-2 py-1 rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      <article className="bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
            <PortableText value={post.body} />
          ) : (
            <>
              <p className="text-lg text-slate leading-relaxed">{post.excerpt}</p>
              <p className="text-slate mt-6">
                This is a placeholder article. When content is added through Sanity Studio,
                full rich-text content will render here.
              </p>
            </>
          )}
        </div>
      </article>
    </>
  );
}
