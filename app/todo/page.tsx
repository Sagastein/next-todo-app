"use client";
import { useState, useEffect, Fragment } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { TodoForm } from "@/components/ui/AddTodoForm";
import { EditTodoForm } from "@/components/EditTodoForm";
import getTodos from "../actions/getTodos";
import deleteTodos from "../actions/DeleteDoto";
import markAsDone from "../actions/markAsDone";
import updateTodo from "../actions/editTodos";
import { ITodo } from "@/types";
import { Header } from "@/components/Header";
import { FilterButtons } from "@/components/FilterButtons";
import { SortButtons } from "@/components/SortButtons";
import { TodoList } from "@/components/TodoList";

function Page() {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [editTodo, setEditTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }
    fetchData();
  }, []);

  const handleAddTodo = (newTodos: ITodo[]) => {
    setTodos(newTodos);
  };

  const handleDelete = async (id: string) => {
    await deleteTodos(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleMarkAsDone = async (id: string, isCompleted: boolean) => {
    await markAsDone(id, isCompleted);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted } : todo
      )
    );
  };

  const handleSaveEdit = async (updatedTodo: ITodo) => {
    const updatedTodos = await updateTodo(updatedTodo);
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <Drawer onClose={() => setEditTodo(null)}>
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <FilterButtons />
            <SortButtons />
          </div>
          <TodoList
            todos={todos}
            onMarkAsDone={handleMarkAsDone}
            onDelete={handleDelete}
            onEdit={setEditTodo}
          />
        </main>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{editTodo ? "Edit Todo" : "Add New Todo"}</DrawerTitle>
            {editTodo ? (
              <EditTodoForm
                todo={editTodo}
                onSave={handleSaveEdit}
                onCancel={() => setEditTodo(null)}
              />
            ) : (
              <TodoForm onAddTodo={handleAddTodo} />
            )}
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose
              onClick={() => setEditTodo(null)}
              className="bg-red-600 text-primary-foreground hover:bg-red-400 p-2 rounded-md"
            >
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Page;
