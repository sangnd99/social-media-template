import type { NextPage } from "next";
import Register from "@containers/Register";
import PublicLayout from "@layout/PublicLayout";

const RegisterPage: NextPage = () => {
  return (
    <PublicLayout
      type="authen"
      title="Create a new account"
      text="It's quick and easy."
    >
      <Register />
    </PublicLayout>
  );
};

export default RegisterPage;
