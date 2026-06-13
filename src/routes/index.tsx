import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { VastuCompass } from "@/components/site/VastuCompass";
import { ZodiacWheel } from "@/components/site/ZodiacWheel";
import { Numerology } from "@/components/site/Numerology";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { BlogPreview } from "@/components/site/BlogPreview";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arihant Raaj — Scientific Vastu, Astrology & Numerology" },
      { name: "description", content: "Personalised Vastu, Astrology and Numerology consultations to bring harmony, prosperity and success to your life and business." },
      { property: "og:title", content: "Arihant Raaj — Where Ancient Wisdom Meets Scientific Analysis" },
      { property: "og:description", content: "Premium consultancy in Vastu, Astrology and Numerology." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <VastuCompass />
        <ZodiacWheel />
        <Numerology />
        <Stats />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
