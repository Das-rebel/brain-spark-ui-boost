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
    <div className="fixed bottom-6 right-6 flex flex-col-reverse items-end gap-3 z-50">
      {/* Quick action buttons */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-4">
          {quickActions.map((action, index) => (
            <div
              key={action.label}
              className="flex items-center gap-3 animate-in slide-in-from-right-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="bg-card px-3 py-1 rounded-full text-sm text-foreground shadow-md border border-border">
                {action.label}
              </span>
              <Button
                size="icon"
                className={cn(
                  "w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200",
                  "bg-gradient-to-r hover:scale-105 active:scale-95",
                  action.color
                )}
              >
                <action.icon className="w-5 h-5 text-white" />
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
          "w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200",
          "bg-gradient-to-r from-primary to-primary/90 hover:scale-105 active:scale-95",
          isOpen && "rotate-45"
        )}
      >
        <Plus className="w-6 h-6 text-primary-foreground" />
      </Button>
    </div>
  );
}