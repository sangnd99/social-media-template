import cn from "classnames";
import styles from "./AuthenLayout.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface IMainProps {
  title?: string;
  text?: string;
  type: "static" | "authen";
}

const Main: React.FC<IMainProps> = ({ children, title, text, type }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div
        className={cn(styles.container, {
          [styles.grid]: type === "authen",
          ["container"]: true,
        })}
      >
        {type === "authen" && (
          <div className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
            <img
              className={styles.background}
              src="images/authen/background.png"
              width={465}
              height={338}
              alt="Authentication background"
            />
          </div>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
