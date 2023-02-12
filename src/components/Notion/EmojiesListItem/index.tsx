import React from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import { IEmoji } from "../../../types/interface";
import styles from "./EmojiesListItem.module.scss";

export const EmojiesListItem: React.FC<IEmoji> = ({ emoji }) => {
  const dispatch = useAppDispatch();
  const { updateActivePageIcon } = userSlice.actions;
  const handleUpdateIcon = () => emoji && dispatch(updateActivePageIcon(emoji));

  return (
    <div className={styles.item} onClick={handleUpdateIcon}>
      {emoji}
    </div>
  );
};
