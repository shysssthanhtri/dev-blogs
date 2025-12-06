import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat flex w-full items-center justify-center min-h-svh p-6 md:p-10">
      {children}
    </main>
  );
};

export default AuthLayout;
