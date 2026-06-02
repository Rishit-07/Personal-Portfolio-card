"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type PortraitCardProps = {
  className?: string;
  compact?: boolean;
};

export function PortraitCard({ className, compact = false }: PortraitCardProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], compact ? [0, -32] : [40, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.22], compact ? [-3, 0] : [2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.22], compact ? [0.94, 1] : [0.96, 1]);

  return (
    <motion.div
      style={{ y, rotate, scale }}
      initial={{ opacity: 0, clipPath: "inset(100% 0 0 0 round 28px)" }}
      animate={{ opacity: 1, clipPath: "inset(0% 0 0 0 round 28px)" }}
      transition={{ duration: 1, delay: compact ? 0.85 : 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "portrait-frame group relative overflow-hidden rounded-[28px] border border-white/12 bg-[#101010] shadow-2xl shadow-black/50",
        compact ? "aspect-[3/4] w-40 sm:w-48 lg:w-52" : "aspect-[4/5] min-h-[420px] w-full",
        className,
      )}
    >
      <div className="absolute left-1/2 top-4 z-20 flex w-[76%] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/80 px-4 py-3 text-sm font-semibold backdrop-blur-md">
        <span>Sai Rishit Sunku</span>
        <span className="grid size-8 place-items-center rounded-full bg-white text-black">
          SR
        </span>
      </div>

      <Image
        src="/profile-photo.jpg"
        alt="Sai Rishit Sunku portrait"
        fill
        priority={compact}
        sizes={compact ? "220px" : "(min-width: 1024px) 38vw, 100vw"}
        className="object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.22),transparent_32%),linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.78))]" />
      <div className="absolute inset-x-0 top-0 h-1/2 -translate-y-full bg-gradient-to-b from-transparent via-white/20 to-transparent transition duration-1000 group-hover:translate-y-full" />
      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between border-t border-white/15 pt-4">
        <p className="max-w-36 text-xs uppercase leading-5 tracking-[0.18em] text-white/70">
          Creating since 2026
        </p>
        <p className="font-heading text-5xl font-semibold tracking-[-0.08em] text-white/20">
          26
        </p>
      </div>
    </motion.div>
  );
}
