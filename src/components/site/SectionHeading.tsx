import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.28em] ${light ? "border-[color:var(--gold)]/40 text-[color:var(--gold)]" : "border-[color:var(--gold)]/40 text-[color:var(--gold-deep)]"}`}>
          <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-5 font-display text-3xl leading-tight md:text-5xl ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent" />
    </motion.div>
  );
}