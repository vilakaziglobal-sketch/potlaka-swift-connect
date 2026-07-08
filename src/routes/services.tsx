import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section";
import { ArrowRight, Truck, Boxes, Timer, Store, Building2, Repeat, Package, Users, ClipboardList, MapPin } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Enterprise Last-Mile Delivery | POTLAKA.COM" },
      { name: "description", content: "Enterprise last-mile delivery, dedicated fleet, same-day and next-day, warehouse and retail distribution, reverse logistics and white-label delivery for South African businesses." },
      { property: "og:title", content: "Services — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const SERVICES = [
  { icon: Truck, title: "Enterprise last-mile delivery", desc: "End-to-end last-mile logistics engineered for enterprise operations, service levels and customer expectations." },
  { icon: Boxes, title: "Dedicated fleet solutions", desc: "Vehicles and teams dedicated exclusively to your brand, uniformed and integrated into your daily operations." },
  { icon: ClipboardList, title: "Scheduled deliveries", desc: "Fixed, predictable delivery windows aligned to your commercial and operational calendar." },
  { icon: Timer, title: "Same-day deliveries", desc: "Time-critical delivery windows for retail, healthcare, e-commerce and financial services." },
  { icon: Timer, title: "Next-day deliveries", desc: "Standard next-day service across our Gauteng network with full visibility and ePOD." },
  { icon: Store, title: "Store-to-customer delivery", desc: "Retail fulfilment from your storefront directly to your customer's door." },
  { icon: Building2, title: "Warehouse distribution", desc: "DC-to-store and DC-to-customer distribution with structured milestone reporting." },
  { icon: Store, title: "Retail distribution", desc: "Store-to-store transfers, replenishment runs and multi-drop retail routes." },
  { icon: Repeat, title: "Reverse logistics", desc: "Managed returns and reverse flows engineered to protect margin and customer trust." },
  { icon: Package, title: "Returns collections", desc: "Structured collections from customers, integrated with your returns workflows." },
  { icon: Boxes, title: "Overflow delivery capacity", desc: "On-demand capacity to absorb promotional peaks, launches and seasonal spikes." },
  { icon: Users, title: "Dedicated delivery teams", desc: "Named, trained delivery teams that operate as an extension of your business." },
  { icon: Truck, title: "White-label delivery", desc: "Your brand, your uniform, your customer experience — powered by our operational engine." },
  { icon: MapPin, title: "Business collections", desc: "Scheduled and ad-hoc collections from suppliers, partners and business locations." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="container-page relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Services
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
              Delivery solutions engineered around your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              A full portfolio of enterprise-grade last-mile services — from dedicated
              fleets and same-day delivery to reverse logistics and white-label operations.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-white md:p-14">
          <SectionHeading
            title={<span className="text-white">Not sure which service fits your operations?</span>}
            description={<span className="text-white/80">Our enterprise team will design a bespoke delivery model based on your volumes, footprint and service-level commitments.</span>}
          />
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]">
              Talk to our enterprise team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
