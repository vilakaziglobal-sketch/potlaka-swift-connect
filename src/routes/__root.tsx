import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "POTLAKA — Logistics Technology for South African Enterprises" },
      {
        name: "description",
        content:
          "POTLAKA develops logistics technology for warehousing, transport, fleet and last-mile delivery for South African enterprises.",
      },
      { name: "author", content: "POTLAKA.COM" },
      { property: "og:title", content: "POTLAKA — Logistics Technology for South African Enterprises" },
      {
        property: "og:description",
        content:
          "Logistics technology for warehousing, transport, fleet and last-mile delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "POTLAKA" },
      { property: "og:locale", content: "en_ZA" },
      { property: "og:url", content: "https://www.potlaka.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@potlakacom" },
      { name: "twitter:title", content: "POTLAKA — Logistics Technology for South African Enterprises" },
      { name: "twitter:description", content: "Logistics technology for warehousing, transport, fleet and last-mile delivery." },
      { name: "theme-color", content: "#0b1020" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.potlaka.com/#organization",
              name: "POTLAKA.COM",
              legalName: "Vilakazi Global SA (Pty) Ltd",
              url: "https://www.potlaka.com",
              logo: "https://www.potlaka.com/favicon.ico",
              email: "ops@potlaka.com",
              telephone: "+27113832537",
              areaServed: { "@type": "Country", name: "South Africa" },
              sameAs: [],
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://www.potlaka.com/#localbusiness",
              name: "POTLAKA.COM",
              image: "https://www.potlaka.com/favicon.ico",
              url: "https://www.potlaka.com",
              telephone: "+27113832537",
              email: "ops@potlaka.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
                addressRegion: "Gauteng",
              },
              areaServed: { "@type": "Country", name: "South Africa" },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.potlaka.com/#website",
              url: "https://www.potlaka.com",
              name: "POTLAKA.COM",
              publisher: { "@id": "https://www.potlaka.com/#organization" },
              inLanguage: "en-ZA",
            },
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
