import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { DIRECTIONS } from "@/lib/site-data";

export function VastuCompass() {
  const [active, setActive] = useState(0);
  const dir = DIRECTIONS[active];

  return (
    <section id="vastu" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Interactive Vastu"
          title="Explore the eight directions"
          subtitle="Tap any direction on the compass to discover its significance and the remedies we recommend."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <motion.div
              className="absolute inset-0 rounded-full border border-[color:var(--gold)]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-6 rounded-full border border-[color:var(--gold)]/40" />
            <div className="absolute inset-14 rounded-full border border-[color:var(--gold)]/50 bg-gradient-royal shadow-elegant" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-5xl text-gold">{dir.key}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">{dir.name}</div>
              </div>
            </div>
            {DIRECTIONS.map((d, i) => {
              const angle = (i * 360) / DIRECTIONS.length - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 46;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              const isActive = i === active;
              return (
                <button
                  key={d.key}
                  onClick={() => setActive(i)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    isActive
                      ? "scale-110 bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold"
                      : "bg-card text-foreground hover:bg-[color:var(--gold)]/10"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={d.name}
                >
                  {d.key}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={dir.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-elegant"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[color:var(--gold-deep)]">
                <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" /> Direction
              </div>
              <h3 className="mt-3 font-display text-4xl">{dir.name}</h3>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>Deity: <span className="text-foreground">{dir.deity}</span></span>
                <span>•</span>
                <span>Element: <span className="text-foreground">{dir.element}</span></span>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">Significance</div>
                  <p className="mt-1 text-muted-foreground">{dir.significance}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">Recommended Remedy</div>
                  <p className="mt-1 text-muted-foreground">{dir.remedy}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}