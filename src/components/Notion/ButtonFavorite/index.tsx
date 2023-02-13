import React from "react";
import styles from "./ButtonFavorite.module.scss";
import { Button } from "../Button";
import { INotionButton } from "../../../types/interface";
import { ReactComponent as FavoriteSVG } from "../../../assets/img/svg/favorite.svg";
import { ReactComponent as FavoriteActiveSVG } from "../../../assets/img/svg/favorite_active.svg";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { main } from "../../../data/languages/main";
import { userSlice } from "../../../store/user/user.slice";

export const ButtonFavorite: React.FC<INotionButton> = ({ dataPage }) => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((store) => store.userReducer);
  const { updatePagesState, updateArrayPage } = userSlice.actions;
  const data = main[lang];

  const icon = dataPage?.favorite ? <FavoriteActiveSVG /> : <FavoriteSVG />;
  const text = dataPage?.favorite
    ? data.text_remove_favorite
    : data.text_add_favorite;

  function onClick() {
    const replaceObject = { favorite: !dataPage?.favorite };
    if (dataPage) {
      const pageId = dataPage._id;
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
        <Button icon={icon} text={text} />
      </div>
    </>
  );
};
