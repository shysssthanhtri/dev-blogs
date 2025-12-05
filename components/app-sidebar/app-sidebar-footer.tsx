import React from "react";

import { SidebarUserButton } from "@/components/app-sidebar/sidebar-user-button";
import { SidebarFooter } from "@/components/ui/sidebar";

export const AppSidebarFooter = () => {
  return (
    <SidebarFooter>
      <SidebarUserButton />
    </SidebarFooter>
  );
};
