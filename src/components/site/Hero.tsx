import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CosmicBg } from "./CosmicBg";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[color:var(--navy-deep)] text-white">
      <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.14_0.05_265/0.6)_55%,oklch(0.1_0.05_265)_100%)]" />
      <CosmicBg density={110} />
      <motion.div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 35%, transparent) 0%, transparent 60%)" }} animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 8, repeat: Infinity }} />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 text-center lg:pt-24">
        <motion.img src={logo} alt="Arihant Raaj" width={160} height={160} initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9 }} className="mx-auto h-28 w-28 rounded-full bg-white/95 p-2 shadow-gold ring-1 ring-[color:var(--gold)]/40 lg:h-36 lg:w-36" />
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="mt-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-[color:var(--gold)] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> Where Ancient Wisdom Meets Scientific Analysis
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Your Life with <span className="shimmer-text">Scientific Vastu</span>,<br className="hidden md:block" /> Astrology &amp; Numerology
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="mx-auto mt-6 max-w-2xl text-base text-white/75 md:text-lg">
          Personalised consultations designed to bring harmony, prosperity, success and positive energy into your life and business.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.7 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-gold px-7 text-[color:var(--navy-deep)] shadow-gold hover:opacity-90">
            <Link to="/" hash="contact">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[color:var(--gold)]/60 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-[color:var(--gold)]">
            <Link to="/" hash="numerology">Get Free Assessment</Link>
          </Button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.28em] text-white/55">
          <span>15+ Years Experience</span><span className="hidden h-1 w-1 rounded-full bg-[color:var(--gold)] md:inline-block" /><span>5000+ Consultations</span><span className="hidden h-1 w-1 rounded-full bg-[color:var(--gold)] md:inline-block" /><span>98% Client Satisfaction</span>
        </motion.div>
      </div>
    </section>
  );
}
