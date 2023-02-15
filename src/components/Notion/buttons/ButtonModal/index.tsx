import React from "react";
import styles from "./ButtonModal.module.scss";
import { Button } from "../Button";
import { IButtonModal } from "../../../../types/interface";
import { useAppDispatch } from "../../../../hooks/redux";

import { userSlice } from "../../../../store/user/user.slice";

export const ButtonModal: React.FC<IButtonModal> = ({
  icon,
  text,
  type = "",
  handle,
  hotkey = "",
}) => {
  const dispatch = useAppDispatch();
  const { updateModalTarget } = userSlice.actions;

  function onClick() {
    dispatch(updateModalTarget(type));
    handle && handle();
  }

  return (
    <>
      <div className={`${styles.button}`} onClick={onClick}>
        <Button icon={icon} text={text} hotkey={hotkey} />
      </div>
    </>
  );
};
