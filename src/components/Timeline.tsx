"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { predictionSlug, type Prediction } from "@/lib/prediction";

const yearOf = (s: string): number => {
  const m = s.match(/\d{4}/);
  return m ? Number(m[0]) : 0;
};

export default function Timeline({
  predictions,
}: {
  predictions: Prediction[];
}) {
  const [visible, setVisible] = useState(18);

  const sorted = useMemo(
    () =>
      predictions
        .slice()
        .sort((a, b) => yearOf(a.datePredicted) - yearOf(b.datePredicted)),
    [predictions],
  );

  const shown = sorted.slice(0, visible);
  const earliest = yearOf(sorted[0]?.datePredicted ?? "2000");
  const latest = yearOf(sorted[sorted.length - 1]?.datePredicted ?? "2026");
  const span = Math.max(latest - earliest, 1);

  return (
    <section
      id="timeline"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6"
    >
      <div className="mb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-tesla">
          Two decades of "next year"
        </p>
        <h2 className="mt-2 font-display text-4xl font-700 uppercase tracking-tight text-white sm:text-5xl">
          The Prediction Timeline
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
          Every missed call, plotted by the year it was made. The further right
          you scroll, the more the pattern repeats.
        </p>
      </div>

      {/* Year scale */}
      <div className="mb-4 flex items-center justify-between px-1 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
        <span>{earliest || "—"}</span>
        <span>{Math.round(earliest + span / 2)}</span>
        <span>{latest || "—"}</span>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-8">
        {/* baseline */}
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-tesla/10 via-tesla/50 to-tesla/10" />

        <div className="relative grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {shown.map((p, i) => {
            const year = yearOf(p.datePredicted);
            // position along the span (0-100%) for a subtle stagger feel
            const pct = earliest ? ((year - earliest) / span) * 100 : 50;
            const above = i % 2 === 0;
            return (
              <Link
                key={p.id}
                href={`/p/${predictionSlug(p)}`}
                className="card-glow group relative flex flex-col rounded-lg border border-white/10 bg-gradient-to-b from-zinc-900/80 to-black/60 p-3"
                style={{ marginTop: above ? 0 : undefined }}
              >
                <span
                  className="mb-1.5 inline-block h-1.5 w-1.5 self-center rounded-full bg-tesla"
                  title={`${Math.round(pct)}%`}
                />
                <span className="text-center font-mono text-[10px] uppercase tracking-wider text-tesla">
                  {year || "?"}
                </span>
                <span className="mt-1 text-center text-[11px] font-semibold leading-snug text-zinc-300 group-hover:text-white">
                  {truncate(p.title, 48)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {visible < sorted.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisible((v) => v + 18)}
            className="rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-zinc-200 transition-all hover:border-tesla/50 hover:text-tesla"
          >
            Load more ({sorted.length - visible} remaining)
          </button>
        </div>
      )}
    </section>
  );
}

function truncate(s: string, n: number): string {
  return s.length > n ? `${s.slice(0, n)}…` : s;
}
