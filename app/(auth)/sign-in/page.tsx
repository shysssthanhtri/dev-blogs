import { SocialLoginGroup } from "@/app/(auth)/_components/social-login-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";

const SignInPage = () => {
  return (
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
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default SignInPage;
