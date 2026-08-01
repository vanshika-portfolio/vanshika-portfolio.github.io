import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Work", href: "#work" },
  
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? "panel border-x-0 border-t-0" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2 font-display text-base font-semibold tracking-tight sm:text-lg"
        >
          <span className="text-gold-gradient">{profile.name}</span>
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
              aria-current={active === l.href ? "true" : undefined}
              className={`link-underline text-[0.8rem] font-medium tracking-wide transition-colors ${
                active === l.href ? "text-gold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid size-10 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold md:hidden"
        >
          {open ? <X className="size-[18px]" strokeWidth={1.7} /> : <Menu className="size-[18px]" strokeWidth={1.7} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 pb-4 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-3.5 text-sm font-medium text-muted-foreground transition-colors last:border-0 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
