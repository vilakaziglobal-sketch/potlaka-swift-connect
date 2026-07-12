import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-[oklch(0.14_0.02_260)] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-mesh" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-5 [&_div>span]:text-white">
              <Logo />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              POTLAKA<span className="font-black text-[#FF1A1A]">.</span>COM is a proudly South African, 100% Black-owned technology
              company engineering high-tech automation for transport, logistics and
              warehousing, and tech-driven last-mile for retailers,
              distributors, banks and e-commerce leaders.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:ops@potlaka.com" className="hover:text-white">ops@potlaka.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+27113832537" className="hover:text-white">+27 11 383 2537</a>
              </li>
            </ul>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/technology", label: "Technology" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Solutions"
            links={[
              { to: "/services", label: "Warehouse automation" },
              { to: "/services", label: "Fleet telematics" },
              { to: "/services", label: "Tech-driven last-mile" },
              { to: "/industries", label: "Industries" },
              { to: "/contact", label: "Business account" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vilakazi Global SA (Pty) Ltd trading as POTLAKA<span className="font-black text-[#FF1A1A]">.</span>COM. All rights reserved.</p>
          <p>Proudly South African · 100% Black-owned</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l, i) => (
          <li key={`${l.to}-${i}`}>
            <Link to={l.to} className="text-white/80 transition-colors hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
