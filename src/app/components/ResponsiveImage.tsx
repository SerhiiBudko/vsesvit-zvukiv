export type ImageSource = {
  src: string;
  w: number;
  type?: string;
};

export type ResponsiveImageProps = {
  alt: string;
  className?: string;
  sources: ImageSource[];
  sizes?: string;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  /** Intrinsic width in px. Set together with `height` to reserve layout space. */
  width?: number;
  /** Intrinsic height in px. Set together with `width` to reserve layout space. */
  height?: number;
};

/**
 * Responsive <img> built from a list of sources.
 *
 * Pass `width`/`height` wherever the aspect ratio is known — the browser then
 * reserves the box before the image arrives instead of reflowing the page
 * around it (Cumulative Layout Shift).
 */
export function ResponsiveImage({
  alt,
  className,
  sources,
  sizes,
  fetchPriority,
  loading,
  decoding = "async",
  width,
  height,
}: ResponsiveImageProps) {
  const srcSet = sources.map((s) => `${s.src} ${s.w}w`).join(", ");
  const fallback = sources[0]?.src; // smallest as default

  return (
    <img
      src={fallback}
      srcSet={srcSet || undefined}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      width={width}
      height={height}
      // React 18 does not map the camelCase `fetchPriority` prop, so it logs a
      // DOM-attribute warning on every render. Spread the lowercase attribute
      // the HTML spec actually defines instead.
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
    />
  );
}
