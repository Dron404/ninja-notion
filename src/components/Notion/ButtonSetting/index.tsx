import React from "react";
import styles from "./ButtonSetting.module.scss";
import { IButtonSetting } from "../../../types/interface";
import { Button } from "../Button";

export const ButtonSetting: React.FC<IButtonSetting> = ({
  text,
  icon,
  target,
  state,
  handle,
}) => {
  const active = target === state ? styles.button__active : "";
  return (
    <>
      <div
        className={`${styles.button} ${active}`}
        onClick={() => handle(target)}
      >
        <Button icon={icon} text={text} />
      </div>
    </>
  );
};
