import { useAppSelector } from "@common/hooks";

import styles from "./RightSide.module.scss";
import SearchBox from "@components/SearchBox";
import layoutStyles from "../Layout/Layout.module.scss";
import Trends from "./components/home/Trends";
import Contacts from "./components/home/Contacts";
import Intro from "./components/users/Intro";
import Photos from "./components/users/Photos";

interface IRightSideProps {}

const RightSide: React.FC<IRightSideProps> = (props) => {
  const { currentPage } = useAppSelector((state) => state.config);
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <SearchBox />
        <div className={layoutStyles.scrollable}>
          {currentPage === "USER" && (
            <>
              {/* Intro section */}
              <Intro />
              {/* Photos section */}
              <Photos />
            </>
          )}
          {/* Trends section */}
          <Trends />
          {/* Contact section */}
          <Contacts />
          {/* Create new group button */}
          <div className={styles.create}>
            <div className={styles.create__icon}>
              <img
                src="svg/common/add-group.svg"
                width={25}
                height={25}
                alt="Create new group"
              />
            </div>
            Create new group
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
