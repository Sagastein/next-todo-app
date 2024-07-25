import { ITodo } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { DrawerTrigger } from "@/components/ui/drawer";
import { FilePenLine, Trash2Icon, GripVertical } from "lucide-react";

interface TodoItemProps {
  todo: ITodo;
  onMarkAsDone: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: ITodo) => void;
}

export function TodoItem({
  todo,
  onMarkAsDone,
  onDelete,
  onEdit,
}: TodoItemProps) {
  return (
    <div
      className={`bg-card p-4 rounded-lg flex items-center justify-between ${
        todo.isCompleted ? "line-through" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
        <Checkbox
          checked={todo.isCompleted}
          onCheckedChange={(checked) =>
            todo.id && onMarkAsDone(todo.id, Boolean(checked))
          }
        />
        <div className="grid gap-1">
          <p className="text-card-foreground">{todo.title}</p>
          <p className="text-xs text-muted-foreground">{todo.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={() => onEdit(todo)}>
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
            <TooltipTrigger onClick={() => todo.id && onDelete(todo.id)}>
              <Trash2Icon className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Delete Todo</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete Todo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
