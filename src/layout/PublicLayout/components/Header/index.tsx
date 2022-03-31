import Link from "next/link";
import cn from "classnames";

import styles from "./Header.module.scss";
import { PATH } from "@routes";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div className={cn(styles.wrapper, { ["container"]: true })}>
      <Link href={PATH.HOME} passHref>
        <a>
          <img
            className={styles.logo}
            src="svg/logo.svg"
            width={158}
            height={29}
            alt="Tobe Sonet Logo"
          />
        </a>
      </Link>
      <p className={styles.language}>
        English
        <img src="svg/common/arrow.svg" width={9} height={7} />
      </p>
    </div>
  );
};

export default Header;
