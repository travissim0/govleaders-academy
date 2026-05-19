import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { placeholderPosts } from "./BlogCard";
import type { Post } from "@/types";

function ResourceCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/insights/${post.slug.current}`}
      className="group"
    >
      <article className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-gold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1 text-xs text-slate">
            <Calendar size={11} />
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-navy mb-2 group-hover:text-navy-light transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-slate leading-relaxed mb-3 flex-1">{post.excerpt}</p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy group-hover:text-gold transition-colors">
          Read More <ArrowRight size={12} />
        </span>
      </article>
    </Link>
  );
}

export function ResourcesPreview({ posts }: { posts?: Post[] }) {
  const displayPosts = posts && posts.length > 0 ? posts : placeholderPosts;

  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Insights</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy">
              Insights and Guides
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-light transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:divide-x sm:divide-gray-200">
          {displayPosts.map((post) => (
            <div key={post._id} className="sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <ResourceCard post={post} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
          >
            View All Insights <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
