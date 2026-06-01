import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-shell border-t hairline pt-8 md:pt-10">
      <Reveal className="grid gap-6 md:grid-cols-[0.35fr_1fr] md:gap-12">
        <p className="font-heading text-sm uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </p>
        <div>
          <h2 className="font-heading text-[clamp(3rem,11vw,11rem)] font-semibold uppercase leading-[0.82] tracking-[-0.04em]">
            {title}
          </h2>
          {copy ? (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
              {copy}
            </p>
          ) : null}
        </div>
      </Reveal>
    </div>
  );
}
