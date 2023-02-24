import React from "react";
import styles from "./ContentRestore.module.scss";

interface IContentRestore {
  button?: React.ReactNode;
  message: string;
}

export const ContentRestore: React.FC<IContentRestore> = (props) => {
  const { button, message } = props;
  return (
    <div className={styles.restore}>
      {button && <div className={styles.restore__button}>{button}</div>}
      <div className={styles.restore__message}>
        <span>{message}</span>
      </div>
    </div>
  );
};
