import Link from "next/link";
import cn from "classnames";

import styles from "./Navigation.module.scss";
import Layout from "../../../Layout";
import Avatar from "@components/Avatar";
import { navigationList } from "./helper";
import { randomId } from "@common/functions/randomId";
import { useAppSelector } from "@common/hooks/redux";
import { LogoutIcon } from "@assets/icons/navigation";
import { PATH } from "@routes";
import { useRedirect } from "@common/hooks";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = (props) => {
  const redirect = useRedirect();
  const { currentPage } = useAppSelector((state) => state.config);
  const handleLogout = () => {
    localStorage.setItem("AUTHEN", "false");
    redirect(PATH.LOGIN);
  };
  return (
    <Layout>
      <div className={styles.container}>
        <Link href={{ pathname: PATH.USER }} passHref>
          <a
            className={cn(styles.user, {
              [styles["user--active"]]: currentPage === "USER",
            })}
          >
            <Avatar />
            <p className={styles.name}>Alexander Pham</p>
          </a>
        </Link>
        <div>
          {navigationList.map(({ name, Icon, link, active }) => (
            <Link href={link} passHref shallow key={randomId()}>
              <a className={styles.nav}>
                <div
                  className={cn(styles["icon-wrapper"], {
                    [styles["icon-wrapper--active"]]: active === currentPage,
                  })}
                >
                  <Icon />
                </div>
                {name}
              </a>
            </Link>
          ))}
          <div className={styles.nav} onClick={handleLogout}>
            <div className={styles["icon-wrapper"]}>
              <LogoutIcon />
            </div>
            Logout
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Navigation;
