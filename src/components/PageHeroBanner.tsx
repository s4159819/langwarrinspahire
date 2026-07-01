import { WaveDivider } from "./WaveDivider";
import type { ReactNode } from "react";

export function PageHeroBanner({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative hero-gradient text-white overflow-hidden">
      {/* subtle bubbles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-leaf/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-28 text-center">
        {eyebrow && <p className="eyebrow text-aqua mb-4">{eyebrow}</p>}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-base md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
      <WaveDivider fill="var(--background)" />
    </section>
  );
}
