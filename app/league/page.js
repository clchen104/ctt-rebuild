"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["Registration", "Prizes", "Format", "FAQ"];

function CheckCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

function RegistrationTab() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Eligibility */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#1B2A4A]">Eligibility</h3>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              Age <strong>13 &amp; Under</strong> and <strong>Under 1200</strong> USATT Rating
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              Age <strong>25 &amp; Under</strong> and <strong>Under 2650</strong> USATT Rating
            </span>
          </li>
        </ul>
        <p className="mt-4 text-[13px] italic text-[#6B7280]">
          *USATT basic membership is required at $25/yr
        </p>
      </div>

      {/* Registration & Schedule */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#1B2A4A]">How to Register</h3>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              Enter at <strong>CTT</strong> in person or online at <strong>OmniPong.com</strong> 24/hr prior
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              Entries will not be confirmed without payment
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              Participant can only sign up for one of two events
            </span>
          </li>
        </ul>
      </div>

      {/* Schedule & Fees bar */}
      <div className="lg:col-span-2">
        <div className="grid overflow-hidden rounded-[8px] bg-[#1B2A4A] sm:grid-cols-2">
          <div className="border-b border-white/20 p-6 sm:border-b-0 sm:border-r">
            <h4 className="text-[18px] font-semibold text-white">Schedule</h4>
            <div className="mt-3 space-y-2">
              <p className="text-[15px] text-white/80">
                The first <strong className="text-white">Sunday</strong> of every other month
              </p>
              <p className="text-[15px] text-white/80">
                Arrive by <strong className="text-white">3:15 PM</strong> &mdash; play starts at 3:30 PM, finishes around 6:30 PM
              </p>
            </div>
            <p className="mt-3 text-[12px] italic text-white/50">*Subject to change by tournament director</p>
          </div>
          <div className="p-6">
            <h4 className="text-[18px] font-semibold text-white">Fees</h4>
            <div className="mt-3">
              <span className="text-[28px] font-bold text-white">$25</span>
              <span className="ml-2 text-[15px] text-white/70">for all participants</span>
            </div>
            <p className="mt-3 text-[12px] italic text-white/50">
              *Pay online at OmniPong.com when you register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrizesTab() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Age 25 & Under */}
      <div className="overflow-hidden rounded-[8px] border border-[#D4D4D4]">
        <div className="bg-[#1B2A4A] px-6 py-3">
          <h3 className="text-center text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
            Age 25 &amp; Under
          </h3>
        </div>
        <div className="divide-y divide-[#D4D4D4]">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="rounded-[4px] bg-[#CC0000] px-3 py-1 text-[14px] font-bold text-white">1st</span>
              <span className="text-[15px] font-medium text-[#1B2A4A]">First Place</span>
            </div>
            <span className="text-[24px] font-bold text-[#1B2A4A]">$150</span>
          </div>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="rounded-[4px] bg-[#6B7280] px-3 py-1 text-[14px] font-bold text-white">2nd</span>
              <span className="text-[15px] font-medium text-[#1B2A4A]">Second Place</span>
            </div>
            <span className="text-[24px] font-bold text-[#1B2A4A]">$50</span>
          </div>
        </div>
      </div>

      {/* Age 13 & Under */}
      <div className="overflow-hidden rounded-[8px] border border-[#D4D4D4]">
        <div className="bg-[#1B2A4A] px-6 py-3">
          <h3 className="text-center text-[16px] font-semibold uppercase tracking-[0.5px] text-white">
            Age 13 &amp; Under
          </h3>
        </div>
        <div className="divide-y divide-[#D4D4D4]">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="rounded-[4px] bg-[#CC0000] px-3 py-1 text-[14px] font-bold text-white">1st</span>
              <span className="text-[15px] font-medium text-[#1B2A4A]">First Place</span>
            </div>
            <span className="text-[24px] font-bold text-[#1B2A4A]">$50</span>
          </div>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="rounded-[4px] bg-[#6B7280] px-3 py-1 text-[14px] font-bold text-white">2nd</span>
              <span className="text-[15px] font-medium text-[#1B2A4A]">Second Place</span>
            </div>
            <span className="text-[24px] font-bold text-[#1B2A4A]">$25</span>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="lg:col-span-2">
        <p className="text-center text-[13px] italic text-[#6B7280]">
          *Two winners per group with as many as 7 total groups
        </p>
      </div>

      {/* Point System */}
      <div className="lg:col-span-2">
        <div className="rounded-[8px] border border-[#D4D4D4] p-6">
          <h3 className="text-[18px] font-semibold text-[#1B2A4A]">Point System</h3>
          <p className="mt-3 text-[15px] leading-[1.5] text-[#6B7280]">
            Play more to get a chance to compete in the <strong className="text-[#1B2A4A]">Year-End Finals</strong>.
            Points are accumulated throughout the season based on match wins and placement.
            Top point earners qualify for the championship round.
          </p>
        </div>
      </div>
    </div>
  );
}

