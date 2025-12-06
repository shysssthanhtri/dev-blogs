import React from "react";

import { SocialLoginGroup } from "@/app/(auth)/_components/social-login-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup, FieldSeparator } from "@/components/ui/field";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat flex w-full items-center justify-center min-h-svh p-6 md:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            Join{" "}
            <span className="italic">
              Dev <span className="text-primary">Blogs</span>
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <FieldGroup>
            <SocialLoginGroup />
            <FieldSeparator>Or continue with</FieldSeparator>
            {children}
          </FieldGroup>
        </CardContent>
      </Card>
    </main>
  );
};

export default AuthLayout;
