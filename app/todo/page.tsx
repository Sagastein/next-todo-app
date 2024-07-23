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
  DrumIcon,
  CheckIcon,
  Trash2Icon,
  FilterIcon,
  ListOrderedIcon,
} from "lucide-react";
import { TodoForm } from "@/components/ui/AddTodoForm";

function page() {
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
            <li className="bg-card p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Checkbox defaultChecked />
                <div className="grid gap-1">
                  <p className="text-card-foreground">Buy groceries</p>
                  <p className="text-xs text-muted-foreground">
                    Today, 3:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <DrumIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Drag Todo</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Drag Todo</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <CheckIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Mark as Complete</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Mark as Complete</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
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
            <Separator />
          </ul>
        </main>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add New Todo</DrawerTitle>

            <TodoForm />
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
export default page;
