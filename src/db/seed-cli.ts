// Load .env BEFORE the database client initializes (imports are evaluated in
// source order, so this must come first). After `neonctl init` writes your
// Neon DATABASE_URL into .env, this reads it automatically.
import "dotenv/config";
import { seedPredictionsIfNeeded } from "./seed";

// Usage: npx tsx src/db/seed-cli.ts
async function main() {
  const result = await seedPredictionsIfNeeded();
  console.log("Seed result:", result);
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
