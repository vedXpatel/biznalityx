import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Login() {
  return (
    <>
      <h1>
        <LoginLink>Sign in</LoginLink>
      </h1>
      <h1>
        <RegisterLink>Sign up</RegisterLink>
      </h1>
    </>
  );
}
