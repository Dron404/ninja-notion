import React from "react";
import styles from "./SettingsTab.module.scss";
import { ISettingsTab } from "../../../../types/interface";
import { Button } from "../../buttons/Button";

export const SettingsTab: React.FC<ISettingsTab> = ({
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
