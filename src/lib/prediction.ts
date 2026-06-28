// Pure helpers with NO server-only imports — safe to import from client
// components. (Importing the Prediction type here is type-only, so it is
// erased at compile time and never pulls the database module into the bundle.)
import type { Prediction } from "@/db/schema";

export type { Prediction };

// Slugify a title for readable URLs: "1 Million Robotaxis" -> "1-million-robotaxis"
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

// Stable slug key paired with the numeric id: "42-mars-colony-by-2050"
export function predictionSlug(p: Prediction): string {
  return `${p.id}-${slugify(p.title)}`;
}

// Parse the id out of a slug like "42-some-title"
export function parsePredictionSlug(slug: string): number | null {
  const match = slug.match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}
