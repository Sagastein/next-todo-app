import { Button } from "@/components/ui/button";

export function FilterButtons() {
  return (
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
  );
}
