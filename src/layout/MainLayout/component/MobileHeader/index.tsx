import cn from "classnames";

import styles from "./MobileHeader.module.scss";
import MobileNavigation from "./MobileNavigation";
import { useClickOutSide } from "@common/hooks";
import Link from "@components/custom/Link";
import { PATH } from "@routes";

interface IMobileHeaderProps {}

const MobileHeader: React.FC<IMobileHeaderProps> = (props) => {
  const { elementRef, isVisible, setElementVisible } = useClickOutSide(false);
  return (
    <div className={cn(styles.container, { ["container"]: true })}>
      <Link href={PATH.HOME}>
        <img src="svg/logo.svg" width={100} alt="Tobe sonet logo" />
      </Link>
      <div
        className={styles.hamburger}
        onClick={() => setElementVisible(!isVisible)}
        ref={elementRef}
      >
        <img src="svg/common/hamburger.svg" />
        <MobileNavigation show={isVisible} />
      </div>
    </div>
  );
};

export default MobileHeader;
