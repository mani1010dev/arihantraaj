import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const QUICK: [string, string, string][] = [["Home", "/", ""], ["About", "/", "about"], ["Blog", "/blog", ""], ["Testimonials", "/", "testimonials"], ["Contact", "/", "contact"]];
const SERV: [string, string, string][] = [["Scientific Vastu", "/", "vastu"], ["Astrology", "/", "astrology"], ["Numerology", "/", "numerology"], ["Business Consultation", "/", "contact"]];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--navy-deep)] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Arihant Raaj" width={48} height={48} className="h-12 w-12 rounded-full bg-white/95 p-1" />
              <div>
                <div className="font-display text-lg">Arihant Raaj</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--gold)]">Vastu · Astro · Numerology</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/65">A modern consultancy bringing scientific clarity to Vastu, Astrology and Numerology — for individuals, families and enterprises.</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((I, k) => (
                <a key={k} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <Col title="Quick Links" links={QUICK} />
          <Col title="Services" links={SERV} />
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.24em] text-[color:var(--gold)]">Studio</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Mumbai, India</li><li>+91 99999 99999</li><li>consult@arihantraaj.com</li><li>Mon – Sat · 10 AM – 7 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} Arihant Raaj. All rights reserved.</p>
          <p>Where ancient wisdom meets scientific analysis.</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: [string, string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-sm uppercase tracking-[0.24em] text-[color:var(--gold)]">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map(([l, to, hash]) => (
          <li key={l}><Link to={to} hash={hash || undefined} className="text-white/70 hover:text-[color:var(--gold)]">{l}</Link></li>
        ))}
      </ul>
    </div>
  );
}
