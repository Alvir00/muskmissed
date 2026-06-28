import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { predictions } from "@/db/schema";
import { seedPredictionsIfNeeded } from "@/db/seed";

export const dynamic = "force-dynamic";

// Ensure the seed data exists before accepting new submissions.
async function ensureSeeded() {
  try {
    await seedPredictionsIfNeeded();
  } catch {
    /* ignore — will be handled by the query below */
  }
}

const CATEGORIES = new Set([
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
]);

function clean(value: unknown, max: number): string {
  const trimmed = String(value ?? "").trim().slice(0, max);
  return trimmed;
}

export async function POST(req: NextRequest) {
  await ensureSeeded();

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const title = clean(body.title, 160);
  const company = clean(body.company, 64) || "—";
  const quote = clean(body.quote, 600);
  const outcome = clean(body.outcome, 800);
  const datePredicted = clean(body.datePredicted, 32);
  const targetDate = clean(body.targetDate, 32);
  const source = clean(body.source, 200);

  const requestedCategory = clean(body.category, 64);
  const category =
    requestedCategory && CATEGORIES.has(requestedCategory)
      ? requestedCategory
      : "User Submitted";

  // Validate the required fields.
  const errors: string[] = [];
  if (!title) errors.push("A headline is required.");
  if (!quote) errors.push("What Elon actually said is required.");
  if (!outcome) errors.push("Please describe what actually happened.");
  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
  }

  const [created] = await db
    .insert(predictions)
    .values({
      title,
      category,
      company,
      quote,
      outcome,
      datePredicted: datePredicted || "Recently",
      targetDate: targetDate || undefined,
      source: source || undefined,
      status: "missed",
      isUserSubmitted: true,
    })
    .returning();

  return NextResponse.json({ prediction: created }, { status: 201 });
}

export async function GET() {
  await ensureSeeded();
  const rows = await db.select().from(predictions);
  return NextResponse.json({ predictions: rows });
}
