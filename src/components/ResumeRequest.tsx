import { useState } from "react";
import { FileText, Loader2, ShieldCheck } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitResumeRequest } from "@/lib/resume.functions";
import { submitResumeRequestFromBrowser } from "@/lib/resume-static";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type State = "idle" | "sending" | "sent" | "error";

// On a static host (GitHub Pages) there is no server function to call.
const IS_STATIC = import.meta.env['VITE_STATIC_DEPLOY'] === "true";

export function ResumeRequestDialog() {
  const submit = useServerFn(submitResumeRequest);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError("");
    try {
      const payload = {
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        company: String(fd.get("company") ?? ""),
        purpose: String(fd.get("purpose") ?? ""),
        message: String(fd.get("message") ?? ""),
      };
      const result = IS_STATIC
        ? await submitResumeRequestFromBrowser(payload)
        : await submit({ data: payload });

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
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setState("idle");
          setError("");
        }
      }}
    >
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-sm border border-gold/50 px-4 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
        >
          <FileText className="size-4" strokeWidth={1.6} /> Request résumé
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl leading-tight font-semibold">
            Request my résumé
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            My résumé isn't posted publicly — it carries personal details I'd rather not hand to
            scrapers. Tell me who you are and I'll send it over personally, usually within a day.
          </DialogDescription>
        </DialogHeader>

        {state === "sent" ? (
          <div className="py-4">
            <p className="rule-label">Request received</p>
            <p className="mt-3 text-lg leading-snug font-semibold">
              Thank you — I'll be in touch.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I'll review your request and reply with my résumé shortly.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 text-sm font-semibold text-gold transition-colors hover:text-gold-bright"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
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

            <div className="mt-4">
              <label className={label} htmlFor="rr-message">
                Anything else
              </label>
              <textarea id="rr-message" name="message" rows={3} maxLength={1000} className={field} />
            </div>

            <p className="mt-4 flex gap-2 text-xs leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-gold" strokeWidth={1.6} />
              Requests come straight to me. Nothing is shown publicly on this site.
            </p>

            {state === "error" && <p className="mt-3 text-sm text-gold">{error}</p>}

            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-5 inline-flex items-center gap-2 rounded-sm border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10 disabled:opacity-60"
            >
              {state === "sending" && <Loader2 className="size-4 animate-spin" />}
              {state === "sending" ? "Sending" : "Send request"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
