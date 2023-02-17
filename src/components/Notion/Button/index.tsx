import React from "react";
import styles from "./Button.module.scss";
import { INotionButton } from "../../../types/interface";
import { Link } from "react-router-dom";

export const Button: React.FC<INotionButton> = ({
  text = "",
  icon,
  link,
  cName = "",
  hotkey,
  handle,
  handleEvent,
  blockType,
  handleBlockType,
}) => {
  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleBlockType && blockType && handleBlockType(blockType);
    handleEvent && handleEvent(event);
    handle && handle();
  };

  return (
    <>
      <div className={`${styles.button} ${cName}`} onMouseDown={onMouseDown}>
        {link ? (
          <Link
            to={link}
            className={`${styles.button__link}  button__link`}
            tabIndex={0}
          >
            <div className={styles.button__group}>
              {icon && <div className="button__icon">{icon}</div>}
              {text && <div className="button__text">{text}</div>}
            </div>
            {hotkey && (
              <div className={`button__hotkey ${styles.button__hotkey}`}>
                {hotkey}
              </div>
            )}
          </Link>
        ) : (
          <div
            className={`${styles.button__link}  button__link`}
            onClick={handle}
          >
            <div className={styles.button__group}>
              {icon && <div className="button__icon">{icon}</div>}
              {text && <div className="button__text">{text}</div>}
            </div>
            {hotkey && (
              <div className={`button__hotkey ${styles.button__hotkey}`}>
                {hotkey}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
