"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The course was clear, practical, and easy to follow. It helped our board members better understand their role and responsibilities.",
    name: "Maria Thompson",
    title: "Board Member, Main Street MUD",
  },
  {
    quote: "GLA made the training process feel organized and professional without making it complicated.",
    name: "James Carter",
    title: "Operations Manager, Central Valley Utility District",
  },
  {
    quote: "The material was direct, useful, and built around the kind of decisions local government leaders actually face.",
    name: "Rebecca Allen",
    title: "Assistant City Administrator, Good Times City",
  },
  {
    quote: "The advising process helped me understand my options and avoid wasting time on a degree path that did not fit my goals.",
    name: "Daniel Brooks",
    title: "Public Safety Professional",
  },
  {
    quote: "The training was structured, but still practical. It respected our time and focused on information we could actually use.",
    name: "Angela Reed",
    title: "District Consultant, Civic Partners Consulting Group",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }

  const t = testimonials[current];

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
            What Learners and Organizations Value
          </h2>
          <p className="text-slate text-sm">
            Practical training, clear guidance, and professional support for public-sector work.
          </p>
        </div>

        <div className="relative bg-gray-light rounded-[6px] p-8 sm:p-12 border border-gray-200">
          <Quote size={32} className="text-gold/30 mb-4" />
          <blockquote className="text-lg text-navy leading-relaxed mb-6">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold text-navy text-sm">{t.name}</p>
            <p className="text-xs text-slate">{t.title}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 flex items-center justify-center rounded-[6px] border border-gray-200 text-slate hover:text-navy hover:border-navy transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs text-slate">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-9 h-9 flex items-center justify-center rounded-[6px] border border-gray-200 text-slate hover:text-navy hover:border-navy transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-slate mt-4 italic">
          Placeholder testimonials for design purposes only.
        </p>
      </div>
    </section>
  );
}
