"use client";
import { useState } from "react";
import { ITodo } from "@/types";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface EditTodoFormProps {
  todo: ITodo | null;
  onSave: (updatedTodo: ITodo) => void;
  onCancel: () => void;
}

export function EditTodoForm({ todo, onSave, onCancel }: EditTodoFormProps) {
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      onSave({ ...todo, title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
}
