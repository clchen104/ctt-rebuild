"use client";

import { useState } from "react";

const positions = [
  {
    department: "Product",
    title: "Table Tennis Coach",
    location: "Rosemead, California",
    type: "Full-time",
    duties: [
      "Organizing and conducting table tennis sessions.",
      "Developing training programs and strategies to enhance player skills.",
      "Evaluating individual player performance and providing constructive feedback.",
      "Assisting in player election for competitions and tournaments.",
      "Fulfilling any other coaching duties as mutually agreed upon.",
    ],
    requirements:
      "Bachelor's degree in a physical education related field, plus 2 years of experience as a table tennis coach or player",
    note: "No visa sponsorship",
    applyEmail: "info@californiatabletennis.com",
    applyLink: "https://www.powr.io/job-board-form/i/39366252#page",
  },
];

export default function CareerPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/about_group.jpg')", backgroundPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="relative text-center">
          <h1 className="font-heading text-[48px] font-medium uppercase tracking-[2px] text-white">
            Careers
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#CC0000]" />
          <p className="mt-4 text-[18px] text-white/80">
            Join the CTT Team Today!
          </p>
        </div>
      </section>

      {/* ═══════════ JOB LISTINGS ═══════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-[32px] font-medium text-[#1B2A4A]">
            Available Positions
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-12 bg-[#CC0000]" />

          <div className="mt-10 space-y-4">
            {positions.map((pos, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div
                  key={pos.title}
                  className="overflow-hidden rounded-[8px] border border-[#D4D4D4]"
                >
                  {/* Summary row */}
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <p className="text-[13px] font-medium text-[#6B7280]">{pos.department}</p>
                      <h3 className="mt-1 text-[18px] font-semibold text-[#CC0000]">{pos.title}</h3>
                      <p className="mt-1 text-[14px] text-[#6B7280]">
                        {pos.location} &middot; {pos.type}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="rounded-[4px] border border-[#1B2A4A] px-5 py-2 text-[14px] font-semibold text-[#1B2A4A] transition-colors hover:bg-[#1B2A4A] hover:text-white"
                    >
                      {isExpanded ? "Close" : "More Info"}
                    </button>
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div className="border-t border-[#D4D4D4] px-6 pb-6 pt-5">
                      <h4 className="text-[15px] font-semibold text-[#1B2A4A]">Duties:</h4>
                      <ul className="mt-2 space-y-1.5">
                        {pos.duties.map((duty, j) => (
                          <li key={j} className="flex items-start gap-2 text-[14px] leading-[1.5] text-[#6B7280]">
                            <span className="mt-0.5 text-[#6B7280]">&ndash;</span>
                            {duty}
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-5 text-[15px] font-semibold text-[#1B2A4A]">Requirements:</h4>
                      <p className="mt-1 text-[14px] leading-[1.5] text-[#6B7280]">
                        {pos.requirements}
                      </p>

                      <p className="mt-4 text-[14px] font-semibold text-[#1B2A4A]">
                        **{pos.note}**
                      </p>

                      <div className="mt-5 flex items-center gap-3">
                        <a
                          href={pos.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-[4px] bg-[#CC0000] px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#A30000]"
                        >
                          Apply for this job
                        </a>
                        <span className="text-[14px] text-[#6B7280]">
                          Email resume to{" "}
                          <a href={`mailto:${pos.applyEmail}`} className="text-[#1B2A4A] underline hover:text-[#CC0000]">
                            {pos.applyEmail}
                          </a>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
