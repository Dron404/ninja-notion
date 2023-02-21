import React from "react";
import styles from "./ButtonMini.module.scss";
import { INotionButton } from "../../../types/interface";
import { Link } from "react-router-dom";

export const ButtonMini: React.FC<INotionButton> = ({
  icon,
  link,
  cName,
  handle,
  handleEvent,
  handleInlineStyle,
  InlineStyle,
}) => {
  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleEvent && handleEvent(event);
    handleInlineStyle && InlineStyle && handleInlineStyle(InlineStyle);
    handle && handle();
  };
  const className = cName || "";
  return (
    <>
      <div
        className={`${styles.button} ${className}`}
        onMouseDown={onMouseDown}
      >
        {link ? (
          <Link to={link} className={styles.button__link} tabIndex={0}>
            {icon && icon}
          </Link>
        ) : (
          <div className={styles.button__link} tabIndex={0}>
            {icon && icon}
          </div>
        )}
      </div>
    </>
  );
};
