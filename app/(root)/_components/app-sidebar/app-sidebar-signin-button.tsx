import { UserCircleIcon } from "lucide-react";
import Link from "next/link";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";

export const AppSidebarSigninButton = () => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip="Sign In"
        className="text-primary p-4 border group-data-[collapsible=icon]:border-none "
      >
        <Link
          href={ROUTES.SIGN_IN}
          className="flex justify-center group-data-[collapsible=icon]:justify-start"
        >
          <UserCircleIcon />
          <span>Sign In</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
