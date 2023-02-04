import React from "react";
import styles from "./ButtonStyle.module.scss";
import { IButtonStyle } from "../../../types/interface";

export const ButtonStyle: React.FC<IButtonStyle> = ({
  name = "Ag",
  description,
  cName = "",
  status,
  handle,
}): React.ReactElement => {
  const styleActive = status ? styles.item__active : "";
  return (
    <>
      <div className={styles.item} onClick={handle}>
        <div className={cName + " " + styleActive + " " + styles.item__bigtext}>
          {name}
        </div>
        <div className={styles.item__description}>{description}</div>
      </div>
    </>
  );
};
