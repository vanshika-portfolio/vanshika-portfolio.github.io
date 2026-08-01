import bgCity from "@/assets/bg-city.jpg";
import bgNature from "@/assets/bg-nature.jpg";
import bgBlueprint from "@/assets/bg-blueprint.jpg";
import { useScene } from "./scene-context";

const photo: Record<string, string> = {
  city: bgCity,
  nature: bgNature,
  blueprint: bgBlueprint,
};

export function BackgroundStage() {
  const { scene } = useScene();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-background">
      {(["city", "nature", "blueprint"] as const).map((id) => (
        <div
          key={id}
          className="bg-layer"
          style={{
            backgroundImage: `url(${photo[id]})`,
            opacity: scene === id ? 1 : 0,
          }}
        />
      ))}
      <div className="bg-layer bg-aurora" style={{ opacity: scene === "aurora" ? 1 : 0 }} />

      {/* Legibility scrim — photo scenes need much more damping than abstract ones */}
      <div
        className="fixed inset-0 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.145 0 0 / 88%) 0%, oklch(0.145 0 0 / 70%) 34%, oklch(0.145 0 0 / 82%) 72%, oklch(0.145 0 0 / 94%) 100%)",
          opacity: scene === "aurora" || scene === "blueprint" ? 0.42 : 1,
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
