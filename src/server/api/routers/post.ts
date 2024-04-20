import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  privateProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";

// "users", // Table name
//   {
//     id: serial("id").primaryKey(),
//     email: varchar("email", { length: 256 }).unique().notNull(), // Assuming email should be unique & not null
//     name: varchar("name", { length: 256 }).notNull(),
//     apiKey: varchar("api_key", { length: 256 }).notNull(), // API key column
//     createdAt: timestamp("created_at")
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
//   },
//   (user) => ({
//     emailIndex: index("email_idx").on(user.email), // Optional: Create an index on the email column
//   }),
// );
export const userRouter = createTRPCRouter({
  addUser: privateProcedure
    .input(z.object({ name: z.string(), apiKey: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userer = {
        name: input.name,
        apiKey: input.apiKey,
        email: ctx.userEmail!,
      };
      const user = await db.insert(users).values(userer).returning().execute();

      return {
        user,
      };
    }),
});
