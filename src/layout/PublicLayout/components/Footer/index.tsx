import cn from "classnames";
import Link from "@components/custom/Link";

import { randomId } from "@common/functions";
import { listFooterContent } from "./helper";

import styles from "./Footer.module.scss";
interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div className={cn(styles.container, { ["container"]: true })}>
      <ul className={styles.list}>
        {listFooterContent.map(({ name, link }) => (
          <li key={randomId()}>
            <Link href={link} shallow={true}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.download}>
        <p>All social media Apps are in one Platform</p>
        <div className={styles.wrapper}>
          <a href="#">
            <img
              src="images/downloads/app-store.jpg"
              width={140}
              alt="App store download"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.tobesonet.eggroup"
            target="_blank"
          >
            <img
              src="images/downloads/gg-play.jpg"
              width={140}
              alt="Google play download"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
