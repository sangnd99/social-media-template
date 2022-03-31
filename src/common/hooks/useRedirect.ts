import { useCallback } from "react";
import { useRouter } from "next/router";

export const useRedirect = () => {
  const router = useRouter();

  const redirect = useCallback(
    (routeName: string, query: any = {}, shallow: boolean = true) => {
      router.push({ pathname: routeName, query }, undefined, { shallow });
    },
    [],
  );
  return redirect;
};
