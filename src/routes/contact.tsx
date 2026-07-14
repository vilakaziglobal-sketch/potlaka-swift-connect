import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MessageCircle, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact POTLAKA.COM — Request a Proposal or Consultation" },
      { name: "description", content: "Speak to our enterprise team. Request a business proposal, book a consultation or open a business account with POTLAKA.COM." },
      { property: "og:title", content: "Contact POTLAKA.COM" },
      { property: "og:description", content: "Request a proposal, book a consultation or open a business account." },
      { property: "og:url", content: "https://www.potlaka.com/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Contact POTLAKA.COM" },
      { name: "twitter:description", content: "Request a proposal, book a consultation or open a business account." },
    ],
    links: [{ rel: "canonical", href: "https://www.potlaka.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "https://www.potlaka.com/contact",
          about: { "@id": "https://www.potlaka.com/#organization" },
          mainEntity: {
            "@type": "Organization",
            "@id": "https://www.potlaka.com/#organization",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+27113832537",
                contactType: "sales",
                email: "ops@potlaka.com",
                areaServed: "ZA",
                availableLanguage: ["English"],
              },
            ],
          },
        }),
      },
    ],
  }),

});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(2, "Please enter your company").max(120),
  role: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  intent: z.enum(["proposal", "consultation", "account", "general"]),
  volumes: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more about your requirements").max(1500),
});

type FormValues = z.infer<typeof schema>;

const INTENTS: { id: FormValues["intent"]; label: string; desc: string }[] = [
  { id: "proposal", label: "Request a proposal", desc: "Tailored pricing and a service model built for your business" },
  { id: "consultation", label: "Book a consultation", desc: "A 30-minute strategy session with our enterprise team" },
  { id: "account", label: "Open a business account", desc: "Begin onboarding as a POTLAKA enterprise client" },
  { id: "general", label: "General enquiry", desc: "Media, partnerships and careers" },
];

const THROTTLE_MS = 30_000;
const MIN_FILL_MS = 3_000;

function ContactPage() {
  const [intent, setIntent] = useState<FormValues["intent"]>("proposal");
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [spamError, setSpamError] = useState<string | null>(null);
  const [mountedAt] = useState(() => Date.now());

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Honeypot — bots fill hidden fields, humans don't
    if (String(form.get("website") ?? "").trim() !== "") {
      setSpamError("Submission blocked.");
      return;
    }

    // Time-trap — instant submits are almost always bots
    if (Date.now() - mountedAt < MIN_FILL_MS) {
      setSpamError("Please take a moment to complete the form.");
      return;
    }

    // Client throttle — one enquiry per 30s per browser
    try {
      const last = Number(sessionStorage.getItem("potlaka_contact_last") ?? "0");
      if (last && Date.now() - last < THROTTLE_MS) {
        const wait = Math.ceil((THROTTLE_MS - (Date.now() - last)) / 1000);
        setSpamError(`Please wait ${wait}s before sending another enquiry.`);
        return;
      }
    } catch { /* sessionStorage unavailable — skip throttle */ }

    setSpamError(null);
    const values = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      role: String(form.get("role") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      intent,
      volumes: String(form.get("volumes") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      for (const iss of parsed.error.issues) {

        const key = iss.path[0] as keyof FormValues;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const intentLabel = INTENTS.find((i) => i.id === parsed.data.intent)?.label ?? parsed.data.intent;
    const subject = `[${intentLabel}] Enterprise enquiry — ${parsed.data.company}`;
    const bodyLines = [
      `Intent: ${intentLabel}`,
      `Name: ${parsed.data.name}`,
      `Company: ${parsed.data.company}`,
      parsed.data.role ? `Role: ${parsed.data.role}` : "",
      `Email: ${parsed.data.email}`,
      parsed.data.phone ? `Phone: ${parsed.data.phone}` : "",
      parsed.data.volumes ? `Estimated monthly volume: ${parsed.data.volumes}` : "",
      "",
      "Requirements:",
      parsed.data.message,
    ].filter((line) => line !== "");

    const mailto = `mailto:ops@potlaka.com?bcc=${encodeURIComponent("vilakaziglobal@gmail.com")}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Let's talk
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
              Speak with our enterprise team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Tell us what you need to move. We'll engineer a service model
              around your volumes, service levels and customer promise.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-surface-elevated p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-white">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-semibold text-ink">Your email client is opening.</h2>
                <p className="mt-3 max-w-md text-ink-muted">
                  We've pre-filled a message to ops@potlaka.com with your details. Please review and hit send — our enterprise team will reply within one business day.
                </p>
                <a
                  href="mailto:ops@potlaka.com"
                  className="mt-6 text-sm font-semibold text-primary underline"
                >
                  Email didn't open? Send to ops@potlaka.com
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-ink-muted">How can we help?</label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {INTENTS.map((it) => {
                      const active = intent === it.id;
                      return (
                        <button
                          type="button"
                          key={it.id}
                          onClick={() => setIntent(it.id)}
                          className={`rounded-xl border p-4 text-left transition-all ${
                            active
                              ? "border-primary bg-primary/5 ring-1 ring-primary"
                              : "border-border bg-background hover:border-primary/40"
                          }`}
                        >
                          <div className="text-sm font-semibold text-ink">{it.label}</div>
                          <div className="mt-1 text-xs text-ink-muted">{it.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" error={errors.name} required />
                  <Field label="Company" name="company" error={errors.company} required />
                  <Field label="Role / title" name="role" error={errors.role} placeholder="e.g. Head of Operations" />
                  <Field label="Business email" name="email" type="email" error={errors.email} required />
                  <Field label="Phone" name="phone" error={errors.phone} placeholder="+27" />
                  <Field label="Estimated monthly volume" name="volumes" error={errors.volumes} placeholder="e.g. 5,000 deliveries" />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted">Tell us about your requirements</label>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={1500}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Sectors served, service windows, geography and current challenges…"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
                >
                  Send enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-xs text-ink-muted">By submitting you agree to be contacted by our enterprise team. Your details are never shared.</p>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <ContactCard icon={Mail} title="Business email" value="ops@potlaka.com" href="mailto:ops@potlaka.com" />
            <ContactCard icon={Phone} title="Enterprise line" value="+27 11 383 2537" href="tel:+27113832537" />
            <ContactCard icon={MessageCircle} title="WhatsApp business" value="+27 79 025 8048" href="https://wa.me/27790258048" />

            <div className="rounded-3xl bg-[image:var(--gradient-primary)] p-7 text-white">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Response time</div>
              <div className="mt-2 font-display text-3xl font-semibold">Within 1 business day</div>
              <p className="mt-3 text-sm text-white/80">
                Every qualified enterprise enquiry receives a response within
                one working day, Monday to Friday.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", error, required, placeholder,
}: { label: string; name: string; type?: string; error?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={type === "email" ? 200 : 120}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactCard({
  icon: Icon, title, value, href,
}: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  const wrapProps = href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined } : {};
  return (
    <Wrap
      {...wrapProps}
      className="flex items-start gap-4 rounded-2xl border border-border bg-surface-elevated p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{title}</div>
        <div className="mt-1 text-base font-semibold text-ink">{value}</div>
      </div>
    </Wrap>
  );
}
