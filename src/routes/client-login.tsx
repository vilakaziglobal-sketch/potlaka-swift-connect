import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ShieldCheck, ArrowRight, KeyRound } from "lucide-react";

export const Route = createFileRoute("/client-login")({
  component: ClientLoginPage,
  head: () => ({
    meta: [
      { title: "Client Login — POTLAKA Enterprise Operating System" },
      {
        name: "description",
        content:
          "Secure client access to the POTLAKA Enterprise Operating System — real-time shipment intelligence, control tower dashboards and reporting.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Client Login — POTLAKA EOS" },
      {
        property: "og:description",
        content:
          "Sign in to the POTLAKA Enterprise Operating System.",
      },
    ],
    links: [{ rel: "canonical", href: "/client-login" }],
  }),
});

function ClientLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setNotice(null);
    // The POTLAKA Enterprise Operating System is built outside Lovable and
    // will be wired to this form once the integration endpoint is live.
    setTimeout(() => {
      setSubmitting(false);
      setNotice(
        "The POTLAKA Enterprise Operating System is being integrated. Your account manager will share credentials once your workspace is provisioned.",
      );
    }, 700);
  }

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-primary)]" />
      <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />

      <section className="container-page grid min-h-[calc(100vh-5rem)] gap-14 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        {/* Left: brand / pitch */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Enterprise access
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            POTLAKA<span className="text-[#FF1A1A]">.</span> Enterprise
            <br />
            Operating System
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/75">
            One secure workspace for shipment intelligence, control-tower
            visibility, exception management and executive reporting — built
            for the teams that move South Africa.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { k: "Real-time", v: "Shipment tracking & alerts" },
              { k: "24/7", v: "Control tower visibility" },
              { k: "Role-based", v: "Access & audit trails" },
              { k: "Executive", v: "Reporting & analytics" },
            ].map((s) => (
              <li
                key={s.v}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
              >
                <div className="font-display text-lg font-semibold">{s.k}</div>
                <div className="text-sm text-white/70">{s.v}</div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: login card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-md justify-self-center lg:justify-self-end"
        >
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-elegant backdrop-blur-xl md:p-10">
            <div className="flex items-center gap-3 text-white">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/20 text-accent">
                <KeyRound className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold">Client sign in</h2>
                <p className="text-sm text-white/70">Access your EOS workspace</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                  Work email
                </span>
                <div className="relative mt-2">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.co.za"
                    className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-10 pr-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:bg-white/15"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                  Password
                </span>
                <div className="relative mt-2">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
                  <input
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-10 pr-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:bg-white/15"
                  />
                </div>
              </label>

              <div className="flex items-center justify-between text-xs text-white/70">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/30 bg-white/10 accent-accent" />
                  Remember this device
                </label>
                <a href="mailto:ops@potlaka.com?subject=EOS%20password%20reset" className="font-semibold text-accent hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[oklch(0.14_0.02_260)] shadow-glow-gold transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                {submitting ? "Signing in…" : "Sign in to EOS"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {notice && (
                <div
                  role="status"
                  className="rounded-xl border border-accent/40 bg-accent/10 p-3 text-xs text-white"
                >
                  {notice}
                </div>
              )}
            </form>

            <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/70">
              Don't have an account yet?{" "}
              <Link to="/contact" className="font-semibold text-accent hover:underline">
                Request enterprise access
              </Link>
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] uppercase tracking-wider text-white/50">
            Protected by enterprise-grade encryption
          </p>
        </motion.div>
      </section>
    </div>
  );
}
