import { education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label=" " title="Education">
      <div className="panel rounded-sm px-6 py-8 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
          <div>
            <p className="font-display text-[0.72rem] font-semibold tracking-[0.14em] text-gold uppercase">
              {education.school}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{education.track}</p>
          </div>

          <div>
            <h3 className="text-lg leading-snug font-semibold">{education.degree}</h3>
            <p className="mt-1 text-sm font-medium text-gold-bright">{education.honours}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
