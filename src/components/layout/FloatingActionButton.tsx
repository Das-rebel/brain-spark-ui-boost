import { Plus, Lightbulb, FileText, Camera, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const quickActions = [
  { icon: FileText, label: "Quick Note", color: "from-blue-500 to-blue-600" },
  { icon: Lightbulb, label: "Idea", color: "from-yellow-500 to-yellow-600" },
  { icon: Camera, label: "Photo", color: "from-green-500 to-green-600" },
  { icon: Mic, label: "Voice Note", color: "from-purple-500 to-purple-600" },
];

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col-reverse items-end gap-2 sm:gap-3 z-50">
      {/* Quick action buttons */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-4">
          {quickActions.map((action, index) => (
            <div
              key={action.label}
              className="flex items-center gap-2 sm:gap-3 animate-in slide-in-from-right-2"
              style={{ animationDelay: `${index * 75}ms`, animationDuration: "300ms" }}
            >
              <span className="bg-card px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm text-foreground shadow-md border border-border hidden xs:block">
                {action.label}
              </span>
              <Button
                size="icon"
                className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200",
                  "bg-gradient-to-r hover:scale-105 active:scale-95 animate-pulse",
                  action.color
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <action.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
          "bg-gradient-to-r from-primary to-primary/90 hover:scale-105 active:scale-95",
          "animate-pulse hover:animate-none",
          isOpen && "rotate-45 bg-gradient-to-r from-red-500 to-red-600"
        )}
      >
        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground transition-transform duration-300" />
      </Button>
    </div>
  );
}