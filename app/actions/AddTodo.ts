"use server";
import { todo } from "@/db/schema";
import db from "@/db/drizzle";

export default async function addTodos({
  title,
  description,
  dueDate,
}: {
  title: string;
  description: string;
  dueDate: string;
}) {
  await db.insert(todo).values({
    title,
    description,
    dueDate,
    isCompleted: false,
  });
  const records = await db.select().from(todo);
  console.log("todo added successfully", records);
  return records;
}
