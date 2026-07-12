import { createFileRoute } from "@tanstack/react-router";
import { Radar, Cpu, Bell, FileSignature, BarChart3, Route as RouteIcon, Smartphone, LineChart, Warehouse, Network, Bot, ShieldCheck, HardHat, Lock, Users } from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: TechPage,
  head: () => ({
    meta: [
      { title: "Technology — Automation Platform for Logistics | POTLAKA.COM" },
      { name: "description", content: "The POTLAKA.COM platform: warehouse management, fleet intelligence, control-tower visibility, automated dispatch, ePOD, driver applications and analytics." },
      { property: "og:title", content: "Technology — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
});

const FEATURES = [
  { icon: Warehouse, title: "Warehouse automation (WMS)", desc: "Barcode and RFID scanning, pick-pack workflows and automated stock control." },
  { icon: Radar, title: "Predictive fleet intelligence", desc: "Our applications and handheld devices turn driver and vehicle data into live location, behaviour scoring and utilisation predictions." },
  { icon: Network, title: "Logistics control tower", desc: "One operational view across warehouses, fleets and last-mile execution." },
  { icon: Bot, title: "Automated dispatch & routing", desc: "AI-assisted job allocation, load planning and route optimisation." },
  { icon: FileSignature, title: "Electronic proof of delivery", desc: "Signatures, photos and timestamps captured on each consignment." },
  { icon: RouteIcon, title: "Intelligent route management", desc: "Structured routes engineered for efficiency and predictable arrival windows." },
  { icon: Bell, title: "Customer notifications", desc: "Automated status updates via SMS, email and WhatsApp on every stop." },
  { icon: Smartphone, title: "Driver application", desc: "A purpose-built app that guides drivers through each delivery with clarity." },
  { icon: BarChart3, title: "Real-time client reporting", desc: "Live dashboards and automated reports that reduce manual updates for your clients." },
  { icon: LineChart, title: "Delivery analytics", desc: "Insight on volumes, service levels, exceptions and customer experience." },
  { icon: Cpu, title: "Systems integration", desc: "APIs and connectors into ERP, e-commerce, WMS, TMS and core banking platforms." },
  { icon: ShieldCheck, title: "Secure chain of custody", desc: "Auditable handovers for sensitive, high-value or confidential consignments." },
];

function TechPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="container-page relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Technology
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
              A high-tech automation platform for transport, logistics and warehousing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Warehouse management, fleet intelligence, automated dispatch,
              ePOD and a logistics control tower — one operational fabric
              powering tech-driven last-mile for retailers, distributors,
              banks and e-commerce. Security and safety controls are built
              into every workflow, so your team can focus on the work that
              matters.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-surface-elevated p-7 transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-[image:var(--gradient-primary)] group-hover:text-white transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[oklch(0.10_0.02_260)] p-10 md:p-16">
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Safety and security
              </div>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.03] tracking-tight text-ink md:text-5xl">
                Security and safety <span className="text-gradient-gold">by design</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Every workflow across transport, logistics and warehousing is
                built on practical security and safety controls.
                Automation reduces manual effort — giving your team more time
                for the work that matters.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Security controls</div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { icon: ShieldCheck, text: "Role-based access control" },
                    { icon: Lock, text: "Encrypted data in transit and at rest" },
                    { icon: FileSignature, text: "Auditable ePOD and chain of custody" },
                    { icon: Cpu, text: "POPIA-aligned data handling" },
                  ].map((s) => (
                    <li key={s.text} className="flex items-center gap-2 text-sm text-ink"><s.icon className="h-3.5 w-3.5 text-ink-muted" />{s.text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Safety and automation</div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { icon: HardHat, text: "Driver behaviour and safety scoring" },
                    { icon: Radar, text: "Live vehicle tracking and geo-fencing" },
                    { icon: Bot, text: "Automated dispatch and status updates" },
                    { icon: Users, text: "More time for your team to focus" },
                  ].map((s) => (
                    <li key={s.text} className="flex items-center gap-2 text-sm text-ink"><s.icon className="h-3.5 w-3.5 text-ink-muted" />{s.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
