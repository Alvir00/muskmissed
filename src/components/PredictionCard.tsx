"use client";

import { useState } from "react";
import Link from "next/link";
import { predictionSlug, type Prediction } from "@/lib/prediction";

interface Props {
  prediction: Prediction;
  index: number;
}

const statusStyles: Record<
  string,
  { label: string; badge: string; dot: string }
> = {
  missed: {
    label: "MISSED",
    badge: "bg-tesla/15 text-tesla ring-1 ring-tesla/40",
    dot: "bg-tesla",
  },
  revised: {
    label: "MOVED GOALPOSTS",
    badge: "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/40",
    dot: "bg-amber-400",
  },
  pending: {
    label: "PENDING",
    badge: "bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/40",
    dot: "bg-sky-400",
  },
};

export default function PredictionCard({ prediction, index }: Props) {
  const [expanded, setExpanded] = useState(false);

  const style = statusStyles[prediction.status] ?? statusStyles.missed;
  const isLong = prediction.outcome.length > 160;

  return (
    <article
      className="card-glow animate-fade-up group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-black/60 p-5 backdrop-blur-sm"
      style={{ animationDelay: `${Math.min(index * 35, 600)}ms` }}
    >
      {/* top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tesla/70 to-transparent" />

      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 ring-1 ring-white/10">
          <span className="text-tesla">▸</span>
          {prediction.category}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${style.badge}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          {style.label}
        </span>
      </div>

      <h3 className="font-display text-xl font-600 leading-tight text-white">
        <Link
          href={`/p/${predictionSlug(prediction)}`}
          className="transition-colors hover:text-tesla"
        >
          {prediction.title}
        </Link>
      </h3>

      <p className="mt-3 border-l-2 border-tesla/50 pl-3 text-sm italic text-zinc-300">
        &ldquo;{prediction.quote}&rdquo;
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
        <span>
          <span className="text-zinc-600">SAID:</span> {prediction.datePredicted}
        </span>
        {prediction.targetDate && (
          <span>
            <span className="text-zinc-600">TARGET:</span>{" "}
            <span className="text-tesla/90">{prediction.targetDate}</span>
          </span>
        )}
        {prediction.lateness && (
          <span>
            <span className="text-zinc-600">VERDICT:</span> {prediction.lateness}
          </span>
        )}
      </div>

      <div className="mt-4 border-t border-white/5 pt-3">
        <p
          className={`text-sm leading-relaxed text-zinc-400 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          <span className="font-semibold text-zinc-300">Reality: </span>
          {prediction.outcome}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-1 text-xs font-semibold uppercase tracking-wider text-tesla/80 transition-colors hover:text-tesla"
          >
            {expanded ? "− Show less" : "+ Read more"}
          </button>
        )}
      </div>

      {(prediction.source || prediction.isUserSubmitted) && (
        <div className="mt-auto pt-3 text-[11px] text-zinc-600">
          {prediction.source && (
            <>
              Source:{" "}
              <span className="text-zinc-500">{prediction.source}</span>
            </>
          )}
          {prediction.isUserSubmitted && (
            <span className="ml-2 rounded bg-tesla/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-tesla">
              ★ Community
            </span>
          )}
        </div>
      )}
    </article>
  );
}
