import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, PhoneCall, AlertCircle } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { CallButton, PHONE } from "@/components/CallButton";
import { ContactForm } from "@/components/ContactForm";
import { EventTags } from "@/components/EventTags";
import { MapEmbed } from "@/components/MapEmbed";

const TITLE = "Contact Us | Langwarrin Spa Hire — Melbourne South East";
const DESC = "Enquire about hiring a mobile spa. All bookings are made by phone — 0447 775 332. Use our form for general enquiries and quote requests.";
const FACEBOOK = "https://www.facebook.com/people/Langwarrin-spa-hire/100063760905681/";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Turn your party into an unforgettable event with a spa that provides fun and relaxation for you and your guests. We deliver and prepare the spa so it's ready to use with a minimum of fuss."
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-14">
        {/* Phone-only notice */}
        <div className="rounded-3xl bg-navy text-white p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-leaf shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white text-lg">All bookings must be made by phone.</p>
              <p className="text-white/80 text-sm mt-0.5">
                Use the form below for general enquiries and quote requests only.
              </p>
            </div>
          </div>
          <CallButton variant="accent" size="lg" label={`Call ${PHONE}`} />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow">Enquiry Form</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6">
              <PhoneCall className="h-8 w-8 text-leaf" />
              <h3 className="mt-3 text-lg font-semibold">Call for bookings</h3>
              <a href="tel:0447775332" className="mt-1 block text-2xl font-bold text-navy hover:text-spa">
                {PHONE}
              </a>
              <p className="mt-2 text-sm text-slate-ink">Real person, real fast — no booking system runaround.</p>
            </div>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl border border-border bg-card p-6 hover:bg-muted transition"
            >
              <Facebook className="h-8 w-8 text-spa" />
              <h3 className="mt-3 text-lg font-semibold">Follow us on Facebook</h3>
              <p className="mt-1 text-sm text-slate-ink">See our latest spas out at events across Melbourne.</p>
            </a>
            <div className="rounded-3xl border border-border bg-aqua/50 p-6">
              <h3 className="text-lg font-semibold text-navy">We only service select parts of Victoria</h3>
              <p className="mt-1 text-sm text-slate-ink">Check your suburb is on our list before enquiring.</p>
              <Link
                to="/service-area"
                className="mt-4 inline-flex items-center rounded-full bg-white border border-border px-4 py-2 text-sm font-semibold text-navy hover:bg-white/80"
              >
                View Service Area
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <EventTags compact />

      <section className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
        <MapEmbed />
      </section>
    </>
  );
}
