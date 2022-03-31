import styles from "./Layout.module.scss";
import Link from "@components/custom/Link";
import layoutStyles from "@layout/MainLayout/component/Layout/Layout.module.scss";

interface IHeaderProps {
  title: string;
  navigate: string;
  to: string;
}

const Header: React.FC<IHeaderProps> = ({ title, navigate, to }) => {
  return (
    <div className={styles.header}>
      <p className={layoutStyles.title}>{title}</p>
      <Link href={to}>
        <span className={styles["edit-detail"]}>{navigate}</span>
      </Link>
    </div>
  );
};

export default Header;
