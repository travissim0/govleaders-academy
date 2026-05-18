export const series = {
  name: "series",
  title: "Series / Bundle",
  type: "document",
  fields: [
    { name: "title", title: "Series Title", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "courses", title: "Included Courses", type: "array", of: [{ type: "reference", to: [{ type: "course" }] }] },
    { name: "totalHours", title: "Total Contact Hours", type: "number" },
    { name: "individualValue", title: "Individual Value ($)", type: "number", description: "Sum of individual course prices" },
    { name: "bundlePrice", title: "Bundle Price ($)", type: "number" },
    { name: "savings", title: "Savings ($)", type: "number" },
    { name: "accessPeriod", title: "Access Period", type: "string", initialValue: "6 months", options: {
      list: ["6 months", "12 months"],
    }},
    { name: "learnworldsUrl", title: "LearnWorlds URL", type: "url" },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
  ],
};
