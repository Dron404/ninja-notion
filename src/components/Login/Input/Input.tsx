import React, { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  nameInput: string;
  label: string;
  type: string;
}

// eslint-disable-next-line react/function-component-definition
const Input: FC<InputProps> = ({ nameInput, label, type, placeholder }) => {
  return (
    <div className={styles.inputcontainer}>
      <label className={styles.label} htmlFor={nameInput}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        autoComplete="on"
      />
    </div>
  );
};

export default Input;
