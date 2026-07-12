import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Warehouse, Truck, Radar, LineChart,
  Users, Bot, ShieldCheck, Cloud, Network, Lock, Zap, Activity,
  Package, CheckCircle2, ArrowUpRight, TrendingUp,
  Gauge, BrainCircuit, Terminal,
} from "lucide-react";


export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "POTLAKA — Engineering the Future of Logistics in Africa" },
      {
        name: "description",
        content:
          "POTLAKA builds the AI-powered Enterprise Logistics Operating System that unifies warehousing, transport, fleet and last-mile delivery into one intelligent platform.",
      },
      { property: "og:title", content: "POTLAKA — Engineering the Future of Logistics" },
      {
        property: "og:description",
        content:
          "Africa's logistics technology company. One AI-powered platform for warehousing, transport, fleet and last-mile delivery.",
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
            <span className="text-gradient-gold">future of logistics.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            POTLAKA has built an AI-powered <span className="text-ink">Enterprise Logistics Operating System</span> that unifies warehousing, transport, fleet and last-mile delivery into one intelligent platform — with real-time reporting intelligence for your clients.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Book a live demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink-muted/70">
            <span className="flex items-center gap-2">
              <span className="text-sm font-bold text-gold">95%</span> On-time delivery
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-muted/40" />
            <span className="flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-gold" /> Real-time client reporting
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-muted/40" />
            <span>Cloud Native</span>
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
          <KPI label="On-time delivery" value="95%" trend="+2.1" />
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
          <MiniCard icon={<LineChart className="h-4 w-4" />} title="Client report auto-sent" sub="Live SLA dashboard · 08:00" />
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
    "Disconnected systems", "Manual processes", "Zero visibility", "Failed deliveries",
    "Warehouse bottlenecks", "Frustrated customers", "Runaway costs", "Blind decisions",
  ];
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>The Challenge</Eyebrow>
          <H2>Logistics is broken by <span className="text-gradient-primary">complexity.</span></H2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Enterprises run their supply chain across a dozen disconnected tools. Data sits in silos.
            Decisions are made blind. Customers pay the price.
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
    { icon: Warehouse, title: "Warehouse Management", copy: "Slotting, pick-paths, receiving and real-time inventory intelligence." },
    { icon: Truck, title: "Transport Management", copy: "Planning, dispatch and multi-leg execution at national scale." },
    { icon: Gauge, title: "Fleet Intelligence", copy: "Telematics, driver scoring, fuel and utilisation analytics." },
    { icon: Bot, title: "AI Automation", copy: "Route optimisation, demand forecasting and autonomous exception handling." },
    { icon: Users, title: "Customer Experience", copy: "Portals, live tracking and SMS & WhatsApp notifications built for self-service." },
    { icon: LineChart, title: "Client Reporting", copy: "Real-time dashboards and automated reports — no more manual updates." },
  ];
  return (
    <Section id="platform">
      <div className="max-w-3xl">
        <Eyebrow>The POTLAKA Platform</Eyebrow>
        <H2>One platform.<br/><span className="text-gradient-gold">Every logistics operation.</span></H2>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          The Enterprise Logistics Operating System — six deeply integrated modules on one cloud-native architecture.
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
    { n: "01", title: "Ingest", copy: "Orders, WMS, TMS, telematics and ERP — unified into one operating layer." },
    { n: "02", title: "Optimise", copy: "AI plans routes, allocates fleet, forecasts demand and pre-empts exceptions." },
    { n: "03", title: "Execute", copy: "Drivers, warehouses and dispatch run the plan across mobile and web." },
    { n: "04", title: "Prove", copy: "OTP, GPS, signature and chain-of-custody captured at every handover." },
    { n: "05", title: "Report", copy: "Real-time dashboards and automated client reports replace manual updates." },
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
    "Predict delays before they happen",
    "Optimise routes across your entire fleet",
    "Match drivers to demand in real time",
    "Forecast volume by hour, day and week",
    "Cut fuel spend with intelligent sequencing",
    "Verify addresses and authenticate every delivery",
    "Surface executive insight the moment it matters",
    "Handle exceptions end-to-end, automatically",
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
              Book a live demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
