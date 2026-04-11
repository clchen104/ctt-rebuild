import Link from "next/link";

function PlayerCard({ player }) {
  return (
    <div className="group relative overflow-hidden rounded-[8px] border border-[#D4D4D4]">
      <img
        src={player.image}
        alt={player.name}
        className="aspect-[3/4] w-full object-cover"
      />
      {/* Default state — name on right edge */}
      <div className="absolute inset-0 bg-[#1B2A4A]/30 transition-opacity duration-300 group-hover:opacity-0" />
      <div className="absolute bottom-0 right-4 top-0 flex items-center transition-opacity duration-300 group-hover:opacity-0">
        <span
          className="font-heading text-[36px] font-medium text-white"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {player.name}
        </span>
      </div>

      {/* Hover state — full overlay with titles */}
      <div className="absolute inset-0 flex flex-col justify-start overflow-y-auto bg-[#1B2A4A]/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-heading text-[28px] font-bold text-white">
          {player.name}
        </h3>
        <p className="mt-3 text-[16px] font-bold text-white">Major Titles:</p>
        <ul className="mt-2 space-y-1.5">
          {player.titles.map((title, i) => (
            <li key={i} className="text-[13px] leading-[1.4] text-white/90">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/journey.jpg')", backgroundPosition: "center 65%" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="relative text-center">
          <h1 className="font-heading text-[48px] font-medium uppercase tracking-[2px] text-white">
            Our Journey
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#CC0000]" />
        </div>
      </section>

      {/* ═══════════ MISSION / FOUNDER MESSAGE ═══════════ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px] text-[#CC0000]">
                Mission
              </p>
              <h2 className="mt-3 font-heading text-[32px] font-medium leading-tight text-[#1B2A4A]">
                A message from our Founder, Gao Jun
              </h2>
              <p className="mt-4 text-[16px] leading-[1.5] text-[#6B7280]">
                Located in the heart of San Gabriel Valley, California Table
                Tennis has been carrying out its mission for the past nine years
                and many more to come. We have nurtured and trained several
                national team players and hundreds of kids.
              </p>
            </div>
            {/* Video placeholder */}
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[8px] border border-[#D4D4D4] bg-[#1B2A4A]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white">
                <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* 2012 */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[8px] border border-[#D4D4D4]">
              <img
                src="/about_group.jpg"
                alt="Gao Jun Table Tennis Club in 2012"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-[28px] font-medium text-[#CC0000]">
                2012
              </p>
              <h3 className="mt-1 font-heading text-[28px] font-medium text-[#1B2A4A]">
                Gao Jun Table Tennis Club
              </h3>
              <p className="mt-4 text-[16px] leading-[1.5] text-[#6B7280]">
                Started with a couple tables, the Gao Jun Table Tennis Club was
                established in 2012 with the same mission &mdash; To develop and
                nurture young talents throughout the country and provide the best
                table tennis facility to all.
              </p>
            </div>
          </div>

          {/* 2016 */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="font-heading text-[28px] font-medium text-[#CC0000]">
                2016
              </p>
              <h3 className="mt-1 font-heading text-[28px] font-medium text-[#1B2A4A]">
                California Table Tennis Club
              </h3>
              <p className="mt-4 text-[16px] leading-[1.5] text-[#6B7280]">
                A new name and a brand new state-of-the-art facility, California
                Table Tennis Club, opened in 2016, providing our services
                throughout the country with the same vision in mind.
              </p>
            </div>
            <div className="order-1 overflow-hidden rounded-[8px] border border-[#D4D4D4] lg:order-2">
              <img
                src="/mission.jpg"
                alt="California Table Tennis Club facility"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FACILITY ═══════════ */}
      <section id="facility" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[40px] font-medium text-[#1B2A4A]">
            Facility
          </h2>

          {/* Main facility image */}
          <div className="mt-8 overflow-hidden rounded-[8px] border border-[#D4D4D4]">
            <img
              src="/mission.jpg"
              alt="California Table Tennis facility overview"
              className="aspect-[16/7] w-full object-cover object-[center_40%]"
            />
          </div>

          {/* Features bar */}
          <div className="mt-10 flex flex-wrap items-start gap-8">
            <h3 className="font-heading text-[24px] font-medium text-[#1B2A4A]">
              Features
            </h3>
            <div className="h-auto w-px self-stretch bg-[#CC0000]" />
            <div className="grid flex-1 grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {[
                "10 Butterfly Tables",
                "Professional Rubber Flooring",
                "Relaxing Space",
                "High Ceiling and Lighting",
                "Pro Shop",
                "Equipment for All Levels",
              ].map((feature) => (
                <span key={feature} className="text-[15px] font-medium text-[#1B2A4A]">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Feature detail cards */}
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "HAOKANG Flooring",
                description:
                  "Directly imported from China, our flooring material is identical to that used by the Chinese National Table Tennis team and used in the highest competition level.",
                image: "/about3.jpg",
              },
              {
                title: "Butterfly Tables",
                description:
                  "Not all table tennis tables are created equal! At California Table Tennis, we only use ITTF approved top-of-the-line Butterfly tables. Our head coach, Gao Jun is a Butterfly-sponsored player and our operation is also officially sponsored by Butterfly.",
                image: "/about2.jpg",
              },
              {
                title: "Pro Shop",
                description:
                  "Not only do we have a large collection of paddles and equipment, we also contain a Butterfly Pro Shop that sells: paddles, rubbers, balls, table tennis shoes, and general equipment for all level and style.",
                image: "/about.jpg",
              },
            ].map((card) => (
              <div key={card.title}>
                <div className="overflow-hidden rounded-[8px] border border-[#D4D4D4]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <div className="mt-1 h-full w-[3px] flex-shrink-0 self-stretch bg-[#CC0000]" />
                  <div>
                    <h4 className="font-heading text-[18px] font-semibold text-[#1B2A4A]">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.5] text-[#6B7280]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NOTABLE PLAYERS ═══════════ */}
      <section id="players" className="bg-[#F5F5F5] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[40px] font-medium text-[#1B2A4A]">
            Notable Players
          </h2>

          {/* Top row — 3 players */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Erica Wu",
                image: "/about.jpg",
                titles: [
                  "2014 US National & World Team Member",
                  "2013 US World Team Member",
                  "2013 US National Junior Girls' B Team",
                  "2012 US National Championships Women's Doubles Champion",
                  "2012 US Olympic Team Member - Team",
                  "2012 US World & Junior Girls Team Member",
                  "2011 US National Women Doubles Champion",
                  "2011 US National Women Singles Semi-finalist",
                  "2011 Hong Kong Junior and Cadet Open Cadet Doubles Finalist and Cadet Singles Semi-finalist",
                  "2010, 2011 US National Women Team Member",
                  "2009-2012 US National Junior Girls Team Member",
                  "2010-2011 US National Cadet Girls Team Member",
                ],
              },
              {
                name: "Grace Yang",
                image: "/about2.jpg",
                titles: [
                  "2016 US National Girls' Team",
                  "2016 US National Junior Girls Team",
                  "2015 World Junior Championships - Junior Girls Team Bronze Medalist",
                  "2015 North American Junior Girls' Team Champion",
                  "2015 US Girls Junior Team",
                  "2015 US Girls Cadet Team",
                  "2013 US Girls Cadet Team",
                  "2013 US Girls Mini Cadet Team",
                  "2012 US National Cade Girls - Finalist",
                  "2012 US National Mini Cadet Girls - Finalist",
                ],
              },
              {
                name: "Rachel Yang",
                image: "/about3.jpg",
                titles: [
                  "2021 US National Women's Team",
                  "2019 US National Women's single semi-finalist",
                  "2019 US National Junior Girls teams finalist",
                  "2018 ITTF pan America junior - team gold medalist, double gold medalist, mix doubles bronze medalist",
                  "2017 US National 21 & Under Women Single Finalist",
                  "2017 ITTF Argentina Junior Open Bronze Medalist",
                  "2016 US Open U13 Girls Champion",
                  "2016 US National Mini Cadet Girls Single Finalist",
                  "2015 US Open U13 Girls Champion",
                  "2014 US Open U11 Girls Bronze Medalist",
                  "2013 US National U-3700 Doubles Finalist",
                ],
              },
            ].map((player) => (
              <PlayerCard key={player.name} player={player} />
            ))}
          </div>

          {/* Bottom row — 2 players */}
          <div className="mx-auto mt-4 grid max-w-[calc(66.666%+8px)] gap-4 sm:grid-cols-2">
            {[
              {
                name: "Chulong Nie",
                image: "/about_group.jpg",
                titles: [
                  "2022 World Junior Championships (Tunisia): Silver and Bronze Medalist",
                  "WTT Youth Contender (Hungary): Under-17 Bronze Medalist",
                  "2024 Australian Under-17 National Champion: Winner and Best Player Award",
                  "2024 US Open: Under-21 Bronze Medalist",
                  "World Ranking in Under-19: Ranked 89th globally",
                ],
              },
              {
                name: "Crystal Liu",
                image: "/about.jpg",
                titles: [
                  "Winning the 2022 US Open U17 Girls Champion Title",
                  "Winning the Women's Singles Silver Medal in the 2022 Canadian National Championships",
                  "Representing Team Canada in the 2022 World Table Tennis Championships against Olympic Gold Medalist Sun Yingsha",
                  "Reaching the Top 16 in Women's Singles in the 2024 US Open",
                ],
              },
            ].map((player) => (
              <PlayerCard key={player.name} player={player} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
