import { useEffect, useState } from "react";

export type OverlayBand = {
  /** 0 = top of image, 1 = bottom */
  stop: number;
  /** "dark" scrim for bright areas, "light" lift for near-black areas */
  mode: "dark" | "light";
  alpha: number;
};

type Options = {
  /** Multiplier matching any CSS brightness() filter applied to the image. */
  brightness?: number;
  /** Number of horizontal bands sampled top-to-bottom. */
  bands?: number;
  /** Target background luminance behind light text (0-1). */
  target?: number;
  /** Minimum scrim so panels/hairlines keep some separation. */
  minAlpha?: number;
  /** Maximum scrim so the image never disappears entirely. */
  maxAlpha?: number;
};

const FALLBACK: OverlayBand[] = [
  { stop: 0, mode: "dark", alpha: 0.55 },
  { stop: 0.38, mode: "dark", alpha: 0.4 },
  { stop: 0.72, mode: "dark", alpha: 0.52 },
  { stop: 1, mode: "dark", alpha: 0.72 },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Samples a background image and returns per-band overlay strengths so text
 * keeps a readable contrast ratio no matter how bright the artwork is.
 * Runs only in the browser; SSR renders the conservative fallback.
 */
export function useAdaptiveOverlay(src: string, options: Options = {}) {
  const {
    brightness = 1,
    bands = 6,
    target = 0.3,
    minAlpha = 0.16,
    maxAlpha = 0.82,
  } = options;

  const [overlay, setOverlay] = useState<OverlayBand[]>(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";

    image.onload = () => {
      if (cancelled) return;

      const width = 32;
      const height = Math.max(bands * 4, 24);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.drawImage(image, 0, 0, width, height);

      let pixels: Uint8ClampedArray;
      try {
        pixels = ctx.getImageData(0, 0, width, height).data;
      } catch {
        // Tainted canvas (cross-origin image) — keep the safe fallback.
        return;
      }

      const rowsPerBand = height / bands;
      const next: OverlayBand[] = [];

      for (let band = 0; band < bands; band += 1) {
        const yStart = Math.floor(band * rowsPerBand);
        const yEnd = Math.floor((band + 1) * rowsPerBand);
        let sum = 0;
        let count = 0;

        for (let y = yStart; y < yEnd; y += 1) {
          for (let x = 0; x < width; x += 1) {
            const i = (y * width + x) * 4;
            // Rec. 709 relative luminance, then apply the CSS brightness filter.
            const lum =
              (0.2126 * pixels[i]! + 0.7152 * pixels[i + 1]! + 0.0722 * pixels[i + 2]!) / 255;
            sum += clamp(lum * brightness, 0, 1);
            count += 1;
          }
        }

        const luminance = count ? sum / count : 0.5;
        const stop = bands === 1 ? 0 : band / (bands - 1);

        if (luminance > target) {
          // Bright band: darken until it sits at the target luminance.
          const alpha = clamp((luminance - target) / luminance, minAlpha, maxAlpha);
          next.push({ stop, mode: "dark", alpha });
        } else if (luminance < target * 0.35) {
          // Near-black band: lift it slightly so depth and edges stay visible.
          const alpha = clamp((target * 0.35 - luminance) * 0.5, 0, 0.14);
          next.push({ stop, mode: "light", alpha });
        } else {
          next.push({ stop, mode: "dark", alpha: minAlpha });
        }
      }

      setOverlay(next);
    };

    image.src = src;

    return () => {
      cancelled = true;
      image.onload = null;
    };
  }, [src, brightness, bands, target, minAlpha, maxAlpha]);

  return overlay;
}

export function overlayGradient(bands: OverlayBand[]) {
  const stops = bands.map((band) => {
    const color =
      band.mode === "dark"
        ? `oklch(0.13 0.014 300 / ${(band.alpha * 100).toFixed(1)}%)`
        : `oklch(0.98 0.01 300 / ${(band.alpha * 100).toFixed(1)}%)`;
    return `${color} ${(band.stop * 100).toFixed(1)}%`;
  });

  return `linear-gradient(to bottom, ${stops.join(", ")})`;
}
