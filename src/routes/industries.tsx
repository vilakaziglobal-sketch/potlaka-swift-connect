import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Store, Boxes, ShieldCheck, Package } from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Retailers, Distributors, Banks & E-commerce | POTLAKA.COM" },
      { name: "description", content: "Tech-driven last-mile and logistics automation engineered for retailers, distributors, banks and e-commerce leaders — plus 3PLs, healthcare, pharma, FMCG and more across South Africa." },
      { property: "og:title", content: "Industries — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const FLAGSHIP = [
  {
    icon: Store,
    name: "Retailers",
    headline: "Omnichannel fulfilment, replenishment and branded last-mile.",
    intro:
      "For national chains and independent brands, delivery IS the brand experience. We run store, DC and warehouse fulfilment flows that protect your customer promise.",
    useCases: [
      "Omnichannel fulfilment from store, DC or warehouse",
      "Automated replenishment routes across your network",
      "Uniformed drivers in branded vehicles — an extension of your team",
      "Live customer notifications and electronic proof of delivery",
      "Peak-season overflow capacity for sales events and launches",
    ],
    kpis: ["DIFOT > 98%", "Live tracking", "Branded delivery"],
  },
  {
    icon: Boxes,
    name: "Distributors",
    headline: "Multi-drop trade distribution with SLA scorecards.",
    intro:
      "For wholesalers and B2B distributors, predictability is everything. Our control tower orchestrates fixed schedules, trade customer notifications and exception handling.",
    useCases: [
      "Fixed-window multi-drop routes to trade customers",
      "Route optimisation across hundreds of daily stops",
      "Automated trade-customer ETAs and delivery confirmations",
      "SLA and DIFOT scorecards per customer and per route",
      "ERP / WMS integration for order sync and POD reconciliation",
    ],
    kpis: ["Multi-drop routing", "SLA scorecards", "ERP integration"],
  },
  {
    icon: ShieldCheck,
    name: "Banks & Financial Services",
    headline: "Secure, compliant last-mile logistics for financial services.",
    intro:
      "For banks, insurers and fintechs, security and traceability are non-negotiable. We handle high-value, sensitive and confidential consignments with a compliance-grade audit trail.",
    useCases: [
      "Tamper-evident handling and sealed handovers",
      "Recipient identity verification and authentication",
      "Vetted, background-checked drivers assigned to your account",
      "Device and asset deployment with chain-of-custody scanning",
      "Full audit trail: photos, signatures, GPS and timestamps per event",
    ],
    kpis: ["Vetted drivers", "Tamper-evident", "Audit trail"],
  },
  {
    icon: Package,
    name: "E-commerce",
    headline: "API-integrated last-mile that turns first-time buyers into repeat customers.",
    intro:
      "For online brands, the delivery experience is the brand experience. We plug into your store, offer flexible delivery windows and automate returns to protect margin.",
    useCases: [
      "E-commerce platform and order-management system integration",
      "Same-day and next-day delivery windows across Gauteng",
      "Branded tracking pages and customer notifications",
      "Automated returns collections with condition capture",
      "Flexible payment and collection workflows at the door",
    ],
    kpis: ["Same-day", "Store APIs", "Returns automation"],
  },
];

const OTHER = [
  { name: "3PL & Logistics", desc: "White-label capacity and automation for third-party logistics operators." },
  { name: "Warehousing", desc: "WMS, barcode/RFID and integrated outbound distribution for warehouse operators." },
  { name: "Manufacturing", desc: "Just-in-time delivery for finished goods, parts and B2B distribution." },
  { name: "FMCG", desc: "High-frequency distribution to trade, retail and direct-to-consumer channels." },
  { name: "Healthcare", desc: "Controlled, professional handling for hospitals, clinics and medical suppliers." },
  { name: "Pharmaceutical", desc: "Compliance-aware delivery workflows with electronic proof of delivery." },
  { name: "Automotive", desc: "Parts distribution across dealership networks and aftermarket suppliers." },
  { name: "Electronics", desc: "High-value electronics distribution with careful handling and ePOD." },
  { name: "Wholesale", desc: "Multi-drop distribution to trade customers with predictable service windows." },
  { name: "Industrial Suppliers", desc: "Reliable distribution for industrial parts and equipment providers." },
];

function IndustriesPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="container-page relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Industries
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
              Engineered for <span className="text-gradient-accent">retailers, distributors, banks</span> and <span className="text-gradient-accent">e-commerce</span> leaders.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Four flagship verticals, each with a dedicated playbook — plus deep
              experience across 3PL, healthcare, pharmaceutical, manufacturing, FMCG
              and industrial distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship verticals */}
      <section className="container-page py-20 md:py-28">
        <div className="space-y-16">
          {FLAGSHIP.map((v, idx) => (
            <div
              key={v.name}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-white shadow-elegant">
                  <v.icon className="h-7 w-7" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent">{v.name}</div>
                <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                  {v.headline}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">{v.intro}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {v.kpis.map((k) => (
                    <span key={k} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                      {k}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                  Talk to a {v.name.toLowerCase()} specialist <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-3xl border border-border bg-surface-elevated p-8 shadow-card md:p-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Use cases</div>
                <ul className="mt-5 space-y-4">
                  {v.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent" />
                      <span className="text-base leading-relaxed text-ink">{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other sectors */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Also serving</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
              Deep experience across regulated and demanding sectors.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER.map((i) => (
              <div key={i.name} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">{i.name}</div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{i.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Discuss your requirements <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
