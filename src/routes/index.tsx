import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Truck, ShieldCheck, Radar, FileSignature, Users, Cpu, Layers, Sparkles,
  ArrowRight, MapPin, Package, Store, Building2, Repeat, Timer, Boxes,
  BarChart3, Bell, Route as RouteIcon,
} from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";
import warehouse from "@/assets/warehouse.jpg";
import driver from "@/assets/driver.jpg";
import { SectionHeading, SectionEyebrow } from "@/components/section";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "POTLAKA.COM — Intelligent Last-Mile Delivery for Enterprise" },
      {
        name: "description",
        content:
          "South Africa's intelligent last-mile delivery network. Reliable, technology-driven delivery solutions for retailers, distributors and enterprises in Johannesburg and Ekurhuleni.",
      },
      { property: "og:title", content: "POTLAKA.COM — Intelligent Last-Mile Delivery for Enterprise" },
      { property: "og:image", content: heroVan },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const } }),
};

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyPotlaka />
      <Services />
      <Technology />
      <Industries />
      <Process />
      <Coverage />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container-page relative grid gap-14 pb-24 pt-24 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32">
        <div>
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              South Africa's Intelligent Last-Mile Network
            </div>
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" custom={1} variants={fadeUp}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
          >
            Last-mile delivery that <span className="text-gradient-accent">powers business growth</span>.
          </motion.h1>

          <motion.p
            initial="hidden" animate="show" custom={2} variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            POTLAKA.COM helps enterprises across Johannesburg and Ekurhuleni improve
            delivery performance through professional, technology-driven last-mile
            logistics — engineered for retailers, distributors and e-commerce leaders.
          </motion.p>

          <motion.div
            initial="hidden" animate="show" custom={3} variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow-accent transition-transform hover:scale-[1.03]"
            >
              Request a proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Schedule a consultation
            </Link>
          </motion.div>

          <motion.div
            initial="hidden" animate="show" custom={4} variants={fadeUp}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8"
          >
            {[
              { k: "99.4%", v: "On-time delivery" },
              { k: "24/7", v: "Business support" },
              { k: "100%", v: "Black-owned SA" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 shadow-elegant">
            <img
              src={heroVan}
              alt="Branded POTLAKA delivery van moving through Johannesburg"
              className="h-full w-full object-cover"
              width={1920}
              height={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating live tracking card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute left-5 top-5 w-[260px] rounded-2xl glass p-4 text-white shadow-elegant"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Live route · JHB · POT-4821
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold">14</span>
                <span className="text-xs text-white/70">of 18 stops complete</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[78%] rounded-full bg-[image:var(--gradient-accent)]" />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                <span>ETA next stop</span>
                <span className="font-semibold text-white">6 min</span>
              </div>
            </motion.div>

            {/* Floating ePOD card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="absolute bottom-5 right-5 w-[240px] rounded-2xl glass p-4 text-white shadow-elegant"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)]">
                  <FileSignature className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Delivered</div>
                  <div className="text-xs text-white/70">Signed · Sandton City</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-white/70">ePOD captured 09:42</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* soft bottom fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* ---------------- TRUST STRIP ---------------- */
function TrustStrip() {
  const items = [
    "Retail", "E-commerce", "Wholesale", "Healthcare", "Manufacturing",
    "Automotive", "Pharmaceutical", "FMCG", "Financial Services",
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold uppercase tracking-widest text-ink-muted">
          <span className="text-primary">Trusted across sectors</span>
          {items.map((i) => (
            <span key={i} className="opacity-70">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY POTLAKA ---------------- */
function WhyPotlaka() {
  const cards = [
    { icon: Users, title: "Professional drivers", desc: "Vetted, uniformed teams trained to represent your brand at every doorstep." },
    { icon: ShieldCheck, title: "Reliable deliveries", desc: "Operational discipline built for enterprise SLAs, not gig-economy variability." },
    { icon: Radar, title: "Real-time visibility", desc: "Live tracking, milestone events and proactive exception management." },
    { icon: FileSignature, title: "Electronic proof of delivery", desc: "Signatures, photos and timestamps captured on every consignment." },
    { icon: Cpu, title: "Technology-driven ops", desc: "Digital dispatch, driver applications and business dashboards end-to-end." },
    { icon: Layers, title: "Scalable capacity", desc: "Absorb peak season, promotional spikes and rapid geographic expansion." },
    { icon: Sparkles, title: "Operational excellence", desc: "Continuous performance reporting focused on your customer experience." },
    { icon: Timer, title: "Dedicated business support", desc: "Named account managers with response times measured in minutes." },
  ];
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="Why POTLAKA.COM"
        title={<>An extension of your business — <span className="text-gradient-primary">delivered.</span></>}
        description="We become part of your operations. Every parcel, every doorstep, every conversation reflects the customer experience your brand promises."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={i}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[image:var(--gradient-primary)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-white">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Truck, title: "Enterprise last-mile", desc: "Full-service last-mile delivery engineered for enterprise operations." },
    { icon: Boxes, title: "Dedicated fleet solutions", desc: "Vehicles and teams dedicated exclusively to your brand." },
    { icon: Timer, title: "Same & next-day delivery", desc: "Time-bound delivery windows that align with your customer promise." },
    { icon: Store, title: "Store-to-customer", desc: "Retail fulfilment from your storefront to your customer's door." },
    { icon: Building2, title: "Warehouse & retail distribution", desc: "DC to store, store to store, warehouse to customer." },
    { icon: Repeat, title: "Reverse logistics & returns", desc: "Structured collections and returns that protect margin." },
    { icon: Package, title: "Overflow capacity", desc: "On-demand scale for promotions, launches and seasonal peaks." },
    { icon: Users, title: "White-label delivery", desc: "Your brand, your uniform, our operational engine — end to end." },
  ];
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <SectionHeading
            eyebrow="Our services"
            title={<>Delivery solutions built <br className="hidden md:block" />for how business really works.</>}
          />
          <p className="text-lg leading-relaxed text-ink-muted lg:pl-6">
            From scheduled distribution to same-day delivery and dedicated fleets, we
            design the service model around your operational reality — not the other way
            around.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
              variants={fadeUp}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TECHNOLOGY ---------------- */
function Technology() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[oklch(0.16_0.02_260)] p-6 shadow-elegant md:p-8">
            <div className="absolute inset-0 bg-mesh opacity-60" />
            <div className="relative">
              <div className="flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.2_25)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.8_0.17_85)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.2_150)]" />
                </div>
                <span className="font-mono">potlaka.ops · live</span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <StatTile label="Active routes" value="42" accent />
                <StatTile label="On-time %" value="99.4" />
                <StatTile label="ePODs today" value="1,284" />
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Deliveries this week</span>
                  <span className="text-accent">+18.2%</span>
                </div>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {[38, 52, 46, 68, 74, 82, 91].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.6, ease: "easeOut" }}
                      style={{ height: `${h}%` }}
                      className="flex-1 origin-bottom rounded-md bg-[image:var(--gradient-accent)]"
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-white/50">
                  {["M","T","W","T","F","S","S"].map((d, i) => <span key={i}>{d}</span>)}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <MiniCard icon={Bell} title="Customer notifications" hint="SMS · Email" />
                <MiniCard icon={RouteIcon} title="Route optimisation" hint="Live" />
                <MiniCard icon={FileSignature} title="Digital ePOD" hint="Sig + photo" />
                <MiniCard icon={BarChart3} title="Business reporting" hint="Weekly" />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionEyebrow>Technology</SectionEyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            A logistics platform designed for <span className="text-gradient-primary">enterprise visibility</span>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Fleet visibility, driver applications, electronic proof of delivery, real-time
            customer notifications and performance analytics — a single operational fabric
            that keeps your business informed at every step.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Interactive logistics dashboard",
              "Fleet & driver visibility",
              "Electronic proof of delivery",
              "Delivery & performance analytics",
              "Customer notifications",
              "Digital signature capture",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function StatTile({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border border-white/10 p-4 ${accent ? "bg-[image:var(--gradient-primary)] text-white" : "bg-white/5 text-white"}`}>
      <div className="text-[10px] uppercase tracking-wider opacity-70">{label}</div>
      <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
    </div>
  );
}

function MiniCard({ icon: Icon, title, hint }: { icon: React.ComponentType<{ className?: string }>; title: string; hint: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-white">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-medium">{title}</div>
        <div className="text-[10px] uppercase tracking-wider text-white/60">{hint}</div>
      </div>
    </div>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  const industries = [
    "Retail","Wholesale","Manufacturing","Healthcare","Automotive",
    "Financial Services","Legal","Government","Pharmaceutical","Electronics",
    "Furniture","Industrial Suppliers","E-Commerce","FMCG","Construction",
  ];
  return (
    <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Industries we serve
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Purpose-built for the industries that <span className="text-gradient-accent">move South Africa</span>.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/75">
            From retail and e-commerce to healthcare, pharmaceutical and industrial
            distribution — our operational playbook adapts to the compliance, timing
            and customer-experience demands of your sector.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((i, idx) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:border-accent/40 hover:bg-white/10"
            >
              <div className="text-sm font-semibold text-white">{i}</div>
              <ArrowRight className="mt-4 h-4 w-4 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Consultation", desc: "Understanding your volume, footprint and customer promise." },
    { n: "02", title: "Solution design", desc: "Fleet, capacity and service levels tailored to your business." },
    { n: "03", title: "Onboarding", desc: "Structured go-live with dedicated account management." },
    { n: "04", title: "Daily collections", desc: "Scheduled, reliable pickups from your operations." },
    { n: "05", title: "Professional delivery", desc: "Uniformed teams, ePOD and real-time visibility." },
    { n: "06", title: "Performance reporting", desc: "Continuous insights that improve customer experience." },
  ];
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="How we work"
        title={<>A partnership designed for <span className="text-gradient-primary">predictable outcomes</span>.</>}
        description="From first conversation to steady-state operations, every step is engineered to reduce risk and accelerate results."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="relative rounded-2xl border border-border bg-surface-elevated p-7"
          >
            <div className="flex items-center gap-4">
              <div className="font-display text-4xl font-semibold text-gradient-primary">{s.n}</div>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- COVERAGE ---------------- */
function Coverage() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Coverage</SectionEyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Gauteng today. <span className="text-gradient-primary">South Africa next.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Operating across Johannesburg and Ekurhuleni with a clear roadmap to expand
            our intelligent last-mile network into major metros across South Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Johannesburg","Ekurhuleni","Tshwane — coming","Cape Town — coming","Durban — coming"].map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-ink">
                <MapPin className="h-3.5 w-3.5 text-accent" /> {c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[oklch(0.16_0.02_260)] p-6 shadow-elegant">
            <div className="absolute inset-0 bg-mesh opacity-70" />
            <div className="relative aspect-square">
              <svg viewBox="0 0 400 400" className="h-full w-full">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.72 0.19 48)" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="oklch(0.72 0.19 48)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* concentric rings */}
                {[60,110,160,200].map((r) => (
                  <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="oklch(1 0 0 / 0.10)" />
                ))}
                {/* JHB / EKR nodes */}
                <circle cx="200" cy="200" r="70" fill="url(#glow)" />
                <g>
                  <line x1="200" y1="200" x2="260" y2="180" stroke="oklch(0.72 0.19 48 / 0.6)" strokeWidth="1.5" strokeDasharray="3 4" />
                  <line x1="200" y1="200" x2="140" y2="150" stroke="oklch(0.62 0.20 250 / 0.6)" strokeWidth="1.5" strokeDasharray="3 4" />
                  <line x1="200" y1="200" x2="170" y2="270" stroke="oklch(0.62 0.20 250 / 0.6)" strokeWidth="1.5" strokeDasharray="3 4" />
                  <line x1="200" y1="200" x2="290" y2="240" stroke="oklch(0.72 0.19 48 / 0.6)" strokeWidth="1.5" strokeDasharray="3 4" />
                </g>
                <Node x={200} y={200} label="JHB" primary />
                <Node x={260} y={180} label="Ekurhuleni" />
                <Node x={140} y={150} label="Sandton" />
                <Node x={170} y={270} label="Soweto" />
                <Node x={290} y={240} label="OR Tambo" />
                <Node x={100} y={90} label="Tshwane" muted />
                <Node x={340} y={330} label="Durban" muted />
                <Node x={70} y={330} label="Cape Town" muted />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({ x, y, label, primary = false, muted = false }: { x: number; y: number; label: string; primary?: boolean; muted?: boolean }) {
  const fill = primary ? "oklch(0.72 0.19 48)" : muted ? "oklch(1 0 0 / 0.35)" : "oklch(0.75 0.18 245)";
  return (
    <g>
      {primary && <circle cx={x} cy={y} r="12" fill="oklch(0.72 0.19 48 / 0.25)" />}
      <circle cx={x} cy={y} r={primary ? 6 : 4} fill={fill} />
      <text x={x + 10} y={y + 4} fill={muted ? "oklch(1 0 0 / 0.5)" : "white"} fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">{label}</text>
    </g>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-hero p-10 text-white md:p-16 lg:p-20">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url(${warehouse})`, backgroundSize: "cover", backgroundPosition: "center",
          mixBlendMode: "overlay",
        }} />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <SectionEyebrow>Let's move</SectionEyebrow>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.03] tracking-tight md:text-5xl lg:text-6xl">
              Ready to improve your <span className="text-gradient-accent">last-mile operations?</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Speak with our enterprise team. We'll design a delivery model tailored to
              your volumes, service levels and customer expectations.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-[image:var(--gradient-accent)] px-6 py-5 text-base font-semibold text-accent-foreground shadow-glow-accent transition-transform hover:scale-[1.01]">
              Request a business proposal
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className="group inline-flex items-center justify-between gap-4 rounded-2xl glass px-6 py-5 text-base font-semibold text-white transition-colors hover:bg-white/15">
              Book a consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-white/25 px-6 py-5 text-base font-semibold text-white transition-colors hover:bg-white/5">
              Open a business account
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* driver strip */}
        <div className="relative mt-14 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-[auto_1fr] sm:items-center">
          <img src={driver} alt="POTLAKA professional delivery team member" className="h-16 w-16 rounded-full object-cover ring-2 ring-white/30" width={64} height={64} loading="lazy" />
          <div>
            <div className="font-display text-lg font-semibold">Professional delivery teams. Every stop. Every day.</div>
            <div className="text-sm text-white/70">Uniformed. Vetted. Trained to represent your brand.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
