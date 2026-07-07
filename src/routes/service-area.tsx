import { Helmet } from "react-helmet-async";
import { PhoneCall } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SuburbGrid } from "@/components/SuburbGrid";
import { MapEmbed } from "@/components/MapEmbed";
import { CallButton, PHONE } from "@/components/CallButton";
import { CallBanner } from "@/components/CallBanner";
import spaTrailersBranded from "@/assets/spa-trailers-branded.jpg";

const TITLE = "Service Area — Melbourne South East & Mornington Peninsula | Langwarrin Spa Hire";
const DESC = "We service select South East Melbourne suburbs including Frankston, Cranbourne, Berwick, the Mornington Peninsula and more. Not sure? Call 0447 775 332.";

export default function ServiceAreaPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
      </Helmet>
      <ServiceAreaContent />
    </>
  );
}

function ServiceAreaContent() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Where We Deliver"
        title="Explore Our Service Areas"
        subtitle="We service select parts of Victoria's South East — please check your suburb is within our range before enquiring."
      />

      {/* Branded fleet visual */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14">
        <div className="relative overflow-hidden rounded-3xl shadow-lg border border-border">
          <img
            src={spaTrailersBranded}
            alt="Two branded Langwarrin Spa Hire trailers with 0447 775 332 signage, ready for delivery."
            loading="lazy"
            className="w-full h-[220px] md:h-[320px] object-cover object-center"
          />
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      <CallBanner />
    </>
  );
}
