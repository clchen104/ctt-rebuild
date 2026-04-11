"use client";

import { useState } from "react";
import Link from "next/link";

const programs = [
  {
    id: "beginner-youth",
    tab: "Beginner Youth",
    category: "YOUTH GROUP CLASS",
    title: "Beginner / Intermediate",
    bullets: [
      "Learn the basic forehand, backhand, and serve",
      "Gain life-long values (hard work, determination and social skills)",
      "Improve hand-eye coordination and concentration abilities",
    ],
    features: [
      "Professional Coaches",
      "Organized by Former World Champion Gao Jun",
      "Small Group Format with kids from 5 to 15 years old",
      "Innovative training programs that includes fun activities",
    ],
    schedule: [
      { day: "Saturday", time: "6:30 PM – 8 PM" },
      { day: "Sunday", time: "1 PM – 2:30 PM" },
      { day: "Sunday", time: "3:30 PM – 5:00 PM" },
    ],
    pricing: {
      title: "Program Cost",
      items: [
        { price: "$35", label: "per class" },
        { price: "$350", label: "10 class pass" },
      ],
      note: "*Pass is set to expire after 1 year. Pass is non-refundable.",
      cta: [
        { label: "Book Now", href: "#" },
        { label: "10 Class Pass", href: "#" },
      ],
    },
  },
  {
    id: "elite-youth",
    tab: "Elite Youth",
    category: "YOUTH GROUP CLASS",
    title: "Elite Program",
    bullets: [
      "Learn the basic forehand, backhand, and serve",
      "Gain life-long values (hard work, determination and social skills)",
      "Improve hand-eye coordination and concentration abilities",
    ],
    features: [
      "Professional Coaches",
      "Organized by Former World Champion Gao Jun",
      "Small Group Format with kids from 5 to 15 years old",
      "Innovative training programs that includes fun activities",
    ],
    schedule: [
      { day: "Saturday", time: "6:30 PM – 8 PM" },
    ],
    pricing: {
      title: "Program Cost",
      items: [
        { price: "$35", label: "per class" },
        { price: "$350", label: "10 class pass" },
      ],
      note: "*Pass is set to expire after 1 year. Pass is non-refundable.",
      cta: [
        { label: "Book Now", href: "#" },
        { label: "10 Class Pass", href: "#" },
      ],
    },
  },
  {
    id: "private-lesson",
    tab: "Private Lesson",
    category: "PRIVATE COACHING",
    title: "1 on 1 Private Lesson",
    bullets: [
      "Learn Table Tennis the correct way",
      "Minimize time wasted and maximize your results",
      "Stay on track and uncover your full potential",
    ],
    features: [
      "1 on 1 Format",
      "Pick your favorite Coach",
      "Fully customizable training programs",
    ],
    schedule: [
      { day: "Monday – Sunday", time: "Accommodate to your time" },
    ],
    pricing: {
      title: "Cost – Per Hour",
      columns: [
        {
          heading: "CTT Coach",
          rows: [
            { price: "$70", label: "Annual Member" },
            { price: "$90", label: "Non Annual Member" },
          ],
        },
        {
          heading: "CTT Master Teacher",
          rows: [
            { price: "$80", label: "Annual Member" },
            { price: "$100", label: "Non Annual Member" },
          ],
        },
      ],
      note: "*Please note that space is limited",
      cta: [
        { label: "Start Learning Today!", href: "#" },
      ],
    },
  },
];

function CheckCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

export default function ClassesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const program = programs[activeTab];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/mission.jpg')", backgroundPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="relative text-center">
          <h1 className="font-heading text-[48px] font-medium uppercase tracking-[2px] text-white">
            Programs
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#CC0000]" />
        </div>
      </section>

      {/* ═══════════ TABS ═══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-[#D4D4D4]">
            {programs.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-4 text-[16px] font-semibold transition-colors ${
                  i === activeTab
                    ? "text-[#CC0000]"
                    : "text-[#6B7280] hover:text-[#1B2A4A]"
                }`}
                style={{
                  boxShadow: i === activeTab
                    ? "rgb(204, 0, 0) 0px -3px 0px 0px inset"
                    : "none",
                }}
              >
                {p.tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROGRAM CONTENT ═══════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left — description */}
            <div className="lg:col-span-3">
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
                {program.category}
              </p>
              <h2 className="mt-2 font-heading text-[32px] font-medium text-[#1B2A4A]">
                {program.title}
              </h2>
              <ul className="mt-8 space-y-5">
                {program.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
                    <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — features card */}
            <div className="lg:col-span-2">
              <div className="rounded-[8px] bg-[#1B2A4A] p-6">
                <h3 className="text-[20px] font-semibold text-white">Features</h3>
                <ul className="mt-4 space-y-3">
                  {program.features.map((feat, i) => (
                    <li key={i} className="text-[14px] leading-[1.4] text-white/80">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Schedule & Pricing bar ── */}
          <div className="mt-12 grid overflow-hidden rounded-[8px] bg-[#CC0000] sm:grid-cols-2">
            {/* Schedule */}
            <div className="border-b border-white/20 p-6 sm:border-b-0 sm:border-r">
              <h3 className="text-[20px] font-semibold italic text-white">Schedule</h3>
              <div className="mt-4 space-y-3">
                {program.schedule.map((slot, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="text-[14px] text-white/70">{slot.day}:</span>
                    <span className="text-[18px] font-semibold text-white">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="p-6">
              <h3 className="text-[20px] font-semibold italic text-white">{program.pricing.title}</h3>

              {program.pricing.items && (
                <div className="mt-4 flex gap-8">
                  {program.pricing.items.map((item, i) => (
                    <div key={i}>
                      <span className="text-[24px] font-bold text-white">{item.price}</span>
                      <span className="ml-1 text-[14px] text-white/70">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {program.pricing.columns && (
                <div className="mt-4 grid grid-cols-2 gap-6">
                  {program.pricing.columns.map((col, i) => (
                    <div key={i}>
                      <p className="text-[14px] font-semibold text-white">{col.heading}</p>
                      <div className="mt-2 space-y-1">
                        {col.rows.map((row, j) => (
                          <p key={j} className="text-[14px] text-white/80">
                            <span className="font-bold text-white">{row.price}</span> – {row.label}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {program.pricing.cta.map((btn) => (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="rounded-[4px] border border-white px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-white hover:text-[#CC0000]"
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>

              {program.pricing.note && (
                <p className="mt-4 text-[12px] italic text-white/60">{program.pricing.note}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
