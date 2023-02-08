import React from "react";
import styles from "./ContentRow.module.scss";
import { IContentRow } from "../../../types/interface";

export const ContentRow = ({
  block,
  color,
  placeholder,
  content,
}: IContentRow): React.ReactElement => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.row__block}>
          <div
            className={block}
            style={{ color: `${color}` }}
            placeholder={placeholder}
          >
            {content}
          </div>
        </div>
      </div>
    </>
  );
};
