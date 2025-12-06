import React from "react";

import { NotificationButton } from "@/components/site-header/notification-button";
import { SiteHeaderSearch } from "@/components/site-header/site-header-search";
import { ThemeButton } from "@/components/site-header/theme-button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const SiteHeader = () => {
  return (
    <header className="border-b">
      <div className="flex items-center gap-2 p-2">
        <SidebarTrigger className="ml-2" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <SiteHeaderSearch />
        <div className="ml-auto flex items-center gap-4">
          <NotificationButton />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
