export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "category", title: "Category", type: "string", options: {
      list: ["Leadership", "Compliance", "Governance", "Industry Trends", "Career Development"],
    }},
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    { name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } },
    { name: "author", title: "Author", type: "string" },
    { name: "publishDate", title: "Publish Date", type: "date" },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 2 },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
  ],
};
