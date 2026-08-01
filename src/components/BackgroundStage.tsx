import bgCity from "@/assets/bg-city.jpg";
import { overlayGradient, useAdaptiveOverlay } from "@/hooks/use-adaptive-overlay";

const IMAGE_BRIGHTNESS = 1.3;

export function BackgroundStage() {
  // Samples the artwork and returns per-band scrim strengths, so text keeps a
  // readable contrast ratio whether the image is dark or bright.
  const overlay = useAdaptiveOverlay(bgCity, { brightness: IMAGE_BRIGHTNESS });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-background">
      {/* Slow parallax drift over the skyline */}
      <div
        className="bg-layer"
        style={{
          backgroundImage: `url(${bgCity})`,
          opacity: 1,
          filter: `brightness(${IMAGE_BRIGHTNESS}) saturate(1.1)`,
        }}
      />

      {/* Drifting violet city glow — keeps the frame alive without distracting */}
      <div className="bg-glow" />

      {/* Adaptive legibility overlay */}
      <div
        className="fixed inset-0 transition-[background] duration-700"
        style={{ background: overlayGradient(overlay) }}
      />

      <div
        className="fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
