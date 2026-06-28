"use client";

import { useMemo, useState } from "react";
import PredictionCard from "./PredictionCard";
import AddPredictionModal from "./AddPredictionModal";
import type { Prediction } from "@/db/schema";

interface CategoryStat {
  category: string;
  count: number;
}

type SortKey = "newest" | "chronological" | "alphabetical";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest first" },
  { key: "chronological", label: "Earliest said" },
  { key: "alphabetical", label: "A → Z" },
];

export default function PredictionsExplorer({
  predictions,
  categories,
}: {
  predictions: Prediction[];
  categories: CategoryStat[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("newest");
  const [modalOpen, setModalOpen] = useState(false);

  const yearOf = (s: string): number => {
    const m = s.match(/\d{4}/);
    return m ? Number(m[0]) : 9999;
  };

  const filtered = useMemo(() => {
    let list = predictions.slice();

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((p) =>
        [p.title, p.quote, p.outcome, p.company, p.category, p.source ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(q),
      );
    }

    list.sort((a, b) => {
      switch (sort) {
        case "chronological":
          return yearOf(a.datePredicted) - yearOf(b.datePredicted);
        case "alphabetical":
          return a.title.localeCompare(b.title);
        default:
          // user-submitted first, then newest id
          if (a.isUserSubmitted !== b.isUserSubmitted)
            return a.isUserSubmitted ? -1 : 1;
          return b.id - a.id;
      }
    });

    return list;
  }, [predictions, activeCategory, query, sort]);

  return (
    <section id="tracker" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-tesla">
              The Archive
            </p>
            <h2 className="mt-2 font-display text-4xl font-700 uppercase tracking-tight text-white sm:text-5xl">
              Every Prediction, Tracked
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Filter, search, and vote. Missed calls are marked{" "}
              <span className="text-tesla">MISSED</span>, revised deadlines{" "}
              <span className="text-amber-400">MOVED GOALPOSTS</span>.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-tesla px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-tesla-dark animate-pulse-glow"
          >
            <span className="text-lg leading-none">＋</span> Add a Miss
          </button>
        </div>

        {/* Search + sort */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
              ⌕
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search robotaxis, Mars, Hyperloop, DOGE…"
              className="w-full rounded-lg border border-white/10 bg-black/50 py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-tesla/60 focus:ring-2 focus:ring-tesla/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none transition-colors focus:border-tesla/60"
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key} className="bg-black">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          <CategoryChip
            active={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
            label="All"
            count={predictions.length}
          />
          {categories.map((c) => (
            <CategoryChip
              key={c.category}
              active={activeCategory === c.category}
              onClick={() => setActiveCategory(c.category)}
              label={c.category}
              count={c.count}
            />
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="mb-6 font-mono text-xs uppercase tracking-wider text-zinc-500">
        Showing{" "}
        <span className="text-tesla">{filtered.length}</span> of{" "}
        {predictions.length} predictions
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] py-20 text-center">
          <p className="font-display text-xl uppercase text-zinc-400">
            No predictions found
          </p>
          <p className="mt-2 text-sm text-zinc-600">
            Try a different search or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <PredictionCard key={p.id} prediction={p} index={i} />
          ))}
        </div>
      )}

      <AddPredictionModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

function CategoryChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
        active
          ? "border-tesla bg-tesla text-white"
          : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-tesla/40 hover:text-tesla"
      }`}
    >
      {label}
      <span
        className={`font-mono text-[10px] ${
          active ? "text-white/80" : "text-zinc-600"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
