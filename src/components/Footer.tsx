import { Link } from "@tanstack/react-router";
import { Facebook, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE, PHONE_HREF } from "./CallButton";

const FACEBOOK = "https://www.facebook.com/people/Langwarrin-spa-hire/100063760905681/";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-navy text-white/85">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl p-4 inline-block">
            <Logo className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm tracking-[0.22em] uppercase text-white/60">
            Relax. Unwind. Enjoy.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/spas", label: "Our Spas" },
              { to: "/service-area", label: "Service Area" },
              { to: "/hire-terms", label: "Hire Terms" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-leaf transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-leaf">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-leaf"
              >
                <Facebook className="h-4 w-4" /> Follow on Facebook
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>
                Servicing Melbourne's South East &amp; Mornington Peninsula
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Bookings</h3>
          <p className="mt-4 text-sm text-white/80">
            All bookings are made by phone only. Give us a call to check availability and lock
            in your date.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-leaf text-navy px-5 py-2.5 font-semibold hover:brightness-105"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-5 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {year} Langwarrin Spa Hire. All rights reserved.</p>
          <p>Melbourne, Victoria — Australia</p>
        </div>
      </div>
    </footer>
  );
}
