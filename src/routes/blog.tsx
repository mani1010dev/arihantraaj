import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { POSTS } from "@/lib/site-data";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Arihant Raaj" },
      { name: "description", content: "Insights and guides on Vastu, Astrology and Numerology from Arihant Raaj." },
      { property: "og:title", content: "Journal — Arihant Raaj" },
      { property: "og:description", content: "Vastu Tips, Astrology Insights, Numerology Guides and Success Stories." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const CATEGORIES = ["All", "Vastu Tips", "Astrology Insights", "Numerology Guides", "Success Stories"] as const;

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = useMemo(() => POSTS.filter((p) => (cat === "All" || p.category === cat) && (q === "" || (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase()))), [q, cat]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative bg-gradient-royal pb-16 pt-32 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading eyebrow="Journal" title="Wisdom, written for the modern reader" subtitle="Curated essays and practical guides on Vastu, Astrology and Numerology." light />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="h-12 pl-10" maxLength={80} />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-all ${cat === c ? "border-[color:var(--gold)] bg-gradient-gold text-[color:var(--navy-deep)]" : "border-border bg-card text-muted-foreground hover:border-[color:var(--gold)]/50 hover:text-foreground"}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.article key={p.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 6) * 0.05 }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gradient-royal">
                  <div className="flex h-full items-center justify-center font-display text-6xl text-[color:var(--gold)] opacity-70 transition-transform duration-700 group-hover:scale-110">{p.category[0]}</div>
                </div>
                <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-widest text-[color:var(--gold-deep)]">
                  <span>{p.category}</span><span>·</span><span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </motion.article>
            ))}
            {filtered.length === 0 && <p className="col-span-full py-12 text-center text-muted-foreground">No articles match your search.</p>}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
