import { db } from "./index";
import { predictions } from "./schema";
import { seedPredictions } from "./seed-data";

/**
 * Seed the database with the researched list of Elon Musk predictions.
 * Additive & idempotent: it only inserts seed entries whose `title` is not
 * already present, so it's safe to re-run and never wipes user submissions.
 */
export async function seedPredictionsIfNeeded() {
  const existing = await db.select({ title: predictions.title }).from(predictions);

  if (existing.length === 0) {
    await db.insert(predictions).values(seedPredictions);
    return { seeded: true, count: seedPredictions.length };
  }

  const existingTitles = new Set(existing.map((r) => r.title));
  const missing = seedPredictions.filter((p) => !existingTitles.has(p.title));

  if (missing.length === 0) {
    return { seeded: false, count: existing.length };
  }

  await db.insert(predictions).values(missing);

  return { seeded: true, added: missing.length, total: seedPredictions.length };
}
