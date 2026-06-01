import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
  download,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-medium uppercase tracking-[0.16em] transition duration-300",
        variant === "light"
          ? "border-white bg-white text-black hover:bg-transparent hover:text-white"
          : "border-white/15 bg-transparent text-white hover:border-white hover:bg-white hover:text-black",
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
