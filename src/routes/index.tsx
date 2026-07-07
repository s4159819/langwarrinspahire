import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield, Truck, Sparkles, Flame, CheckCircle2, ArrowRight, PhoneCall,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { CallButton, PHONE } from "@/components/CallButton";
import { WaveDivider } from "@/components/WaveDivider";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SpaCard, SPAS } from "@/components/SpaCard";
import { EventTags } from "@/components/EventTags";
import { SuburbGrid } from "@/components/SuburbGrid";
import { CallBanner } from "@/components/CallBanner";
import { Logo } from "@/components/Logo";
import spaFleetLineup from "@/assets/spa-fleet-lineup.jpg";
import spa12Seater from "@/assets/spa-12-seater.jpg";
import spa810Pearl from "@/assets/spa-8-10-pearl.jpg";
import spa810Blue from "@/assets/spa-8-10-blue.jpg";
import spa68Octagonal from "@/assets/spa-6-8.jpg";
import spa68Rect from "@/assets/spa-6-8-rect.jpg";

const TITLE = "Langwarrin Spa Hire — Mobile Hot Tub Hire, Melbourne South East";
const DESC = "Mobile spa hire across Melbourne's South East & Mornington Peninsula. Delivered, set up and picked up for parties, birthdays and events. Call 0447 775 332.";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
      </Helmet>
      <HomeContent />
    </>
  );
}


const TRUST = [
  { icon: Shield, label: "Australian Commercial Standard" },
  { icon: Truck, label: "Free Local Delivery & Pickup" },
  { icon: Sparkles, label: "Fully Cleaned Every Hire" },
  { icon: Flame, label: "Gas Heated — Fast Heat Up" },
];

const HERO_IMAGES = [
  { src: spa12Seater, alt: "12 Seater Mobile Spa" },
  { src: spa810Pearl, alt: "8–10 Seater Marbled Light Blue Spa" },
  { src: spa810Blue, alt: "8–10 Seater Marbled Blue Spa" },
  { src: spa68Octagonal, alt: "6–8 Seater Octagonal Spa" },
  { src: spa68Rect, alt: "6–8 Seater Rectangular Spa" },
];

