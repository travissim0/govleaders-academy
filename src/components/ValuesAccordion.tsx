"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const values = [
  {
    letter: "L",
    word: "Leadership",
    description: "We support confident, ethical, and mission-focused leadership for public-sector professionals, boards, teams, and organizations.",
  },
  {
    letter: "E",
    word: "Excellence",
    description: "We value high standards, disciplined execution, continuous improvement, and practical competence.",
  },
  {
    letter: "A",
    word: "Accountability",
    description: "We believe public trust depends on transparency, responsibility, stewardship, and sound decision-making.",
  },
  {
    letter: "D",
    word: "Development",
    description: "We support lifelong learning, professional growth, and organizational capacity building.",
  },
  {
    letter: "E",
    word: "Education",
    description: "We believe education should be accessible, practical, credible, and connected to real-world public service.",
  },
  {
    letter: "R",
    word: "Responsibility",
    description: "We emphasize responsible leadership, ethical conduct, and service to the communities public organizations support.",
  },
  {
    letter: "S",
    word: "Service",
    description: "We believe public service should be grounded in professionalism, respect, integrity, and commitment to community.",
  },
];

export function ValuesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-navy">The LEADERS Framework</h3>
        <p className="text-xs text-slate mt-1">
          The LEADERS framework reflects the standards that guide GLA&apos;s courses, services,
          and professional relationships.
        </p>
      </div>
      <div className="space-y-2">
        {values.map((v, i) => (
          <div
            key={v.letter + v.word}
            className="bg-white rounded-[6px] border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-light/50 transition-colors"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-gold text-navy-dark font-bold rounded-[6px] text-sm shrink-0">
                {v.letter}
              </span>
              <span className="font-semibold text-navy text-sm flex-1">{v.word}</span>
              <ChevronDown
                size={16}
                className={`text-slate transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 pl-15">
                <p className="text-sm text-slate leading-relaxed ml-11">
                  {v.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
