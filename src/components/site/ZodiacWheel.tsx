import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ZODIAC } from "@/lib/site-data";

export function ZodiacWheel() {
  const [active, setActive] = useState(4);
  const sign = ZODIAC[active];

  return (
    <section id="astrology" className="relative overflow-hidden bg-gradient-royal py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Astrology"
          title="The zodiac, decoded"
          subtitle="Hover or tap any sign to reveal its element, dates and core archetype."
          light
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-[color:var(--gold)]/30" />
            <div className="absolute inset-10 rounded-full border border-[color:var(--gold)]/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-7xl text-gold">{sign.symbol}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70">{sign.name}</div>
              </div>
            </div>
            {ZODIAC.map((z, i) => {
              const angle = (i * 360) / ZODIAC.length - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 44;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              const isActive = i === active;
              return (
                <button
                  key={z.name}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-2xl transition-all ${
                    isActive
                      ? "scale-125 bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold"
                      : "bg-white/10 text-white/90 hover:bg-white/20"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={z.name}
                >
                  {z.symbol}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={sign.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="glass-dark rounded-2xl p-8"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl text-gold">{sign.symbol}</span>
                <div>
                  <h3 className="font-display text-3xl">{sign.name}</h3>
                  <p className="text-sm text-white/70">{sign.dates}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">Element</div>
                  <div className="mt-1 text-base">{sign.element}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">Archetype</div>
                  <div className="mt-1 text-base">{sign.trait.split(",")[0]}</div>
                </div>
              </div>
              <p className="mt-6 text-white/80">{sign.trait}</p>
              <p className="mt-3 text-sm italic text-white/55">Today's preview: a steady day to revisit long-postponed decisions and align your intentions.</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}