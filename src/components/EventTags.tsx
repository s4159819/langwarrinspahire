import {
  Cake, PartyPopper, Trophy, Sparkles, Heart, Flower2, HandHeart, Droplets, Baby,
} from "lucide-react";

const events = [
  { icon: Cake, label: "21st Birthdays" },
  { icon: PartyPopper, label: "Hens & Bucks Parties" },
  { icon: Trophy, label: "AFL Grand Final" },
  { icon: Sparkles, label: "New Year's Eve" },
  { icon: Trophy, label: "Melbourne Cup" },
  { icon: Heart, label: "Valentine's Day" },
  { icon: Flower2, label: "Anniversaries" },
  { icon: HandHeart, label: "Therapeutic / Relaxation" },
  { icon: Baby, label: "Baptisms" },
];

export function EventTags({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-10" : "py-16 md:py-20 soft-gradient"}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {!compact && (
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Occasions</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Perfect for every celebration</h2>
            <p className="mt-4 text-slate-ink">
              From backyard birthdays to grand finals — our spas turn up the vibe.
            </p>
          </div>
        )}
        <ul className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {events.map((e) => (
            <li
              key={e.label}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2 text-sm text-navy shadow-sm"
            >
              <e.icon className="h-4 w-4 text-spa" />
              {e.label}
            </li>
          ))}
        </ul>
        <p className="text-center text-xs text-slate-ink mt-4"><Droplets className="inline h-3 w-3 mr-1" />And so much more.</p>
      </div>
    </section>
  );
}
