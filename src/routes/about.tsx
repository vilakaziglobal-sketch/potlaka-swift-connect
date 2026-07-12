import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import executives from "@/assets/executives.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About POTLAKA.COM — Proudly South African, 100% Black-Owned" },
      { name: "description", content: "POTLAKA.COM — founded in 2020 by Sipho Vilakazi to deliver intelligent, dependable last-mile logistics for South African businesses." },
      { property: "og:title", content: "About POTLAKA.COM" },
      { property: "og:image", content: executives },
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
              company engineering high-tech automation for transport, logistics and
              warehousing, and tech-driven last-mile for retailers, distributors,
              banks and e-commerce leaders.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-elegant"
          >
            <img src={executives} alt="POTLAKA executive team reviewing logistics dashboards" className="h-full w-full object-cover" width={1600} height={1000} />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our story</div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
              Born in a moment that redefined logistics — and built for the decade that follows.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              Founded in 2020 at the height of the COVID-19 pandemic by
              Managing Director <span className="font-semibold text-ink">Sipho Vilakazi</span>,
              POTLAKA<span className="font-black text-[#FF1A1A]">.</span>COM set out to
              raise the bar for a category South African enterprises had every
              reason to expect more from — bringing professionalism, reliability
              and technology to the last mile.
            </p>
            <p>
              POTLAKA is the Sesotho word for <em>"Hurry Up"</em> — our promise
              of urgency, responsiveness and dependable service. We move
              business faster through intelligent last-mile execution.
            </p>
            <p>
              We are not a traditional courier. We are a technology company that
              operates as an extension of our clients' brands — protecting
              their customer promise on every delivery.
            </p>
            <p>
              Security and safety are engineered into every transport,
              logistics and warehousing workflow. Automation strips out the
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
              { t: "Reliability", d: "Operational discipline that turns delivery into a competitive advantage." },
              { t: "Speed", d: "Intelligent routing and dedicated capacity that move your business faster." },
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img src={warehouse} alt="POTLAKA distribution operations" className="h-full w-full object-cover" width={1600} height={1000} loading="lazy" />
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
