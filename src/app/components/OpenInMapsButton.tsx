import { MapPin } from "lucide-react";

type OpenInMapsButtonProps = {
  /** Google Maps URL to open in a new tab. */
  href: string;
  label?: string;
  className?: string;
};

/**
 * Link out to Google Maps instead of embedding it.
 *
 * The embedded <iframe> maps ran a full Maps application per instance — their
 * own WebGL context, tile requests and compositing layers inside the page —
 * which made scrolling expensive. A link costs nothing until it is clicked.
 */
export function OpenInMapsButton({
  href,
  label = "Відкрити на карті",
  className = "",
}: OpenInMapsButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#003060] text-[#003060] font-semibold text-sm hover:bg-[#003060] hover:text-white transition-colors duration-300 ${className}`}
    >
      <MapPin className="w-4 h-4 flex-shrink-0" />
      {label}
    </a>
  );
}
