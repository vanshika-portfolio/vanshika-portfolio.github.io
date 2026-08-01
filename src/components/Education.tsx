import { awards, certifications, education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label=" " title="Education & Recognition">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel rounded-sm px-6 py-8 sm:px-8">
          <p className="font-display text-[0.72rem] font-semibold tracking-[0.14em] text-gold uppercase">
            {education.school}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">{education.track}</p>
          <h3 className="mt-5 text-lg leading-snug font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm font-medium text-gold-bright">{education.honours}</p>
        </div>

        <div className="panel-raised rounded-sm px-6 py-8 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="rule-label">Awards</p>
              <ul className="mt-6 space-y-4">
                {awards.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-snug">
                    <span aria-hidden className="mt-[7px] h-px w-4 shrink-0 bg-gold" />
                    <span className="text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:border-l sm:border-hairline sm:pl-8">
              <p className="rule-label">Certifications</p>
              {certifications.length ? (
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
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground/70">
                  Coming soon — currently working through additional cloud and data
                  certifications.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
}
