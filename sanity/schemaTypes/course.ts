export const course = {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "shortDescription", title: "Short Description", type: "text", rows: 3 },
    { name: "category", title: "Category", type: "string", options: {
      list: [
        "Special Districts",
        "Water / MUD / WCID",
        "Emergency Services Districts",
        "Texas Local Government",
        "Public Sector Leadership",
        "Ethics & Compliance",
      ],
    }},
    { name: "audience", title: "Audience", type: "string" },
    { name: "contactHours", title: "Contact Hours", type: "number" },
    { name: "level", title: "Level", type: "string", options: {
      list: ["Foundations", "Intermediate", "Advanced"],
    }},
    { name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } },
    { name: "learnworldsUrl", title: "LearnWorlds URL", type: "url" },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
  ],
};
