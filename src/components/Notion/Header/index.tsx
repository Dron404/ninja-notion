import React from "react";
import styles from "./Header.module.scss";
import { Breadcrumb } from "../Breadcrumb/";
import { HeaderTopbar } from "../HeaderTopbar";

import { ReactComponent as TopbarCloseSVG } from "../../../assets/img/svg/topbar_close.svg";
import { ButtonMini } from "../ButtonMini";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";

export const Header = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { navigate, activePage } = useAppSelector((state) => state.userReducer);
  const { toggleNavigate } = userSlice.actions;

  const handletoogle = () => dispatch(toggleNavigate(!navigate));

  return (
    <>
      <header className={styles.header}>
        {!navigate && (
          <div onClick={() => handletoogle()}>
            <ButtonMini icon={<TopbarCloseSVG />} cName={styles.sidebar_open} />
          </div>
        )}

        <Breadcrumb />
        {activePage?._id !== "home" && <HeaderTopbar />}
      </header>
    </>
  );
};
