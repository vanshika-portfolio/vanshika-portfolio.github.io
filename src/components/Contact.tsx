import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ResumeRequestDialog } from "./ResumeRequest";

export function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16">
      <div className="hairline-top pt-6">
        <p className="rule-label">Contact</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
          Let's build something worth shipping.
        </h2>
        <p className="mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground">
          I'm open to software and data engineering roles, and I always enjoy a good conversation
          about systems, data or an idea you're trying to get off the ground. Reach out and I'll
          get back to you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-baseline gap-3 font-display text-xl leading-tight font-semibold break-all transition-colors hover:text-gold-bright sm:text-3xl"
        >
          {profile.email}
          <ArrowUpRight className="size-5 shrink-0 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>


        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Linkedin className="size-4" strokeWidth={1.6} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Github className="size-4" strokeWidth={1.6} /> GitHub
          </a>
          <a
            href={profile.tutoring}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Mail className="size-4" strokeWidth={1.6} /> Tutoring
          </a>
          <ResumeRequestDialog />
        </div>


        <p className="mt-14 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
