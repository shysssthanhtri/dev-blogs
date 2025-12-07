"use client";

import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
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
  const [isPending, startTransaction] = useTransition();

  const handleSignIn = async (provider: "github" | "google") => {
    startTransaction(async () => {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    });
  };

  return (
    <FieldGroup>
      {isPending && (
        <Field>
          <Badge variant="outline">
            <Spinner />
            Processing...
          </Badge>
        </Field>
      )}
      <Field>
        {supportSocials.map((social) => (
          <Button
            variant="outline"
            type="button"
            key={social.name}
            onClick={() => handleSignIn(social.provider)}
            disabled={isPending}
          >
            <social.icon />
            Login with {social.name}
          </Button>
        ))}
      </Field>
    </FieldGroup>
  );
};
