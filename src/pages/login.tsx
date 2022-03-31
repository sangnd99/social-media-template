import type { NextPage } from "next";
import Login from "@containers/Login";
import PublicLayout from "@layout/PublicLayout";

const LoginPage: NextPage = () => {
  return (
    <PublicLayout
      type="authen"
      title="On Tobe Sonet bring people together"
      text="All social media Apps are in one Platform"
    >
      <Login />
    </PublicLayout>
  );
};

export default LoginPage;
