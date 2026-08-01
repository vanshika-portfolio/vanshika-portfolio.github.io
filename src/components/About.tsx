import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="Building technology that holds up over time.">
      <div className="max-w-3xl space-y-5 text-[0.975rem] leading-relaxed text-muted-foreground">
        <p>
          I am a Computer Science and Data Science graduate from the University of British Columbia, working
          where software engineering meets data infrastructure — services that need to be correct under
          regulation, and pipelines that need to stay fast as they grow.
        </p>
        <p>
          I have shipped inside industry, government and nonprofit settings: a GDPR-compliant microservice at
          AWS, Spark pipelines at Employment and Social Development Canada, a POS rollout across 198 retail
          stores, and board-level advising on where AI automation genuinely reduces operational load.
        </p>
      </div>
    </Section>
  );
}
