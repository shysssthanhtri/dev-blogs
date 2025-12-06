import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

const supportSocials = [
  {
    icon: IconBrandGithubFilled,
    name: "Github",
  },
  {
    icon: IconBrandGoogleFilled,
    name: "Google",
  },
];

export const SocialLoginGroup = () => {
  return (
    <div className="space-y-4">
      {supportSocials.map((social) => (
        <Field key={social.name}>
          <Button variant="outline" type="button">
            <social.icon />
            Login with {social.name}
          </Button>
        </Field>
      ))}
    </div>
  );
};
