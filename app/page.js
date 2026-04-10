import Link from "next/link";
import ContactForm from "./components/ContactForm";

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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden">
        {/* Background — replace with your own gym photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/90 via-[#1a2744]/70 to-[#1a2744]/40" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="animate-fade-in-up font-heading text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
              Master It.
            </h1>
            <p className="animate-fade-in-up-delay mt-6 max-w-lg text-lg leading-relaxed text-gray-200">
              Quickly improve your table tennis skills and learn from the best
              instructors today with our personalized one-on-one private lesson.
              Available to all ages.
            </p>
            <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/classes"
                className="rounded-md bg-red-600 px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-colors hover:bg-red-700"
              >
                Book Private Lessons
              </Link>
              <Link
                href="/classes"
                className="rounded-md bg-red-600 px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-colors hover:bg-red-700"
              >
                Book Group Lesson
              </Link>
            </div>
            <div className="animate-fade-in-up-delay-2 mt-5">
              <Link
                href="#contact"
                className="inline-block rounded-md border-2 border-white/80 px-7 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Side page dots */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
          {["Hours", "Mission", "About US", "Services", "Footer"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              {i === 0 && <span className="text-xs font-medium text-white">{label}</span>}
              <div
                className={`h-2.5 w-2.5 rounded-full border border-white/60 ${i === 0 ? "bg-red-500" : "bg-transparent"}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ OPENING HOURS ═══════════ */}
      <section className="bg-white shadow-md">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 rounded-sm bg-green-500 px-8 py-3 text-white">
            <span className="font-heading text-lg font-bold">Opening Hours</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-8 sm:justify-start">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Mon - Fri:</span>
              <span className="font-heading text-3xl font-bold text-gray-800">
                9<sup className="text-xs">AM</sup>
              </span>
              <span className="text-xl text-gray-400">—</span>
              <span className="font-heading text-3xl font-bold text-gray-800">
                9<sup className="text-xs">PM</sup>
              </span>
            </div>
            <div className="hidden h-10 w-px bg-gray-300 sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sat - Sun:</span>
              <span className="font-heading text-3xl font-bold text-gray-800">
                9<sup className="text-xs">AM</sup>
              </span>
              <span className="text-xl text-gray-400">—</span>
              <span className="font-heading text-3xl font-bold text-gray-800">
                6<sup className="text-xs">PM</sup>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section id="mission" className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-red-600">
              Our Mission
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-snug text-gray-900 sm:text-4xl lg:text-5xl">
              Develop and nurture young talents throughout the country and
              provide an inclusive and world-class facility to all.
            </h2>
          </div>
        </div>
        {/* Large background text */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-heading text-[12rem] font-black uppercase leading-none tracking-tight text-gray-100 sm:text-[16rem]">
          MISSION
        </div>
      </section>

      {/* ═══════════ WHO WE ARE ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image area with decorative circle */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full border-4 border-yellow-400" />
              <div className="relative overflow-hidden rounded-sm shadow-lg">
                {/* Replace with your own photos */}
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80')",
                  }}
                />
              </div>
            </div>

            {/* Text content */}
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-red-600">
                Who We Are
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl">
                World Class Table Tennis Experience in the LA Area
              </h2>
              <p className="mt-4 text-base text-gray-600">
                Led by Former World Champion Gao Jun
              </p>
              <ul className="mt-6 space-y-3">
                {["World Class Facility", "Professional Coaches", "Enthusiast Members"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-md border-2 border-red-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-red-600 transition-colors hover:bg-red-600 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR SERVICES ═══════════ */}
      <section id="services" className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-red-600">
            What We Offer
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold italic text-gray-900 sm:text-4xl">
            Our Services
          </h2>

          <div className="mt-16 grid gap-12 sm:grid-cols-3">
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
              <div key={service.title} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600">
                  <service.Icon className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-widest text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-block rounded-md border-2 border-red-600 px-5 py-2 text-xs font-semibold tracking-wider text-red-600 transition-colors hover:bg-red-600 hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Large background text */}
        <div className="pointer-events-none absolute bottom-0 right-0 select-none font-heading text-[10rem] font-black uppercase leading-none tracking-tight text-gray-100 sm:text-[14rem]">
          SERVICES
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="bg-[#1a1a1a]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "9+", label: "years" },
            { value: "10+", label: "State of the Art Tables" },
            { value: "8+", label: "Professional Coaches" },
            { value: "8+", label: "National Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-5xl font-extrabold italic text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Left side */}
            <div>
              <p className="font-heading text-2xl font-bold italic text-red-600">
                Questions?
              </p>
              <h2 className="mt-2 font-heading text-4xl font-extrabold text-gray-900 sm:text-5xl">
                We&apos;d love to
                <br />
                hear from you
              </h2>
              <p className="mt-4 text-base text-gray-600">
                We&apos;re here to answer any questions you might have!
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
                {["Programs", "Appointments", "Membership", "Pro Shop", "Suggestions", "And More...."].map(
                  (tag) => (
                    <span key={tag}>{tag}</span>
                  )
                )}
              </div>
              <div className="mt-8 border-l-4 border-red-600 pl-4">
                <p className="font-heading text-sm font-bold text-gray-900">
                  Prefer to chat?
                </p>
                <p className="mt-1 text-sm text-gray-600">Call 626-765-7772</p>
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
