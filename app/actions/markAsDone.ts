"use server";
import { todo } from "@/db/schema";
import db from "@/db/drizzle";
import { eq, asc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function markAsDone(id: string, isCompleted: boolean) {
  await db.update(todo).set({ isCompleted }).where(eq(todo.id, id));
  console.log("markAsDone", id, isCompleted);
  const updatedTodo = await db.select().from(todo).orderBy(asc(todo.id));
  revalidatePath("/todo");
}
