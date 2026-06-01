import { Github, Monitor } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section className="py-24 md:py-36" id="projects">
      <SectionHeading
        eyebrow="02 / Work"
        title="PROJECTS"
        copy="My first project, Qurate, is an open source issue management engine that blends backend APIs, AI prioritization, and a responsive frontend experience."
      />
      <div className="section-shell mt-14 grid gap-5">
        {projects.map((project, index) => {
          const indexColorClass = project.image?.includes("qurate") ? "text-black/10" : "text-white/10";
          return (
          <Reveal key={project.title} delay={index * 0.06}>
            <article className="group grid overflow-hidden border hairline bg-[#0e0e0e] transition duration-500 hover:border-white/45 md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[300px] overflow-hidden border-b hairline bg-[#111] md:min-h-[420px] md:border-r md:border-b-0">
                <img
                  src={project.image ?? "/images/qurate-hero.png"}
                  alt={`${project.title} screenshot`}
                  className="absolute inset-0 h-full w-full object-cover z-0"
                />
                {project.index !== "02" && (
                  <div className="absolute inset-x-10 top-10 h-px bg-white/20 z-10" />
                )}
                {project.index !== "02" && (
                  <div className="absolute left-10 top-16 h-24 w-px bg-white/15 z-10" />
                )}
                <div className={`absolute left-10 top-10 font-heading text-7xl font-semibold ${indexColorClass} md:text-9xl z-20`}>
                  {project.index}
                </div>
              </div>

              <div className="flex min-h-[360px] flex-col justify-between p-6 md:p-10 lg:p-12">
                <div>
                  <p className="font-heading text-sm uppercase tracking-[0.22em] text-muted">
                    Project {project.index}
                  </p>
                  <h3 className="mt-6 max-w-3xl font-heading text-4xl font-semibold uppercase leading-none tracking-[-0.04em] md:text-6xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="mt-10 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border hairline px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] transition hover:border-white hover:bg-white hover:text-black"
                    >
                      <Github className="size-4" />
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] transition hover:border-white hover:bg-white hover:text-black"
                    >
                      <Monitor className="size-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
