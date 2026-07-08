import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries We Serve | POTLAKA.COM" },
      { name: "description", content: "Purpose-built last-mile delivery for retail, e-commerce, healthcare, pharmaceutical, manufacturing, FMCG, financial services and more across South Africa." },
      { property: "og:title", content: "Industries — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const INDUSTRIES = [
  { name: "Retail", desc: "Store fulfilment, replenishment and last-mile delivery for national and independent retailers." },
  { name: "E-Commerce", desc: "Fast, branded delivery experiences that convert first-time buyers into repeat customers." },
  { name: "Wholesale", desc: "Multi-drop distribution to trade customers with scheduled, predictable service windows." },
  { name: "Manufacturing", desc: "Just-in-time delivery for finished goods, parts and B2B distribution." },
  { name: "Healthcare", desc: "Controlled, professional handling for hospitals, clinics and medical suppliers." },
  { name: "Pharmaceutical", desc: "Compliance-aware delivery workflows with electronic proof of delivery." },
  { name: "Automotive", desc: "Parts distribution across dealership networks and aftermarket suppliers." },
  { name: "Financial Services", desc: "Discreet, secure delivery of documents, cards and financial materials." },
  { name: "Legal", desc: "Court filings, contracts and confidential documents handled professionally." },
  { name: "Government", desc: "Structured delivery services aligned to public-sector service requirements." },
  { name: "Electronics", desc: "High-value electronics distribution with careful handling and ePOD." },
  { name: "Furniture", desc: "Larger consignments and coordinated delivery windows for retail and B2B." },
  { name: "Industrial Suppliers", desc: "Reliable distribution for industrial parts and equipment providers." },
  { name: "FMCG", desc: "High-frequency distribution to trade, retail and direct-to-consumer channels." },
  { name: "Construction", desc: "Materials and equipment delivery to sites and project locations." },
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
              Trusted across South Africa's most demanding sectors.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              From regulated healthcare and pharmaceutical distribution to high-volume
              retail and e-commerce fulfilment — our operational playbook adapts to
              your industry.
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
