import { timeline } from "@/data/portfolio";
import { Section } from "./Section";

const dotTone: Record<string, string> = {
  work: "bg-gold",
  leadership: "bg-gold-dim",
  education: "bg-muted-foreground",
};

export function Timeline() {
  return (
    <Section
      id="timeline"
      label="Timeline"
      title="Internships, roles and milestones, in order."
    >
      <ol className="relative border-l border-border pl-6 sm:pl-8">
        {timeline.map((item) => (
          <li key={`${item.org}-${item.period}`} className="relative pb-10 last:pb-0">
            <span
              aria-hidden
              className={`absolute top-[7px] -left-[calc(1.5rem+4.5px)] h-[9px] w-[9px] rounded-full sm:-left-[calc(2rem+4.5px)] ${dotTone[item.kind] ?? "bg-gold-dim"}`}
            />
            <p className="font-display text-[0.72rem] font-semibold tracking-[0.14em] text-gold uppercase">
              {item.period}
            </p>
            <h3 className="mt-2 text-base font-semibold sm:text-lg">{item.org}</h3>
            <p className="mt-0.5 text-sm text-gold-bright">{item.title}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
