import React from "react";
import styles from "./Button.module.scss";
import { INotionButton } from "../../../../types/interface";
import { Link } from "react-router-dom";

export const Button: React.FC<INotionButton> = ({
  text = "",
  icon,
  src,
  link,
  cName = "",
  hotkey,
  handle,
  disabled,
  handleEvent,
  blockType,
  handleBlockType,
  handleInlineStyle,
  InlineStyle,
  onClick,
}) => {
  const handleOnMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!onClick && !disabled) {
      event.preventDefault();
      event.stopPropagation();
      handleInlineStyle && InlineStyle && handleInlineStyle(InlineStyle);
      handleBlockType && blockType && handleBlockType(blockType);
      handleEvent && handleEvent(event);
      handle && handle();
    }
  };

  const handleOnClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const styleDisabled = disabled ? styles.button__disabled : "";

  return (
    <>
      <div
        className={`${styles.button} ${cName} ${styleDisabled}`}
        onMouseDown={handleOnMouseDown}
        onClick={handleOnClick}
      >
        {link ? (
          <Link
            to={link}
            className={`${styles.button__link}  button__link`}
            tabIndex={0}
          >
            <div className={styles.button__group}>
              {icon && <div className="button__icon">{icon}</div>}
              {src && (
                <div className="button__icon">
                  <img src={`${src}`} />
                </div>
              )}
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
              {src && (
                <div className="button__icon">
                  <img src={`${src}`} />
                </div>
              )}
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
