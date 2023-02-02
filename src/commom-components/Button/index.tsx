import React from "react";
import styles from "./Button.module.scss";
import { INotionButton } from "../../types/interface";
import { Link } from "react-router-dom";
import { ReactComponent as ToggleSVG } from "../../assets/img/svg/toggle.svg";

export const Button: React.FC<INotionButton> = ({
  text,
  icon,
  link,
  cName = "",
  toggle,
}) => {
  const toggleStyle =
    typeof toggle === "boolean" ? (toggle ? "toggle-active" : "") : "";
  return (
    <>
      <div className={styles.button + " " + cName}>
        {link ? (
          <Link to={link} className={styles.button__link} tabIndex={0}>
            {typeof toggle === "boolean" && (
              <div className={"button__toggle " + toggleStyle}>
                <ToggleSVG />
              </div>
            )}
            {icon && <div className="button__icon">{icon}</div>}
            {text && <div className="button__text">{text}</div>}
          </Link>
        ) : (
          <div className={styles.button__link} tabIndex={0}>
            {typeof toggle === "boolean" && (
              <div className={"button__toggle " + toggleStyle}>
                <ToggleSVG />
              </div>
            )}
            {icon && <div className="button__icon">{icon}</div>}
            {text && <div className="button__text">{text}</div>}
          </div>
        )}
      </div>
    </>
  );
};
