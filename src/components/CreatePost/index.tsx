import styles from "./CreatePost.module.scss";
import Avatar from "@components/Avatar";
import { EmojiIcon, CameraIcon, PictureIcon } from "@assets/icons/postAction";
import Button from "@components/Button";
import Layout from "@layout/MainLayout/component/Layout";
import Link from "@components/custom/Link";
import { PATH } from "@routes";

interface ICreatePostProps {}

const CreatePost: React.FC<ICreatePostProps> = (props) => {
  return (
    <Layout>
      <div className={styles.container}>
        <Link href={PATH.USER}>
          <Avatar shadow />
        </Link>
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            placeholder="What's on your mind, Alex?"
          />
          <div className={styles.follow}>
            <img
              src="svg/common/user-follow.svg"
              width={15}
              height={14}
              alt="Follow"
            />
            People you follow
          </div>
          <div className={styles.separate} />
          <div className={styles.action}>
            <div className={styles.upload}>
              <button className={styles["btn-upload"]}>
                <EmojiIcon />
              </button>
              <button className={styles["btn-upload"]}>
                <CameraIcon />
              </button>
              <button className={styles["btn-upload"]}>
                <PictureIcon />
              </button>
            </div>
            <Button variant="primary" size="sm" type="button">
              Post
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
