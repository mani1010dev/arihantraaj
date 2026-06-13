import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(10, "Tell us a bit more").max(800),
});
type FormData = z.infer<typeof schema>;

const PHONE = "+919999999999";
const EMAIL = "consult@arihantraaj.com";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    toast.success("Request received. We'll be in touch within 24 hours.");
    reset();
    const text = `Namaste, I'd like a ${data.service} consultation.%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0A%0A${data.message}`;
    window.open(`https://wa.me/${PHONE.replace(/\D/g, "")}?text=${text}`, "_blank");
  };
  return (
    <section id="contact" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Contact" title="Begin your consultation" subtitle="Share a few details and we'll personally reach out within one business day." />
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="rounded-2xl bg-gradient-royal p-8 text-white shadow-elegant">
              <h3 className="font-display text-2xl">Direct lines</h3>
              <p className="mt-2 text-sm text-white/70">Prefer a quick chat? Reach out instantly.</p>
              <div className="mt-6 space-y-4 text-sm">
                <Info icon={<Phone className="h-4 w-4" />} label="Phone" value={PHONE} />
                <Info icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL} />
                <Info icon={<MapPin className="h-4 w-4" />} label="Studio" value="Mumbai, India" />
                <Info icon={<Clock className="h-4 w-4" />} label="Hours" value="Mon – Sat · 10 AM – 7 PM" />
              </div>
              <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] shadow-gold hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe title="Studio location" src="https://www.google.com/maps?q=Mumbai&output=embed" className="h-64 w-full" loading="lazy" />
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:col-span-3" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" error={errors.name?.message}><Input {...register("name")} placeholder="Your name" className="h-12" /></Field>
              <Field label="Email" error={errors.email?.message}><Input type="email" {...register("email")} placeholder="you@example.com" className="h-12" /></Field>
              <Field label="Phone" error={errors.phone?.message}><Input {...register("phone")} placeholder="+91 ..." className="h-12" /></Field>
              <Field label="Service" error={errors.service?.message}>
                <select {...register("service")} className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm" defaultValue="">
                  <option value="" disabled>Choose a service</option>
                  <option>Scientific Vastu</option><option>Astrology Reading</option><option>Numerology</option><option>Business Consultation</option>
                </select>
              </Field>
              <div className="md:col-span-2"><Field label="How can we help?" error={errors.message?.message}><Textarea {...register("message")} rows={5} placeholder="Share your goals, concerns or questions..." /></Field></div>
            </div>
            <Button type="submit" disabled={isSubmitting} size="lg" className="mt-6 w-full bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold hover:opacity-90">
              {isSubmitting ? "Sending..." : submitted ? "Sent — book another?" : "Request Consultation"} <Send className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">By submitting you agree to be contacted about your inquiry.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (<div><Label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">{label}</Label>{children}{error && <p className="mt-1 text-xs text-destructive">{error}</p>}</div>);
}
function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (<div className="flex items-start gap-3"><div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[color:var(--gold)]">{icon}</div><div><div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">{label}</div><div className="text-sm">{value}</div></div></div>);
}
