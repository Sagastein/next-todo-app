"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  PlusIcon,
  Trash2Icon,
  FilterIcon,
  ListOrderedIcon,
  FilePenLine,
} from "lucide-react";
import { TodoForm } from "@/components/ui/AddTodoForm";
import { EditTodoForm } from "@/components/EditTodoForm";
import getTodos from "../actions/getTodos";
import deleteTodos from "../actions/DeleteDoto";
import markAsDone from "../actions/markAsDone";
import updateTodo from "../actions/editTodos"; // Import the refactored action
import { ITodo } from "@/types";

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
      <Drawer>
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Todo App</h1>

          <span className="sr-only">Add Todo</span>
          <DrawerTrigger className="rounded-full">
            <PlusIcon className="h-5 w-5" />
          </DrawerTrigger>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Today
              </Button>
              <Button variant="outline" size="sm">
                Uncompleted
              </Button>
              <Button variant="outline" size="sm">
                Completed
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <FilterIcon className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Filter Todos</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ListOrderedIcon className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Sort Todos</span>
              </Button>
            </div>
          </div>
          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`bg-card p-4 rounded-lg flex items-center justify-between ${
                  todo.isCompleted ? "line-through" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <Checkbox
                    defaultChecked={todo.isCompleted}
                    onCheckedChange={(checked) =>
                      todo.id && handleMarkAsDone(todo.id, Boolean(checked))
                    }
                  />
                  <div className="grid gap-1">
                    <p className="text-card-foreground">{todo.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {todo.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger onClick={() => setEditTodo(todo)}>
                        <DrawerTrigger>
                          <FilePenLine className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Edit Todo</span>
                        </DrawerTrigger>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Edit Todo</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger
                        onClick={() => todo.id && handleDelete(todo.id)}
                      >
                        <Trash2Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Delete Todo</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete Todo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </li>
            ))}
            <Separator />
          </ul>
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
            <DrawerClose className="bg-red-600 text-primary-foreground hover:bg-red-400 p-2 rounded-md">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Page;
