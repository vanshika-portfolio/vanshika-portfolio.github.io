import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-9 sm:px-8 sm:py-12">
      <Reveal>
        <div className="hairline-top pt-6">
          {label.trim() && <p className="rule-label">{label}</p>}
          <h2
            className={`${label.trim() ? "mt-4" : ""} max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl`}
          >
            {title}
          </h2>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <div className="mt-7">{children}</div>
      </Reveal>
    </section>
  );
}

