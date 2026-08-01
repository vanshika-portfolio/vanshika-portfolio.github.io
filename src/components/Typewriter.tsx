import { useEffect, useState } from "react";

type Props = {
  lines: string[];
  speed?: number;
  linePause?: number;
  className?: string;
  renderLine?: (line: string, index: number, done: boolean) => React.ReactNode;
};

/** Types out each line in sequence, then leaves the finished text in place. */
export function Typewriter({ lines, speed = 55, linePause = 380, className }: Props) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const done = lineIndex >= lines.length;

  useEffect(() => {
    if (done) return;
    const current = lines[lineIndex];
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharCount(0);
    }, linePause);
    return () => clearTimeout(t);
  }, [charCount, lineIndex, lines, speed, linePause, done]);

  return (
    <span className={className} aria-label={lines.join(" ")}>
      {lines.map((line, i) => {
        const isActive = i === lineIndex;
        const text = i < lineIndex ? line : isActive ? line.slice(0, charCount) : "";
        if (i > lineIndex) return null;
        return (
          <span key={line} className="block">
            {text}
            {isActive && (
              <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] animate-pulse bg-gold align-middle" />
            )}
          </span>
        );
      })}
    </span>
  );
}
