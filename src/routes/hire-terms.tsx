import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Sparkles, DollarSign } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { CallButton, PHONE } from "@/components/CallButton";
import { CallBanner } from "@/components/CallBanner";

const TITLE = "Hire Terms & Conditions | Langwarrin Spa Hire";
const DESC = "Deposit, clearance requirements, bond and setup rules for hiring a portable spa from Langwarrin Spa Hire. Read before booking.";

export const Route = createFileRoute("/hire-terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/hire-terms" },
    ],
    links: [{ rel: "canonical", href: "/hire-terms" }],
  }),
  component: HireTermsPage,
});

const TERMS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Deposit",
    body: <>A <strong>$200.00 deposit (non-refundable)</strong> must be received two weeks prior to the hire date, and within 7 days of booking, to secure the spa.</>,
  },
  {
    title: "2. Balance payment",
    body: <>The balance is payable by <strong>cash on delivery</strong>. Cards and cheques are not accepted.</>,
  },
  {
    title: "3. Access & clearance",
    body: (
      <>
        <p>Clear access must be available to accommodate the spa. If we arrive to deliver and the hire is cancelled, <strong>50% of the hire fee</strong> is payable.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { size: "6–8 Seaters", w: "2.2m", l: "4.8m" },
            { size: "8–10 Seaters", w: "2.5m", l: "5.0m" },
            { size: "12 Seater", w: "3.0m", l: "5.5m" },
          ].map((c) => (
            <div key={c.size} className="rounded-2xl border border-border bg-white p-4">
              <p className="eyebrow">{c.size}</p>
              <p className="mt-1 text-navy font-semibold">{c.w} <span className="text-slate-ink font-normal">wide</span></p>
              <p className="text-navy font-semibold">{c.l} <span className="text-slate-ink font-normal">long</span></p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  { title: "4. Waiting charge", body: <>A labour waiting charge of <strong>$30.00 per 15 minutes</strong> applies if we need to wait for the area to be cleared.</> },
  { title: "5. Animals", body: <>A cleansing and disinfecting fee of <strong>$200.00</strong> applies if animals have been on or in the spa.</> },
  { title: "6. Bond", body: <>A <strong>minimum $200.00 bond</strong> is required on all spas.</> },
  {
    title: "7. What we provide",
    body: <>Free delivery in our local area, spa setup, chemicals, gas, usage directions, spa emptying, and pick-up.</>,
  },
  {
    title: "8. What you need to provide",
    body: <>A level area with ample access (see clearance dimensions above), a hose and water to fill the spa, and power access.</>,
  },
  { title: "9. Position", body: <>Spas are not to be moved from the setup position.</> },
  {
    title: "10. Not permitted",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Candles, streamers, or urinating in the spa</li>
        <li>Smoking in or near the spa</li>
        <li>Malicious damage or defacing the spa/trailer</li>
        <li>Tampering with the spa or equipment</li>
        <li>Stickers placed on the spa or trailer</li>
      </ul>
    ),
  },
  { title: "11. Delivery time", body: <>Delivery time is arranged and confirmed by phone prior to delivery.</> },
];

function AccordionItem({ title, body, defaultOpen = false }: { title: string; body: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted transition"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy">{title}</span>
        <ChevronDown className={`h-5 w-5 text-spa transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-slate-ink leading-relaxed">{body}</div>}
    </div>
  );
}

function HireTermsPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="The Fine Print"
        title="Spa Hire Terms & Conditions"
        subtitle="Understanding our terms is essential for a smooth rental experience."
      />

      <section className="mx-auto max-w-4xl px-4 md:px-6 py-14">
        <div className="grid gap-3">
          {TERMS.map((t, i) => (
            <AccordionItem key={t.title} title={t.title} body={t.body} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-leaf/40 bg-leaf/15 p-5 flex items-start gap-3">
            <Sparkles className="h-6 w-6 text-navy shrink-0" />
            <p className="text-navy font-medium">All spas are cleaned &amp; a clean filter is installed for every hire.</p>
          </div>
          <div className="rounded-3xl border border-aqua bg-aqua/50 p-5 flex items-start gap-3">
            <DollarSign className="h-6 w-6 text-navy shrink-0" />
            <p className="text-navy font-medium">
              Hire a spa for less than <strong>$13 per hour</strong><span className="text-spa">*</span>
              <span className="block text-xs font-normal text-slate-ink mt-1">*Conditions apply — minimum 24 hours, local area only.</span>
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-ink">Questions about our terms?</p>
          <div className="mt-3">
            <CallButton variant="primary" size="lg" label={`Call ${PHONE}`} />
          </div>
        </div>
      </section>

      <CallBanner />
    </>
  );
}
