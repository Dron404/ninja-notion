import React from "react";
import styles from "./ButtonMini.module.scss";
import { INotionButtonMini } from "../../types/interface";
import { Link } from "react-router-dom";

export const ButtonMini: React.FC<INotionButtonMini> = ({
  icon,
  link,
  cName,
}) => {
  return (
    <>
      <div className={styles.button + " " + cName}>
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
