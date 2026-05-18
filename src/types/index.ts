export interface Course {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  category: string;
  audience: string;
  contactHours: number;
  level: "Foundations" | "Intermediate" | "Advanced";
  thumbnail?: SanityImage;
  learnworldsUrl: string;
  featured: boolean;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
  featuredImage?: SanityImage;
  author: string;
  publishDate: string;
  seoTitle?: string;
  seoDescription?: string;
  featured: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  inquiryType: string;
  message: string;
}
