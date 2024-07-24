"use server";
import { todo } from "@/db/schema";
import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function deleteTodos(id: string) {
  await db.delete(todo).where(eq(todo.id, id)).execute();
  await db.select().from(todo);
  revalidatePath("/todo");
}
