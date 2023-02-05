import React from "react";
import styles from "./ButtonSwitch.module.scss";
import { IButtonSwitch } from "../../../types/interface";
import { Switch } from "../Switch/";

export const ButtonSwitch: React.FC<IButtonSwitch> = ({
  text,
  status,
  handle,
}): React.ReactElement => {
  return (
    <>
      <div className={styles.item} onClick={handle}>
        <div className={styles.item__text}>{text}</div>
        <div className={styles.item__checkbox}>
          <Switch status={status} />
        </div>
      </div>
    </>
  );
};
