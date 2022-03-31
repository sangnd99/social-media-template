import cn from "classnames";

import styles from "./MainLayout.module.scss";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";
import MobileHeader from "./component/MobileHeader";

interface IMainLayoutProps {}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.container, { ["container"]: true })}>
        <LeftSide />
        <section className={styles.section}>
          <MobileHeader />
          {children}
        </section>
        <RightSide />
      </div>
    </div>
  );
};

export default MainLayout;
