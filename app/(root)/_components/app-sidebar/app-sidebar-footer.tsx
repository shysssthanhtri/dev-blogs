import { AppSidebarSigninButton } from "@/app/(root)/_components/app-sidebar/app-sidebar-signin-button";
import { SidebarUserButton } from "@/app/(root)/_components/app-sidebar/sidebar-user-button";
import { auth } from "@/auth";
import { SidebarFooter } from "@/components/ui/sidebar";

export const AppSidebarFooter = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <SidebarFooter className="mb-4">
      {!!user && <SidebarUserButton user={user} />}
      {!user && <AppSidebarSigninButton />}
    </SidebarFooter>
  );
};
