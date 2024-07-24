"use server";
import { todo } from "@/db/schema";
import db from "@/db/drizzle";
import { ITodo } from "@/types";
import { asc } from "drizzle-orm";

export default async function getTodos(): Promise<ITodo[]> {
  const todos = await db.select().from(todo).orderBy(asc(todo.id));
  return todos;
}
