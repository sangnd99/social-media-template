import { Fragment } from "react";

import styles from "./Contacts.module.scss";
import { randomId } from "@common/functions/randomId";

import Layout from "@layout/MainLayout/component/Layout";
import layoutStyles from "@layout/MainLayout/component/Layout/Layout.module.scss";
import Avatar from "@components/Avatar";

interface IContactsProps {}

const Contacts: React.FC<IContactsProps> = (props) => {
  return (
    <Layout>
      <div className={layoutStyles.header}>
        <p className={layoutStyles.title}>Contacts</p>
        <div className={styles.header}>
          <div className={styles["icon-wrapper"]}>
            <img
              src="svg/common/search.svg"
              width={14}
              height={15}
              alt="Search contact"
            />
          </div>
          <div className={styles["icon-wrapper"]}>
            <img src="svg/common/more.svg" width={20} height={3} alt="More" />
          </div>
        </div>
      </div>
      <div className={layoutStyles.wrapper}>
        {mockData.map(() => (
          <Fragment key={randomId()}>
            <div className={styles.user}>
              <Avatar size="md" border />
              <p className={styles.name}>Alexander The Roman</p>
            </div>
            <div className={styles.user}>
              <Avatar size="md" border />
              <p className={styles.name}>Rose Tran</p>
            </div>
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default Contacts;

const mockData = [1, 2, 3, 4, 5];
