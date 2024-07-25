import { Button } from "@/components/ui/button";
import { FilterIcon, ListOrderedIcon } from "lucide-react";

export function SortButtons() {
  return (
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
  );
}
