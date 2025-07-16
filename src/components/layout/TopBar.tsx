import { Bell, User, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopBar() {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border px-3 sm:px-6 py-3 sm:py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" className="center-perfect">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="hidden sm:block min-w-0 flex-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-foreground text-glow truncate">
              Good morning, Alex 👋
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground text-balance">
              Ready to expand your knowledge today?
            </p>
          </div>

          {/* Mobile title */}
          <div className="sm:hidden min-w-0 flex-1">
            <h2 className="text-base font-semibold text-foreground truncate">Second Brain</h2>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
          {/* Theme toggle - hidden on smallest screens */}
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 center-perfect hidden xs:flex">
            <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          {/* Notifications */}
          <div className="relative center-perfect">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 center-perfect">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full p-0 center-perfect text-xs shadow-lg"
            >
              3
            </Badge>
          </div>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full center-perfect">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="@user" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                    <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 sm:w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Alex Johnson</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    alex@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem className="sm:hidden">Theme</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}