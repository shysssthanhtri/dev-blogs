import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat">
      {children}
    </main>
  );
};

export default AuthLayout;
