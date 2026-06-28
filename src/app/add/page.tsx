import type { Metadata } from "next";
import Link from "next/link";
import AddPredictionForm from "@/components/AddPredictionForm";

export const metadata: Metadata = {
  title: "Add a Prediction — Musk Missed",
  description:
    "Elon got it wrong again? Log the broken promise to the permanent record.",
};

export default function AddPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 transition-colors hover:text-tesla"
      >
        ← Back to the archive
      </Link>

      <div className="mt-6 border-b border-white/10 pb-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-tesla">
          He&rsquo;ll miss again
        </p>
        <h1 className="mt-2 font-display text-4xl font-700 uppercase leading-tight text-white sm:text-5xl">
          Log a New Miss
        </h1>
        <p className="mt-3 text-zinc-400">
          When Elon makes a prediction that doesn&rsquo;t come true, add it here
          so the record stays honest. Your submission is saved permanently to
          the Hall of Shame.
        </p>
      </div>

      <div className="mt-8">
        <AddPredictionForm />
      </div>
    </main>
  );
}
