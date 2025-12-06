import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";

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
    <FieldGroup>
      <Field>
        {supportSocials.map((social) => (
          <Button variant="outline" type="button" key={social.name}>
            <social.icon />
            Login with {social.name}
          </Button>
        ))}
      </Field>
    </FieldGroup>
  );
};
