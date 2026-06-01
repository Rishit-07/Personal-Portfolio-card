"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".skill-card", {
          opacity: 0,
          y: 44,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 78%",
          },
        });
    },
    { scope },
  );

  return (
    <section ref={scope} className="py-24 md:py-36 scroll-mt-24 relative" id="skills">
      <SectionHeading
        eyebrow="03 / Skills"
        title="SKILLS"
        copy="A practical toolkit for designing, building, shipping, and improving modern software products."
      />
      <div className="section-shell skills-grid mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.title}
              className="skill-card group min-h-[300px] border hairline bg-[#0e0e0e] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white hover:text-black"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.03em]">
                  {group.title}
                </h3>
                <Icon className="size-5 text-muted transition group-hover:text-black" />
              </div>
              <div className="mt-10 space-y-4">
                {group.skills.map((skill) => (
                  <p
                    key={skill}
                    className="border-b hairline pb-3 text-sm uppercase tracking-[0.18em] text-muted transition group-hover:border-black/15 group-hover:text-black/65"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Reveal className="section-shell mt-10">
        <div className="mask-fade overflow-hidden border-y hairline py-5">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 font-heading text-2xl uppercase text-white/35">
            {Array.from({ length: 2 }).map((_, index) => (
              <span key={index} className="flex gap-10">
                Java / Python / JavaScript / HTML5 / CSS3 / React.js / Node.js / Express.js / MongoDB / Docker / GitHub / Postman / Command Line Basics / Data Structures & Algorithms / REST APIs / Authentication & Authorization / Problem Solving /
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
