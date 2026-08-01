import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="hairline-top pt-8">
        <p className="rule-label">Contact</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
          Open to engineering, data and product roles.
        </h2>
        <p className="mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground">
          Always open to collaborate and connect with innovative people!
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-baseline gap-3 font-display text-xl leading-tight font-semibold break-all transition-colors hover:text-gold-bright sm:text-3xl"
        >
          Connect with me
          <ArrowUpRight className="size-5 shrink-0 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div className="mt-12 flex flex-wrap items-center gap-3">
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
        </div>

        <p className="mt-20 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
