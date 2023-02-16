import React from "react";
import styles from "./SearchRow.module.scss";
import { ReactComponent as EnterSVG } from "../../../assets/img/svg/enter.svg";
import { ReactComponent as DefaultSVG } from "../../../assets/img/svg/default.svg";
import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ISearchRow } from "../../../types/interface";
import { Link } from "react-router-dom";
import { main } from "../../../data/languages/main";
import { useAppSelector } from "../../../hooks/redux";
import { Button } from "../Button";

export const SearchRow: React.FC<ISearchRow> = ({
  page,
  handle,
  type,
  handleButton,
}) => {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = main[lang];

  const dateParse = new Date(
    Date.parse(type === "trash" ? page.dataTrash : page.dataAdd)
  );

  const dateYMD = dateParse ? dateParse.toLocaleDateString("en-US") : "";

  let enter = "";
  if (type === "trash") enter = data.text_restore;
  if (type === "move") enter = data.text_move_to;

  const onClick = () => {
    page._id && handle && page && handle(page._id);
  };

  const handleRemovePage = () =>
    page?._id && handleButton && handleButton(page._id);

  return (
    <div className={styles.search__row}>
      <div className={styles.search__item} onClick={onClick}>
        {type === "move" ? (
          <div className={styles.search__page}>
            <div className={styles.search__pageIcon}>
              {page.icon ? page.icon : <DefaultSVG />}
            </div>
            <div className={styles.search__pageName}>{page.name}</div>
          </div>
        ) : (
          <Link to={`/pages/${page._id}`} className={styles.search__page}>
            <div className={styles.search__pageIcon}>
              {page.icon ? page.icon : <DefaultSVG />}
            </div>
            <div className={styles.search__pageName}>{page.name}</div>
          </Link>
        )}
        <div className={styles.search__date}>{dateYMD}</div>

        <div className={styles.search__enter}>
          <span>{enter}</span>
          <span>
            <EnterSVG />
          </span>
        </div>
      </div>
      <div className={styles.search__action}>
        {type === "trash" && (
          <Button
            icon={<TrashSVG />}
            cName={styles.search__removeButton}
            text={data.text_remove}
            handle={handleRemovePage}
          />
        )}
      </div>
    </div>
  );
};
