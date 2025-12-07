"use client";

import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";
import { User } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";

interface Props {
  user: User;
}

export const SidebarUserButton = ({ user }: Props) => {
  const userInfo = (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage
          src={user.image ?? ""}
          alt={user.name ?? user.email ?? user.id ?? ""}
        />
        <AvatarFallback className="rounded-lg">N/A</AvatarFallback>
      </Avatar>

      <div className="grid flex-1">
        <span className="truncate font-medium">{user.name}</span>
        <span className="text-muted-foreground truncate text-xs">
          {user.email}
        </span>
      </div>
    </>
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href={ROUTES.SETTING}>
          <SidebarMenuButton size="lg">
            {userInfo}

            <IconDotsVertical className="size-4" />
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