function FormatTab() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Round Robin explanation */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#1B2A4A]">Round Robin</h3>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              A group of <strong>5-6 players</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              All matches are <strong>best-of-five</strong> games to 11
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
            <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">
              No single elimination
            </span>
          </li>
        </ul>
      </div>

      {/* Visual — round-robin bracket grid */}
      <div className="flex items-center justify-center">
        <div>
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="w-10 p-0" />
                {["P1", "P2", "P3", "P4", "P5"].map((p) => (
                  <th key={p} className="w-10 pb-2 text-center text-[12px] font-semibold text-[#1B2A4A]">
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["P1", "P2", "P3", "P4", "P5"].map((row, ri) => (
                <tr key={row}>
                  <td className="pr-2 text-right text-[12px] font-semibold text-[#1B2A4A]">{row}</td>
                  {[0, 1, 2, 3, 4].map((ci) => (
                    <td key={ci} className="h-10 w-10 border border-[#D4D4D4] text-center">
                      {ri === ci ? (
                        <div className="flex h-full w-full items-center justify-center bg-[#1B2A4A]">
                          <span className="text-[10px] text-white/40">&mdash;</span>
                        </div>
                      ) : (
                        <span className="text-[13px] font-medium text-[#CC0000]">
                          {ri < ci ? "vs" : "vs"}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-center text-[12px] font-medium text-[#6B7280]">
            Every player faces every other player
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="lg:col-span-2">
        <p className="text-[13px] italic leading-[1.5] text-[#6B7280]">
          *California Table Tennis reserves the right to modify or amend any and all league rules as
          necessary to ensure the continued growth and development of youth table tennis in a fair and
          balanced manner. All changes will be made with the best interests of the players and the
          promotion of a positive and harmonious environment.
        </p>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Where can I view the player list?",
    answer: "The complete player list can be viewed on omnipong.com.",
  },
  {
    question: "What happens if I arrive late?",
    answer: "A late arrival may result in a default of the first round.",
  },
  {
    question: "What are the basic rules?",
    answer: "Please don't wear white shirts, spike shoes, and be prepared to play!",
  },
  {
    question: "Who do I contact if I have other questions not listed?",
    answer: "Please call us at 626-765-7772 or email us at info@californiatabletennis.com.",
  },
];

function FAQTab() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="flex gap-5 rounded-[8px] border border-[#D4D4D4] p-6">
          <span className="font-heading text-[28px] font-bold leading-none text-[#CC0000]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[16px] font-semibold text-[#1B2A4A]">{faq.question}</h3>
            <p className="mt-1 text-[15px] leading-[1.4] text-[#6B7280]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const tabComponents = [RegistrationTab, PrizesTab, FormatTab, FAQTab];

export default function LeaguePage() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveTabContent = tabComponents[activeTab];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/about_group.jpg')", backgroundPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="relative text-center">
          {/* Date block */}
          <div className="mx-auto mb-6 inline-block rounded-[4px] border-2 border-white/60 px-6 py-3">
            <p className="font-heading text-[32px] font-bold leading-none text-white">4</p>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-[2px] text-white/80">MAY</p>
            <p className="mt-1 text-[12px] font-medium text-white/60">2025</p>
          </div>
          <h1 className="font-heading text-[48px] font-medium uppercase tracking-[2px] text-white">
            CTT Monthly League
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#CC0000]" />
          <p className="mt-4 text-[18px] font-semibold uppercase tracking-[2px] text-[#CC0000]">
            Prizes + Experience
          </p>
          <Link
            href="#"
            className="mt-6 inline-block rounded-[4px] bg-[#CC0000] px-8 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#A30000]"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* ═══════════ INFO BAR ═══════════ */}
      <section className="border-b border-[#D4D4D4] bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-[#D4D4D4] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-5 text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">Location</p>
            <p className="mt-1 text-[15px] text-[#1B2A4A]">2727 Stingle Ave #10</p>
            <p className="text-[15px] text-[#6B7280]">Rosemead, CA 91770</p>
          </div>
          <div className="px-6 py-5 text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">Schedule</p>
            <p className="mt-1 text-[15px] text-[#1B2A4A]">
              First <strong>Sunday</strong> every other month
            </p>
            <p className="text-[15px] text-[#6B7280]">Upcoming: May 4th</p>
          </div>
          <div className="px-6 py-5 text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">Point System</p>
            <p className="mt-1 text-[15px] text-[#1B2A4A]">Play more to compete in the</p>
            <p className="text-[15px] font-semibold text-[#1B2A4A]">Year-End Finals</p>
          </div>
        </div>
      </section>

      {/* ═══════════ OBJECTIVE ═══════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[8px] border border-[#D4D4D4]">
              <img
                src="/about2.jpg"
                alt="Young player at CTT League"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
                Goals
              </p>
              <h2 className="mt-2 font-heading text-[32px] font-medium text-[#1B2A4A]">
                Objective
              </h2>
              <p className="mt-4 text-[16px] leading-[1.5] text-[#6B7280]">
                The CTT League aims to provide a platform where table tennis players with
                similar skill levels can compete in a tournament environment. Instead of
                playing a few matches and waiting hours until your next game, the round-robin
                format allows players to play non-stop. Providing an excellent and fair method
                for those who seek to gauge their aptitude, focus on progress, and win prizes
                along the way!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TABBED EVENT INFO ═══════════ */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-[36px] font-medium text-[#1B2A4A]">
            Event Information
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-12 bg-[#CC0000]" />

          {/* Tabs */}
          <div className="mt-10 flex justify-center border-b border-[#D4D4D4]">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-[15px] font-semibold transition-colors ${
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
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-10">
            <ActiveTabContent />
          </div>
        </div>
      </section>

      {/* ═══════════ BECOME A CHAMPION CTA ═══════════ */}
      <section className="relative flex min-h-[240px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about_group.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="relative text-center">
          <h2 className="font-heading text-[40px] font-medium uppercase tracking-[2px] text-white">
            Become a Champion
          </h2>
          <Link
            href="#"
            className="mt-6 inline-block rounded-[4px] bg-[#CC0000] px-8 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#A30000]"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
