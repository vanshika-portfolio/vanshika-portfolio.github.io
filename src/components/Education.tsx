import { awards, certifications, education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label=" " title="Education & Recognition">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="panel rounded-sm px-6 py-8 sm:px-8">
          <h3 className="font-display text-3xl leading-none font-bold tracking-tight text-gold-gradient sm:text-4xl">
            {education.school}
          </h3>
          <p className="mt-3 text-base leading-snug font-semibold">{education.degree}</p>
          <p className="mt-1 text-xs text-muted-foreground">{education.track}</p>
          <p className="mt-2 text-sm font-medium text-gold-bright">{education.honours}</p>

          <p className="rule-label mt-8">Awards</p>
          <ul className="mt-5 space-y-4">
            {awards.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-snug">
                <span aria-hidden className="mt-[7px] h-px w-4 shrink-0 bg-gold" />
                <span className="text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-raised rounded-sm px-6 py-8 sm:px-8">
          <p className="rule-label">Certifications</p>
          {certifications.length > 0 ? (
            <ul className="mt-6 space-y-4">
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
            <p className="mt-6 text-sm text-muted-foreground">
              Certifications in progress — listed here as they complete.
            </p>
          )}
        </div>
      </div>

    </Section>
  );
}
