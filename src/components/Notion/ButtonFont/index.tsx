import React from "react";
import styles from "./ButtonFont.module.scss";
import { IButtonFont } from "../../../types/interface";

export const ButtonFont: React.FC<IButtonFont> = ({
  description,
  font,
  target,
  handle,
}): React.ReactElement => {
  const styleActive = font === target ? styles.item__active : "";

  return (
    <>
      <div className={styles.item} onClick={() => handle(target)}>
        <div className={`${styleActive} ${styles.item__bigtext}`}>Ag</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    </>
  );
};
