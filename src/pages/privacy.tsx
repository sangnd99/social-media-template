import type { NextPage } from "next";
import PublicLayout from "@layout/PublicLayout";
import Privacy from "@containers/Privacy";

const PrivacyPage: NextPage = () => {
  return (
    <PublicLayout type="static">
      <Privacy />
    </PublicLayout>
  );
};

export default PrivacyPage;
