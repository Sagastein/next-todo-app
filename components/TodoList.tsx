import { ITodo } from "@/types";
import { TodoItem } from "./TodoItem";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
interface TodoListProps {
  todos: ITodo[];
  onMarkAsDone: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: ITodo) => void;
}

export function TodoList({
  todos,
  onMarkAsDone,
  onDelete,
  onEdit,
}: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <Fragment key={todo.id}>
          <TodoItem
            key={todo.id}
            todo={todo}
            onMarkAsDone={onMarkAsDone}
            onDelete={onDelete}
            onEdit={onEdit}
          />
          <Separator className="p-0 my-1" />
        </Fragment>
      ))}
    </ul>
  );
}
