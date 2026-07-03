import { createFileRoute } from "@tanstack/react-router";
import { Users, Sparkles, Flame, ShieldCheck } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { CallButton, PHONE } from "@/components/CallButton";
import { ProcessSteps } from "@/components/ProcessSteps";
import { EventTags } from "@/components/EventTags";
import { CallBanner } from "@/components/CallBanner";
import { SPAS } from "@/components/SpaCard";

const TITLE = "Our Spas — Book Your Luxurious Spa Hire | Langwarrin Spa Hire";
const DESC = "Explore our range of trailer-mounted mobile spas — 6–8, 8–10 and 12 seaters. Gas heated, jetted, fully set up. Book by phone: 0447 775 332.";

export const Route = createFileRoute("/spas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/spas" },
    ],
    links: [{ rel: "canonical", href: "/spas" }],
  }),
  component: SpasPage,
});

function SpasPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Our Range"
        title="Book Your Luxurious Spa Hire"
        subtitle="We've been in the spa hiring business for a long time — expect an efficient, high-quality setup and a spa that's ready to enjoy."
      >
        <CallButton variant="accent" size="lg" label={`Call to Book — ${PHONE}`} />
      </PageHeroBanner>

      {/* Highlight banner */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 mt-10">
        <div className="rounded-3xl bg-leaf/15 border border-leaf/40 p-5 md:p-6 flex items-center gap-4">
          <div className="h-11 w-11 rounded-full bg-leaf/30 flex items-center justify-center text-navy">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-navy font-medium">
            All spas are cleaned &amp; fitted with a fresh filter for every hire.
          </p>
        </div>
      </section>

      {/* Phone-only banner */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 mt-6">
        <div className="rounded-3xl bg-navy text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
          <div>
            <p className="eyebrow text-aqua">Important</p>
            <p className="mt-1 text-xl md:text-2xl font-semibold text-white">
              All bookings are made by phone only.
            </p>
            <p className="mt-1 text-white/80 text-sm">Talk to us to check availability and lock in your date.</p>
          </div>
          <CallButton variant="accent" size="lg" label={`Call ${PHONE}`} />
        </div>
      </section>

      {/* Spa details */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        <div className="grid gap-10">
          {SPAS.map((spa, idx) => (
            <article
              key={spa.slug}
              id={spa.slug}
              className="scroll-mt-24 grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-3xl bg-card border border-border p-6 md:p-8 shadow-sm"
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden hero-gradient">
                  {spa.image ? (
                    <img
                      src={spa.image}
                      alt={`${spa.name} — mobile spa hire Melbourne`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full opacity-90" aria-hidden preserveAspectRatio="xMidYMid slice">
                      <ellipse cx="100" cy="80" rx="90" ry="24" fill="rgba(255,255,255,0.15)" />
                      <ellipse cx="100" cy="72" rx="80" ry="18" fill="rgba(255,255,255,0.35)" />
                      <path d="M20,70 Q60,55 100,70 T180,70" stroke="white" strokeWidth="2" fill="none" opacity="0.7" />
                      <path d="M20,82 Q60,68 100,82 T180,82" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                    </svg>
                  )}
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white text-navy text-sm font-semibold px-3 py-1.5 shadow">
                    <Users className="h-4 w-4" /> {spa.seats}
                  </span>
                </div>
              </div>
              <div>
                <p className="eyebrow">Spa {idx + 1} of {SPAS.length}</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold">{spa.name}</h2>
                <p className="mt-4 text-slate-ink leading-relaxed">{spa.short}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm">
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-leaf" /> Commercial build</li>
                  <li className="flex items-center gap-2"><Flame className="h-4 w-4 text-leaf" /> LPG gas heating</li>
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-leaf" /> {spa.seats}</li>
                  <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-leaf" /> {spa.jets} full-flow jets</li>
                </ul>
                <div className="mt-6">
                  <CallButton variant="primary" size="md" label={`Call to Book This Spa`} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <EventTags />
      <ProcessSteps />
      <CallBanner title="Found your spa?" subtitle="Give us a call and we'll get your date locked in." />
    </>
  );
}
