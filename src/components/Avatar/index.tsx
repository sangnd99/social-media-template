import cn from "classnames";

import styles from "./Avatar.module.scss";

export type ISize = "sm" | "md";

interface IAvatarProps {
  src?: string;
  size?: ISize;
  border?: boolean;
  shadow?: boolean;
}

const sizes: { [key in ISize] } = {
  sm: styles.sm,
  md: styles.md,
};

const skeletonAvatar = "images/skeleton/avatar.jpg";

const Avatar: React.FC<IAvatarProps> = ({
  src,
  size = "sm",
  border = false,
  shadow = false,
}) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.border]: border,
        [styles["drop-shadow"]]: shadow,
      })}
    >
      <div className={cn(styles.round, sizes[size])}>
        <img
          src={src || skeletonAvatar}
          alt="User avatar"
          className={styles.avatar}
        />
      </div>
      <span className={styles.status} />
    </div>
  );
};

export default Avatar;
