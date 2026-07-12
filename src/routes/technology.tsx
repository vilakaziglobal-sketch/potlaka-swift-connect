import { createFileRoute } from "@tanstack/react-router";
import { Radar, Cpu, Bell, FileSignature, BarChart3, Route as RouteIcon, Smartphone, LineChart, Warehouse, Network, Bot, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: TechPage,
  head: () => ({
    meta: [
      { title: "Technology — Automation Platform for Logistics | POTLAKA.COM" },
      { name: "description", content: "The POTLAKA.COM automation platform: warehouse management, fleet telematics, control-tower visibility, automated dispatch, ePOD, driver applications and analytics." },
      { property: "og:title", content: "Technology — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
});

const FEATURES = [
  { icon: Warehouse, title: "Warehouse automation (WMS)", desc: "Barcode & RFID scanning, pick-pack workflows and automated stock control." },
  { icon: Radar, title: "Fleet & driver telematics", desc: "Live vehicle location, driver behaviour and utilisation analytics." },
  { icon: Network, title: "Logistics control tower", desc: "One operational view across warehouses, fleets and last-mile execution." },
  { icon: Bot, title: "Automated dispatch & routing", desc: "AI-assisted job allocation, load planning and route optimisation." },
  { icon: FileSignature, title: "Electronic proof of delivery", desc: "Signatures, photos and timestamps captured on every consignment." },
  { icon: RouteIcon, title: "Intelligent route management", desc: "Structured routes engineered for efficiency and predictable arrival windows." },
  { icon: Bell, title: "Customer notifications", desc: "Automated status updates via SMS and email for every stop." },
  { icon: Smartphone, title: "Driver application", desc: "A purpose-built app that guides drivers through every delivery with clarity." },
  { icon: BarChart3, title: "Executive reporting", desc: "Weekly and monthly SLA, cost-to-serve and performance reporting." },
  { icon: LineChart, title: "Delivery analytics", desc: "Insights on volumes, service levels, exceptions and customer experience." },
  { icon: Cpu, title: "Systems integration", desc: "APIs and connectors into ERP, e-commerce, WMS, TMS and banking platforms." },
  { icon: ShieldCheck, title: "Secure chain-of-custody", desc: "Auditable handovers for bank cards, PIN mailers and confidential documents." },
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
              A high-tech automation platform for transport, logistics & warehousing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Warehouse management, fleet telematics, automated dispatch, ePOD and a
              logistics control tower — one operational fabric powering tech-driven
              last-mile for retailers, distributors, banks and e-commerce leaders.
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
    </>
  );
}
