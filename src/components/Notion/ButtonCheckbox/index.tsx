import React from "react";
import styles from "./ButtonCheckbox.module.scss";
import { IButtonCheckbox } from "../../../types/interface";

export const ButtonCheckbox: React.FC<IButtonCheckbox> = ({
  text,
  status,
  handle,
}): React.ReactElement => {
  const styleActive = status ? styles.item__active : "";
  return (
    <>
      <div className={styles.item} onClick={handle}>
        <div className={styles.item__text}>{text}</div>
        <div className={styles.item__checkbox + " " + styleActive}>
          {status} status
        </div>
      </div>
    </>
  );
};
