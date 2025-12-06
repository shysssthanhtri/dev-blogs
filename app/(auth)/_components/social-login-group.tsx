"use client";

import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { ROUTES } from "@/constants/routes";

const supportSocials = [
  {
    icon: IconBrandGithubFilled,
    name: "Github",
    provider: "github",
  },
  {
    icon: IconBrandGoogleFilled,
    name: "Google",
    provider: "google",
  },
] as const;

export const SocialLoginGroup = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);

      toast.error("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
      });
    }
  };

  return (
    <FieldGroup>
      <Field>
        {supportSocials.map((social) => (
          <Button
            variant="outline"
            type="button"
            key={social.name}
            onClick={() => handleSignIn(social.provider)}
          >
            <social.icon />
            Login with {social.name}
          </Button>
        ))}
      </Field>
    </FieldGroup>
  );
};
