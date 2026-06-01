"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { PortraitCard } from "@/components/ui/portrait-card";
import { navItems } from "@/lib/data";

const titleLines = ["SAI", "RISHIT", "SUNKU"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden" id="home">
      <header className="section-shell z-10 flex items-center justify-between py-6">
        <Link href="#home" className="font-heading text-lg font-semibold uppercase">
          SRS
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const id = item.href.startsWith("#") ? item.href.slice(1) : item.href;
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="section-shell z-10 flex flex-1 flex-col justify-center py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.34fr] lg:items-end">
          <div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 font-heading text-sm uppercase tracking-[0.28em] text-muted"
              >
                Full Stack Developer
              </motion.p>
            </div>
            <h1 className="font-heading text-[clamp(5rem,18vw,17.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.065em]">
              {titleLines.map((line, index) => (
                <span className="block overflow-hidden" key={line}>
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.12 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl lg:pb-4"
          >
            <div className="mb-8 hidden justify-end lg:flex">
              <PortraitCard compact />
            </div>
            <p className="text-xl leading-8 text-muted md:text-2xl">
              Building modern web applications, AI-powered products, and digital
              experiences.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects" variant="light">
                View Work
              </ButtonLink>
              <ButtonLink href="/resume.pdf" download>
                Download Resume
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="section-shell z-10 flex items-center justify-between border-t hairline py-5 text-xs uppercase tracking-[0.22em] text-muted"
      >
        <span className="flex items-center gap-2">
          <MapPin className="size-4" />
          India
        </span>
        <a
          href="#about"
          aria-label="Scroll to about section"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
