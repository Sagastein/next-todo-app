import React from "react";
import { ITodo } from "@/types";
import { TodoItem } from "./TodoItem";
import { Separator } from "@/components/ui/separator";
import { List, arrayMove } from "react-movable";

interface TodoListProps {
  todos: ITodo[];
  onMarkAsDone: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: ITodo) => void;
  onReorder: (newTodos: ITodo[]) => void;
}

export function TodoList({
  todos,
  onMarkAsDone,
  onDelete,
  onEdit,
  onReorder,
}: TodoListProps) {
  return (
    <List
      values={todos}
      onChange={({ oldIndex, newIndex }) =>
        onReorder(arrayMove(todos, oldIndex, newIndex))
      }
      renderList={({ children, props }) => (
        <ul {...props} className="space-y-4">
          {children}
        </ul>
      )}
      renderItem={({ value, props }) => (
        <li {...props}>
          <TodoItem
            todo={value}
            onMarkAsDone={onMarkAsDone}
            onDelete={onDelete}
            onEdit={onEdit}
          />
          <Separator />
        </li>
      )}
    />
  );
}
