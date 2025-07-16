import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Zap, 
  Link, 
  Sparkles, 
  TrendingUp,
  Clock,
  Tag,
  Eye,
  Layers,
  Code,
  Palette,
  Users,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const knowledgeNodes = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    content: "Core concepts of supervised and unsupervised learning algorithms...",
    connections: 12,
    lastViewed: "2 hours ago",
    tags: ["AI", "Programming", "Data Science"],
    strength: 0.9,
    domain: "Technology",
  },
  {
    id: 2,
    title: "Design Thinking Process",
    content: "Human-centered approach to innovation that integrates the needs of people...",
    connections: 8,
    lastViewed: "1 day ago",
    tags: ["Design", "Innovation", "Process"],
    strength: 0.7,
    domain: "Design",
  },
  {
    id: 3,
    title: "React Performance Optimization",
    content: "Techniques for optimizing React applications including memo, useMemo...",
    connections: 15,
    lastViewed: "3 hours ago",
    tags: ["React", "Performance", "Frontend"],
    strength: 0.85,
    domain: "Technology",
  },
  {
    id: 4,
    title: "Psychology of Decision Making",
    content: "Cognitive biases and heuristics that influence human decision-making...",
    connections: 6,
    lastViewed: "5 days ago",
    tags: ["Psychology", "Behavior", "Decision"],
    strength: 0.6,
    domain: "Psychology",
  },
  {
    id: 5,
    title: "User Experience Principles",
    content: "Fundamental principles for creating intuitive and delightful user experiences...",
    connections: 10,
    lastViewed: "1 hour ago",
    tags: ["UX", "Design", "User Research"],
    strength: 0.8,
    domain: "Design",
  },
  {
    id: 6,
    title: "Neural Networks Architecture",
    content: "Deep learning architectures including CNNs, RNNs, and Transformers...",
    connections: 18,
    lastViewed: "4 hours ago",
    tags: ["AI", "Deep Learning", "Neural Networks"],
    strength: 0.95,
    domain: "Technology",
  },
  {
    id: 7,
    title: "Cognitive Load Theory",
    content: "Understanding how human working memory processes information...",
    connections: 7,
    lastViewed: "2 days ago",
    tags: ["Psychology", "Learning", "Cognition"],
    strength: 0.75,
    domain: "Psychology",
  },
  {
    id: 8,
    title: "Color Theory in Design",
    content: "Understanding color relationships, harmony, and psychological impact...",
    connections: 9,
    lastViewed: "6 hours ago",
    tags: ["Design", "Color", "Visual"],
    strength: 0.7,
    domain: "Design",
  },
];

const domainConfig = {
  Technology: { 
    icon: Code, 
    color: "from-blue-500/20 to-blue-600/20", 
    textColor: "text-blue-600",
    count: knowledgeNodes.filter(n => n.domain === "Technology").length
  },
  Design: { 
    icon: Palette, 
    color: "from-purple-500/20 to-purple-600/20", 
    textColor: "text-purple-600",
    count: knowledgeNodes.filter(n => n.domain === "Design").length
  },
  Psychology: { 
    icon: Users, 
    color: "from-green-500/20 to-green-600/20", 
    textColor: "text-green-600",
    count: knowledgeNodes.filter(n => n.domain === "Psychology").length
  },
};

