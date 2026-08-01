import type { ReactNode } from "react";

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
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="hairline-top pt-8">
        <p className="rule-label">{label}</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
