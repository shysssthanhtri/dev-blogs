import Image from "next/image";
import Link from "next/link";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";

export const AppSidebarHeader = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={ROUTES.HOME}>
              <Image
                src="/images/dev-blogs-gpt.svg"
                width={23}
                height={23}
                alt="DevFlow Logo"
              />
              <span className="text-base font-semibold">
                DEV <span className="text-primary">BLOGS</span>
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
