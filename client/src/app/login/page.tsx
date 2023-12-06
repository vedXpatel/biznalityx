import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@nextui-org/button";

export default function Login() {
  return (
    <>
      <Button>
        <LoginLink postLoginRedirectURL="/home">Sign in</LoginLink>
      </Button>
      <RegisterLink postLoginRedirectURL="/home">Sign up</RegisterLink>
      <LogoutLink>Log out</LogoutLink>
    </>
  );
}
