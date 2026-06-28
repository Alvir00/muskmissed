import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";

// A single Elon Musk prediction that did not come true (or has not, on schedule).
export const predictions = pgTable("predictions", {
  id: serial("id").primaryKey(),
  // Short headline, e.g. "1 Million Robotaxis by 2020"
  title: text("title").notNull(),
  // Grouping bucket, e.g. "Self-Driving", "SpaceX & Mars"
  category: varchar("category", { length: 64 }).notNull(),
  // Primary company / venture, e.g. "Tesla", "SpaceX", "X"
  company: varchar("company", { length: 64 }).notNull(),
  // The actual claim / quote Musk made
  quote: text("quote").notNull(),
  // Human-readable date the prediction was made, e.g. "Apr 2019"
  datePredicted: varchar("date_predicted", { length: 32 }).notNull(),
  // The deadline Musk set, e.g. "2020"
  targetDate: varchar("target_date", { length: 32 }),
  // What actually happened
  outcome: text("outcome").notNull(),
  // missed | revised | pending
  status: varchar("status", { length: 16 }).notNull().default("missed"),
  // How late it ended up being, e.g. "5+ years late"
  lateness: varchar("lateness", { length: 64 }),
  source: text("source"),
  agrees: integer("agrees").notNull().default(0),
  disputes: integer("disputes").notNull().default(0),
  isUserSubmitted: boolean("is_user_submitted").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Prediction = typeof predictions.$inferSelect;
export type NewPrediction = typeof predictions.$inferInsert;
