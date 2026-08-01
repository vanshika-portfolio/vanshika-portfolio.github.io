import { useState } from "react";
import { FileText, Loader2, ShieldCheck } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitResumeRequest } from "@/lib/resume.functions";
import { Section } from "./Section";

type State = "idle" | "sending" | "sent" | "error";

export function ResumeRequest() {
  const submit = useServerFn(submitResumeRequest);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError("");
    try {
      const result = await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          company: String(fd.get("company") ?? ""),
          purpose: String(fd.get("purpose") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (result.ok) {
        form.reset();
        setState("sent");
      } else {
        setState("error");
        setError("Something went wrong on our side. Please email me instead.");
      }
    } catch {
      setState("error");
      setError("Please check your name and email, then try again.");
    }
  }

  const field =
    "mt-2 w-full rounded-sm border border-border bg-surface/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60";
  const label = "text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase";

  return (
    <Section id="resume" label=" " title="Request my résumé">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <p className="text-[0.975rem] leading-relaxed text-muted-foreground">
            My résumé isn't posted publicly — it carries personal details I'd rather not hand to
            scrapers or scammers. Tell me who you are and I'll send it over personally, usually
            within a day.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.6} />
              Requests come straight to me. Nothing is shown publicly on this site.
            </li>
            <li className="flex gap-3">
              <FileText className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.6} />
              You'll get the current version, tailored to the role you mention.
            </li>
          </ul>
        </div>

        {state === "sent" ? (
          <div className="panel flex flex-col justify-center px-6 py-10 sm:px-8">
            <p className="rule-label">Request received</p>
            <p className="mt-4 text-lg leading-snug font-semibold">Thank you — I'll be in touch.</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I'll review your request and reply with my résumé shortly.
            </p>
            <button
              type="button"
              onClick={() => setState("idle")}
              className="mt-8 self-start text-sm font-semibold text-gold transition-colors hover:text-gold-bright"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="panel px-6 py-8 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="rr-name">
                  Name
                </label>
                <input id="rr-name" name="name" required maxLength={100} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="rr-email">
                  Work email
                </label>
                <input
                  id="rr-email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className={field}
                />
              </div>
              <div>
                <label className={label} htmlFor="rr-company">
                  Company
                </label>
                <input id="rr-company" name="company" maxLength={120} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="rr-purpose">
                  Role or purpose
                </label>
                <input id="rr-purpose" name="purpose" maxLength={120} className={field} />
              </div>
            </div>

            <div className="mt-5">
              <label className={label} htmlFor="rr-message">
                Anything else
              </label>
              <textarea id="rr-message" name="message" rows={3} maxLength={1000} className={field} />
            </div>

            {state === "error" && <p className="mt-4 text-sm text-gold">{error}</p>}

            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-7 inline-flex items-center gap-2 rounded-sm border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10 disabled:opacity-60"
            >
              {state === "sending" && <Loader2 className="size-4 animate-spin" />}
              {state === "sending" ? "Sending" : "Request résumé"}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
