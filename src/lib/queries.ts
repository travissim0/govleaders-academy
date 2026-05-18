export const featuredCoursesQuery = `*[_type == "course" && featured == true] | order(_createdAt desc)[0...3] {
  _id, title, slug, shortDescription, category, contactHours, level, thumbnail, learnworldsUrl, featured
}`;

export const allCoursesQuery = `*[_type == "course"] | order(category asc, title asc) {
  _id, title, slug, shortDescription, category, contactHours, level, thumbnail, learnworldsUrl, featured
}`;

export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishDate desc)[0...3] {
  _id, title, slug, category, excerpt, featuredImage, author, publishDate
}`;

export const allPostsQuery = `*[_type == "post"] | order(publishDate desc) {
  _id, title, slug, category, excerpt, featuredImage, author, publishDate
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, category, excerpt, body, featuredImage, author, publishDate, seoTitle, seoDescription
}`;

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id, title, slug, description
}`;
