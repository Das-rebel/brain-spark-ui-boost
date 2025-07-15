import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Zap, 
  Link, 
  Sparkles, 
  TrendingUp,
  Clock,
  Tag,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

const knowledgeNodes = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    content: "Core concepts of supervised and unsupervised learning algorithms...",
    connections: 12,
    lastViewed: "2 hours ago",
    tags: ["AI", "Programming", "Data Science"],
    strength: 0.9,
  },
  {
    id: 2,
    title: "Design Thinking Process",
    content: "Human-centered approach to innovation that integrates the needs of people...",
    connections: 8,
    lastViewed: "1 day ago",
    tags: ["Design", "Innovation", "Process"],
    strength: 0.7,
  },
  {
    id: 3,
    title: "React Performance Optimization",
    content: "Techniques for optimizing React applications including memo, useMemo...",
    connections: 15,
    lastViewed: "3 hours ago",
    tags: ["React", "Performance", "Frontend"],
    strength: 0.85,
  },
  {
    id: 4,
    title: "Psychology of Decision Making",
    content: "Cognitive biases and heuristics that influence human decision-making...",
    connections: 6,
    lastViewed: "5 days ago",
    tags: ["Psychology", "Behavior", "Decision"],
    strength: 0.6,
  },
];

export function NeuralNetworkView() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-small font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Neural Network
          </h1>
          <p className="text-body-large text-muted-foreground mt-2">
            Your interconnected web of knowledge, growing stronger with every connection
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-2">
            <Zap className="w-4 h-4" />
            432 connections active
          </Badge>
          <Badge variant="secondary" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            87% growth this week
          </Badge>
        </div>
      </div>

      {/* Knowledge Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {knowledgeNodes.map((node) => (
          <Card 
            key={node.id} 
            className={cn(
              "p-6 surface hover:shadow-xl transition-all duration-300 cursor-pointer",
              "hover:scale-[1.02] group border-2 border-transparent hover:border-primary/20"
            )}
          >
            {/* Node header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center",
                  "bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors"
                )}>
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <div 
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      node.strength > 0.8 ? "bg-green-500" :
                      node.strength > 0.6 ? "bg-yellow-500" : "bg-red-500"
                    )}
                  />
                  <span className="text-xs text-muted-foreground">
                    {Math.round(node.strength * 100)}% strength
                  </span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-title-medium font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                {node.title}
              </h3>
              <p className="text-body-small text-muted-foreground line-clamp-3">
                {node.content}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-4">
              {node.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-xs border-primary/20 text-primary/80 hover:bg-primary/10 transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Link className="w-3 h-3" />
                  {node.connections} connections
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {node.lastViewed}
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:bg-primary/10"
              >
                <Sparkles className="w-4 h-4 mr-1" />
                Explore
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 surface">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-title-large font-semibold">247</p>
              <p className="text-body-small text-muted-foreground">Total Nodes</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 surface">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
              <Link className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-title-large font-semibold">1,432</p>
              <p className="text-body-small text-muted-foreground">Connections</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 surface">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-title-large font-semibold">89%</p>
              <p className="text-body-small text-muted-foreground">Avg Strength</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 surface">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-title-large font-semibold">+23</p>
              <p className="text-body-small text-muted-foreground">This Week</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}