export default function InsurancePage() {
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
            Insurance
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#CC0000]" />
        </div>
      </section>

      {/* ═══════════ CONTENT ═══════════ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
            Member Eligibility for Insurance
          </p>
          <h2 className="mt-3 font-heading text-[36px] font-medium leading-tight text-[#1B2A4A]">
            Send us an email with your documents
          </h2>
          <p className="mt-6 text-[16px] leading-[1.5] text-[#6B7280]">
            Please email us your <strong className="text-[#1B2A4A]">Driver&apos;s License</strong> and{" "}
            <strong className="text-[#1B2A4A]">Insurance Card</strong> for us to verify your
            eligibility for the insurance wellness program with the button below.
          </p>

          {/* Email icon */}
          <div className="mt-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4D4D4]">
              <svg className="h-6 w-6 text-[#1B2A4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
            </div>
          </div>

          <a
            href="mailto:info@californiatabletennis.com"
            className="mt-4 inline-block text-[16px] font-medium text-[#1B2A4A] underline transition-colors hover:text-[#CC0000]"
          >
            info@californiatabletennis.com
          </a>
        </div>
      </section>

      {/* ═══════════ MAP + VISIT US ═══════════ */}
      <section className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.5!2d-118.0728!3d34.0635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf3a6f8b0001%3A0x7e6e5c3b8a8b0001!2s2727+Stingle+Ave+%2310%2C+Rosemead%2C+CA+91770!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="California Table Tennis location"
        />

        {/* Visit Us card overlaying the map */}
        <div className="absolute right-4 top-4 hidden w-72 rounded-[8px] border border-[#D4D4D4] bg-white p-6 sm:right-8 sm:top-8 lg:block">
          <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
            Visit Us
          </p>
          <h3 className="mt-2 font-heading text-[20px] font-semibold text-[#1B2A4A]">
            2727 Stingle Ave. #10,
            <br />
            Rosemead, 91770
          </h3>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              <span className="text-[14px] text-[#6B7280]">info@californiatabletennis.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="text-[14px] text-[#6B7280]">626-765-7772</span>
            </div>
          </div>

          <div className="mt-4 border-t border-[#D4D4D4] pt-4">
            <p className="text-[14px] font-semibold text-[#1B2A4A]">Opening Hours</p>
            <div className="mt-2 space-y-1 text-[14px] text-[#6B7280]">
              <p>Mon – Fri | 9 AM – 9 PM</p>
              <p>Sat – Sun | 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
