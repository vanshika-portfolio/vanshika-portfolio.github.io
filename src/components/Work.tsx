import { ArrowUpRight } from "lucide-react";
import { archive, featured } from "@/data/portfolio";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" label="Selected work" title="Three projects worth reading in full.">
      <div className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
        {featured.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="panel group block border-0 px-6 py-9 transition-colors hover:bg-accent/40 sm:px-8"
          >
            <div className="grid gap-6 lg:grid-cols-[64px_1fr_auto]">
              <span className="font-display text-2xl font-semibold text-gold-dim">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                {p.tag && <p className="rule-label">{p.tag}</p>}
                <h3 className="mt-3 text-xl leading-snug font-semibold transition-colors group-hover:text-gold-bright sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-sm border border-border/80 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="flex items-start text-xs font-semibold tracking-wide text-gold">
                {p.linkLabel}
                <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16">
        <p className="rule-label">Archive</p>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {archive.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="panel group flex h-full flex-col border-0 px-5 py-5 transition-colors hover:bg-accent/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold transition-colors group-hover:text-gold-bright">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="size-3.5 shrink-0 text-gold-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                {p.tag && <p className="mt-1 text-[0.7rem] tracking-wide text-gold">{p.tag}</p>}
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.blurb}</p>
                <p className="mt-3 text-[0.68rem] tracking-wide text-muted-foreground/70">
                  {p.stack.join(" · ")}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
