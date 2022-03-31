import styles from "./Post.module.scss";
import Link from "next/link";
import Avatar from "@components/Avatar";
import { HeartIcon, ChatIcon, ShareIcon } from "@assets/icons/postAction";

interface IPostProps {}

const Post: React.FC<IPostProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="#" passHref>
          <a className={styles.user}>
            <Avatar shadow size="md" />
            <p className={styles.name}>Alexander Pham</p>
            <span className={styles.time}>12h:00</span>
          </a>
        </Link>
        <div className={styles.icon}>
          <img src="svg/common/more.svg" width={25} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.editor}>
          <p>
            When the reffered people do the transactions, the refferers can swap
            STF to coin with the amount withdrawing is double
          </p>
        </div>
        <img src="images/demo/post-image.jpg" />
      </div>
      <div className={styles.action}>
        <div className={styles["btn-action"]}>
          <HeartIcon />
          19739
        </div>
        <div className={styles["btn-action"]}>
          <ChatIcon />
          190
        </div>
        <div className={styles["btn-action"]}>
          <ShareIcon />
          12
        </div>
      </div>
    </div>
  );
};

export default Post;
