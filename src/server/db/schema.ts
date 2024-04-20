// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `${name}`);

export const users = createTable(
  "users", // Table name
  {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 256 }).unique().notNull(), // Assuming email should be unique & not null
    name: varchar("name", { length: 256 }).notNull(),
    apiKey: varchar("api_key", { length: 256 }).notNull(), // API key column
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
  },
  (user) => ({
    emailIndex: index("email_idx").on(user.email), // Optional: Create an index on the email column
  }),
);

export const usersRelations = relations(users, ({ one }) => ({
  profileInfo: one(timeSavedPerMonth),
}));

export const timeSavedPerMonth = createTable(
  "time_saved_per_month", // Table name
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .references(() => {
        return users.id;
      }) // Establishing a foreign key relationship to the users table
      .notNull(),
    month: integer("month").notNull(),
    year: integer("year").notNull(), // Storing the year for each record
    timeSaved: integer("time_saved") // The amount of time saved in minutes
      .notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (time) => ({
    // Optional: Creating an index on the userId, month, and year columns to improve query performance
    userMonthYearIndex: index("user_month_year_idx").on(
      time.userId,
      time.month,
      time.year,
    ),
  }),
);
