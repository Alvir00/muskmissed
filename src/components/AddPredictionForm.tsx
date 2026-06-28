"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  "Self-Driving",
  "Tesla Vehicles",
  "SpaceX & Mars",
  "Hyperloop & Boring",
  "Neuralink",
  "xAI & AGI",
  "Optimus",
  "X / Twitter",
  "DOGE",
  "Wild & Bizarre",
  "User Submitted",
];

export default function AddPredictionForm({
  onDone,
}: {
  onDone?: () => void;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    title: "",
    company: "",
    category: "User Submitted",
    quote: "",
    outcome: "",
    datePredicted: "",
    targetDate: "",
    source: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const res = await fetch("/api/predictions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Something went wrong. Try again.");
      return;
    }

    setSuccess(true);
    setForm({
      title: "",
      company: "",
      category: "User Submitted",
      quote: "",
      outcome: "",
      datePredicted: "",
      targetDate: "",
      source: "",
    });
    startTransition(() => {
      router.refresh();
    });
    onDone?.();
  }

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-tesla/60 focus:ring-2 focus:ring-tesla/20";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>
          Headline <span className="text-tesla">*</span>
        </label>
        <input
          className={inputClass}
          placeholder="e.g. Humans on Mars by 2024"
          value={form.title}
          maxLength={160}
          onChange={(e) => update("title", e.target.value)}
          required
        />
      </div>

      <div>
        <label className={labelClass}>What did Elon actually say?</label>
        <textarea
          className={`${inputClass} min-h-[80px] resize-y`}
          placeholder="Paste the exact quote or claim…"
          value={form.quote}
          maxLength={600}
          onChange={(e) => update("quote", e.target.value)}
          required
        />
      </div>

      <div>
        <label className={labelClass}>
          What actually happened? <span className="text-tesla">*</span>
        </label>
        <textarea
          className={`${inputClass} min-h-[90px] resize-y`}
          placeholder="Describe the reality vs. the promise…"
          value={form.outcome}
          maxLength={800}
          onChange={(e) => update("outcome", e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>When said</label>
          <input
            className={inputClass}
            placeholder="e.g. Apr 2019"
            value={form.datePredicted}
            maxLength={32}
            onChange={(e) => update("datePredicted", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Deadline</label>
          <input
            className={inputClass}
            placeholder="e.g. 2020"
            value={form.targetDate}
            maxLength={32}
            onChange={(e) => update("targetDate", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Company / venture</label>
          <input
            className={inputClass}
            placeholder="e.g. Tesla"
            value={form.company}
            maxLength={64}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Category</label>
          <select
            className={inputClass}
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-black">
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Source (optional)</label>
        <input
          className={inputClass}
          placeholder="e.g. Reuters, interview, X post…"
          value={form.source}
          maxLength={200}
          onChange={(e) => update("source", e.target.value)}
        />
      </div>

      {error && (
        <div className="rounded-lg border border-tesla/40 bg-tesla/10 px-4 py-2.5 text-sm text-tesla">
          {error}
        </div>
      )}
      {success && !error && (
        <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-400">
          ✓ Logged! The prediction is now in the Hall of Shame.
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group relative w-full overflow-hidden rounded-lg bg-tesla px-6 py-3.5 font-display text-base font-semibold uppercase tracking-wider text-white transition-all hover:bg-tesla-dark disabled:opacity-60"
      >
        {isPending ? "Logging miss…" : "+ Add to the Hall of Shame"}
      </button>
    </form>
  );
}
