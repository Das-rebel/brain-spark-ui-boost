import { useState } from "react";
import { 
  Brain, 
  Search, 
  BookOpen, 
  Star, 
  Archive, 
  Settings, 
  Plus,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Tags,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Brain, label: "Neural Network", path: "/" },
  { icon: BookOpen, label: "Knowledge Base", path: "/knowledge" },
  { icon: Lightbulb, label: "Ideas", path: "/ideas" },
  { icon: Star, label: "Favorites", path: "/favorites" },
  { icon: Tags, label: "Tags", path: "/tags" },
  { icon: Calendar, label: "Timeline", path: "/timeline" },
  { icon: Archive, label: "Archive", path: "/archive" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={cn(
      "bg-card border-r border-border transition-all duration-300 ease-in-out",
      "flex flex-col elevation-2 min-h-screen",
      isCollapsed ? "w-16" : "w-72"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg center-perfect">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-title-medium font-semibold text-gradient">Second Brain</h1>
                <p className="text-body-small text-muted-foreground">Neural Knowledge Hub</p>
              </div>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hover:bg-primary/10 center-perfect"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search your brain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-colors"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 p-2">
        {!isCollapsed && (
          <div className="mb-4">
            <Button 
              className="w-full justify-start gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-md hover:shadow-lg transition-all"
              size="lg"
            >
              <Plus className="w-5 h-5" />
              New Knowledge
            </Button>
          </div>
        )}

        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn(
                "w-full transition-material hover:bg-primary/10 hover:text-primary",
                isCollapsed ? "justify-center px-2" : "justify-start gap-3 px-3"
              )}
              size={isCollapsed ? "icon" : "default"}
            >
              <item.icon className={cn("w-5 h-5", isCollapsed ? "" : "flex-shrink-0")} />
              {!isCollapsed && (
                <span className="text-body-medium">{item.label}</span>
              )}
            </Button>
          ))}
        </nav>
      </div>

      {/* Settings */}
      <div className="p-2 border-t border-border">
        <Button
          variant="ghost"
          className={cn(
            "w-full transition-material hover:bg-muted",
            isCollapsed ? "justify-center px-2" : "justify-start gap-3 px-3"
          )}
          size={isCollapsed ? "icon" : "default"}
        >
          <Settings className="w-5 h-5" />
          {!isCollapsed && <span className="text-body-medium">Settings</span>}
        </Button>
      </div>
    </div>
  );
}