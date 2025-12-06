import { AppSidebarContent } from "@/app/(root)/_components/app-sidebar/app-sidebar-content";
import { AppSidebarFooter } from "@/app/(root)/_components/app-sidebar/app-sidebar-footer";
import { AppSidebarHeader } from "@/app/(root)/_components/app-sidebar/app-sidebar-header";
import { Sidebar } from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <AppSidebarHeader />
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
