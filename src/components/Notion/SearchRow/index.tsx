import React, { ReactElement } from "react";
import styles from "./SearchRow.module.scss";
import { ReactComponent as EnterSVG } from "../../../assets/img/svg/enter.svg";
import { IPage } from "../../../types/interface";

export const SearchRow = ({ page }: { page: IPage }): ReactElement => {
  return (
    <>
      <div className={styles.search__row} data-id={page.id}>
        <div className={styles.search__page}>
          <div className={styles.search__pageIcon}>{page.icon}</div>
          <div className={styles.search__pageName}>{page.name}</div>
        </div>

        <div className={styles.search__date}>{page.date_add}</div>

        <div className={styles.search__enter}>
          <EnterSVG />
        </div>
      </div>
    </>
  );
};
