export const course = {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "shortDescription", title: "Short Description", type: "text", rows: 3 },
    { name: "category", title: "Category/Series", type: "string", options: {
      list: [
        "Flagship Series",
        "New Board Member Series",
        "Water District Governance & Legal Series",
        "Water District Operations & Leadership Series",
        "Standalone",
      ],
    }},
    { name: "audience", title: "Audience", type: "string" },
    { name: "contactHours", title: "Contact Hours", type: "number" },
    { name: "price", title: "Price ($)", type: "number", description: "Individual course price in dollars" },
    { name: "level", title: "Level", type: "string", options: {
      list: ["Foundations", "Intermediate", "Advanced"],
    }},
    { name: "accessPeriod", title: "Access Period", type: "string", initialValue: "6 months", options: {
      list: ["6 months", "12 months"],
    }},
    { name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } },
    { name: "learnworldsUrl", title: "LearnWorlds URL", type: "url" },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
  ],
};
