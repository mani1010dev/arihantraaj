import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { POSTS } from "@/lib/site-data";

export function BlogPreview() {
  const featured = POSTS.slice(0, 3);
  return (
    <section id="blog" className="relative bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Journal" title="Wisdom, written for the modern reader" align="left" />
          <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--gold-deep)] hover:text-[color:var(--gold)]">
            View all articles <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gradient-royal">
                <div className="flex h-full items-center justify-center font-display text-6xl text-[color:var(--gold)] opacity-70 transition-transform duration-700 group-hover:scale-110">{p.category[0]}</div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-[color:var(--gold-deep)]">
                <span>{p.category}</span><span>·</span><span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mt-3 font-display text-xl leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
