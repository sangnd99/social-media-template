import styles from "./Photos.module.scss";
import Header from "../Header";
import Layout from "@layout/MainLayout/component/Layout";

interface IPhotosProps {}

const Photos: React.FC<IPhotosProps> = (props) => {
  return (
    <Layout>
      <Header title="Photos" navigate="See all photos" to="#" />
      <div className={styles.container}>
        <img src="images/demo/tobechain-02.jpg" className={styles.image} />
        <img src="images/demo/tobechain-02.jpg" className={styles.image} />
        <img src="images/demo/tobechain-02.jpg" className={styles.image} />
        <img src="images/demo/tobechain-02.jpg" className={styles.image} />
        <img src="images/demo/tobechain-02.jpg" className={styles.image} />
        <img src="images/demo/tobechain-02.jpg" className={styles.image} />
      </div>
    </Layout>
  );
};

export default Photos;
