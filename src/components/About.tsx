import { awards } from "@/data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="Building technology that holds up over time.">
      <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5 text-[0.975rem] leading-relaxed text-muted-foreground">
          <p>
            I graduated from the University of British Columbia with a degree in Computer Science and Data
            Science, carrying a cumulative GPA of{" "}
            <span className="font-semibold text-foreground">4.33 / 4.33</span>. My work sits where software
            engineering meets data infrastructure — services that need to be correct under regulation, and
            pipelines that need to stay fast as they grow.
          </p>
          <p>
            I have shipped inside industry, government and nonprofit settings: a GDPR-compliant microservice at
            AWS, Spark pipelines at Employment and Social Development Canada, and a POS rollout across 198
            retail stores. More recently I have been advising an NGO board on where AI-powered automation
            genuinely reduces operational load.
          </p>
          <p>
            Outside of that I mentor and tutor students, explore entrepreneurial ideas, and keep a standing
            habit of rebuilding things from scratch to understand them properly — most recently a Transformer.
          </p>
        </div>

        <div className="panel-raised rounded-sm p-7">
          <p className="rule-label">Selected recognition</p>
          <ul className="mt-6 space-y-4">
            {awards.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-snug">
                <span aria-hidden className="mt-[7px] h-px w-4 shrink-0 bg-gold" />
                <span className="text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
