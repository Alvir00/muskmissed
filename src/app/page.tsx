import { getAllPredictions, getCategoryStats } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Timeline from "@/components/Timeline";
import PredictionsExplorer from "@/components/PredictionsExplorer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [predictions, categories] = await Promise.all([
    getAllPredictions(),
    getCategoryStats(),
  ]);

  const missed = predictions.filter((p) => p.status === "missed").length;
  const revised = predictions.filter((p) => p.status === "revised").length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Musk Missed",
    description:
      "An interactive tracker of every major prediction Elon Musk made that did not come true.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <Hero total={predictions.length} />

      <StatsBar
        total={predictions.length}
        missed={missed}
        revised={revised}
        categories={categories}
      />

      <Timeline predictions={predictions} />

      <PredictionsExplorer predictions={predictions} categories={categories} />

      {/* CTA strip */}
      <section id="add" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-tesla/30 bg-gradient-to-br from-tesla/15 via-black to-black p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-tesla/30 blur-[90px]" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-tesla">
              He&rsquo;ll miss again
            </p>
            <h2 className="mt-3 font-display text-3xl font-700 uppercase leading-tight text-white sm:text-4xl">
              Catch the next broken promise
            </h2>
            <p className="mt-4 text-zinc-300">
              Every few weeks a new deadline quietly slips by. When Elon gets it
              wrong again, log it here so the record stays honest. Submissions
              are saved permanently to the Hall of Shame.
            </p>
            <a
              href="/add"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-tesla px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-tesla-dark animate-pulse-glow"
            >
              ＋ Add a New Miss
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="font-display text-xl font-700 uppercase tracking-tight text-white">
          Musk<span className="text-tesla">Missed</span>
        </a>
        <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider sm:gap-4">
          <a href="#timeline" className="hidden rounded px-2 py-1 text-zinc-400 transition-colors hover:text-tesla sm:inline-block">
            Timeline
          </a>
          <a href="#tracker" className="rounded px-2 py-1 text-zinc-400 transition-colors hover:text-tesla">
            Archive
          </a>
          <a
            href="/add"
            className="rounded bg-tesla px-3 py-1.5 text-white transition-colors hover:bg-tesla-dark"
          >
            ＋ Add
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="font-display text-2xl font-700 uppercase tracking-tight text-white">
              Musk<span className="text-tesla">Missed</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              An independent, community-maintained record of predictions that
              did not come true. Dates and outcomes are sourced from public
              reporting including WIRED, Reuters, Wikipedia, SEC filings and
              company statements. Predictions are evaluated against the stated
              timeline, not the long-term viability of a project.
            </p>
          </div>
          <div className="text-sm text-zinc-500">
            <p className="font-display text-xs font-600 uppercase tracking-wider text-zinc-400">
              The pattern
            </p>
            <ul className="mt-3 space-y-2">
              <li>• Software deadlines: usually 6–18 months late</li>
              <li>• Hardware deadlines: 2×–5× over schedule</li>
              <li>• Regulatory milestones: largest deviations</li>
              <li>• The fallback forecast: <span className="text-tesla">&ldquo;next year&rdquo;</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-zinc-600 sm:flex-row">
          <p>
            Built for the record. Not affiliated with Elon Musk or any of his
            companies.
          </p>
          <p className="font-mono">Predictions tracked live · Open archive</p>
        </div>
      </div>
    </footer>
  );
}
