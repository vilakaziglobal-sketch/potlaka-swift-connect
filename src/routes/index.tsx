import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Play, Sparkles, Cpu, Warehouse, Truck, Radar, LineChart,
  Users, Bot, ShieldCheck, Cloud, Network, Lock, Zap, Globe, Activity,
  MapPin, Package, CheckCircle2, ArrowUpRight, Timer, TrendingUp,
  Building2, Landmark, ShoppingBag, Factory, Pill, Fuel, Wifi, Wrench, HardHat,
  Boxes, Route as RouteIcon, Gauge, BrainCircuit, Terminal, Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "POTLAKA — Engineering the Future of Logistics" },
      {
        name: "description",
        content:
          "POTLAKA has developed an AI-powered Enterprise Logistics Operating System that transforms warehousing, transport, fleet and last-mile delivery into one intelligent ecosystem.",
      },
      { property: "og:title", content: "POTLAKA — Engineering the Future of Logistics" },
      {
        property: "og:description",
        content:
          "Africa's leading Logistics Technology Company. One platform for warehousing, transport, fleet and last-mile — powered by AI.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.06, ease } }),
};

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Challenge />
      <Platform />
      <HowItWorks />
      <AISection />
      <Outcomes />
      <SafetySecurity />
      <Managed />
      <Banking />
      <Industries />
      <Trial />
      <FinalCTA />
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="container-page relative grid min-h-[92vh] items-center gap-16 py-24 lg:grid-cols-[1.05fr_1fr] lg:py-32">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Africa's Logistics Technology Company
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Engineering the{" "}
            <span className="text-gradient-gold">Future of Logistics.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            POTLAKA has developed an AI-powered <span className="text-ink">Enterprise Logistics Operating System</span> that transforms warehousing, transport, fleet management and last-mile delivery into one intelligent ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Book a Live Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[oklch(0.14_0.02_260)] shadow-glow-gold transition-transform hover:scale-[1.02]"
            >
              Start Free 30-Day Trial
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full glass px-5 py-3.5 text-sm font-medium text-ink hover:bg-white/10">
              <Play className="h-4 w-4" /> Watch Platform Overview
            </button>
          </div>

          <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-ink-muted/70">
            <span>Enterprise Ready</span>
            <span className="h-1 w-1 rounded-full bg-ink-muted/40" />
            <span>Cloud Native</span>
            <span className="h-1 w-1 rounded-full bg-ink-muted/40" />
            <span>POPIA Aligned</span>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={2} className="relative">
          <LiveDashboard />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* ---------- LIVE DASHBOARD MOCK ---------- */
function LiveDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[2rem] bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl glass-strong shadow-elegant">
        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-ink-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            LOS · Live
          </div>
          <span className="font-mono text-[10px] text-ink-muted">v4.2.1</span>
        </div>

        {/* Body */}
        <div className="grid gap-3 p-4 sm:grid-cols-3">
          <KPI label="On-time" value="98.4%" trend="+2.1" />
          <KPI label="Fleet util." value="87%" trend="+4.6" />
          <KPI label="Cost / drop" value="R42" trend="-8.3" negative />
        </div>

        <div className="mx-4 rounded-2xl border border-white/5 bg-black/20 p-4">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="font-medium text-ink">Live Fleet · Johannesburg</span>
            <span className="font-mono text-ink-muted">147 active</span>
          </div>
          <MapMock />
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <MiniCard icon={<BrainCircuit className="h-4 w-4" />} title="AI reoptimised 12 routes" sub="Saved 84 km · 2h ago" />
          <MiniCard icon={<Package className="h-4 w-4" />} title="Delivery confirmed · OTP" sub="Card #4821 · Sandton" />
          <MiniCard icon={<Warehouse className="h-4 w-4" />} title="Bay 3 utilisation 94%" sub="WMS · Germiston DC" />
          <MiniCard icon={<Activity className="h-4 w-4" />} title="SLA alert cleared" sub="Route 22 · on-time" />
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-8 top-24 hidden rounded-2xl glass-strong px-4 py-3 shadow-elegant lg:block" style={{ animation: "float-y 6s ease-in-out infinite" }}>
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gold/20 text-gold"><Zap className="h-4 w-4" /></div>
          <div>
            <div className="text-xs font-medium text-ink">Route saved 23 min</div>
            <div className="text-[10px] text-ink-muted">AI Dispatch</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-6 bottom-16 hidden rounded-2xl glass-strong px-4 py-3 shadow-elegant lg:block" style={{ animation: "float-y 7s ease-in-out infinite", animationDelay: "1.5s" }}>
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300"><CheckCircle2 className="h-4 w-4" /></div>
          <div>
            <div className="text-xs font-medium text-ink">POD verified · OTP</div>
            <div className="text-[10px] text-ink-muted">Standard Bank</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KPI({ label, value, trend, negative }: { label: string; value: string; trend: string; negative?: boolean }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="text-[10px] uppercase tracking-wider text-ink-muted">{label}</div>
      <div className="mt-1 font-display text-xl font-semibold text-ink">{value}</div>
      <div className={`mt-0.5 font-mono text-[10px] ${negative ? "text-emerald-300" : "text-gold"}`}>{trend}%</div>
    </div>
  );
}

function MiniCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-ink">{icon}</div>
      <div className="min-w-0">
        <div className="truncate text-xs font-medium text-ink">{title}</div>
        <div className="truncate text-[10px] text-ink-muted">{sub}</div>
      </div>
    </div>
  );
}

function MapMock() {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-br from-[oklch(0.20_0.05_260)] to-[oklch(0.14_0.03_260)]">
      {/* grid */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      {/* routes */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 160" fill="none">
        <path d="M20,130 C90,90 140,130 200,80 S320,60 380,40" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="3 4" />
        <path d="M20,60 C80,80 150,40 220,70 S340,120 380,110" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="3 4" />
        <defs>
          <linearGradient id="g1" x1="0" x2="1"><stop stopColor="#f5c86d" /><stop offset="1" stopColor="#f5c86d" stopOpacity="0.1" /></linearGradient>
          <linearGradient id="g2" x1="0" x2="1"><stop stopColor="#6ea8ff" /><stop offset="1" stopColor="#6ea8ff" stopOpacity="0.1" /></linearGradient>
        </defs>
      </svg>
      {/* pins */}
      {[
        { l: "22%", t: "45%", c: "bg-gold" },
        { l: "52%", t: "60%", c: "bg-primary-glow" },
        { l: "72%", t: "30%", c: "bg-gold" },
        { l: "38%", t: "78%", c: "bg-emerald-400" },
      ].map((p, i) => (
        <span key={i} className="absolute" style={{ left: p.l, top: p.t }}>
          <span className={`absolute -inset-2 rounded-full ${p.c} opacity-40`} style={{ animation: `pulse-ring 2.4s ${i * 0.3}s infinite ease-out` }} />
          <span className={`relative block h-2 w-2 rounded-full ${p.c}`} />
        </span>
      ))}
    </div>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Enterprise Ready" },
    { icon: Cloud, label: "Cloud Native" },
    { icon: BrainCircuit, label: "Artificial Intelligence" },
    { icon: Radar, label: "Real-Time Visibility" },
    { icon: Lock, label: "Enterprise Security" },
    { icon: Terminal, label: "API First" },
    { icon: ShieldCheck, label: "POPIA Ready" },
    { icon: Network, label: "Scalable Architecture" },
  ];
  return (
    <section className="border-y border-white/5 bg-surface/60">
      <div className="container-page py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
              <Icon className="h-3.5 w-3.5 text-gold" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION SHELL ---------- */
function Section({ children, eyebrow, id }: { children: React.ReactNode; eyebrow?: string; id?: string }) {
  return (
    <section id={id} className="relative py-28 md:py-36">
      <div className="container-page">{children}</div>
    </section>
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
      <span className="h-1 w-1 rounded-full bg-gold" />
      {children}
    </div>
  );
}
function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl lg:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

/* ---------- CHALLENGE ---------- */
function Challenge() {
  const pains = [
    "Disconnected systems", "Manual processes", "Poor visibility", "Delivery failures",
    "Warehouse inefficiencies", "Customer frustration", "High operating costs", "No actionable data",
  ];
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>The Challenge</Eyebrow>
          <H2>Logistics is broken by <span className="text-gradient-primary">complexity.</span></H2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Enterprises run their supply chain across a dozen disconnected tools. Data lives in silos.
            Decisions are made in the dark. Customers pay the price.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {pains.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04, ease }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
            >
              <div className="h-1 w-8 rounded-full bg-white/10" />
              <div className="mt-3 text-sm font-medium text-ink">{p}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- PLATFORM ---------- */
function Platform() {
  const modules = [
    { icon: Warehouse, title: "Warehouse Management", copy: "Slotting, pick-paths, receiving and inventory intelligence." },
    { icon: Truck, title: "Transport Management", copy: "Planning, dispatch and multi-leg execution at national scale." },
    { icon: Gauge, title: "Fleet Intelligence", copy: "Telematics, driver scoring, fuel and utilisation analytics." },
    { icon: Bot, title: "AI Automation", copy: "Route optimisation, demand forecasting, exception handling." },
    { icon: Users, title: "Customer Experience", copy: "Portals, tracking, SMS & WhatsApp notifications, self-service." },
    { icon: LineChart, title: "Business Intelligence", copy: "Executive dashboards and operational insight in real time." },
  ];
  return (
    <Section id="platform">
      <div className="max-w-3xl">
        <Eyebrow>The POTLAKA Platform</Eyebrow>
        <H2>One Platform.<br/><span className="text-gradient-gold">Every Logistics Operation.</span></H2>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          The Enterprise Logistics Operating System — six deeply integrated modules on a single, cloud-native architecture.
        </p>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition-colors hover:border-white/15"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[image:var(--gradient-primary)] opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold ring-hairline">
              <m.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.copy}</p>
            <div className="mt-8 inline-flex items-center gap-1 text-xs font-medium text-ink-muted transition-colors group-hover:text-gold">
              Explore module <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Ingest", copy: "Orders, WMS, TMS, telematics, ERP — unified into one operating layer." },
    { n: "02", title: "Optimise", copy: "AI plans routes, allocates fleet, predicts demand and pre-empts exceptions." },
    { n: "03", title: "Execute", copy: "Drivers, warehouses and dispatch run the plan through mobile and web." },
    { n: "04", title: "Prove", copy: "OTP, GPS, signature and chain-of-custody at every handover." },
    { n: "05", title: "Learn", copy: "Every event feeds the model. The platform improves with every drop." },
  ];
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>How It Works</Eyebrow>
        <H2>An operating system for your <span className="text-gradient-primary">supply chain.</span></H2>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="relative bg-background/60 p-7"
          >
            <div className="font-mono text-xs text-gold">{s.n}</div>
            <div className="mt-3 text-lg font-semibold text-ink">{s.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.copy}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- AI ---------- */
function AISection() {
  const caps = [
    "Predict delays before they occur",
    "Optimise routes across your fleet",
    "Allocate drivers to demand",
    "Forecast volume by hour, day, week",
    "Cut fuel with intelligent sequencing",
    "Verify addresses and authenticate deliveries",
    "Surface executive insight in real time",
    "Automate exception handling end-to-end",
  ];
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-10 md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
        <div className="relative grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Artificial Intelligence</Eyebrow>
            <H2>Intelligence built into <span className="text-gradient-gold">every decision.</span></H2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              The POTLAKA AI engine turns raw logistics data into decisions — continuously, autonomously and at enterprise scale.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {caps.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
                className="flex items-start gap-3 rounded-xl glass px-4 py-3"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-ink">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- OUTCOMES ---------- */
function Outcomes() {
  const kpis = [
    { v: "-28%", l: "Cost per delivery" },
    { v: "+42%", l: "Warehouse throughput" },
    { v: "98.4%", l: "On-time delivery" },
    { v: "-19%", l: "Fuel spend" },
  ];
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>Business Outcomes</Eyebrow>
        <H2>We don't sell software.<br/>We deliver <span className="text-gradient-primary">measurable results.</span></H2>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.l}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06, ease }}
            className="rounded-3xl border border-white/5 bg-white/[0.02] p-8"
          >
            <div className="font-display text-5xl font-semibold text-gradient-gold">{k.v}</div>
            <div className="mt-3 text-sm text-ink-muted">{k.l}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- SAFETY, SECURITY & AUTOMATION ---------- */
function SafetySecurity() {
  const items = [
    { icon: ShieldCheck, title: "Enterprise Security", copy: "POPIA-aligned data handling, encrypted handovers and auditable chain-of-custody across every logistics workflow." },
    { icon: HardHat, title: "Workplace Safety", copy: "Driver behaviour monitoring, vehicle telematics and warehouse safety protocols that protect your people, assets and reputation." },
    { icon: Bot, title: "Process Automation", copy: "Automated dispatch, routing, notifications and reporting remove repetitive tasks and reduce human error." },
    { icon: Users, title: "People-First Operations", copy: "When systems handle the routine, your staff gain time to focus on customers, exceptions and growth." },
  ];
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>Safety, Security &amp; Automation</Eyebrow>
        <H2>
          Protecting people, assets and data while{" "}
          <span className="text-gradient-primary">simplifying operations</span>.
        </H2>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          Our solutions cover security and safety within transport, logistics and warehousing.
          We simplify processes by the application of automation — giving you and your staff more
          time to focus on what matters.
        </p>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease }}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-7 transition-colors hover:border-white/15"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold ring-hairline">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- MANAGED SERVICES ---------- */
function Managed() {
  const services = [
    "Warehousing", "Distribution", "Fleet Operations", "Last-Mile Delivery",
    "Returns Management", "Fulfilment", "Reverse Logistics", "National Distribution",
    "Dedicated Fleet", "Logistics Outsourcing",
  ];
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow>Managed Logistics Services</Eyebrow>
          <H2>Technology that <span className="text-gradient-gold">delivers.</span></H2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Deploy the POTLAKA platform inside your organisation — or let our operations teams run
            your logistics using the same enterprise-grade technology.
          </p>
          <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold">
            Explore managed services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s} className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-4 text-sm text-ink">
              {s}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- BANKING ---------- */
function Banking() {
  const solutions = ["High-Value Consignments", "Sensitive Documents", "Branch & ATM Logistics", "Customer Device Deployment", "Secure Asset Movement", "Confidential Materials", "Retail & Corporate Deliveries", "Regulated Item Handling"];
  const security = ["OTP Verification", "Identity Verification", "GPS Verification", "Electronic Signatures", "Driver Authentication", "Chain of Custody", "Audit Trails", "POPIA-Aligned"];
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[oklch(0.10_0.02_260)] p-10 md:p-16">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Banking &amp; Financial Services</Eyebrow>
            <H2>Secure financial <span className="text-gradient-gold">logistics.</span></H2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Technology-enabled logistics for banks, financial institutions and fintechs — engineered
              around chain-of-custody, verification and compliance.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Solutions</div>
              <ul className="mt-4 space-y-2.5">
                {solutions.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-ink"><Landmark className="h-3.5 w-3.5 text-ink-muted" />{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Enterprise Security</div>
              <ul className="mt-4 space-y-2.5">
                {security.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-ink"><ShieldCheck className="h-3.5 w-3.5 text-ink-muted" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- INDUSTRIES ---------- */
function Industries() {
  const list = [
    { icon: Landmark, name: "Banks" },
    { icon: Building2, name: "Financial Services" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Wrench, name: "Mining" },
    { icon: Building2, name: "Government" },
    { icon: Pill, name: "Healthcare" },
    { icon: Pill, name: "Pharmaceutical" },
    { icon: Truck, name: "Fleet Operators" },
    { icon: Boxes, name: "Logistics" },
    { icon: Warehouse, name: "Warehousing" },
    { icon: RouteIcon, name: "Distribution" },
    { icon: Wrench, name: "Construction" },
    { icon: ShieldCheck, name: "Insurance" },
    { icon: Wifi, name: "Telecoms" },
    { icon: Package, name: "E-Commerce" },
    { icon: Fuel, name: "Automotive" },
    { icon: ShoppingBag, name: "FMCG" },
  ];
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>Industries</Eyebrow>
        <H2>Engineered for the enterprises that <span className="text-gradient-primary">move Africa.</span></H2>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {list.map((i) => (
          <div key={i.name} className="group flex flex-col items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-white/15">
            <i.icon className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-ink">{i.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- TRIAL ---------- */
function Trial() {
  const included = [
    "Enterprise platform access",
    "Live onboarding",
    "AI route optimisation",
    "Warehouse management",
    "Driver mobile application",
    "Customer portal",
    "Executive dashboards",
    "SMS & WhatsApp notifications",
    "Technical implementation support",
    "Performance reporting",
  ];
  return (
    <Section id="trial">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-10 md:p-20">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
        <div className="relative grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <Eyebrow>30-Day Enterprise Trial</Eyebrow>
            <H2>Experience the future of logistics — <span className="text-gradient-gold">live.</span></H2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              Deploy the POTLAKA Enterprise Logistics Operating System in a real business environment
              and see measurable operational improvement within 30 days.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[oklch(0.14_0.02_260)] shadow-glow-gold transition-transform hover:scale-[1.02]">
                Start My Free 30-Day Trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-ink hover:bg-white/10">
                Book a Live Demonstration
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-5 text-xs text-ink-muted">
              <span className="inline-flex items-center gap-1.5"><Timer className="h-3.5 w-3.5" /> 30 days</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> No installation</span>
              <span className="inline-flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5" /> Measurable results</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-gold">What's included</div>
            <ul className="mt-5 grid gap-2.5">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative py-32">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>POTLAKA</Eyebrow>
          <H2 className="mx-auto">Technology. <span className="text-gradient-gold">Intelligence.</span> Execution.</H2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Service. Innovation. Simplified.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant">
              Book a Live Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[oklch(0.14_0.02_260)] shadow-glow-gold">
              Start Free 30-Day Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
