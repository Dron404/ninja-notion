import React from "react";
import styles from "./ButtonTab.module.scss";
import { Button } from "../Button";
import { IButtonTab } from "../../../types/interface";

export const ButtonTab: React.FC<IButtonTab> = ({
  text,
  target,
  tab,
  handle,
}) => {
  const styleStatus = tab === target ? styles.tab__active : "";
  return (
    <>
      <div
        className={`${styles.tab} ${styleStatus}`}
        onClick={() => handle(target)}
      >
        <Button text={text} />
      </div>
    </>
  );
};
