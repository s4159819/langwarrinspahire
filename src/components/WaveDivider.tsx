export function WaveDivider({
  flip = false,
  fill = "var(--background)",
  className = "",
}: {
  flip?: boolean;
  fill?: string;
  className?: string;
}) {
  return (
    <div className={`w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[90px]"
      >
        <path
          d="M0,40 C240,90 480,0 720,35 C960,70 1200,25 1440,55 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
