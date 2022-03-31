import type { NextPage } from "next";
import withAuth from "@common/HOC/withAuth";
import { wrapper } from "@redux/store";
import MainLayout from "@layout/MainLayout";
import Home from "@containers/Home";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default withAuth(HomePage);

export const getStaticProps = wrapper.getStaticProps(() => () => {
  return {
    props: {},
  };
});
