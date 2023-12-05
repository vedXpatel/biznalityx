import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Login() {
  return (
    <>
      <LoginLink postLoginRedirectURL="/home">Sign in</LoginLink>
      <RegisterLink postLoginRedirectURL="/home">Sign up</RegisterLink>
      <LogoutLink>Log out</LogoutLink>
    </>
  );
}
