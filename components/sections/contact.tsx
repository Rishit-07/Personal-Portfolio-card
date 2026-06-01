"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { Reveal } from "@/components/ui/reveal";
import { socialLinks } from "@/lib/data";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:sairishitsunku@gmail.com?subject=Portfolio%20Inquiry&body=${body}`;
  };

  return (
    <section className="py-24 md:py-36" id="contact">
      <div className="section-shell border-t hairline pt-8 md:pt-10">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.22em] text-muted">
              05 / Contact
            </p>
            <h2 className="mt-8 font-heading text-[clamp(3.6rem,12vw,12rem)] font-semibold uppercase leading-[0.82] tracking-[-0.06em]">
              LET&apos;S BUILD
              <br />
              SOMETHING AMAZING.
            </h2>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                    className="group flex min-h-28 flex-col justify-between border hairline p-4 transition hover:border-white hover:bg-white hover:text-black"
                  >
                    <Icon className="size-5 text-muted transition group-hover:text-black" />
                    <span className="text-sm uppercase tracking-[0.16em]">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border hairline bg-[#0e0e0e] p-5 md:p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  className="h-14 border hairline bg-transparent px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-14 border hairline bg-transparent px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="resize-none border hairline bg-transparent p-4 text-white outline-none transition placeholder:text-white/25 focus:border-white"
                  placeholder="Tell me about your project"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white"
              >
                Send Message
                <Send className="size-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
