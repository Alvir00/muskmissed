"use client";

interface HeroProps {
  total: number;
}

export default function Hero({ total }: HeroProps) {
  return (
    <header className="relative overflow-hidden">
      {/* glow + scan line */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-tesla/20 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tesla/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pt-28">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-tesla" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-tesla">
            Continuously updated · Live archive
          </span>
        </div>

        <h1 className="mt-5 font-display text-[clamp(2.75rem,9vw,7rem)] font-700 uppercase leading-[0.92] tracking-tight text-white animate-flicker">
          Musk <span className="text-tesla">Missed</span>
        </h1>

        <div className="mt-5 max-w-2xl">
          <p className="font-display text-xl uppercase tracking-wide text-zinc-300 sm:text-2xl">
            The Elon Musk Prediction Hall of Shame
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Every bold prediction Elon Musk has made that{" "}
            <span className="font-semibold text-white">
              did not come true
            </span>{" "}
            — from million-car robotaxis to Mars colonies, Hyperloops and $2
            trillion in government cuts. Researched, dated, and open for you to{" "}
            <span className="text-tesla">add the next one</span> when he gets it
            wrong again.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#tracker"
            className="inline-flex items-center gap-2 rounded-lg bg-tesla px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-tesla-dark"
          >
            Explore {total} Predictions ↓
          </a>
          <a
            href="#add"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-zinc-200 transition-all hover:border-tesla/50 hover:text-tesla"
          >
            ＋ Add a New Miss
          </a>
        </div>

        {/* Ticker */}
        <div className="relative mt-12 overflow-hidden rounded-xl border border-white/10 bg-black/40 py-2.5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent" />
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-wider text-zinc-500">
            {TICKER.concat(TICKER).map((t, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="text-tesla">✕</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

const TICKER = [
  "1,000,000 robotaxis by 2020 → 0",
  "Mars city by 2050 → not yet",
  "Hyperloop LA→SF in 30 min → never built",
  "$2 trillion in cuts → spending rose",
  "FSD next year (since 2014)",
  "Flying Roadster → physics said no",
  "Cure paralysis with a brain chip → still in trials",
  "Defeat the bots → still here",
];
