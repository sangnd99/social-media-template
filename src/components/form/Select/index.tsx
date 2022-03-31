import { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import cn from "classnames";

import type { IData } from "@components/Autocomplete";
import styles from "./Select.module.scss";

import AutoComplete from "../../Autocomplete";

interface ISelectProps {
  name: string;
  value: IData | null;
  placeholder?: string;
  fieldLabel?: string;
  fieldValue?: string;
  data: IData[];
  onChange: (value: IData) => void;
}

const Select: React.FC<ISelectProps> = (props) => {
  const {
    name = "",
    value,
    placeholder = "Select an item...",
    fieldLabel = "value",
    fieldValue = "_id",
    data = [],
    onChange,
  } = props;

  const [show, setShow] = useState(false);

  // Formik
  const [_, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const isError = !!meta.touched && !!meta.error;
  useEffect(() => {
    const optionSelected = value?.[fieldValue] || "";
    setFieldValue(name, optionSelected);
  }, [value]);

  return (
    <div>
      <AutoComplete
        Element={
          <div className={styles.container}>
            <div className={styles.wrapper}>
              {value ? (
                <p className={styles.value}>{value[fieldLabel]}</p>
              ) : (
                <p className={styles.placeholder}>{placeholder}</p>
              )}
            </div>
            <img
              className={cn(styles.icon, { [styles.rotate]: show })}
              src="svg/common/arrow.svg"
              width={15}
              alt="Arrow icon"
            />
          </div>
        }
        selectedValue={value}
        data={data}
        show={show}
        fieldLabel={fieldLabel}
        handleShow={setShow}
        onChange={onChange}
      />
      {isError && <p className="form-error-text">{meta.error}</p>}
    </div>
  );
};

export default Select;
