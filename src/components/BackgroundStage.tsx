import bgCity from "@/assets/bg-city.jpg";

export function BackgroundStage() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-background">
      {/* Slow parallax drift over the skyline */}
      <div
        className="bg-layer"
        style={{ backgroundImage: `url(${bgCity})`, opacity: 1, filter: "brightness(1.3) saturate(1.1)" }}
      />

      {/* Drifting violet city glow — keeps the frame alive without distracting */}
      <div className="bg-glow" />

      {/* Legibility scrim */}
      <div
        className="fixed inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.13 0.014 300 / 62%) 0%, oklch(0.13 0.014 300 / 40%) 38%, oklch(0.13 0.014 300 / 56%) 72%, oklch(0.13 0.014 300 / 78%) 100%)",
        }}
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
