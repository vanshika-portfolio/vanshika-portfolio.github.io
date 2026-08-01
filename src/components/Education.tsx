import { awards, certifications, education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label=" " title="Education & Recognition">
      <div className="space-y-6 border-t border-border/40 pt-8">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-3xl leading-none font-bold tracking-tight text-gold-gradient sm:text-4xl">
            {education.school}
          </h3>
          <p className="text-sm font-semibold">{education.degree}</p>
          <span aria-hidden className="text-muted-foreground">·</span>
          <p className="text-xs text-muted-foreground">{education.track}</p>
          <span aria-hidden className="text-muted-foreground">·</span>
          <p className="text-sm font-medium text-gold-bright">{education.honours}</p>
        </div>

        <p className="text-sm leading-relaxed">
          <span className="rule-label mr-2">Awards</span>
          <span className="text-muted-foreground">{awards.join(", ")}</span>
        </p>

        {certifications.length > 0 && (
          <p className="text-sm leading-relaxed">
            <span className="rule-label mr-2">Certifications</span>
            <span className="text-muted-foreground">
              {certifications.map((c) => c.name).join(", ")}
            </span>
          </p>
        )}
      </div>
    </Section>
  );
}
