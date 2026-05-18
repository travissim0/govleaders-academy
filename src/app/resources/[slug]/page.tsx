import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { placeholderPosts } from "@/components/BlogCard";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = placeholderPosts.find((p) => p.slug.current === slug);

  return {
    title: post?.title || "Resource",
    description: post?.excerpt || "Read this resource from GovLeaders Academy.",
  };
}

export default async function ResourcePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = placeholderPosts.find((p) => p.slug.current === slug);

  if (!post) {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-heading font-bold text-navy mb-4">Post Not Found</h1>
          <p className="text-slate mb-8">The resource you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-navy-light hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Resources
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
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Resources
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
          <p className="text-lg text-slate leading-relaxed">{post.excerpt}</p>
          <p className="text-slate mt-6">
            This is a placeholder article. When Sanity CMS is connected, full rich-text
            content will render here using Portable Text.
          </p>
        </div>
      </article>
    </>
  );
}