function HeroCarousel() {
  const [index, setIndex] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  const goTo = React.useCallback((n: number) => {
    setIndex(((n % HERO_IMAGES.length) + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  const prev = React.useCallback(() => goTo(index - 1), [index, goTo]);
  const next = React.useCallback(() => goTo(index + 1), [index, goTo]);

  React.useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <div className="hidden lg:flex items-center justify-center relative w-full max-w-lg">
      <div className="absolute -inset-6 bg-white/10 rounded-full blur-3xl" />
      <div
        className="relative w-full aspect-[4/3] group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {HERO_IMAGES.map((img, i) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl shadow-navy/40 border-4 border-white/20 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous spa image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-navy shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next spa image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-navy shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to spa image ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const WHY = [
  { icon: Shield, title: "Built to commercial standard", body: "All our spas are constructed to Australian commercial regulations — safe, sturdy and party-ready." },
  { icon: Flame, title: "Gas heating that actually heats", body: "Fast heat-up and excellent heat retention, so the good times keep going." },
  { icon: Sparkles, title: "Cleaned before every hire", body: "Every spa is thoroughly cleaned and fitted with a fresh filter for you." },
  { icon: Truck, title: "Full setup & pack-down", body: "We handle delivery, setup, chemicals and pack-down. You just show up." },
  { icon: CheckCircle2, title: "Local specialists", body: "Based in Langwarrin, servicing the South East & Mornington Peninsula." },
  { icon: PhoneCall, title: "Simple phone booking", body: "Talk to a real person — no faceless online checkout, no guesswork." },
];

function HomeContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-leaf/30 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-end pr-10 opacity-10">
            <div className="w-[520px]"><Logo className="w-full h-auto invert brightness-0" /></div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="max-w-3xl">
              <p className="eyebrow text-aqua">Melbourne's South East · Mornington Peninsula</p>
              <h1 className="mt-4 text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Don't just have a party — <span className="text-leaf">enjoy a luxurious spa</span> hire experience.
              </h1>
              <p className="mt-5 max-w-xl text-white/85 text-lg">
                Melbourne's trusted mobile spa hire. Delivered, set up and ready to relax in for
                your next celebration — big or small.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton variant="accent" size="lg" label={`Call Now — ${PHONE}`} />
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/40 text-white px-6 py-4 font-semibold hover:bg-white/20 transition"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust strip */}
              <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                {TRUST.map((t) => (
                  <li key={t.label} className="flex items-center gap-2.5 text-sm text-white/90 bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-3.5 py-3">
                    <t.icon className="h-5 w-5 text-leaf shrink-0" />
                    <span>{t.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <HeroCarousel />
          </div>
        </div>
        <WaveDivider fill="var(--background)" />
      </section>

      <ProcessSteps />

      {/* Spa range preview */}
      <section className="soft-gradient">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow">Our Range</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Choose your perfect spa</h2>
              <p className="mt-3 text-slate-ink">
                Five spas from cozy 6–8 seaters right up to a 12 seater party spa. All trailer-mounted,
                all gas-heated.
              </p>
            </div>
            <Link to="/spas" className="text-spa font-semibold inline-flex items-center gap-1.5 hover:gap-2 transition-all">
              See all spas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SPAS.map((s) => <SpaCard key={s.slug} spa={s} />)}
          </div>

        </div>
      </section>

      {/* Fleet showcase */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={spaFleetLineup}
              alt="The Langwarrin Spa Hire fleet — a lineup of mobile spa trailers ready to be delivered."
              loading="lazy"
              className="w-full h-[380px] md:h-[520px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
              <p className="eyebrow text-aqua drop-shadow-md">The Fleet</p>
              <h2 className="mt-2 text-white text-2xl md:text-4xl font-bold max-w-2xl leading-tight drop-shadow-lg">
                Melbourne's largest range of mobile spa trailers — ready to roll to your event.
              </h2>
              <p className="mt-3 max-w-xl text-white/90 text-sm md:text-base drop-shadow-md">
                Whatever the size of your party, we've got a spa to suit. All trailer-mounted,
                gas-heated and delivered straight to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EventTags />

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Why Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Why Langwarrin Spa Hire</h2>
          <p className="mt-4 text-slate-ink">Local, personal service — and spas built to actually deliver on the promise.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-3xl bg-card border border-border p-6 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-aqua flex items-center justify-center text-navy">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-slate-ink leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pb-4">
        <div className="rounded-3xl border border-border bg-aqua/40 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Great Value</p>
            <p className="mt-1 text-xl md:text-2xl font-bold text-navy">
              Hire a spa for less than $17 per hour<span className="text-spa">*</span>
            </p>
            <p className="mt-1 text-sm text-slate-ink">
              *Conditions apply — minimum 24 hours, local area only.
            </p>
          </div>
          <Link
            to="/hire-terms"
            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-5 py-2.5 font-semibold text-navy hover:bg-muted"
          >
            See Hire Terms <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Service area teaser */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="eyebrow">Service Area</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">We come to you across the South East.</h2>
            <p className="mt-4 text-slate-ink">
              We proudly service Cranbourne, Frankston, the Mornington Peninsula, Dromana, Rye,
              Rosebud, Hastings, Somerville, Berwick, Balnarring, Dandenong, Rowville, Carrum,
              Seaford, Pakenham, Bayside and the South East Suburbs.
            </p>
            <Link
              to="/service-area"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-navy text-primary-foreground px-6 py-3 font-semibold hover:bg-navy/90"
            >
              View Full Service Area <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <SuburbGrid />
        </div>
      </section>

      <CallBanner />
    </>
  );
}
