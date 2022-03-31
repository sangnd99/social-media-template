import { useEffect } from "react";
import MainLayout from "@layout/MainLayout";
import { useAppDispatch } from "@common/hooks/redux";
import { setCurrentPage } from "@redux/slices/config";
import User from "@containers/User";

const UserPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("USER"));
  }, []);
  return (
    <MainLayout>
      <User />
    </MainLayout>
  );
};

export default UserPage;
