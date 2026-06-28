import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllPredictions,
  getPredictionById,
  predictionSlug,
  parsePredictionSlug,
} from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";
import ShareButtons from "@/components/ShareButtons";

// Keep dynamicParams enabled (default) so newly added community
// predictions render on demand even after the build.

export async function generateStaticParams() {
  const all = await getAllPredictions();
  return all.map((p) => ({ slug: predictionSlug(p) }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const id = parsePredictionSlug(slug);
  if (id === null) return {};
  const p = await getPredictionById(id);
  if (!p) return {};
  const title = `"${p.title}" — Musk Missed`;
  const description = p.outcome.slice(0, 155);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Musk Missed",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
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

export default async function PredictionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const id = parsePredictionSlug(slug);
  if (id === null) notFound();
  const prediction = await getPredictionById(id);
  if (!prediction) notFound();

  const all = await getAllPredictions();
  const related = all
    .filter(
      (p) => p.category === prediction.category && p.id !== prediction.id,
    )
    .slice(0, 3);

  const style = statusStyles[prediction.status] ?? statusStyles.missed;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/#tracker"
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 transition-colors hover:text-tesla"
      >
        ← Back to all predictions
      </Link>

      <article className="mt-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 ring-1 ring-white/10">
            <span className="text-tesla">▸</span>
            {prediction.category}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${style.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
            {style.label}
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-700 leading-tight text-white sm:text-4xl">
          {prediction.title}
        </h1>

        <blockquote className="mt-6 border-l-2 border-tesla pl-4 text-lg italic text-zinc-200">
          &ldquo;{prediction.quote}&rdquo;
          <footer className="mt-2 text-sm not-italic text-zinc-500">
            — {prediction.company}, {prediction.datePredicted}
          </footer>
        </blockquote>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Meta label="Predicted" value={prediction.datePredicted} />
          {prediction.targetDate && (
            <Meta label="Target" value={prediction.targetDate} accent />
          )}
          {prediction.lateness && (
            <Meta label="Verdict" value={prediction.lateness} />
          )}
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/40 p-6">
          <h2 className="font-display text-sm font-600 uppercase tracking-wider text-tesla">
            What actually happened
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">
            {prediction.outcome}
          </p>
        </section>

        {prediction.source && (
          <p className="mt-4 text-sm text-zinc-600">
            Source: <span className="text-zinc-400">{prediction.source}</span>
          </p>
        )}

        <ShareButtons
          title={prediction.title}
          url={`${SITE_URL}/p/${predictionSlug(prediction)}`}
        />
      </article>

      {related.length > 0 && (
        <section className="mt-14 border-t border-white/10 pt-10">
          <h2 className="font-display text-xl font-600 uppercase tracking-wide text-white">
            More from {prediction.category}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/p/${predictionSlug(p)}`}
                className="card-glow rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/40 p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-tesla">
                  {p.datePredicted}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-zinc-200">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function Meta({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/40 px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
        {label}
      </p>
      <p
        className={`mt-0.5 text-sm font-semibold ${
          accent ? "text-tesla" : "text-zinc-200"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
