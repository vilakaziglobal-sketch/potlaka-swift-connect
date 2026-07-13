import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About POTLAKA.COM — 100% Black-Owned Last-Mile Delivery" },
      { name: "description", content: "Founded in 2020, POTLAKA.COM delivers dependable, technology-driven last-mile logistics for South African enterprises." },
      { property: "og:title", content: "About POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});


function AboutPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="container-page relative grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> About us
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
              Engineered in South Africa. <span className="text-gradient-accent">Built for enterprise.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
              POTLAKA<span className="font-black text-[#FF1A1A]">.</span>COM is a proudly South African, 100% Black-owned technology
              company developing automation for transport, logistics and
              warehousing, and tech-driven last-mile for retailers, distributors,
              banks and e-commerce.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-[image:var(--gradient-primary)] shadow-elegant"
          >
            <div className="absolute inset-0 bg-mesh opacity-60" />
            <div className="relative grid h-full grid-cols-2 gap-4 p-8">
              {[
                { k: "95%", v: "On-time delivery" },
                { k: "24/7", v: "Control tower" },
                { k: "100%", v: "Black-owned" },
                { k: "2020", v: "Est. in SA" },
              ].map((s) => (
                <div key={s.v} className="flex flex-col justify-end rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="font-display text-3xl font-semibold text-white md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/75">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Story */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our story</div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
              Founded to make logistics more reliable.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              Founded in 2020 by
              Managing Director <span className="font-semibold text-ink">Sipho Vilakazi</span>,
              POTLAKA<span className="font-black text-[#FF1A1A]">.</span>COM set out to
              bring professionalism, reliability and technology to last-mile
              logistics for South African enterprises.
            </p>
            <p>
              POTLAKA is the Sesotho word for <em>"Hurry Up"</em> — our promise
              of urgency, responsiveness and dependable service. We move
              business faster through intelligent last-mile execution.
            </p>
            <p>
              We are a technology company that operates as an extension of our
              clients' brands — helping protect their customer promise on each
              delivery.
            </p>
            <p>
              Security and safety are built into every transport,
              logistics and warehousing workflow. Automation reduces the
              routine — freeing your teams to focus on customers, exceptions
              and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-surface py-24 md:py-32">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">What we stand for</div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Professionalism. Reliability. Operational excellence.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              { t: "Professionalism", d: "Every touchpoint upholds the standard your customers expect from your brand." },
              { t: "Reliability", d: "Operational discipline that helps make delivery a dependable part of your business." },
              { t: "Speed", d: "Intelligent routing and dedicated capacity that help move your business faster." },
              { t: "Transparency", d: "Real-time visibility and clear communication at every stage of the journey." },
              { t: "Safety & Automation", d: "Security and safety engineered in. Automation that frees your people to drive growth." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-background p-7">
                <div className="font-display text-2xl font-semibold text-gradient-primary">{v.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-primary)] shadow-elegant">
            <div className="absolute inset-0 bg-mesh opacity-60" />
            <div className="relative flex h-full flex-col justify-between p-8 text-white">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Dedicated fleet
              </div>
              <div>
                <div className="font-display text-5xl font-semibold md:text-6xl">Nationwide</div>
                <div className="mt-2 text-sm text-white/75">Expanding across every major SA metro</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Our fleet</div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              A growing, professionally branded fleet.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              A dedicated fleet of delivery and collection vehicles supports
              business clients across our service network — with a clear
              roadmap to expand into every major South African metro.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
              Partner with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
