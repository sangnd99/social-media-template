import styles from "./Intro.module.scss";

import Layout from "@layout/MainLayout/component/Layout";
import Header from "../Header";

interface IIntroProps {}

const Intro: React.FC<IIntroProps> = (props) => {
  return (
    <Layout>
      <Header title="Intro" navigate="Edit detail" to="#" />
      <div className={styles.container}>
        <div className={styles.info}>
          <img src="svg/common/house.svg" width={15} height={15} />
          <p>Lives in Ho Chi Minh City, Vietnam</p>
        </div>
        <div className={styles.info}>
          <img src="svg/common/instagram.svg" width={15} height={15} />
          <p>alexander_pham</p>
        </div>
      </div>
    </Layout>
  );
};

export default Intro;
