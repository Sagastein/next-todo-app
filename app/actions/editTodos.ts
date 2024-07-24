"use server"
import db from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ITodo } from "@/types";

export default async function updateTodo(updatedTodo: ITodo): Promise<ITodo[]> {
  await db
    .update(todo)
    .set({
      title: updatedTodo.title,
      description: updatedTodo.description,
      isCompleted: updatedTodo.isCompleted,
    })
    .where(eq(todo.id, updatedTodo.id ?? ""));

  const updatedTodos = await db.select().from(todo).execute();
  return updatedTodos;
}
