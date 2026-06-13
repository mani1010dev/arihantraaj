import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "@/lib/site-data";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-[color:var(--gold)]/20 bg-[color:var(--navy-deep)]/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt="Arihant Raaj" width={44} height={44} className="h-11 w-11 rounded-full bg-white/95 p-1 shadow-gold ring-1 ring-[color:var(--gold)]/40 transition-transform group-hover:scale-105" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold text-white">Arihant Raaj</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--gold)]">Vastu · Astro · Numerology</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} to={l.to} hash={l.hash || undefined} className="text-sm font-medium text-white/85 transition-colors hover:text-[color:var(--gold)]">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold hover:opacity-90 lg:inline-flex">
            <Link to="/" hash="contact"><Sparkles className="mr-1 h-4 w-4" /> Book Consultation</Link>
          </Button>
          <button onClick={() => setOpen((v) => !v)} className="rounded-md p-2 text-white lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-[color:var(--gold)]/20 bg-[color:var(--navy-deep)]/95 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <Link key={l.label} to={l.to} hash={l.hash || undefined} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-[color:var(--gold)]">{l.label}</Link>
              ))}
              <Button asChild className="mt-2 bg-gradient-gold text-[color:var(--navy-deep)]"><Link to="/" hash="contact" onClick={() => setOpen(false)}>Book Consultation</Link></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
