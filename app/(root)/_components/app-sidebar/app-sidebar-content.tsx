import { IconSettings, IconUsers } from "@tabler/icons-react";
import { Home, Inbox } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";

const items = [
  {
    title: "Home",
    url: ROUTES.HOME,
    icon: Home,
  },
  {
    title: "Inbox",
    url: ROUTES.INBOX,
    icon: Inbox,
  },
  {
    title: "Follow",
    url: ROUTES.FOLLOW,
    icon: IconUsers,
  },
];

export const AppSidebarContent = () => {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup className="mt-auto">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Setting">
                <Link href={ROUTES.SETTING}>
                  <IconSettings />
                  <span>Setting</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};
