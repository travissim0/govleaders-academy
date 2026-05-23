/**
 * Seed script for Sanity CMS — populates all 21 courses and 4 series/bundles.
 *
 * Usage:
 *   npx sanity dataset export production backup.tar.gz   (optional backup)
 *   npx tsx scripts/seed-courses.ts
 *
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN in .env.local
 * Get a write token from: https://www.sanity.io/manage → API → Tokens → Add API token (Editor)
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "y041qgts",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96);
}

// ── Course Data ──────────────────────────────────────────────────────────────

const courses = [
  // SERIES 1: Flagship — Foundations of Public Sector Leadership
  {
    _id: "course-01",
    title: "How Texas Government Actually Works: A Practical Guide for Public Leaders",
    shortDescription: "A practical introduction to Texas government structure, authority, and how public leadership actually functions at the state and local level.",
    category: "Flagship Series",
    audience: "All Public Leaders",
    contactHours: 8,
    price: 129,
    level: "Foundations",
    featured: true,
  },
  {
    _id: "course-02",
    title: "Special Purpose Districts Explained: Structure, Authority, and Governance",
    shortDescription: "Understand the structure, legal authority, and governance responsibilities of special purpose districts in Texas.",
    category: "Flagship Series",
    audience: "Board Members & Staff",
    contactHours: 8,
    price: 129,
    level: "Foundations",
    featured: true,
  },
  {
    _id: "course-03",
    title: "Public Finance Demystified: Budgets, Bonds, and the Decisions That Matter",
    shortDescription: "Learn how public finance works — budgets, bonds, tax rates, and the financial decisions that impact communities.",
    category: "Flagship Series",
    audience: "Board Members & Public Officials",
    contactHours: 8,
    price: 129,
    level: "Foundations",
    featured: false,
  },
  {
    _id: "course-04",
    title: "Behind Every Vote: How Public Boards Evaluate Information and Make Decisions",
    shortDescription: "Explore how public boards receive, evaluate, and act on information to make sound governance decisions.",
    category: "Flagship Series",
    audience: "Board Members",
    contactHours: 6,
    price: 129,
    level: "Foundations",
    featured: false,
  },

  // SERIES 2: New Board Member Series
  {
    _id: "course-05",
    title: "The Board Member Playbook: Roles, Responsibilities, and Expectations",
    shortDescription: "A comprehensive guide to what board members need to know about their roles, duties, and professional expectations.",
    category: "New Board Member Series",
    audience: "New Board Members",
    contactHours: 6,
    price: 89,
    level: "Foundations",
    featured: true,
  },
  {
    _id: "course-06",
    title: "Who's at the Table: Understanding Your Consultants and Their Roles",
    shortDescription: "Learn who the key consultants are in public-sector governance and how to work with them effectively.",
    category: "New Board Member Series",
    audience: "New Board Members",
    contactHours: 4,
    price: 89,
    level: "Foundations",
    featured: false,
  },
  {
    _id: "course-07",
    title: "Ethics, Transparency, and Public Trust",
    shortDescription: "Build a strong foundation in public-sector ethics, transparency requirements, and maintaining community trust.",
    category: "New Board Member Series",
    audience: "All Public Officials",
    contactHours: 6,
    price: 99,
    level: "Foundations",
    featured: false,
  },
  {
    _id: "course-08",
    title: "Before the Meeting Starts: Agendas, Minutes, and Documentation",
    shortDescription: "Master the documentation that makes public meetings lawful, organized, and effective.",
    category: "New Board Member Series",
    audience: "Board Members & Staff",
    contactHours: 4,
    price: 89,
    level: "Foundations",
    featured: false,
  },

  // SERIES 3: Water District Governance & Legal
  {
    _id: "course-09",
    title: "Open Meetings and Public Records: Staying Compliant and Avoiding Mistakes",
    shortDescription: "Navigate open meetings requirements, public records obligations, and common compliance pitfalls for public officials.",
    category: "Water District Governance & Legal Series",
    audience: "All Public Officials",
    contactHours: 6,
    price: 99,
    level: "Foundations",
    featured: true,
  },
  {
    _id: "course-10",
    title: "Setting the Rate: Understanding Taxes, Revenue, and Community Impact in Water Districts",
    shortDescription: "Understand how water districts set tax rates, manage revenue, and balance community impact with operational needs.",
    category: "Water District Governance & Legal Series",
    audience: "Board Members & District Staff",
    contactHours: 6,
    price: 89,
    level: "Foundations",
    featured: false,
  },
  {
    _id: "course-11",
    title: "What Could Go Wrong: Risk, Liability, and Protecting Yourself as a Board Member",
    shortDescription: "Identify common risks, understand personal liability, and learn how to protect yourself and your district.",
    category: "Water District Governance & Legal Series",
    audience: "Board Members",
    contactHours: 6,
    price: 89,
    level: "Foundations",
    featured: false,
  },
  {
    _id: "course-12",
    title: "Procurement Made Practical: How Water District Contracts Are Evaluated and Awarded",
    shortDescription: "Learn the procurement process for water district contracts — evaluation criteria, legal requirements, and best practices.",
    category: "Water District Governance & Legal Series",
    audience: "Board Members & Administrators",
    contactHours: 6,
    price: 89,
    level: "Intermediate",
    featured: false,
  },

  // SERIES 4: Water District Operations & Leadership
  {
    _id: "course-13",
    title: "Inside a MUD: Operations, Infrastructure, and What Drives Decisions",
    shortDescription: "Learn how Municipal Utility Districts operate, how infrastructure decisions are made, and what drives day-to-day operations.",
    category: "Water District Operations & Leadership Series",
    audience: "District Directors & Staff",
    contactHours: 6,
    price: 99,
    level: "Intermediate",
    featured: true,
  },
  {
    _id: "course-14",
    title: "Water Operations Explained: What Operators Do and How Systems Are Managed",
    shortDescription: "Understand what water system operators do, how treatment and distribution systems work, and how oversight applies.",
    category: "Water District Operations & Leadership Series",
    audience: "Board Members & District Staff",
    contactHours: 6,
    price: 99,
    level: "Intermediate",
    featured: false,
  },
  {
    _id: "course-15",
    title: "Speaking, Listening, and Leading in Public: Communication and Stakeholder Engagement",
    shortDescription: "Develop effective communication skills for public meetings, stakeholder engagement, and community leadership.",
    category: "Water District Operations & Leadership Series",
    audience: "Public Leaders & Board Members",
    contactHours: 4,
    price: 99,
    level: "Intermediate",
    featured: false,
  },
  {
    _id: "course-16",
    title: "Leading from Your Seat: Practical Leadership in Public Service",
    shortDescription: "Practical leadership skills for public servants — leading effectively regardless of your title or position.",
    category: "Water District Operations & Leadership Series",
    audience: "All Public Professionals",
    contactHours: 6,
    price: 99,
    level: "Intermediate",
    featured: false,
  },

  // STANDALONE COURSES
  {
    _id: "course-17",
    title: "Getting on the Ballot: How to Run for a Water District Board in Texas",
    shortDescription: "A step-by-step guide to running for a water district board position in Texas — from filing to election day.",
    category: "Standalone",
    audience: "Prospective Candidates",
    contactHours: 4,
    price: 69,
    level: "Foundations",
    featured: false,
  },
  {
    _id: "course-18",
    title: "Before You Build It: Parks and Recreation Planning for Water Districts",
    shortDescription: "Understand how water districts plan, fund, and manage parks and recreation facilities for their communities.",
    category: "Standalone",
    audience: "Board Members & District Staff",
    contactHours: 4,
    price: 99,
    level: "Intermediate",
    featured: false,
  },
  {
    _id: "course-19",
    title: "Contract Policing for Water Districts: How Public Safety Partnerships Really Work",
    shortDescription: "Understand how water districts establish and manage contract policing relationships for community public safety.",
    category: "Standalone",
    audience: "Board Members & Administrators",
    contactHours: 4,
    price: 129,
    level: "Intermediate",
    featured: true,
  },
  {
    _id: "course-20",
    title: "Board, Staff, and Leadership Alignment: Building Effective Working Relationships in Public Service",
    shortDescription: "Build productive working relationships between boards, staff, and leadership for stronger organizational performance.",
    category: "Standalone",
    audience: "Board Members & District Staff",
    contactHours: 6,
    price: 99,
    level: "Intermediate",
    featured: false,
  },
  {
    _id: "course-21",
    title: "Working with Boards: A Practical Guide for Consultants and Vendors in Public Service",
    shortDescription: "A guide for consultants, vendors, and professionals who work with public-sector boards and districts.",
    category: "Standalone",
    audience: "Consultants & Vendors",
    contactHours: 4,
    price: 99,
    level: "Intermediate",
    featured: false,
  },
];

// ── Series Data ──────────────────────────────────────────────────────────────

const seriesData = [
  {
    _id: "series-flagship",
    title: "GLA Flagship Series: Foundations of Public Sector Leadership",
    description: "Texas government, special purpose districts, public finance, and board decision-making. The broadest and most universally applicable introduction to public-sector leadership.",
    courseIds: ["course-01", "course-02", "course-03", "course-04"],
    individualValue: 516,
    bundlePrice: 399,
    savings: 117,
    featured: true,
  },
  {
    _id: "series-new-board",
    title: "New Board Member Series",
    description: "Roles, responsibilities, consultants, ethics, transparency, and meeting documentation. Designed to help newly elected or appointed board members understand governance responsibilities.",
    courseIds: ["course-05", "course-06", "course-07", "course-08"],
    individualValue: 366,
    bundlePrice: 249,
    savings: 117,
    featured: true,
  },
  {
    _id: "series-governance-legal",
    title: "Water District Governance and Legal Series",
    description: "Open meetings, public records, rate-setting, risk, liability, and procurement. Focused on governance and legal compliance for water district leaders.",
    courseIds: ["course-09", "course-10", "course-11", "course-12"],
    individualValue: 366,
    bundlePrice: 259,
    savings: 107,
    featured: true,
  },
  {
    _id: "series-operations-leadership",
    title: "Water District Operations and Leadership Series",
    description: "MUD operations, water systems, communication, stakeholder engagement, and practical leadership. Focused on the operational side of water district management.",
    courseIds: ["course-13", "course-14", "course-15", "course-16"],
    individualValue: 396,
    bundlePrice: 279,
    savings: 117,
    featured: true,
  },
];

// ── Seed Logic ───────────────────────────────────────────────────────────────

async function seed() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error("Missing SANITY_API_TOKEN in .env.local");
    console.error("Get one from: https://www.sanity.io/manage → API → Tokens → Add API token (Editor)");
    process.exit(1);
  }

  console.log("Seeding 21 courses...");

  // Create all courses
  for (const course of courses) {
    const doc = {
      _id: course._id,
      _type: "course",
      title: course.title,
      slug: { _type: "slug", current: slugify(course.title) },
      shortDescription: course.shortDescription,
      category: course.category,
      audience: course.audience,
      contactHours: course.contactHours,
      price: course.price,
      level: course.level,
      accessPeriod: "6 months",
      learnworldsUrl: "https://learn.govleadersacademy.com",
      featured: course.featured,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${course.title}`);
  }

  console.log("\nSeeding 4 series/bundles...");

  for (const s of seriesData) {
    const totalHours = s.courseIds.reduce((sum, id) => {
      const c = courses.find((c) => c._id === id);
      return sum + (c?.contactHours || 0);
    }, 0);

    const doc = {
      _id: s._id,
      _type: "series",
      title: s.title,
      slug: { _type: "slug", current: slugify(s.title) },
      description: s.description,
      courses: s.courseIds.map((id) => ({
        _type: "reference",
        _ref: id,
        _key: id,
      })),
      totalHours,
      individualValue: s.individualValue,
      bundlePrice: s.bundlePrice,
      savings: s.savings,
      accessPeriod: "6 months",
      learnworldsUrl: "https://learn.govleadersacademy.com",
      featured: s.featured,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${s.title} (${totalHours} hrs)`);
  }

  const totalHours = courses.reduce((sum, c) => sum + c.contactHours, 0);
  console.log(`\nDone! ${courses.length} courses, ${seriesData.length} series. Total: ${totalHours} contact hours.`);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
