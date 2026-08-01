import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" label=" " title="Projects and Hackathons">
      <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="panel group flex h-full flex-col border-0 px-6 py-8 transition-colors hover:bg-accent/40 sm:px-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-xl font-semibold text-gold-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex items-center text-xs font-semibold tracking-wide text-gold">
                  {p.linkLabel}
                  <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {p.tag && <p className="rule-label mt-5">{p.tag}</p>}
              <h3 className="mt-3 text-lg leading-snug font-semibold transition-colors group-hover:text-gold-bright sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

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
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
