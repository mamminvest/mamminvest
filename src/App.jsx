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
    <main className="min-h-screen bg-[#0d0d0f] text-[#f4efe6]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0d0d0f]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="font-serif text-2xl tracking-tight">
            MAMM Invest
          </a>
          <nav className="hidden items-center gap-9 text-sm text-white/60 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#focus" className="transition hover:text-white">Focus</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 18%, rgba(90,110,95,0.18), transparent 28%), radial-gradient(circle at 18% 72%, rgba(120,95,60,0.10), transparent 36%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02), transparent 55%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="mb-8 text-xs uppercase tracking-[0.36em] text-white/45">
              Backing exceptional founders
            </p>
            <h1 className="font-serif text-[4.2rem] leading-[0.95] tracking-[-0.055em] md:text-[8.5rem]">
              Long-term capital. Active ownership.
            </h1>
            <p className="mt-10 max-w-2xl text-xl leading-8 text-white/70 md:text-2xl md:leading-10">
              MAMM Invest is focused on backing ambitious founders, disruptive ideas and long-term value creation.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#161616] px-6 py-28 text-[#f5f2ec] md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/40">About</p>
            <h2 className="mt-6 max-w-md font-serif text-5xl leading-tight tracking-[-0.035em] md:text-6xl">
              Investing with patience, experience and a deep respect for entrepreneurship.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-8 text-white/68 md:text-xl md:leading-9">
            <p>
              MAMM Invest invests in businesses with disruptive ideas, ambitious founders and the potential to reshape established markets.
            </p>
            <p>
              We are particularly drawn to ambitious founders, disruptive ideas and technology-enabled business models where artificial intelligence is becoming a meaningful strategic advantage.
            </p>
            <p>
              Beyond capital, we invest in people — backing entrepreneurs with conviction, vision and the ambition to build exceptional companies.
            </p>
          </div>
        </div>
      </section>

      <section id="focus" className="border-t border-white/10 bg-[#111114] px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/40">Focus</p>
            <h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.035em] md:text-6xl">
              Where conviction, technology and entrepreneurship intersect.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {focusItems.map((item) => (
              <div key={item} className="flex items-center justify-between gap-8 py-7">
                <p className="text-xl text-white/78">{item}</p>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white/35" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#0d0d0f] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/40">Contact</p>
            <h2 className="mt-6 font-serif text-5xl tracking-[-0.035em]">For selected dialogues.</h2>
          </div>
          <div className="space-y-5 text-lg text-white/70 md:justify-self-end">
            <a href="mailto:contact@mamminvest.com" className="flex items-center gap-3 transition hover:text-white">
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

      <footer className="border-t border-white/10 bg-[#0d0d0f] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MAMM Invest AB</p>
          <p>Backing exceptional founders</p>
        </div>
      </footer>
    </main>
  );
}
