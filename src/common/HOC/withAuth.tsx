import { useEffect } from "react";

import { useRedirect } from "@common/hooks/useRedirect";
import { PATH } from "@routes";

const withAuth = (Component: React.FC<any>) => () => {
  const redirect = useRedirect();

  useEffect(() => {
    const isLoggin = localStorage.getItem("AUTHEN");
    if (isLoggin !== "true") {
      redirect(PATH.LOGIN);
    }
  }, []);
  return <Component />;
};

export default withAuth;
