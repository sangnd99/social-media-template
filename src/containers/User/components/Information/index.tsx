import cn from "classnames";

import styles from "./Information.module.scss";

interface IInformationProps {}

const skeletonAvatar = "images/skeleton/avatar.jpg";
const Information: React.FC<IInformationProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          className={styles["cover-photo"]}
          src="https://pbs.twimg.com/profile_banners/999947328621395968/1645007404/1500x500"
        />
        <div className={styles.user}>
          <div className={styles["avatar-wrapper"]}>
            <img src={skeletonAvatar} className={styles.avatar} />
          </div>
          <p className={styles.name}>Alexander Pham</p>
          <p className={styles.description}>I love you ^^</p>
        </div>
        <div className={styles.action}>
          <div className={styles.follow}>
            <p>
              <span className={styles.ammount}>128</span>&nbsp;Following
            </p>
            <p>
              <span className={styles.ammount}>5</span>&nbsp;Followers
            </p>
          </div>
          <div className={styles.navigation}>
            <button
              className={cn(styles.button, {
                [styles["button--active"]]: true,
              })}
            >
              Post
            </button>
            <button
              className={cn(styles.button, {
                [styles["button--active"]]: false,
              })}
            >
              About
            </button>
            <button
              className={cn(styles.button, {
                [styles["button--active"]]: false,
              })}
            >
              Friends
            </button>
            <button
              className={cn(styles.button, {
                [styles["button--active"]]: false,
              })}
            >
              Photos
            </button>
            <button
              className={cn(styles.button, {
                [styles["button--active"]]: false,
              })}
            >
              Videos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
