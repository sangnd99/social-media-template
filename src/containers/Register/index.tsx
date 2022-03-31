import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMemo, useState } from "react";
import Link from "next/link";

import styles from "./Register.module.scss";

import type { IData } from "@components/Autocomplete";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import Button from "@components/Button";
import { PATH } from "@routes";

interface IRegisterProps {}

type IFormValues = {
  firstname: string;
  surname: string;
  username: string;
  newpassword: string;
  month: string;
  day: string;
  year: string;
};

const Register: React.FC<IRegisterProps> = (props) => {
  const [initialValues] = useState<IFormValues>({
    firstname: "",
    surname: "",
    username: "",
    newpassword: "",
    month: "",
    day: "",
    year: "",
  });
  const validationSchema = useMemo(
    () =>
      Yup.object().shape<{ [key in keyof IFormValues] }>({
        firstname: Yup.string().required("Please enter your first name"),
        surname: Yup.string().required("Please enter your surname name"),
        username: Yup.string().required("Please enter your name or email"),
        newpassword: Yup.string().required("Please enter your name or email"),
        month: Yup.string().required("Please select a month"),
        day: Yup.string().required("Please select a day"),
        year: Yup.string().required("Please select a year"),
      }),
    [],
  );

  // State
  const [monthSelected, setMonthSelected] = useState<IData | null>(null);
  const [daySelected, setDaySelected] = useState<IData | null>(null);
  const [yearSelected, setYearSelected] = useState<IData | null>(null);

  // Handle submit
  const handleSubmit = (values: IFormValues) => {
    console.log("form values: ", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.container}>
        <div className={styles.grid}>
          <Input name="firstname" placeholder="First name" inputType="user" />
          <Input name="surname" placeholder="Surname" inputType="user" />
        </div>
        <Input
          name="username"
          placeholder="Enter your your phone or email"
          inputType="mail"
        />
        <Input name="newpassword" placeholder="New password" type="password" />
        <p className={styles.text}>Day of birth</p>
        <div className={styles.wrapper}>
          <div className={styles.flex}>
            <Select
              data={month}
              name="month"
              value={monthSelected}
              onChange={setMonthSelected}
              placeholder="Month"
            />
          </div>
          <div className={styles.grid}>
            <Select
              data={day}
              name="day"
              value={daySelected}
              onChange={setDaySelected}
              placeholder="Day"
            />
            <Select
              data={year}
              name="year"
              value={yearSelected}
              onChange={setYearSelected}
              placeholder="Year"
            />
          </div>
        </div>
        <p className={styles.policy}>
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
          Policy. You may receive SMS notifications from us and can opt out at
          any time .
        </p>
        <div className={styles.center}>
          <Button variant="primary" size="md">
            Sign Up
          </Button>
        </div>
        <div className={styles.center}>
          <Link href={PATH.LOGIN} passHref>
            <a className={styles.navigation}>Already have an account?</a>
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default Register;

const day = [
  { _id: "1", value: "1" },
  { _id: "2", value: "2" },
  { _id: "3", value: "3" },
  { _id: "4", value: "4" },
  { _id: "5", value: "5" },
  { _id: "6", value: "6" },
  { _id: "7", value: "7" },
  { _id: "8", value: "8" },
  { _id: "9", value: "9" },
  { _id: "10", value: "10" },
  { _id: "11", value: "11" },
];

const month = [
  { _id: "1", value: "1" },
  { _id: "2", value: "2" },
  { _id: "3", value: "3" },
  { _id: "4", value: "4" },
  { _id: "5", value: "5" },
  { _id: "6", value: "6" },
  { _id: "7", value: "7" },
  { _id: "8", value: "8" },
  { _id: "9", value: "9" },
  { _id: "10", value: "10" },
  { _id: "11", value: "11" },
  { _id: "12", value: "12" },
];

const year = [
  { _id: "1", value: "2001" },
  { _id: "2", value: "2002" },
  { _id: "3", value: "2003" },
  { _id: "4", value: "2004" },
  { _id: "5", value: "2005" },
  { _id: "6", value: "2006" },
  { _id: "7", value: "2007" },
  { _id: "8", value: "2008" },
  { _id: "9", value: "2009" },
  { _id: "10", value: "2010" },
  { _id: "11", value: "2011" },
  { _id: "12", value: "2012" },
];
