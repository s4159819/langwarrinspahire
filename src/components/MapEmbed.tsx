export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-3xl overflow-hidden border border-border shadow-sm bg-muted ${className}`}>
      <iframe
        title="Langwarrin Spa Hire service area map"
        src="https://www.google.com/maps?q=Langwarrin+VIC+3910+Australia&z=11&output=embed"
        width="100%"
        height="380"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      />
    </div>
  );
}
