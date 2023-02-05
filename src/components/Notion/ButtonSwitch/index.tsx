import React from "react";
import styles from "./ButtonSwitch.module.scss";
import { IButtonSwitch } from "../../../types/interface";
import { Switch } from "../Switch/";

export const ButtonSwitch: React.FC<IButtonSwitch> = ({
  text,
  status,
  handle,
}): React.ReactElement => {
  const [checked, setChecked] = React.useState<boolean>(Boolean(status));

  // Example handleChecked, use handle props
  const handleChecked = () => setChecked(!checked);

  return (
    <>
      <div className={styles.item} onClick={() => handleChecked()}>
        <div className={styles.item__text}>{text}</div>
        <div className={styles.item__checkbox}>
          <Switch status={checked} />
        </div>
      </div>
    </>
  );
};
