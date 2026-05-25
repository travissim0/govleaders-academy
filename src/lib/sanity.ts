import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImage } from "@/types";
import type { Course, Series, Post } from "@/types";
import {
  featuredCoursesQuery,
  allCoursesQuery,
  courseBySlugQuery,
  allSeriesQuery,
  seriesBySlugQuery,
  featuredPostsQuery,
  allPostsQuery,
  postBySlugQuery,
} from "./queries";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "y041qgts",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

export async function getFeaturedCourses(): Promise<Course[]> {
  try {
    return await client.fetch(featuredCoursesQuery);
  } catch {
    return [];
  }
}

export async function getAllCourses(): Promise<Course[]> {
  try {
    return await client.fetch(allCoursesQuery);
  } catch {
    return [];
  }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  try {
    return await client.fetch(courseBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function getAllSeries(): Promise<Series[]> {
  try {
    return await client.fetch(allSeriesQuery);
  } catch {
    return [];
  }
}

export async function getSeriesBySlug(slug: string): Promise<Series | null> {
  try {
    return await client.fetch(seriesBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  try {
    return await client.fetch(featuredPostsQuery);
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    return await client.fetch(allPostsQuery);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch {
    return null;
  }
}
