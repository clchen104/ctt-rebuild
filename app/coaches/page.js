"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const coaches = [
  {
    id: "gao-jun",
    role: "HEAD COACH",
    name: "JUN GAO",
    displayName: "GAO JUN",
    image: "/about.jpg",
    credentials: [
      "#1 ranked USATT Women's player",
      "9 time U.S. Women's Champion",
      "1993 World Champion",
      "US Olympic Team Member (2000, 2004, and 2008)",
      "US Olympic Women's Team Head Coach",
      "US National Women's Team Head Coach",
      "Inducted into the USATT Hall of Fame 2009",
    ],
  },
  {
    id: "cherry",
    role: "COACH",
    name: "CHERRY ZHAO",
    displayName: "CHERRY",
    image: "/about2.jpg",
    credentials: [
      "Graduate of Shanghai University",
      "Won multiple championship in China",
      "One of most effective coaches in Southern California",
      "Head coach for our very own, 2012 Olympian Erica Wu",
    ],
  },
  {
    id: "candy",
    role: "COACH",
    name: "LIYING TANG",
    displayName: "CANDY",
    image: "/about3.jpg",
    credentials: [
      "2014 and 2015 LA Open Women's Single Champion",
      "2013 Berkeley Open Women's Single Champion",
      "2011 China University Championships Team Champion",
      "2010 China Super League Team (East China University of Science and Technology)",
      "2009 China University Championships Team Champion and Doubles Champion",
      "2009 World University Games Team and Women's Single Champion",
      "2002-2007 Shanghai Provence Team",
    ],
  },
  {
    id: "xue-luo",
    role: "COACH",
    name: "XUE LUO",
    displayName: "XUE LUO",
    image: "/about_group.jpg",
    credentials: [
      "Professional table tennis coach",
      "Extensive competitive experience in China",
      "Specializes in youth development and technique refinement",
    ],
  },
  {
    id: "amanda",
    role: "COACH",
    name: "AMANDA MALIK",
    displayName: "AMANDA",
    image: "/about.jpg",
    credentials: [
      "Experienced table tennis coach and player",
      "Passionate about growing the sport in the community",
      "Focused on developing young athletes",
    ],
  },
  {
    id: "sam",
    role: "COACH",
    name: "SAM WEI",
    displayName: "SAM",
    image: "/about2.jpg",
    credentials: [
      "Competitive table tennis player and coach",
      "Years of experience in training athletes of all levels",
      "Dedicated to player development and strategy",
    ],
  },
  {
    id: "hank",
    role: "COACH",
    name: "HANK SUN",
    displayName: "HANK",
    image: "/about3.jpg",
    credentials: [
      "China Super League Team Champion",
      "China Youth Team Champion",
      "Liaoning Youth Team Champion",
      "Served in Liaoning Provincial Teams for many years",
    ],
  },
  {
    id: "udaya",
    role: "COACH",
    name: "UDAYA RANASINGHA",
    displayName: "UDAYA",
    image: "/about_group.jpg",
    credentials: [
      "US National Level Coach",
      "6 times Sri Lanka National Champion",
      "2013-2018 Sri Lanka National Team Member",
      "2015 & 2016 South Asian Junior Champion",
      "2013 - 2018 Participant of World Championships, Asian Games, Commonwealth games",
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

function CoachSection({ coach, index }) {
  const nameRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section id={coach.id} className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className={`grid items-center gap-12 lg:grid-cols-2 ${!isEven ? "direction-rtl" : ""}`}>
          {/* Photo side */}
          <div className={`${!isEven ? "lg:order-1" : ""}`}>
            <div>
              {/* Photo with decorative blocks */}
              <div className="relative">
                {/* Decorative blue block — anchored to bottom of photo */}
                <div className={`absolute ${isEven ? "-bottom-3 -left-3" : "-bottom-3 -right-3"} top-1/3 w-2/3 bg-[#1B2A4A]`} />
                {/* Decorative yellow border */}
                <div className={`absolute ${isEven ? "-right-3 -top-3" : "-left-3 -top-3"} bottom-1/2 w-1/3 border-2 border-yellow-400`} />
                {/* Photo */}
                <div className="relative overflow-hidden rounded-[4px]">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
              {/* Sliding name — fully below */}
              <div
                ref={nameRef}
                className={`mt-4 transition-all duration-700 ease-out ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : isEven
                      ? "-translate-x-12 opacity-0"
                      : "translate-x-12 opacity-0"
                }`}
              >
                <span className="font-heading text-[64px] font-bold leading-none text-[#D4D4D4] sm:text-[80px]">
                  {coach.displayName}
                </span>
              </div>
            </div>
          </div>

          {/* Info side */}
          <div className={`${!isEven ? "lg:order-0" : ""}`}>
            <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
              {coach.role}
            </p>
            <h2 className="mt-1 font-heading text-[32px] font-medium uppercase text-[#1B2A4A]">
              {coach.name}
            </h2>

            <ul className="mt-6 space-y-4">
              {coach.credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7280]" />
                  <span className="text-[15px] leading-[1.4] text-[#1B2A4A]">{cred}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-[4px] border border-[#CC0000] px-10 py-2.5 text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachSideNav({ coaches: coachList }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = 0;
      for (let i = coachList.length - 1; i >= 0; i--) {
        const el = document.getElementById(coachList[i].id);
        if (el && el.offsetTop <= scrollY) {
          current = i;
          break;
        }
      }
      setActiveIndex(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [coachList]);

  const itemHeight = 36;
  const offsetY = -activeIndex * itemHeight;

  return (
    <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
      <div
        className="flex flex-col items-end transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        {coachList.map((coach, i) => {
          const distance = Math.abs(i - activeIndex);
          const isActive = i === activeIndex;
          const scale = isActive ? 1 : Math.max(0.75, 1 - distance * 0.1);
          const opacity = isActive ? 1 : Math.max(0.25, 1 - distance * 0.2);

          return (
            <a
              key={coach.id}
              href={`#${coach.id}`}
              className="group flex items-center gap-2"
              style={{
                height: `${itemHeight}px`,
                transform: `scale(${scale})`,
                opacity,
                transition: "transform 0.5s ease, opacity 0.5s ease",
              }}
            >
              <span
                className={`font-medium transition-all duration-500 ${
                  isActive
                    ? "text-[13px] text-[#1B2A4A]"
                    : "text-[11px] text-[#6B7280] group-hover:text-[#1B2A4A]"
                }`}
              >
                {coach.displayName.split(" ")[0]}
              </span>
              <div
                className={`rounded-full transition-all duration-500 ${
                  isActive
                    ? "h-3 w-3 bg-[#CC0000]"
                    : "h-2 w-2 border border-[#D4D4D4] bg-transparent group-hover:bg-[#CC0000]"
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default function CoachesPage() {
  return (
    <>
      <CoachSideNav coaches={coaches} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/journey.jpg')", backgroundPosition: "center 55%" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="relative text-center">
          <h1 className="font-heading text-[48px] font-medium uppercase tracking-[2px] text-white">
            Coaching Team
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#CC0000]" />
        </div>
      </section>

      {/* ═══════════ COACH SECTIONS ═══════════ */}
      {coaches.map((coach, i) => (
        <CoachSection key={coach.id} coach={coach} index={i} />
      ))}
    </>
  );
}
