import React from "react";
import styles from "./SearchRow.module.scss";
import { ReactComponent as EnterSVG } from "../../../assets/img/svg/enter.svg";
import { ISearchRow } from "../../../types/interface";
import { Link } from "react-router-dom";

export const SearchRow: React.FC<ISearchRow> = ({ page, handle }) => {
  const handleCloseModal = () => {
    handle();
  };
  return (
    <Link
      className={styles.search__row}
      to={`/pages/${page._id}`}
      onClick={handleCloseModal}
    >
      <div className={styles.search__page}>
        <div className={styles.search__pageIcon}>{page.icon}</div>
        <div className={styles.search__pageName}>{page.name}</div>
      </div>

      <div className={styles.search__date}>{page?.dataAdd}</div>

      <div className={styles.search__enter}>
        <EnterSVG />
      </div>
    </Link>
  );
};
