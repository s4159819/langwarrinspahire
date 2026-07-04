import logo from "@/assets/langwarrin-logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Langwarrin Spa Hire — Relax. Unwind. Enjoy."
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
