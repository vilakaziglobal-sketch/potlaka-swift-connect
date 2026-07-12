import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries We Serve | POTLAKA.COM" },
      { name: "description", content: "High-tech automation and tech-driven last-mile logistics for retailers, distributors, banks, e-commerce leaders, 3PLs, warehousing operators, manufacturers and more across South Africa." },
      { property: "og:title", content: "Industries — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const INDUSTRIES = [
  { name: "Retail", desc: "Store fulfilment, replenishment and tech-driven last-mile delivery for national and independent retailers." },
  { name: "E-Commerce", desc: "Automated dispatch and branded delivery experiences that convert first-time buyers into repeat customers." },
  { name: "Distributors", desc: "Multi-drop distribution with control-tower visibility, scheduled service windows and ePOD." },
  { name: "Banks", desc: "Secure delivery of bank cards, PIN mailers and confidential documents — with full chain-of-custody." },
  { name: "Warehousing & 3PL", desc: "Warehouse automation, WMS integration and outbound last-mile execution for logistics operators." },
  { name: "Manufacturing", desc: "Just-in-time delivery for finished goods, parts and B2B distribution — connected to your ERP." },
  { name: "FMCG", desc: "High-frequency distribution to trade, retail and direct-to-consumer channels." },
  { name: "Financial Services", desc: "Discreet, secure delivery of documents, cards and financial materials with tracked handovers." },
  { name: "Healthcare", desc: "Controlled, professional handling for hospitals, clinics and medical suppliers." },
  { name: "Pharmaceutical", desc: "Compliance-aware delivery workflows with electronic proof of delivery." },
  { name: "Automotive", desc: "Parts distribution across dealership networks and aftermarket suppliers." },
  { name: "Legal", desc: "Court filings, contracts and confidential documents handled professionally." },
  { name: "Government", desc: "Structured delivery services aligned to public-sector service requirements." },
  { name: "Electronics", desc: "High-value electronics distribution with careful handling and ePOD." },
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
              Automation and last-mile for South Africa's most demanding sectors.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Engineered for retailers, distributors, banks and e-commerce leaders —
              and trusted by 3PLs, warehousing operators, manufacturers and regulated
              industries.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">{i.name}</div>
              <h3 className="mt-3 text-xl font-semibold text-ink">Delivery for {i.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{i.desc}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Discuss your requirements <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
