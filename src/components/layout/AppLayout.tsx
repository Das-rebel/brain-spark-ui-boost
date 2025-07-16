import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { FloatingActionButton } from "./FloatingActionButton";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/20 to-secondary/10">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <main className="flex-1 p-3 sm:p-6 overflow-auto scrollbar-thin">
            {children}
          </main>
        </div>
      </div>
      <FloatingActionButton />
    </div>
  );
}