import { MapPin } from "lucide-react";

export const SUBURBS = [
  "Cranbourne", "Frankston", "Mornington Peninsula", "Dromana", "Rye", "Rosebud",
  "Hastings", "Somerville", "Berwick", "Balnarring", "Dandenong", "Rowville",
  "Carrum", "Seaford", "Pakenham", "Bayside", "South East Suburbs",
];

export function SuburbGrid() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {SUBURBS.map((s) => (
        <li
          key={s}
          className="inline-flex items-center gap-2 rounded-2xl bg-card border border-border px-4 py-3 text-sm text-navy shadow-sm"
        >
          <MapPin className="h-4 w-4 text-leaf shrink-0" />
          <span className="truncate">{s}</span>
        </li>
      ))}
    </ul>
  );
}
