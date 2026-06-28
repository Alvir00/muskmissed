"use client";

interface CategoryStat {
  category: string;
  count: number;
}

export default function StatsBar({
  total,
  missed,
  revised,
  categories,
}: {
  total: number;
  missed: number;
  revised: number;
  categories: CategoryStat[];
}) {
  const hitRate = total > 0 ? Math.round((1 / Math.max(total, 1)) * 100) : 0;
  const cards = [
    {
      value: total,
      label: "Predictions Tracked",
      sub: "…and counting",
    },
    {
      value: `${missed}`,
      label: "Marked Missed",
      sub: "deadline passed, undelivered",
    },
    {
      value: revised,
      label: "Moved Goalposts",
      sub: "quietly re-dated",
    },
    {
      value: "~7%",
      label: "On-Time Hit Rate",
      sub: "per independent trackers",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.label}
            className="card-glow rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/40 p-5 text-center sm:text-left"
          >
            <div className="font-display text-4xl font-700 text-white sm:text-5xl">
              {c.value}
            </div>
            <div className="mt-1 font-display text-sm font-600 uppercase tracking-wide text-tesla">
              {c.label}
            </div>
            <div className="mt-0.5 text-xs text-zinc-500">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Category distribution bar */}
      <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-display text-sm font-600 uppercase tracking-wide text-zinc-300">
            Where the misses pile up
          </p>
          <p className="font-mono text-xs text-zinc-500">{total} total</p>
        </div>
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/5">
          {categories.map((c, i) => {
            const pct = (c.count / total) * 100;
            return (
              <div
                key={c.category}
                title={`${c.category}: ${c.count}`}
                style={{
                  width: `${pct}%`,
                  backgroundColor: barColor(i),
                }}
              />
            );
          })}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {categories.slice(0, 8).map((c, i) => (
            <span
              key={c.category}
              className="flex items-center gap-1.5 text-[11px] text-zinc-400"
            >
              <span
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: barColor(i) }}
              />
              {c.category}{" "}
              <span className="font-mono text-zinc-600">{c.count}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function barColor(i: number): string {
  const palette = [
    "#e31937",
    "#ff4d6d",
    "#b8122b",
    "#ff7a90",
    "#7f0d1f",
    "#ff2d4d",
    "#c9142c",
    "#e85d75",
    "#5c0a16",
    "#ff9eb0",
    "#990f24",
  ];
  return palette[i % palette.length];
}
