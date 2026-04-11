"use client";

import { useState, useRef, useCallback } from "react";

const benefits = [
  {
    title: "Discounted",
    description: "Fees on private lessons with all coaches and group lessons",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="14" width="48" height="36" rx="4" />
        <line x1="8" y1="24" x2="56" y2="24" />
        <path d="M20 34h8M20 40h12" strokeLinecap="round" />
        <circle cx="46" cy="37" r="6" />
        <path d="M43 34l6 6M49 34l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Unlimited",
    description: "Access to the club during opening hours",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="22" r="10" />
        <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" />
      </svg>
    ),
  },
  {
    title: "Discounted",
    description: "Entry fee to our weekly tournaments when held",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 16h24v6a12 12 0 01-24 0v-6z" />
        <line x1="32" y1="34" x2="32" y2="42" />
        <path d="M24 42h16" strokeLinecap="round" />
        <path d="M20 48h24" strokeLinecap="round" />
        <path d="M44 18c4 0 6 2 6 6s-2 6-6 6" />
        <path d="M20 18c-4 0-6 2-6 6s2 6 6 6" />
      </svg>
    ),
  },
];

const plans = [
  {
    badge: "Between 4 and 7",
    badgeColor: "bg-[#CC0000]",
    yearlyPrice: "150",
    yearlyLabel: "",
    monthlyPrice: null,
    features: [
      { bold: "Unlimited", text: "access to the club (opening hours)" },
      { bold: "Contact CTT", text: "to sign up for family plan" },
    ],
    links: [
      { label: "Join Now – $150", href: "https://ctt.gymmasteronline.com/portal/signup/details/d0f2b1c70b1db636c3c43d674d050ed8?companyid=2&session_id=587aa6b4-7938-4799-8c6a-e7d0698cd57c" },
    ],
  },
  {
    badge: "Under 18",
    badgeColor: "bg-[#CC0000]",
    yearlyPrice: "280",
    yearlyLabel: "/year",
    monthlyPrice: "40",
    features: [
      { bold: "Unlimited", text: "access to the club (opening hours)" },
      { bold: "Discounted", text: "fees on private lessons" },
      { bold: "Discounted", text: "entry fee to our weekly tournaments when held" },
    ],
    links: [
      { label: "Annual – $280/yr", href: "https://ctt.gymmasteronline.com/portal/signup/details/eeedbbdfd9bac125a8eb1456b41be9c9?companyid=2&session_id=587aa6b4-7938-4799-8c6a-e7d0698cd57c" },
      { label: "Monthly – $40/mo", href: "https://ctt.gymmasteronline.com/portal/signup/details/c4db30e0370e2799b8c53572ae6a47b7?companyid=2&session_id=587aa6b4-7938-4799-8c6a-e7d0698cd57c" },
    ],
  },
  {
    badge: "Adult",
    badgeColor: "bg-[#CC0000]",
    yearlyPrice: "380",
    yearlyLabel: "/year",
    monthlyPrice: "50",
    featured: true,
    features: [
      { bold: "Unlimited", text: "access to the club (opening hours)" },
      { bold: "Discounted", text: "fees on private lessons" },
      { bold: "Discounted", text: "entry fee to our weekly tournaments when held" },
    ],
    links: [
      { label: "Annual – $380/yr", href: "https://ctt.gymmasteronline.com/portal/signup/details/9c9d4079268244150d9f93766bf7732b?companyid=2&session_id=587aa6b4-7938-4799-8c6a-e7d0698cd57c" },
      { label: "6 Month – $190", href: "https://ctt.gymmasteronline.com/portal/signup/details/8ff5641ddcc38c143a9e7b4e805cfc55?companyid=2&session_id=587aa6b4-7938-4799-8c6a-e7d0698cd57c" },
      { label: "Monthly – $50/mo", href: "https://ctt.gymmasteronline.com/portal/signup/details/633a97cefe2f6abcecfa5710df34976d?companyid=2&session_id=587aa6b4-7938-4799-8c6a-e7d0698cd57c" },
    ],
  },
  {
    badge: "Over 65",
    badgeColor: "bg-[#CC0000]",
    yearlyPrice: "300",
    yearlyLabel: "/year",
    monthlyPrice: "40",
    features: [
      { bold: "Unlimited", text: "access to the club (opening hours)" },
      { bold: "Discounted", text: "fees on private lessons" },
      { bold: "Discounted", text: "entry fee to our weekly tournaments when held" },
    ],
    links: [
      { label: "Annual – $300/yr", href: "https://ctt.gymmasteronline.com/portal/signup/details/6da90d6ad675d9ea8b28532fe047177e?companyid=2&session_id=e13bce29-aff8-43c5-add4-23903153c036" },
      { label: "Monthly – $40/mo", href: "https://ctt.gymmasteronline.com/portal/signup/details/7481cf7ccb37a98d03a9acea170095df?companyid=2&session_id=1c167483-09f9-482a-8c99-4686657ae6e3" },
    ],
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

function PlanCard({ plan, isCenter }) {
  return (
    <div
      className={`flex-shrink-0 w-[calc(33.333%-16px)] overflow-hidden rounded-[8px] border bg-white transition-colors duration-500 ${
        isCenter ? "border-[#CC0000]" : "border-[#D4D4D4]"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center gap-2">
          <span className={`rounded-[4px] ${plan.badgeColor} px-3 py-1 text-[13px] font-bold text-white`}>
            {plan.badge}
          </span>
          <span className="text-[16px] font-medium text-[#1B2A4A]">Plan</span>
        </div>

        <div className="mt-5">
          <div className="flex items-baseline">
            <span className="text-[14px] text-[#6B7280]">$</span>
            <span className="font-heading text-[48px] font-bold leading-none text-[#1B2A4A]">
              {plan.yearlyPrice}
            </span>
            {plan.yearlyLabel && (
              <span className="ml-1 text-[16px] text-[#6B7280]">{plan.yearlyLabel}</span>
            )}
          </div>
          {plan.monthlyPrice && (
            <div className="mt-2 flex items-baseline">
              <span className="text-[14px] text-[#6B7280]">$</span>
              <span className="font-heading text-[28px] font-medium text-[#6B7280]">
                {plan.monthlyPrice}
              </span>
              <span className="ml-1 text-[14px] text-[#6B7280]">/month</span>
            </div>
          )}
        </div>

        <div className="my-5 h-px bg-[#D4D4D4]" />

        <ul className="space-y-3">
          {plan.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
              <span className="text-[14px] leading-[1.4] text-[#6B7280]">
                <strong className="text-[#1B2A4A]">{feat.bold}</strong> {feat.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-2">
          {plan.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[4px] bg-[#CC0000] py-2.5 text-center text-[14px] font-semibold text-white transition-colors hover:bg-[#A30000]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MembershipPage() {
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const n = plans.length; // 4 plans

  // Build extended array: [last] + [...plans] + [first, second, third]
  // so we can show 3 at a time and loop seamlessly
  const extendedPlans = [
    plans[n - 1],
    ...plans,
    plans[0],
    plans[1],
    plans[2],
  ];
  // offset 0 maps to showing plans[0..2], which is extendedPlans[1..3]
  // actual translate position needs +1 to skip the prepended clone
  const translateIndex = offset + 1;

  const slideStep = 100 / 3 + 2; // card width % + gap adjustment

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset((prev) => prev + 1);
  }, [isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset((prev) => prev - 1);
  }, [isTransitioning]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    // If we've gone past the real cards, snap back without animation
    setOffset((prev) => {
      if (prev >= n) {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          // Force reflow
          trackRef.current.offsetHeight;
          requestAnimationFrame(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = "transform 500ms ease-in-out";
            }
          });
        }
        return prev - n;
      }
      if (prev < 0) {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          trackRef.current.offsetHeight;
          requestAnimationFrame(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = "transform 500ms ease-in-out";
            }
          });
        }
        return prev + n;
      }
      return prev;
    });
  }, [n]);

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
            Membership Program
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#CC0000]" />
        </div>
      </section>

      {/* ═══════════ BENEFITS ═══════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-[36px] font-medium text-[#1B2A4A]">
            Benefits
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-12 bg-[#CC0000]" />

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#1B2A4A] text-[#1B2A4A]">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-[14px] font-semibold uppercase tracking-[0.5px] text-[#1B2A4A]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PLANS CAROUSEL ═══════════ */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-[36px] font-medium text-[#1B2A4A]">
            Become a <span className="text-[#CC0000]">Member</span>
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-12 bg-[#CC0000]" />

          <div className="relative mt-12">
            {/* Arrows */}
            <button
              onClick={goPrev}
              className="absolute -left-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4D4D4] bg-white text-[#6B7280] transition-colors hover:border-[#CC0000] hover:text-[#CC0000]"
              aria-label="Previous plans"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L9.832 10l2.938 3.71a.75.75 0 11-1.08 1.04l-3.5-4.25a.75.75 0 010-1.04l3.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>

            <button
              onClick={goNext}
              className="absolute -right-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4D4D4] bg-white text-[#6B7280] transition-colors hover:border-[#CC0000] hover:text-[#CC0000]"
              aria-label="Next plans"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.168 10 7.23 6.29a.75.75 0 111.08-1.04l3.5 4.25a.75.75 0 010 1.04l-3.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Cards track */}
            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${translateIndex * slideStep}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedPlans.map((plan, i) => (
                  <PlanCard
                    key={`${plan.badge}-${i}`}
                    plan={plan}
                    isCenter={i === translateIndex + 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (!isTransitioning) { setIsTransitioning(true); setOffset(i); } }}
                className={`h-2 rounded-full transition-all ${
                  ((offset % n) + n) % n === i ? "w-6 bg-[#CC0000]" : "w-2 bg-[#D4D4D4]"
                }`}
                aria-label={`View plan ${plans[i].badge}`}
              />
            ))}
          </div>

          {/* Family discount note */}
          <div className="mt-8 flex items-center gap-4 px-2">
            <span className="flex-shrink-0 rounded-full bg-[#CC0000] px-4 py-1 text-[13px] font-semibold text-white">
              Family Discount
            </span>
            <p className="text-[14px] text-[#6B7280]">
              <strong className="text-[#1B2A4A]">10% off</strong> for 2 members &middot;{" "}
              <strong className="text-[#1B2A4A]">15% off</strong> for 3+ members from the same household &middot;{" "}
              Contact CTT to sign up
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
