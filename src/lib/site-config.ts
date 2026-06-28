// Centralized site URL config — works on both server and client.
// Set NEXT_PUBLIC_SITE_URL to your production domain in the deployment
// environment (e.g. Vercel project settings). Falls back to localhost for dev.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";
