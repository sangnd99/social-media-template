import styles from "./Login.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Input from "@components/form/Input";
import Button from "@components/Button";
import { PATH } from "@routes";

interface ILoginProps {}

type IFormValues = {
  username: string;
  password: string;
};

const Login: React.FC<ILoginProps> = () => {
  const router = useRouter();
  const [formValues] = useState<IFormValues>({
    username: "",
    password: "",
  });
  const validationSchema = useMemo(
    () =>
      Yup.object().shape<{ [key in keyof IFormValues]: any }>({
        username: Yup.string().required("Please enter a username"),
        password: Yup.string().required("Please enter a password"),
      }),
    [],
  );
  const handleSubmit = (values: IFormValues) => {
    const tempUsername = "user";
    const tempPassword = "123456";
    const { username, password } = values;
    if (username === tempUsername && password === tempPassword) {
      localStorage.setItem("AUTHEN", "true");
      router.push(PATH.HOME);
    }
  };
  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.container}>
        <Input
          name="username"
          placeholder="Enter your phone or username"
          inputType="mail"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <div className={styles.wrapper}>
          <Button variant="primary" size="md" type="submit">
            Login
          </Button>
          <Link href="#" passHref>
            <a className={styles.link}>Forgot password ?</a>
          </Link>
          <Button variant="outline" size="md" type="button" to={PATH.REGISTER}>
            Create New Account
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
