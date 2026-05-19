import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Post } from "@/types";

const placeholderPosts: Post[] = [
  {
    _id: "p1",
    title: "5 Essential Skills Every Special District Board Member Needs",
    slug: { current: "essential-skills-board-members" },
    category: "Leadership",
    excerpt: "Discover the core competencies that set effective board members apart and how to develop them.",
    body: [],
    author: "GovLeaders Academy",
    publishDate: "2025-03-15",
    featured: true,
  },
  {
    _id: "p2",
    title: "Understanding the Texas Open Meetings Act: A Quick Guide",
    slug: { current: "texas-open-meetings-guide" },
    category: "Compliance",
    excerpt: "A practical overview of OMA requirements, common pitfalls, and how to stay compliant.",
    body: [],
    author: "GovLeaders Academy",
    publishDate: "2025-02-28",
    featured: true,
  },
  {
    _id: "p3",
    title: "The Future of Online Training in Public-Sector Education",
    slug: { current: "future-online-training" },
    category: "Industry Trends",
    excerpt: "How digital learning is transforming professional development for government professionals.",
    body: [],
    author: "GovLeaders Academy",
    publishDate: "2025-02-10",
    featured: true,
  },
];

function BlogCardItem({ post }: { post: Post }) {
  return (
    <Link
      href={`/insights/${post.slug.current}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gold/30 transition-all"
    >
      <div className="h-40 bg-gradient-to-br from-navy-light to-navy flex items-center justify-center">
        <span className="text-white/20 font-heading font-bold text-3xl">GLA</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium bg-gold/10 text-gold px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate">
            <Calendar size={12} />
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-navy mb-2 group-hover:text-navy-light transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-slate line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export { BlogCardItem, placeholderPosts };
