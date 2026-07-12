import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section";
import { ArrowRight, Truck, Boxes, Timer, Store, Building2, Repeat, Package, Users, ClipboardList, MapPin } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Last-Mile Delivery for South African Enterprises | POTLAKA.COM" },
      { name: "description", content: "South Africa's do-it-all last-mile delivery company — dedicated fleet, scheduled routes, on-demand capacity, reverse logistics and white-label delivery for enterprise brands." },
      { property: "og:title", content: "Services — POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const LASTMILE = [
  { icon: Truck, title: "Tech-driven last-mile delivery", desc: "Automated dispatch, live tracking and electronic proof of delivery on every consignment." },
  { icon: Boxes, title: "Dedicated fleet solutions", desc: "Vehicles and teams committed to your brand, uniformed and embedded in your daily operations." },
  { icon: ClipboardList, title: "Scheduled route planning", desc: "Fixed, predictable delivery windows aligned to your commercial calendar." },
  { icon: Timer, title: "On-demand capacity", desc: "Extra vehicles and drivers when volumes spike — without compromising service levels." },
  { icon: Store, title: "B2B & B2C fulfilment", desc: "Professional handovers for business customers and end consumers, unified on one platform." },
  { icon: Building2, title: "Distribution centre flows", desc: "DC-to-store and DC-to-customer distribution with structured milestone reporting." },
  { icon: Store, title: "Inter-store transfers", desc: "Replenishment, stock balancing and store-to-store movement on structured routes." },
  { icon: Repeat, title: "Reverse logistics", desc: "Managed collections and returns designed to protect margin and customer trust." },
  { icon: Users, title: "Dedicated delivery teams", desc: "Named, trained delivery crews that operate as an extension of your business." },
  { icon: Truck, title: "White-label delivery", desc: "Your brand, your uniform, your customer experience — powered by our operating engine." },
  { icon: MapPin, title: "Business collections", desc: "Scheduled and ad-hoc collections from suppliers, partners and business locations." },
  { icon: Package, title: "Branded customer experience", desc: "Tracking pages, SMS and WhatsApp updates, and signatures that reflect your brand." },
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
              One last-mile delivery company. One intelligent platform.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              We design, automate and operate last-mile logistics for South
              African enterprises — with the technology to make every delivery
              predictable, visible and on-brand. Security and safety are built
              into every transport, logistics and warehousing workflow, so your
              team can focus on the work that matters.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          eyebrow="Automation solutions"
          title={<>High-tech automation for transport, logistics <span className="text-gradient-primary">and warehousing</span>.</>}
          description="Digitise, connect and automate the systems that move your business — from the warehouse floor to the customer's door."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUTOMATION.map((s) => (
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

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Tech-driven last-mile"
          title={<>Last-mile logistics built for <span className="text-gradient-primary">your operation</span>.</>}
          description="From scheduled routes to on-demand capacity, our platform matches the right vehicle, driver and workflow to every delivery — every time."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LASTMILE.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Safety, security and simplified operations"
          title={<>Automation that protects your <span className="text-gradient-primary">people, assets and data</span>.</>}
          description="From secure chain of custody to driver safety and warehouse compliance, our platform embeds enterprise-grade safeguards into every workflow — then automates the routine so your team focuses on high-value work."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Enterprise security", desc: "Encrypted data, access controls and POPIA-aligned handling across the entire platform." },
            { icon: HardHat, title: "Workplace safety", desc: "Telematics, driver scoring and warehouse protocols that cut risk and protect teams." },
            { icon: Lock, title: "Chain of custody", desc: "Auditable handovers with GPS, OTP, signatures and photographic proof at every stage." },
            { icon: Bot, title: "Automation-first design", desc: "Dispatch, routing and reporting run autonomously — freeing your people for what matters." },
          ].map((s, i) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-surface-elevated p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-white md:p-14">
          <SectionHeading
            title={<span className="text-white">Not sure which service fits your operation?</span>}
            description={<span className="text-white/80">Our enterprise team will design a bespoke delivery model around your volumes, footprint and service-level commitments.</span>}
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
