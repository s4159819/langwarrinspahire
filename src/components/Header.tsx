import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CallButton } from "./CallButton";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/spas", label: "Our Spas" },
  { to: "/service-area", label: "Service Area" },
  { to: "/hire-terms", label: "Hire Terms" },
  { to: "/contact", label: "Contact" },
] as const;

const FACEBOOK = "https://www.facebook.com/people/Langwarrin-spa-hire/100063760905681/";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/70 backdrop-blur",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="Langwarrin Spa Hire home">
          <Logo className="h-10 md:h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-navy bg-aqua/50" }}
              inactiveProps={{ className: "text-slate-ink hover:text-navy hover:bg-muted" }}
              className="px-3 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-spa hover:bg-aqua/50 transition"
            aria-label="Follow Langwarrin Spa Hire on Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <div className="hidden sm:block">
            <CallButton variant="accent" size="sm" label="Call Now" />
          </div>
          <button
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full text-navy hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-navy bg-aqua/50" }}
                inactiveProps={{ className: "text-slate-ink" }}
                className="px-3 py-3 rounded-lg text-base font-medium"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <CallButton variant="primary" size="md" />
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-muted text-spa"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
