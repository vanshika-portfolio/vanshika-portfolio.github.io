import { roles } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="Industry, government and nonprofit engineering.">
      <ol className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
        {roles.map((role) => (
          <li key={role.org} className="panel group border-0 px-6 py-8 transition-colors sm:px-8">
            <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
              <div>
                <p className="font-display text-[0.72rem] font-semibold tracking-[0.14em] text-gold uppercase">
                  {role.period}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{role.kind}</p>
              </div>

              <div>
                <h3 className="text-lg leading-snug font-semibold sm:text-xl">{role.org}</h3>
                <p className="mt-1 text-sm font-medium text-gold-bright">{role.title}</p>

                <ul className="mt-5 space-y-2.5">
                  {role.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-gold-dim" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-sm border border-border/80 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
