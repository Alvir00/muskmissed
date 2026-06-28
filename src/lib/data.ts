import { eq } from "drizzle-orm";
import { db } from "@/db";
import { predictions } from "@/db/schema";
import { seedPredictionsIfNeeded } from "@/db/seed";
import type { Prediction } from "@/db/schema";

// Re-export the pure, server-free slug helpers so server code can import
// everything it needs from a single module.
export {
  slugify,
  predictionSlug,
  parsePredictionSlug,
} from "./prediction";
export type { Prediction } from "./prediction";

export type PredictionWithMeta = Prediction;

export async function getAllPredictions(): Promise<PredictionWithMeta[]> {
  await seedPredictionsIfNeeded();
  const rows = await db.select().from(predictions);
  // Newest / user-submitted first, then by creation order.
  return rows.sort((a, b) => {
    if (a.isUserSubmitted !== b.isUserSubmitted) {
      return a.isUserSubmitted ? -1 : 1;
    }
    return b.id - a.id;
  });
}

export interface CategoryStat {
  category: string;
  count: number;
}

export async function getPredictionById(
  id: number,
): Promise<PredictionWithMeta | null> {
  await seedPredictionsIfNeeded();
  const rows = await db.select().from(predictions).where(eq(predictions.id, id)).limit(1);
  return rows[0] ?? null;
}

export async function getCategoryStats(): Promise<CategoryStat[]> {
  const rows = await getAllPredictions();
  const map = new Map<string, number>();
  for (const row of rows) {
    map.set(row.category, (map.get(row.category) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}
