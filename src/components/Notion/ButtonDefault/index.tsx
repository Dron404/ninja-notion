import React from "react";
import styles from "./ButtonDefault.module.scss";
import { IButtonDefault } from "../../../types/interface";

export const ButtonDefault: React.FC<IButtonDefault> = ({
  text,
  type = "default",
  cName = "",
  handle,
}) => {
  const onClick = () => {
    handle && handle();
  };
  let style = styles.button__default;
  if (type === "danger" || type === "warning" || type === "delete")
    style = styles.button__warning;
  if (type === "primary") style = styles.button__primary;

  return (
    <>
      <div className={`${styles.button} ${style}  ${cName}`} onClick={onClick}>
        {<div className="button__text">{text}</div>}
      </div>
    </>
  );
};
