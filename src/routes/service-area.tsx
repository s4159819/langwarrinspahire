import { createFileRoute } from "@tanstack/react-router";
import { Facebook, PhoneCall } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SuburbGrid } from "@/components/SuburbGrid";
import { MapEmbed } from "@/components/MapEmbed";
import { CallButton, PHONE } from "@/components/CallButton";
import { CallBanner } from "@/components/CallBanner";

const TITLE = "Service Area — Melbourne South East & Mornington Peninsula | Langwarrin Spa Hire";
const DESC = "We service select South East Melbourne suburbs including Frankston, Cranbourne, Berwick, the Mornington Peninsula and more. Not sure? Call 0447 775 332.";
const FACEBOOK = "https://www.facebook.com/people/Langwarrin-spa-hire/100063760905681/";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/service-area" },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: ServiceAreaPage,
});

function ServiceAreaPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Where We Deliver"
        title="Explore Our Service Areas"
        subtitle="We service select parts of Victoria's South East — please check your suburb is within our range before enquiring."
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-14">
        <p className="eyebrow">Suburbs We Cover</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold">Our regular service suburbs</h2>
        <div className="mt-8">
          <SuburbGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 pb-14">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <MapEmbed />
          </div>
          <div className="lg:col-span-2 rounded-3xl bg-card border border-border p-6 md:p-8">
            <PhoneCall className="h-8 w-8 text-leaf" />
            <h3 className="mt-3 text-xl font-semibold">Not sure if we service your suburb?</h3>
            <p className="mt-2 text-slate-ink">
              Give us a call and we'll let you know straight away — we're happy to help.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <CallButton variant="primary" size="md" label={`Call ${PHONE}`} />
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 font-semibold text-navy hover:bg-muted"
              >
                <Facebook className="h-4 w-4 text-spa" /> Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallBanner />
    </>
  );
}
