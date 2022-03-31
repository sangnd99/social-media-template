import Link from "next/link";
import { useEffect, useState } from "react";
import cn from "classnames";

import styles from "./MobileNavigation.module.scss";
import { navigationList } from "../../LeftSide/components/Navigation/helper";
import navigationStyles from "../../LeftSide/components/Navigation/Navigation.module.scss";
import { randomId } from "@common/functions/randomId";
import { useAppSelector } from "@common/hooks";
import { LogoutIcon } from "@assets/icons/navigation";
import { useRedirect } from "@common/hooks";
import { PATH } from "@routes";

interface INavigationProps {
  show: boolean;
}

const MobileNavigation: React.FC<INavigationProps> = ({ show }) => {
  const redirect = useRedirect();
  const { currentPage } = useAppSelector((state) => state.config);
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (show) setRender(true);
  }, [show]);
  const handleAnimationEnd = () => {
    if (!show) setRender(false);
  };
  const handleLogout = () => {
    localStorage.setItem("AUTHEN", "false");
    redirect(PATH.LOGIN);
  };
  return render ? (
    <div
      className={styles.container}
      style={{
        animation: `${show ? "fadein" : "fadeout"} 0.2s linear forwards`,
      }}
      onAnimationEnd={handleAnimationEnd}
    >
      {navigationList.map(({ Icon, link, name, active }) => (
        <Link href={link} key={randomId()}>
          <a className={navigationStyles.nav}>
            <div
              className={cn(navigationStyles["icon-wrapper"], {
                [navigationStyles["icon-wrapper--active"]]:
                  active === currentPage,
              })}
            >
              <Icon />
            </div>
            {name}
          </a>
        </Link>
      ))}
      <div className={navigationStyles.nav} onClick={handleLogout}>
        <div className={cn(navigationStyles["icon-wrapper"])}>
          <LogoutIcon />
        </div>
        Logout
      </div>
    </div>
  ) : null;
};

export default MobileNavigation;
