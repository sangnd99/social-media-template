import styles from "./Layout.module.scss";

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
