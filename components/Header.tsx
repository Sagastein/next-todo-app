import { DrawerTrigger } from "@/components/ui/drawer";
import { PlusIcon } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <span className="sr-only">Add Todo</span>
      <DrawerTrigger className="rounded-full">
        <PlusIcon className="h-5 w-5" />
      </DrawerTrigger>
    </header>
  );
}
