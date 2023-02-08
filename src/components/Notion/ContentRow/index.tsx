import React from "react";
import styles from "./ContentRow.module.scss";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as MovingSVG } from "../../../assets/img/svg/moving.svg";
import { IContentRow } from "../../../types/interface";
import { ButtonMini } from "../ButtonMini/";

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
