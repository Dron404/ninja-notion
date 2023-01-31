import React from "react";
import styles from "./NotionBodyContentRow.module.scss";
import { ReactComponent as AddSVG } from "../../../../../assets/img/svg/add.svg";
import { ReactComponent as MovingSVG } from "../../../../../assets/img/svg/moving.svg";

interface INotionBodyContentRow {
  block: string;
  color: string;
  placeholder: string;
  content: string;
}

export const NotionBodyContentRow = ({
  block,
  color,
  placeholder,
  content,
}: INotionBodyContentRow): React.ReactElement => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.row__controls}>
          <div className={styles.row__button + " button_control"}>
            <AddSVG />
          </div>
          <div className={styles.row__button + " button_control"}>
            <MovingSVG />
          </div>
        </div>

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
