import { motion } from "motion/react";
import { Compass, Stars, Calculator, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "@/lib/site-data";

const iconMap = { compass: Compass, stars: Stars, calculator: Calculator } as const;

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-royal py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_50%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Three disciplines. One refined practice."
          subtitle="From architectural Vastu to chart readings and numerology, every engagement is bespoke."
          light
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--gold)]/25 bg-white/[0.04] p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:border-[color:var(--gold)]/60 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold">
                    <Icon className="h-7 w-7" />
                  </div>
                  <Link to="/" hash="contact" className="rounded-full border border-white/20 p-2 text-white/70 transition-all group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold)]">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <h3 className="mt-6 font-display text-3xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm text-white/70">{s.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-white/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}