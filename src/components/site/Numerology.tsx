import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const reduce = (n: number): number => {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n).split("").reduce((a, d) => a + Number(d), 0);
  }
  return n;
};

const DESC: Record<number, string> = {
  1: "Natural leader. Independent, original, driven to pioneer.",
  2: "Diplomat and partner. Sensitive, intuitive, gifted with harmony.",
  3: "Creative communicator. Expressive, joyful, charismatic.",
  4: "Builder. Disciplined, loyal, master of structure and craft.",
  5: "Free spirit. Adventurous, magnetic, hungry for experience.",
  6: "Nurturer. Devoted to family, beauty and service.",
  7: "Seeker. Analytical, spiritual, drawn to deeper truth.",
  8: "Power and prosperity. Strategic, ambitious, built for scale.",
  9: "Old soul and humanitarian. Wise, compassionate, generous.",
  11: "Master intuitive. Visionary inspiration with spiritual depth.",
  22: "Master builder. Turns vision into lasting institutions.",
  33: "Master teacher. Compassionate guide of higher consciousness.",
};

const letterVal = (ch: string) => {
  const c = ch.toUpperCase().charCodeAt(0) - 64;
  return c >= 1 && c <= 26 ? ((c - 1) % 9) + 1 : 0;
};

export function Numerology() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const result = useMemo(() => {
    const lifePath = /^\d{4}-\d{2}-\d{2}$/.test(dob)
      ? reduce(dob.replace(/-/g, "").split("").reduce((a, d) => a + Number(d), 0))
      : null;
    const letters = name.replace(/[^a-zA-Z]/g, "");
    const personality = letters ? reduce(letters.split("").reduce((a, c) => a + letterVal(c), 0)) : null;
    return { lifePath, personality };
  }, [name, dob]);

  return (
    <section id="numerology" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Numerology"
          title="Discover your numbers in seconds"
          subtitle="Enter your full name and date of birth to reveal your Life Path and Personality numbers."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="space-y-5">
              <div>
                <Label htmlFor="num-name">Full Name</Label>
                <Input id="num-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Arihant Sharma" className="mt-2 h-12" maxLength={80} />
              </div>
              <div>
                <Label htmlFor="num-dob">Date of Birth</Label>
                <Input id="num-dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="mt-2 h-12" />
              </div>
              <p className="text-xs text-muted-foreground">Your information stays in your browser.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-royal p-8 text-white shadow-elegant"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-gold opacity-30 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <Tile label="Life Path" value={result.lifePath} />
              <Tile label="Personality" value={result.personality} />
            </div>
            <div className="relative mt-6 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              {result.lifePath ? (
                <>
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">Interpretation</div>
                  <p className="mt-2">{DESC[result.lifePath] ?? "A unique vibration. Book a consultation for a personalised reading."}</p>
                </>
              ) : (
                <p className="italic text-white/60">Enter your details to reveal your numbers.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Tile({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">{label}</div>
      <div className="mt-2 font-display text-6xl text-gold">{value ?? "—"}</div>
    </div>
  );
}