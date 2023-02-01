import React from "react";
import styles from "./Button.module.scss";
import { INotionButton } from "../../../types/interface";
import { Link } from "react-router-dom";

export const Button = ({
  text,
  src,
  link,
  width = "auto",
}: INotionButton): React.ReactElement => {
  return (
    <>
      <div className={`${styles.button}`} style={{ width: `${width}` }}>
        {link ? (
          <Link to={link} className={styles.button__link} tabIndex={0}>
            {src && <img src={src} alt="" />}
            {text && <span>text</span>}
          </Link>
        ) : (
          <span className={styles.button__link} tabIndex={0}>
            {src && <img src={src} alt="" />}
            {text && <span>text</span>}
          </span>
        )}
      </div>
    </>
  );
};
