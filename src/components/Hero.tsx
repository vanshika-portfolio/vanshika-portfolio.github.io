import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { metrics, profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
      <p className="rule-label rise flex items-center gap-2">
        <MapPin className="size-3.5" strokeWidth={1.8} />
        {profile.location}
      </p>

      <h1 className="rise mt-7 max-w-4xl text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.6rem]">
        {profile.headline.map((line, i) => (
          <span key={line} className="block">
            {i === 1 ? (
              <>
                Interpreting <span className="text-gold-gradient">data</span>.
              </>
            ) : (
              line
            )}
          </span>
        ))}
      </h1>

      <p className="rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {profile.summary}
      </p>

      <div className="rise mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Get in touch
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid size-11 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
        >
          <Github className="size-[18px]" strokeWidth={1.6} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="grid size-11 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
        >
          <Linkedin className="size-[18px]" strokeWidth={1.6} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="grid size-11 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
        >
          <Mail className="size-[18px]" strokeWidth={1.6} />
        </a>
      </div>

      <dl className="rise mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="panel border-0 px-5 py-6">
            <dd className="font-display text-3xl font-semibold tracking-tight text-gold-bright">{m.value}</dd>
            <dt className="mt-2 text-[0.8rem] font-semibold text-foreground">{m.label}</dt>
            <p className="mt-0.5 text-xs text-muted-foreground">{m.note}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
