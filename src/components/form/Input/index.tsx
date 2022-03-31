import cn from "classnames";

import styles from "./Input.module.scss";

import { useField } from "formik";
import { ChangeEvent, useEffect, useState } from "react";

type IInputType = "mail" | "user";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  inputType?: IInputType;
  onChangeValue?: (value: string) => void;
  readonly onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const icons = {
  mail: "svg/input/mail.svg",
  password: "svg/input/password.svg",
  user: "svg/input/user.svg",
};

const Input: React.FC<IInputProps> = (props) => {
  const { name, onChangeValue, type = "text", inputType, ...restProps } = props;
  const [isShowPassword, setShowPassword] = useState(false);

  const [field, meta] = useField(name);

  const isError = !!meta.error && !!meta.touched;

  useEffect(() => {
    onChangeValue && onChangeValue(field.value);
  }, [field.value]);

  return (
    <div>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          autoComplete="new-password"
          type={isShowPassword ? "text" : type}
          {...(restProps as any)}
          {...field}
        />
        {type === "password" ? (
          <img
            className={cn(styles.icon, styles.pointer)}
            onClick={() => setShowPassword(!isShowPassword)}
            src={icons[isShowPassword ? "password" : "password"]}
            width={20}
          />
        ) : (
          <img className={styles.icon} src={icons[inputType!]} width={20} />
        )}
      </div>
      {isError && <p className="form-error-text">{meta.error}</p>}
    </div>
  );
};

export default Input;
