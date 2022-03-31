import cn from "classnames";

import styles from "./LeftSide.module.scss";
import layoutStyles from "../Layout/Layout.module.scss";

import Navigation from "./components/Navigation";
import Layout from "../Layout";
import Avatar from "@components/Avatar";
import { NotificationIcon } from "@assets/icons/navigation";
import Link from "@components/custom/Link";
import { PATH } from "@routes";

interface ILeftSideProps {}

const LeftSide: React.FC<ILeftSideProps> = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Link href={PATH.HOME}>
          <img src="svg/logo.svg" width={148} height={27} alt="Logo" />
        </Link>
        <div className={layoutStyles.scrollable}>
          <Navigation />
          {/* Your page section */}
          <Layout>
            <p className={layoutStyles.title}>Your pages</p>
            <div className={layoutStyles.wrapper}>
              <div className={cn(styles.content, { ["group"]: true })}>
                <Avatar size="md" border />
                <div className={styles.info}>
                  <p className={styles.name}>BUSINESS MAN</p>
                  <p className={styles.notification}>
                    <NotificationIcon width={11} height={12} />
                    13 notitications
                  </p>
                </div>
              </div>
              <div className={cn(styles.content, { ["group"]: true })}>
                <Avatar size="md" border />
                <div className={styles.info}>
                  <p className={styles.name}>BUSINESS MAN</p>
                  <p className={styles.notification}>
                    <NotificationIcon width={11} height={12} />
                    13 notitications
                  </p>
                </div>
              </div>
            </div>
          </Layout>
          {/* Shortcut section */}
          <Layout>
            <p className={layoutStyles.title}>Your shortcuts</p>
            <div className={layoutStyles.wrapper}>
              <div className={cn(styles.content, { ["group"]: true })}>
                <Avatar size="md" border />
                <div className={styles.info}>
                  <p className={styles.name}>BUSINESS MAN</p>
                  <p className={styles.notification}>
                    <NotificationIcon width={11} height={12} />
                    13 notitications
                  </p>
                </div>
              </div>
              <div className={cn(styles.content, { ["group"]: true })}>
                <Avatar size="md" border />
                <div className={styles.info}>
                  <p className={styles.name}>BUSINESS MAN</p>
                  <p className={styles.notification}>
                    <NotificationIcon width={11} height={12} />
                    13 notitications
                  </p>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </section>
    </div>
  );
};

export default LeftSide;
