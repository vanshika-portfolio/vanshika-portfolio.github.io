import { roles } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="" title="Professional Experience">
      <ol className="relative border-l border-border pl-6 sm:pl-10">
        {roles.map((role) => (
          <li key={role.org} className="relative pb-9 last:pb-0">
            <span
              aria-hidden
              className="absolute top-[10px] -left-[calc(1.5rem+4.5px)] h-[9px] w-[9px] rounded-full bg-gold sm:-left-[calc(2.5rem+4.5px)]"
            />

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <p className="font-display text-[0.72rem] font-semibold tracking-[0.14em] text-gold uppercase">
                {role.period}
              </p>
              <p className="text-xs text-muted-foreground">{role.kind}</p>
            </div>

            <h3 className="mt-3 text-lg leading-snug font-semibold sm:text-xl">
              {role.titleFirst ? role.title : role.org}
            </h3>
            <p className="mt-1 text-sm font-medium text-gold-bright">
              {role.titleFirst ? role.org : role.title}
            </p>

            <ul className="mt-5 space-y-2.5">
              {role.points.map((p) => (
                <li
                  key={p}
                  className="flex max-w-2xl gap-3 text-sm leading-relaxed text-muted-foreground"
                >
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
