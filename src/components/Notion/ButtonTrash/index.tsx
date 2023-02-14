import React from "react";
import styles from "./ButtonTrash.module.scss";
import { Button } from "../Button";
import { INotionButton } from "../../../types/interface";
import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as RestoreSVG } from "../../../assets/img/svg/restore.svg";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { main } from "../../../data/languages/main";
import { userSlice } from "../../../store/user/user.slice";

export const ButtonTrash: React.FC<INotionButton> = ({ dataPage }) => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((store) => store.userReducer);
  const { updatePagesState, updateArrayPage } = userSlice.actions;
  const data = main[lang];

  const isTrash = !!dataPage?.dataTrash;
  const icon = isTrash ? <RestoreSVG /> : <TrashSVG />;
  const text = isTrash ? data.text_restore : data.text_in_trash;
  const dateParse = dataPage && new Date(Date.parse(dataPage.dataTrash));
  const dateYMD = dateParse ? dateParse.toLocaleDateString("en-US") : "";

  const help = isTrash ? dateYMD : "";

  function onClick() {
    const date = isTrash ? "" : String(new Date());
    const replaceObject = { ...dataPage, ...{ dataTrash: date } };

    if (dataPage) {
      const pageId = dataPage._id || "";
      dispatch(
        updatePagesState({
          replaceObject,
          pageId,
        })
      );
      dispatch(updateArrayPage());
    }
  }

  return (
    <>
      <div className={`${styles.button}`} onClick={onClick}>
        <Button icon={icon} text={text} hotkey={help} />
      </div>
    </>
  );
};
