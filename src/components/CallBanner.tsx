import { Link } from "react-router-dom";
import { CallButton } from "./CallButton";

export function CallBanner({
  title = "Ready to Relax?",
  subtitle = "Bookings are taken by phone only. Call us to check availability and lock in your date.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-14">
      <div className="relative overflow-hidden rounded-3xl hero-gradient text-white p-8 md:p-14 text-center shadow-xl">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-leaf/25 blur-3xl" aria-hidden />
        <div className="relative">
          <h2 className="text-white text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">{subtitle}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CallButton variant="accent" size="lg" />
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 backdrop-blur px-6 py-3 font-semibold text-white hover:bg-white/20 transition"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
