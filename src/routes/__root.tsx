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
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingCall } from "../components/CallButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-4xl font-bold text-navy">Page not found</h1>
        <p className="mt-3 text-slate-ink">
          Looks like this page drifted away on the tide. Let's get you back.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full bg-navy px-5 py-3 font-semibold text-primary-foreground hover:bg-navy/90"
        >
          Back to home
        </Link>
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
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-navy">Something went wrong</h1>
        <p className="mt-2 text-slate-ink">Please refresh and try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-navy px-5 py-3 font-semibold text-primary-foreground hover:bg-navy/90"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border bg-white px-5 py-3 font-semibold text-navy hover:bg-muted">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "Langwarrin Spa Hire — Portable Hot Tub Hire, Melbourne South East";
const SITE_DESC =
  "Melbourne's South East & Mornington Peninsula spa hire specialists. Portable hot tubs delivered, set up and picked up for parties, birthdays and events. Call 0447 775 332.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "theme-color", content: "#0F3D63" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Langwarrin Spa Hire" },
      { property: "og:image", content: "https://langwarrinspahire.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://langwarrinspahire.lovable.app/og-image.jpg" },
      { property: "og:url", content: "https://langwarrinspahire.lovable.app/" },

    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Langwarrin Spa Hire",
          image: "",
          telephone: "+61447775332",
          areaServed: [
            "Cranbourne", "Frankston", "Mornington Peninsula", "Dromana", "Rye",
            "Rosebud", "Hastings", "Somerville", "Berwick", "Balnarring", "Dandenong",
            "Rowville", "Carrum", "Seaford", "Pakenham", "Bayside", "South East Suburbs",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Langwarrin",
            addressRegion: "VIC",
            postalCode: "3910",
            addressCountry: "AU",
          },
          slogan: "Relax. Unwind. Enjoy.",
          sameAs: [
            "https://www.facebook.com/people/Langwarrin-spa-hire/100063760905681/",
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
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingCall />
      </div>
    </QueryClientProvider>
  );
}
