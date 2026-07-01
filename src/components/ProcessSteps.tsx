import { Truck, Sparkles, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Truck,
    title: "We Deliver & Set Up",
    body: "Your chosen spa is delivered to your door, fully prepped with chemicals and gas — ready to heat.",
  },
  {
    icon: Sparkles,
    title: "You Relax & Enjoy",
    body: "Full instructions provided so it's ready the moment it's hot. Hassle-free from start to finish.",
  },
  {
    icon: PackageCheck,
    title: "We Pick Up & Clean",
    body: "After your event we collect and empty the spa. No mess for you to deal with the next day.",
  },
];

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Three easy steps to spa heaven</h2>
        <p className="mt-4 text-slate-ink">
          You focus on the party — we handle everything else.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-3xl bg-card p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-leaf text-navy font-bold text-sm flex items-center justify-center shadow">
              {i + 1}
            </div>
            <div className="h-12 w-12 rounded-2xl bg-aqua flex items-center justify-center text-navy">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-slate-ink text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
