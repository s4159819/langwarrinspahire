import { Users, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import spa12Seater from "@/assets/spa-12-seater.jpg";
import spa810Pearl from "@/assets/spa-8-10-pearl.jpg";
import spa810Blue from "@/assets/spa-8-10-blue.jpg";
import spa68Octagonal from "@/assets/spa-6-8.jpg";
import spa68Rect from "@/assets/spa-6-8-rect.jpg";

export interface Spa {
  slug: string;
  name: string;
  seats: string;
  jets: number;
  short: string;
  image?: string;
}

export const SPAS: Spa[] = [
  {
    slug: "6-8-rectangular",
    name: "6–8 Seater Rectangular Spa",
    seats: "Seats 6–8",
    jets: 6,
    short: "Trailer-mounted with access stairs, handrail, LPG gas heater, 6 full-flow jets and air massage manifold.",
    image: spa68Rect,
  },
  {
    slug: "6-8-octagonal",
    name: "6–8 Seater Octagonal Spa",
    seats: "Seats 6–8",
    jets: 4,
    short: "A social octagonal shape with 4 full-flow jets, air massage, deep contoured seats and LPG gas heating.",
    image: spa68Octagonal,
  },
  {
    slug: "8-10-pearl",
    name: "8–10 Seater Spa — Marbled Light Blue",
    seats: "Seats 8–10",
    jets: 6,
    short: "Marbled light blue octagonal interior with 6 full-flow jets, air massage, timber access step, stainless handrail and fast LPG gas heating.",
    image: spa810Pearl,
  },
  {
    slug: "8-10-blue",
    name: "8–10 Seater Spa — Marbled Blue",
    seats: "Seats 8–10",
    jets: 6,
    short: "Marbled blue octagonal interior with 6 full-flow jets, air massage, timber access step, stainless handrail and fast LPG gas heating.",
    image: spa810Blue,
  },
  {
    slug: "12-seater",
    name: "12 Seater Spa",
    seats: "Seats 12",
    jets: 12,
    short: "Our biggest spa. Ideal for large gatherings — 12 full-flow jets, air massage and rapid gas heat-up.",
    image: spa12Seater,
  },
];


/** Decorative fallback SVG or real photo */
function SpaVisual({ spa }: { spa: Spa }) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden hero-gradient flex items-center justify-center">
      {spa.image ? (
        <img
          src={spa.image}
          alt={`${spa.name} — mobile spa hire`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

      ) : (
        <svg viewBox="0 0 200 120" className="w-2/3 h-2/3 opacity-90" aria-hidden>
          <ellipse cx="100" cy="80" rx="80" ry="22" fill="rgba(255,255,255,0.15)" />
          <ellipse cx="100" cy="72" rx="72" ry="16" fill="rgba(255,255,255,0.35)" />
          <path d="M20,70 Q60,55 100,70 T180,70" stroke="white" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M20,80 Q60,66 100,80 T180,80" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
      )}
      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/95 text-navy text-xs font-semibold px-3 py-1 shadow">
        <Users className="h-3 w-3" /> {spa.seats}
      </span>
    </div>
  );
}

export function SpaCard({ spa, href = "/spas" }: { spa: Spa; href?: string }) {
  return (
    <article className="group rounded-3xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="p-3">
        <SpaVisual spa={spa} />
      </div>
      <div className="p-5 pt-2">
        <h3 className="text-lg font-semibold text-navy">{spa.name}</h3>
        <p className="mt-2 text-sm text-slate-ink leading-relaxed">{spa.short}</p>
        <Link
          to={href}
          hash={spa.slug}
          className="mt-4 inline-flex items-center gap-1.5 text-spa font-semibold text-sm group-hover:gap-2.5 transition-all"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
