import styles from "./Trends.module.scss";
import Layout from "@layout/MainLayout/component/Layout";
import layoutStyles from "@layout/MainLayout/component/Layout/Layout.module.scss";
import { randomId } from "@common/functions";

interface ITrendsProps {}

const Trends: React.FC<ITrendsProps> = (props) => {
  return (
    <Layout>
      <p className={layoutStyles.title}>Trends for you</p>
      <div className={layoutStyles.wrapper}>
        {mockData.map(() => (
          <div className={styles.container} key={randomId()}>
            <div className={styles.info}>
              <p className={styles.text}>Politics · Trending</p>
              <p className={styles.name}>Ukraine</p>
              <p className={styles.text}>1.68M Tweets</p>
            </div>

            <div className={styles.more}>
              <img src="svg/common/more.svg" width={20} height={3} alt="More" />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Trends;
const mockData = [1, 2, 3, 4, 5];
