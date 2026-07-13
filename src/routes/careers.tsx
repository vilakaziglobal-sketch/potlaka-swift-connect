import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers at POTLAKA.COM — Shape Last-Mile Logistics" },
      { name: "description", content: "Join a proudly South African, 100% Black-owned technology-driven logistics company building enterprise last-mile delivery." },
      { property: "og:title", content: "Careers at POTLAKA.COM" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

function CareersPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="container-page relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Careers
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
              Build the future of last-mile delivery.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Join a proudly South African, 100% Black-owned technology-driven logistics
              company delivering intelligent solutions for enterprise customers across
              Gauteng and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-28">
        <div className="rounded-3xl border border-border bg-surface-elevated p-10 text-center md:p-16">
          <h2 className="text-balance text-3xl font-semibold text-ink md:text-4xl">
            We're growing our team.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Roles across operations, technology, driver teams and enterprise sales open
            regularly. Introduce yourself and we'll be in touch when a matching role becomes available.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
          >
            Introduce yourself <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
