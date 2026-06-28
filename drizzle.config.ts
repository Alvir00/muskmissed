import { defineConfig } from "drizzle-kit";
import "dotenv/config";

// Reads DATABASE_URL from the environment / .env file.
// `neonctl init` writes your Neon connection string into .env automatically,
// so `npx drizzle-kit push` will target your real Neon database.
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. Add it to .env (e.g. from Neon) before running drizzle-kit.",
  );
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
