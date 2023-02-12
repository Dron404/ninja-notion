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
  const onClick = () => {
    handle && handle(target);
  };
  return (
    <>
      <div className={`${styles.tab} ${styleStatus}`} onClick={onClick}>
        <Button text={text} />
      </div>
    </>
  );
};
