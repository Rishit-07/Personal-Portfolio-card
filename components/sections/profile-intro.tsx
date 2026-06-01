import { ArrowUpRight } from "lucide-react";
import { PortraitCard } from "@/components/ui/portrait-card";
import { Reveal } from "@/components/ui/reveal";

export function ProfileIntro() {
  return (
    <section className="py-24 md:py-32" aria-label="Profile introduction">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.7fr_1fr_0.78fr] lg:items-center">
        <Reveal className="max-w-sm">
          <h2 className="font-heading text-[clamp(3.5rem,8vw,7rem)] font-semibold tracking-[-0.07em]">
            Hey!
          </h2>
          <p className="mt-20 text-xl font-semibold leading-8 tracking-[-0.03em] text-white md:text-2xl">
            I&apos;m Sai Rishit, a developer based in India, focused on building
            polished full-stack products and AI-powered web experiences. My
            first project, Qurate, shows that direction in practice.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <PortraitCard />
        </Reveal>

        <Reveal delay={0.14} className="max-w-md lg:justify-self-end">
          <p className="text-lg leading-8 text-muted">
            I work across frontend, backend, databases, and product logic to
            turn ideas into clean, scalable applications with strong visual
            systems and dependable engineering.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-white"
          >
            Get Started
            <span className="grid size-8 place-items-center rounded-full border border-white/20">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
