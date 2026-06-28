"use client";

import { useState } from "react";

export default function ShareButtons({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = `"${title}" — another prediction that didn't come true. See the full record:`;
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  const tweetText = encodeURIComponent(
    `Elon said: "${title}". It did not come true.`,
  );

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={copy}
        className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-zinc-200 transition-all hover:border-tesla/50 hover:text-tesla"
      >
        {copied ? "✓ Copied!" : "⧉ Copy share link"}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(
          url,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-zinc-200 transition-all hover:border-tesla/50 hover:text-tesla"
      >
        𝕏 Share on X
      </a>
    </div>
  );
}
