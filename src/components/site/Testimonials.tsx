import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section id="testimonials" className="relative bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Testimonials" title="Trusted by founders, families and seekers" subtitle="A few words from clients whose lives and businesses we've had the privilege to guide." />
        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }} className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-elegant md:p-14">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
              <div className="flex gap-1 text-[color:var(--gold)]">
                {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mt-6 font-display text-2xl leading-relaxed md:text-3xl">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold font-display text-xl text-[color:var(--navy-deep)]">{t.name.charAt(0)}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={() => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="rounded-full border border-border bg-card p-3 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"><ChevronLeft className="h-4 w-4" /></button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, k) => (
                <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-[color:var(--gold)]" : "w-2 bg-border"}`} />
              ))}
            </div>
            <button onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)} className="rounded-full border border-border bg-card p-3 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
