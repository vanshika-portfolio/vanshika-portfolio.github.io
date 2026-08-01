import { useEffect, useState } from "react";
import { Building2, Mountain, Sparkles, Grid3x3, Circle } from "lucide-react";
import { scenes, useScene, type SceneId } from "./scene-context";
import { profile } from "@/data/portfolio";

const icons: Record<SceneId, typeof Circle> = {
  noir: Circle,
  city: Building2,
  nature: Mountain,
  aurora: Sparkles,
  blueprint: Grid3x3,
};

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Work", href: "#work" },

  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const { scene, setScene } = useScene();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "panel border-x-0 border-t-0" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2 font-display text-sm font-semibold tracking-tight">
          <span>{profile.name}</span>
          <span className="hidden text-gold sm:inline">/</span>
          <span className="hidden text-[0.7rem] font-normal tracking-[0.18em] text-muted-foreground uppercase sm:inline">
            Engineer
          </span>
        </a>

        <div className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[0.8rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1 md:ml-6" role="group" aria-label="Background scene">
          {scenes.map((s) => {
            const Icon = icons[s.id];
            const active = scene === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setScene(s.id)}
                aria-pressed={active}
                title={`${s.label} — ${s.hint}`}
                aria-label={`Background: ${s.label}`}
                className={`grid size-8 place-items-center rounded-sm border transition-all duration-300 ${
                  active
                    ? "border-gold/70 bg-gold/12 text-gold"
                    : "border-border/70 text-muted-foreground hover:border-gold/40 hover:text-gold-bright"
                }`}
              >
                <Icon className="size-[15px]" strokeWidth={1.6} />
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
