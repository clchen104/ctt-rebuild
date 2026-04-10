import Link from "next/link";
import ContactForm from "./components/ContactForm";
import SideNav from "./components/SideNav";
import ImageCarousel from "./components/ImageCarousel";

/* ── SVG Icon Components ── */

function MembershipIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="16" width="40" height="28" rx="4" />
      <line x1="12" y1="24" x2="52" y2="24" />
      <circle cx="24" cy="34" r="2" fill="currentColor" />
      <circle cx="32" cy="34" r="2" fill="currentColor" />
      <circle cx="40" cy="34" r="2" fill="currentColor" />
    </svg>
  );
}

function PrivateLessonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="20" r="10" />
      <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" />
    </svg>
  );
}

function GroupLessonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="22" cy="22" r="8" />
      <circle cx="42" cy="22" r="8" />
      <path d="M8 52c0-7.732 6.268-14 14-14" />
      <path d="M36 38c7.732 0 14 6.268 14 14" />
      <circle cx="32" cy="18" r="8" />
      <path d="M20 52c0-6.627 5.373-12 12-12s12 5.373 12 12" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SideNav />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-28 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center">
            <h1 className="animate-fade-in-up font-heading text-[56px] font-medium leading-[0.90] text-white sm:text-[72px]">
              Master It.
            </h1>
            <p className="animate-fade-in-up-delay mx-auto mt-8 max-w-lg text-[20px] font-normal leading-[1.20] text-white/80">
              Quickly improve your table tennis skills and learn from the best
              instructors today with our personalized one-on-one private lesson.
              Available to all ages.
            </p>
            <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/classes"
                className="rounded-[4px] bg-[#CC0000] px-6 py-3 text-center text-[16px] font-semibold text-white transition-colors hover:bg-[#A30000]"
              >
                Book Private Lessons
              </Link>
              <Link
                href="/classes"
                className="rounded-[4px] bg-[#CC0000] px-6 py-3 text-center text-[16px] font-semibold text-white transition-colors hover:bg-[#A30000]"
              >
                Book Group Lesson
              </Link>
            </div>
            <div className="animate-fade-in-up-delay-2 mt-4">
              <Link
                href="#contact"
                className="inline-block rounded-[4px] border border-white/60 px-6 py-3 text-center text-[16px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OPENING HOURS ═══════════ */}
      <section id="hours" className="border-b border-[#D4D4D4] bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <div className="rounded-[4px] bg-[#1B2A4A] px-8 py-3 text-white">
            <span className="font-heading text-[14px] font-semibold uppercase tracking-[0.5px]">Opening Hours</span>
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-[#6B7280]">Mon - Fri:</span>
              <span className="font-heading text-[28px] font-medium text-[#1B2A4A]">
                9<sup className="text-[10px]">AM</sup>
              </span>
              <span className="text-[20px] text-[#D4D4D4]">&mdash;</span>
              <span className="font-heading text-[28px] font-medium text-[#1B2A4A]">
                9<sup className="text-[10px]">PM</sup>
              </span>
            </div>
            <div className="hidden h-10 w-px bg-[#D4D4D4] sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-[#6B7280]">Sat - Sun:</span>
              <span className="font-heading text-[28px] font-medium text-[#1B2A4A]">
                9<sup className="text-[10px]">AM</sup>
              </span>
              <span className="text-[20px] text-[#D4D4D4]">&mdash;</span>
              <span className="font-heading text-[28px] font-medium text-[#1B2A4A]">
                6<sup className="text-[10px]">PM</sup>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section id="mission" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
                Our Mission
              </p>
              <h2 className="mt-4 text-[24px] font-normal leading-[1.4] text-[#1B2A4A]">
                Develop and nurture young talents throughout the country and
                provide an inclusive and world-class facility to all.
              </h2>
            </div>
            <div className="overflow-hidden rounded-[8px] border border-[#D4D4D4]">
              <img
                src="/mission.jpg"
                alt="California Table Tennis facility"
                className="aspect-[2/1] w-full object-cover object-[center_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHO WE ARE ═══════════ */}
      <section id="about" className="bg-[#F5F5F5] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image carousel */}
            <div className="relative">
              <ImageCarousel
                images={["/about.jpg", "/about2.jpg", "/about3.jpg", "/about_group.jpg"]}
              />
            </div>

            {/* Text content */}
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
                Who We Are
              </p>
              <h2 className="mt-3 font-heading text-[36px] font-medium leading-tight text-[#1B2A4A]">
                World Class Table Tennis Experience in the LA Area
              </h2>
              <p className="mt-4 text-[16px] leading-[1.25] text-[#6B7280]">
                Led by Former World Champion Gao Jun
              </p>
              <ul className="mt-6 space-y-3">
                {["World Class Facility", "Professional Coaches", "Enthusiastic Members"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] text-[#1B2A4A]">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-[#CC0000]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-[4px] border border-[#CC0000] px-6 py-2.5 text-[14px] font-semibold text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR SERVICES ═══════════ */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
                What We Offer
              </p>
              <h2 className="mt-2 font-heading text-[36px] font-medium text-[#1B2A4A]">
                Our Services
              </h2>
            </div>
            <p className="max-w-md text-[16px] leading-[1.4] text-[#6B7280] lg:text-right">
              From competitive training to casual play, we offer programs for
              every skill level and age group.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                Icon: MembershipIcon,
                title: "MEMBERSHIP",
                description:
                  "Become a member and enjoy the sport in the state-of-the-art facility year-round!",
                href: "/membership",
              },
              {
                Icon: PrivateLessonIcon,
                title: "PRIVATE LESSONS",
                description:
                  "1 on 1 Lesson with the most qualified table tennis instructor in the LA area!",
                href: "/classes",
              },
              {
                Icon: GroupLessonIcon,
                title: "GROUP LESSONS",
                description:
                  "Small group format with kids from 5 to 15 years old, gain life-long values while having fun!",
                href: "/classes",
              },
            ].map((service) => (
              <div key={service.title} className="rounded-[8px] border border-[#D4D4D4] bg-white p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#1B2A4A] text-[#1B2A4A]">
                  <service.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-[14px] font-semibold uppercase tracking-[0.5px] text-[#1B2A4A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-block rounded-[4px] border border-[#CC0000] px-5 py-2 text-[14px] font-semibold text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="bg-[#1B2A4A]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "9+", label: "Years" },
            { value: "10+", label: "State of the Art Tables" },
            { value: "8+", label: "Professional Coaches" },
            { value: "8+", label: "National Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-[36px] font-medium text-white">
                {stat.value}
              </div>
              <div className="text-[13px] font-normal text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="bg-[#F5F5F5] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Left side */}
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
                Questions?
              </p>
              <h2 className="mt-3 font-heading text-[48px] font-medium leading-[1.04] text-[#1B2A4A]">
                We&apos;d love to
                <br />
                hear from you
              </h2>
              <p className="mt-4 text-[16px] leading-[1.25] text-[#6B7280]">
                We&apos;re here to answer any questions you might have!
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Programs", "Appointments", "Membership", "Pro Shop", "Suggestions", "And More..."].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-[20px] border border-[#D4D4D4] px-4 py-1 text-[14px] text-[#6B7280]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="mt-8 border-l-4 border-[#CC0000] pl-4">
                <p className="text-[16px] font-semibold text-[#1B2A4A]">
                  Prefer to chat?
                </p>
                <p className="mt-1 text-[14px] text-[#6B7280]">Call 626-765-7772</p>
              </div>
            </div>

            {/* Right side — contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
