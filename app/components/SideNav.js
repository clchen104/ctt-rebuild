"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Hours", href: "#hours" },
  { label: "Mission", href: "#mission" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export default function SideNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));

    function onScroll() {
      const scrollY = window.scrollY + window.innerHeight / 3;

      let current = 0;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
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
  }, []);

  const itemHeight = 40;
  const offsetY = -activeIndex * itemHeight;

  return (
    <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
      <div
        className="flex flex-col items-end transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        {NAV_ITEMS.map((item, i) => {
          const distance = Math.abs(i - activeIndex);
          const isActive = i === activeIndex;

          const scale = isActive ? 1 : Math.max(0.75, 1 - distance * 0.12);
          const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.25);

          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-2.5"
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
                    ? "text-[14px] text-[#1B2A4A]"
                    : "text-[12px] text-[#6B7280] group-hover:text-[#1B2A4A]"
                }`}
              >
                {item.label}
              </span>
              <div
                className={`rounded-full transition-all duration-500 ${
                  isActive
                    ? "h-3 w-3 bg-[#CC0000]"
                    : "h-2.5 w-2.5 border border-[#D4D4D4] bg-transparent group-hover:bg-[#CC0000]"
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