export function NeuralNetworkView() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  
  const filteredNodes = selectedDomain === "all" 
    ? knowledgeNodes 
    : knowledgeNodes.filter(node => node.domain === selectedDomain);

  const groupedNodes = Object.entries(
    knowledgeNodes.reduce((acc, node) => {
      if (!acc[node.domain]) acc[node.domain] = [];
      acc[node.domain].push(node);
      return acc;
    }, {} as Record<string, typeof knowledgeNodes>)
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="text-center sm:text-left px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient text-glow mb-2">
            Neural Network
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-balance max-w-2xl">
            Your interconnected web of knowledge, growing stronger with every connection
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Domain Stats */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {Object.entries(domainConfig).map(([domain, config]) => (
              <Badge 
                key={domain}
                variant="secondary" 
                className="gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedDomain(selectedDomain === domain ? "all" : domain)}
              >
                <config.icon className="w-4 h-4" />
                {config.count} {domain}
              </Badge>
            ))}
          </div>
          
          {/* Activity Stats */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="gap-2 shadow-md">
              <Zap className="w-4 h-4" />
              <span className="hidden xs:inline">432 connections active</span>
              <span className="xs:hidden">432</span>
            </Badge>
            <Badge variant="secondary" className="gap-2 shadow-md">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden xs:inline">87% growth this week</span>
              <span className="xs:hidden">+87%</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={selectedDomain} onValueChange={setSelectedDomain} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6">
          <TabsTrigger value="all" className="text-xs sm:text-sm">
            <Layers className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">All Domains</span>
            <span className="xs:hidden">All</span>
          </TabsTrigger>
          {Object.entries(domainConfig).map(([domain, config]) => (
            <TabsTrigger key={domain} value={domain} className="text-xs sm:text-sm">
              <config.icon className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">{domain}</span>
              <span className="sm:hidden">{domain.slice(0, 4)}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          {/* Clustered View */}
          <div className="space-y-8">
            {groupedNodes.map(([domain, nodes], domainIndex) => {
              const config = domainConfig[domain as keyof typeof domainConfig];
              return (
                <div 
                  key={domain}
                  className="animate-in slide-in-from-left-4 fade-in"
                  style={{ animationDelay: `${domainIndex * 100}ms` }}
                >
                  {/* Domain Header */}
                  <div className="flex items-center gap-3 mb-4 px-2 sm:px-0">
                    <div className={cn("w-8 h-8 sm:w-10 sm:h-10 rounded-lg center-perfect bg-gradient-to-br", config.color)}>
                      <config.icon className={cn("w-4 h-4 sm:w-5 sm:h-5", config.textColor)} />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold text-embossed">{domain}</h2>
                      <p className="text-xs sm:text-sm text-muted-foreground">{nodes.length} knowledge nodes</p>
                    </div>
                  </div>

                  {/* Domain Nodes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {nodes.map((node, nodeIndex) => (
                      <Card 
                        key={node.id} 
                        className={cn(
                          "p-4 sm:p-6 surface hover:shadow-xl transition-all duration-300 cursor-pointer",
                          "hover:scale-[1.02] group border-2 border-transparent hover:border-primary/20",
                          "animate-in slide-in-from-bottom-4 fade-in"
                        )}
                        style={{ animationDelay: `${(domainIndex * 100) + (nodeIndex * 50)}ms` }}
                      >
                        {/* Node header */}
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            <div className={cn(
                              "w-8 h-8 sm:w-10 sm:h-10 rounded-lg center-perfect flex-shrink-0 bg-gradient-to-br",
                              config.color,
                              "group-hover:from-primary/30 group-hover:to-primary/20 transition-colors"
                            )}>
                              <config.icon className={cn("w-4 h-4 sm:w-5 sm:h-5", config.textColor)} />
                            </div>
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              <div 
                                className={cn(
                                  "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors flex-shrink-0",
                                  node.strength > 0.8 ? "bg-green-500" :
                                  node.strength > 0.6 ? "bg-yellow-500" : "bg-red-500"
                                )}
                              />
                              <span className="text-xs text-muted-foreground truncate">
                                {Math.round(node.strength * 100)}%
                              </span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity center-perfect">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Content */}
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-sm sm:text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors text-embossed">
                            {node.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3 text-balance">
                            {node.content}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mt-3 sm:mt-4">
                          {node.tags.slice(0, 3).map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="outline" 
                              className="text-xs border-primary/20 text-primary/80 hover:bg-primary/10 transition-colors"
                            >
                              <Tag className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                          {node.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{node.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Link className="w-3 h-3" />
                              <span className="hidden xs:inline">{node.connections} connections</span>
                              <span className="xs:hidden">{node.connections}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span className="hidden sm:inline">{node.lastViewed}</span>
                              <span className="sm:hidden">{node.lastViewed.split(' ')[0]}</span>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:bg-primary/10 text-xs sm:text-sm"
                          >
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="hidden sm:inline">Explore</span>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        {/* Individual Domain Views */}
        {Object.keys(domainConfig).map((domain) => (
          <TabsContent key={domain} value={domain}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {knowledgeNodes
                .filter(node => node.domain === domain)
                .map((node, index) => {
                  const config = domainConfig[domain as keyof typeof domainConfig];
                  return (
                    <Card 
                      key={node.id} 
                      className={cn(
                        "p-4 sm:p-6 surface hover:shadow-xl transition-all duration-300 cursor-pointer",
                        "hover:scale-[1.02] group border-2 border-transparent hover:border-primary/20",
                        "animate-in slide-in-from-bottom-4 fade-in"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Same content structure as above but without domain grouping */}
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className={cn(
                            "w-8 h-8 sm:w-10 sm:h-10 rounded-lg center-perfect flex-shrink-0 bg-gradient-to-br",
                            config.color
                          )}>
                            <config.icon className={cn("w-4 h-4 sm:w-5 sm:h-5", config.textColor)} />
                          </div>
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <div 
                              className={cn(
                                "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors flex-shrink-0",
                                node.strength > 0.8 ? "bg-green-500" :
                                node.strength > 0.6 ? "bg-yellow-500" : "bg-red-500"
                              )}
                            />
                            <span className="text-xs text-muted-foreground truncate">
                              {Math.round(node.strength * 100)}%
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-sm sm:text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors text-embossed">
                          {node.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3 text-balance">
                          {node.content}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-3 sm:mt-4">
                        {node.tags.slice(0, 3).map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs border-primary/20 text-primary/80 hover:bg-primary/10 transition-colors"
                          >
                            <Tag className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Link className="w-3 h-3" />
                            <span className="hidden xs:inline">{node.connections} connections</span>
                            <span className="xs:hidden">{node.connections}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span className="hidden sm:inline">{node.lastViewed}</span>
                            <span className="sm:hidden">{node.lastViewed.split(' ')[0]}</span>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:bg-primary/10"
                        >
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className="hidden sm:inline">Explore</span>
                        </Button>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Network Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { icon: Brain, label: "Total Nodes", value: "247", color: "from-blue-500/20 to-blue-600/20", textColor: "text-blue-600" },
          { icon: Link, label: "Connections", value: "1,432", color: "from-green-500/20 to-green-600/20", textColor: "text-green-600" },
          { icon: Sparkles, label: "Avg Strength", value: "89%", color: "from-purple-500/20 to-purple-600/20", textColor: "text-purple-600" },
          { icon: TrendingUp, label: "This Week", value: "+23", color: "from-orange-500/20 to-orange-600/20", textColor: "text-orange-600" },
        ].map((stat, index) => (
          <Card 
            key={stat.label}
            className={cn(
              "p-3 sm:p-4 surface hover:shadow-lg transition-all duration-300 cursor-pointer",
              "hover:scale-[1.02] animate-in slide-in-from-bottom-4 fade-in"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={cn("w-8 h-8 sm:w-10 sm:h-10 rounded-lg center-perfect bg-gradient-to-br", stat.color)}>
                <stat.icon className={cn("w-4 h-4 sm:w-5 sm:h-5", stat.textColor)} />
              </div>
              <div className="flex flex-col justify-center min-w-0 flex-1">
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-embossed">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}