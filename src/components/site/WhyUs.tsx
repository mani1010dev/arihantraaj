import { motion } from "motion/react";
import { Atom, GraduationCap, Settings2, Sparkles, Globe2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Atom, title: "Scientific Approach", desc: "Measurable methods rooted in physics, geometry and energy science — not superstition." },
  { icon: GraduationCap, title: "Experienced Consultation", desc: "Over 15 years of guiding families, founders and enterprises through pivotal decisions." },
  { icon: Settings2, title: "Customized Solutions", desc: "No two charts or spaces are alike. Every recommendation is tailored to your reality." },
  { icon: Sparkles, title: "Practical Recommendations", desc: "Subtle, non-disruptive remedies that respect your aesthetics, time and budget." },
  { icon: Globe2, title: "Online & Offline Support", desc: "Consult from anywhere in the world or invite us on-site for an in-depth audit." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Arihant Raaj"
          title="A modern consultancy built on timeless wisdom"
          subtitle="We pair rigorous analysis with the ancient sciences of Vastu, Jyotish and Anka — to give you clarity that lasts."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-elegant"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-gold opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-royal text-[color:var(--gold)] shadow-elegant">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}