import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-heading text-sm uppercase tracking-[0.22em] text-muted">
          404
        </p>
        <h1 className="mt-4 font-heading text-6xl font-semibold uppercase tracking-[-0.05em]">
          Page not found
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.16em] transition hover:bg-white hover:text-black"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
