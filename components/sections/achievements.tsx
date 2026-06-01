"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = 1400;

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setCount(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="py-24 md:py-36" id="achievements">
      <SectionHeading
        eyebrow="04 / Proof"
        title="NUMBERS"
        copy="A compact snapshot of consistent learning, problem solving, and product-building momentum."
      />
      <div className="section-shell mt-14 grid border-t border-l hairline md:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.label}
            className="min-h-[260px] border-r border-b hairline p-6 md:p-10"
          >
            <p className="font-heading text-[clamp(4rem,10vw,9rem)] font-semibold leading-none tracking-[-0.06em]">
              <Counter value={achievement.value} suffix={achievement.suffix} />
            </p>
            <p className="mt-5 max-w-xs text-sm uppercase tracking-[0.18em] text-muted">
              {achievement.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
