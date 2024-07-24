import { text, boolean, pgTable, uuid } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  dueDate: text("dueDate").notNull(),
  isCompleted: boolean("isCompleted").notNull(),
});
