import React from "react";
import styles from "./SearchRow.module.scss";
import { ReactComponent as EnterSVG } from "../../../assets/img/svg/enter.svg";
import { ISearchRow } from "../../../types/interface";
import { Link } from "react-router-dom";
import { main } from "../../../data/languages/main";
import { useAppSelector } from "../../../hooks/redux";

export const SearchRow: React.FC<ISearchRow> = ({ page, handle, type }) => {
  const onClick = () => {
    handle && page && handle(page._id);
  };

  const { lang } = useAppSelector((store) => store.userReducer);
  const data = main[lang];

  const dateParse = page && new Date(Date.parse(page.dataTrash));
  const dateYMD = dateParse
    ? `${dateParse.getFullYear()}-${dateParse.getMonth()}-${dateParse.getDay()}`
    : "";
  const date = type === "trash" ? dateYMD : page?.dataAdd;

  let enter = "";
  if (type === "trash") enter = data.text_restore;
  if (type === "move") enter = data.text_move_to;

  return (
    <Link
      className={styles.search__row}
      to={`/pages/${page._id}`}
      onClick={onClick}
    >
      <div className={styles.search__page}>
        <div className={styles.search__pageIcon}>{page.icon}</div>
        <div className={styles.search__pageName}>{page.name}</div>
      </div>

      <div className={styles.search__date}>{date}</div>

      <div className={styles.search__enter}>
        <span>{enter}</span>
        <span>
          <EnterSVG />
        </span>
      </div>
    </Link>
  );
};
