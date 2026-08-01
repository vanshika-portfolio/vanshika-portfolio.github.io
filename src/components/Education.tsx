import { awards, certifications, education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label=" " title="Education & Recognition">
      <div className="grid gap-x-12 gap-y-10 border-t border-border/40 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="font-display text-4xl leading-none font-bold tracking-tight text-gold-gradient sm:text-5xl">
            {education.school}
          </h3>
          <p className="mt-4 text-base leading-snug font-semibold">{education.degree}</p>
          <p className="mt-1 text-xs text-muted-foreground">{education.track}</p>
          <p className="mt-2 text-sm font-medium text-gold-bright">{education.honours}</p>
        </div>

        <div>
          <p className="rule-label">Awards</p>
          <ul className="mt-5 space-y-3.5">
            {awards.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-snug">
                <span aria-hidden className="mt-[7px] h-px w-4 shrink-0 bg-gold" />
                <span className="text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>

          <p className="rule-label mt-9">Certifications</p>
          {certifications.length > 0 ? (
            <ul className="mt-5 space-y-3.5">
              {certifications.map((c) => (
                <li key={c.name} className="flex gap-3 text-sm leading-snug">
                  <span aria-hidden className="mt-[7px] h-px w-4 shrink-0 bg-gold" />
                  <span className="text-muted-foreground">
                    {c.name} <span className="text-foreground/60">— {c.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-muted-foreground">
              Certifications in progress — listed here as they complete.
            </p>
          )}
        </div>
      </div>


    </Section>
  );
}
