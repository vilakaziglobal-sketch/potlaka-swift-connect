import { createFileRoute } from "@tanstack/react-router";
import { Radar, Cpu, Bell, FileSignature, BarChart3, Route as RouteIcon, Smartphone, LineChart } from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: TechPage,
  head: () => ({
    meta: [
      { title: "Technology — Intelligent Logistics Platform | POTLAKA.COM" },
      { name: "description", content: "The POTLAKA.COM technology platform: fleet visibility, electronic proof of delivery, live tracking, driver applications, customer notifications and business reporting." },
      { property: "og:title", content: "Technology — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
});

const FEATURES = [
  { icon: Radar, title: "Fleet & driver visibility", desc: "Live location, status and performance across every route and every vehicle." },
  { icon: FileSignature, title: "Electronic proof of delivery", desc: "Signatures, photos and timestamps captured on every consignment." },
  { icon: RouteIcon, title: "Intelligent route management", desc: "Structured routes engineered for efficiency and predictable arrival windows." },
  { icon: Bell, title: "Customer notifications", desc: "Automated status updates via SMS and email for every stop." },
  { icon: Smartphone, title: "Driver application", desc: "A purpose-built app that guides drivers through every delivery with clarity." },
  { icon: BarChart3, title: "Business reporting", desc: "Weekly and monthly performance reports focused on business outcomes." },
  { icon: LineChart, title: "Delivery analytics", desc: "Insights on volumes, service levels, exceptions and customer experience." },
  { icon: Cpu, title: "Interactive dashboard", desc: "A single operational view of your delivery performance in real time." },
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
              An intelligent logistics platform, built for enterprise visibility.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Real-time tracking, electronic proof of delivery, driver applications and
              performance analytics — one operational fabric that keeps your business
              informed at every step.
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
