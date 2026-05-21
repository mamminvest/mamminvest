import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function MammInvestWebsite() {
  const focusItems = [
    "Disruptive business models with market-changing potential",
    "Founder-led companies with exceptional ambition",
    "AI-enabled businesses and technology-driven transformation",
    "Private growth situations and selective public investments",
    "Markets where structural change creates opportunity",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0d0f] text-[#f4efe6] antialiased">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0d0d0f]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <a
            href="#top"
            className="text-lg tracking-tight text-[#f4efe6] no-underline md:text-2xl"
          >
            MAMM Invest
          </a>

          <nav className="hidden items-center gap-9 text-sm text-white/60 md:flex">
            <a
              href="#about"
              className="text-white/60 no-underline transition hover:text-white"
            >
              About
            </a>
            <a
              href="#focus"
              className="text-white/60 no-underline transition hover:text-white"
            >
              Focus
            </a>
            <a
              href="#contact"
              className="text-white/60 no-underline transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 md:px-10"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 18%, rgba(90,110,95,0.18), transparent 28%), radial-gradient(circle at 18% 72%, rgba(120,95,60,0.10), transparent 36%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02), transparent 55%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="mb-8 text-[0.68rem] uppercase leading-5 tracking-[0.28em] text-white/45 md:text-xs md:tracking-[0.36em]">
              Backing exceptional founders
            </p>

            <h1 className="max-w-[11ch] font-serif text-[3.45rem] leading-[0.92] tracking-[-0.055em] text-[#f4efe6] md:max-w-none md:text-[8.5rem]">
              Long-term capital. Active ownership.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-7 text-white/70 md:mt-10 md:max-w-2xl md:text-2xl md:leading-10">
              MAMM Invest is focused on backing ambitious founders, disruptive
              ideas and long-term value creation.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-white/10 bg-[#161616] px-5 py-20 text-[#f5f2ec] md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/40">
              About
            </p>

            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight tracking-[-0.035em] md:max-w-md md:text-6xl">
              Investing with patience, experience and a deep respect for
              entrepreneurship.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/68 md:text-xl md:leading-9">
            <p>
              MAMM Invest invests in businesses with disruptive ideas,
              ambitious founders and the potential to reshape established
              markets.
            </p>

            <p>
              We are particularly drawn to ambitious founders, disruptive ideas
              and technology-enabled business models where artificial
              intelligence is becoming a meaningful strategic advantage.
            </p>

            <p>
              Beyond capital, we invest in people — backing entrepreneurs with
              conviction, vision and the ambition to build exceptional
              companies.
            </p>
          </div>
        </div>
      </section>

      <section
        id="focus"
        className="border-t border-white/10 bg-[#111114] px-5 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/40">
              Focus
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">
              Where conviction, technology and entrepreneurship intersect.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {focusItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-6 py-6 md:gap-8 md:py-7"
              >
                <p className="text-lg leading-7 text-white/78 md:text-xl">
                  {item}
                </p>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white/35" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[#0d0d0f] px-5 py-20 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr] md:items-end md:gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/40">
              Contact
            </p>

            <h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-5xl">
              For selected dialogues.
            </h2>
          </div>

          <div className="space-y-5 text-lg text-white/70 md:justify-self-end">
            <a
              href="mailto:contact@mamminvest.com"
              className="flex items-center gap-3 text-white/70 no-underline transition hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span>contact@mamminvest.com</span>
            </a>

            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              <span>Stockholm, Sweden</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0d0d0f] px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MAMM Invest AB</p>
          <p>Backing exceptional founders</p>
        </div>
      </footer>
    </main>
  );
}