import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import { IEmoji, IPage } from "../../../types/interface";
import styles from "./EmojiesListItem.module.scss";

export const EmojiesListItem: React.FC<IEmoji> = ({ emoji }) => {
  const dispatch = useAppDispatch();
  const { updatePagesState, updateArrayPage } = userSlice.actions;

  const { activePage } = useAppSelector((store) => store.userReducer);

  function updatePageStateFn(replaceObject: Partial<IPage>) {
    if (activePage?._id) {
      const pageId = activePage._id;
      dispatch(
        updatePagesState({
          replaceObject,
          pageId,
        })
      );
      dispatch(updateArrayPage());
    }
  }

  const handleUpdateIcon = () => {
    const replaceObject = { icon: emoji };
    emoji && updatePageStateFn(replaceObject);
  };

  return (
    <div className={styles.item} onClick={handleUpdateIcon}>
      {emoji}
    </div>
  );
};
