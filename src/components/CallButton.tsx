import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export const PHONE = "0447 775 332";
export const PHONE_HREF = "tel:0447775332";

type Variant = "primary" | "accent" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-primary-foreground hover:bg-navy/90 shadow-lg shadow-navy/20",
  accent: "bg-leaf text-navy hover:brightness-105 shadow-lg shadow-leaf/30",
  ghost: "bg-white/10 text-white hover:bg-white/20 backdrop-blur border border-white/30",
  white: "bg-white text-navy hover:bg-white/90 shadow-lg",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-base px-5 py-3 gap-2",
  lg: "text-lg px-7 py-4 gap-2.5",
};

export function CallButton({
  variant = "primary",
  size = "md",
  label,
  className,
}: {
  variant?: Variant;
  size?: Size;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <Phone className="h-4 w-4" aria-hidden />
      <span>{label ?? `Call ${PHONE}`}</span>
    </a>
  );
}

/** Floating mobile call button — fixed bottom-right, thumb-reachable */
export function FloatingCall() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-5 right-5 z-50 md:hidden inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-3.5 text-navy font-semibold shadow-xl shadow-navy/30 ring-4 ring-white/60"
      aria-label={`Call ${PHONE}`}
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
