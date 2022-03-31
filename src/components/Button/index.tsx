import { MouseEvent } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import styles from "./Button.module.scss";

export type IVariant = "primary" | "secondary" | "outline";

export type ISize = "sm" | "md" | "full";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: IVariant;
  size?: ISize;
  to?: string;
  as?: string;
}

const variants: { [key in IVariant] } = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
};

const sizes: { [key in ISize] } = {
  sm: styles.sm,
  md: styles.md,
  full: styles.full,
};

const Button: React.FC<IButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "full",
    children,
    onClick,
    to,
    as,
    ...restProps
  } = props;
  const router = useRouter();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (to) {
      router.push(to, as);
    }
    onClick && onClick(e);
  };
  return (
    <button
      className={cn(styles.container, sizes[size], {
        [styles.padding]: variant === "outline",
      })}
      variant={variant}
      onClick={handleClick}
      {...(restProps as any)}
    >
      <div className={cn(styles.wrapper, variants[variant])}>{children}</div>
    </button>
  );
};

export default Button;
