import React from "react";
import styles from "./Switch.module.scss";
import { ISwitch } from "../../../types/interface";

export const Switch: React.FC<ISwitch> = ({ status }) => {
  const styleActive = status ? styles.switch__active : "";

  return (
    <>
      <label className={styles.switch + " " + styleActive}>
        <span
          className={styles.switch__checkbox}
          data-label-on="On"
          data-label-off="Off"
        ></span>
      </label>
    </>
  );
};
