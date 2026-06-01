import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { stack } from "@/lib/data";

export function About() {
  return (
    <section className="py-24 md:py-36" id="about">
      <SectionHeading
        eyebrow="01 / About"
        title="ABOUT"
        copy="I'm Sai Rishit Sunku, a Computer Science student focused on Full Stack Development, Artificial Intelligence, and scalable software systems."
      />
      <div className="section-shell mt-14 grid gap-10 md:grid-cols-[0.35fr_1fr]">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.22em] text-muted">
            Selected Stack
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 border-t border-l hairline sm:grid-cols-3 lg:grid-cols-5">
            {stack.map((item) => (
              <div
                key={item}
                className="group border-r border-b hairline p-5 transition duration-300 hover:bg-white hover:text-black md:p-7"
              >
                <p className="font-heading text-xl font-medium tracking-[-0.02em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
