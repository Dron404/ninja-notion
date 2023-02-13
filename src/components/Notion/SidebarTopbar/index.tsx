import React from "react";
import styles from "./SidebarTopbar.module.scss";
import { ReactComponent as TopbarCloseSVG } from "../../../assets/img/svg/topbar_close.svg";
import { ReactComponent as TopbarMoreSVG } from "../../../assets/img/svg/topbar_more.svg";
import { ReactComponent as MoreSVG } from "../../../assets/img/svg/more.svg";
import { ReactComponent as DragSVG } from "../../../assets/img/svg/drag.svg";
import { ReactComponent as CheckSVG } from "../../../assets/img/svg/check.svg";
import { ReactComponent as LogoutSVG } from "../../../assets/img/svg/logout.svg";

import { UserAvatar } from "../UserAvatar";

import { Menu } from "@headlessui/react";
import { ButtonMini } from "../ButtonMini";
import { Button } from "../Button";
import { AVATAR_SIZE_L } from "../../../data/constants";
import { main } from "../../../data/languages/main";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import logout from "../../../utils/logout";

export const SidebarTopbar: React.FC = function slidebar() {
  const dispatch = useAppDispatch();
  const { lang, navigate, user } = useAppSelector((state) => state.userReducer);
  const { toggleNavigate } = userSlice.actions;

  const data = main[lang];

  const handletoogle = () => dispatch(toggleNavigate(!navigate));

  const handleLogout = () => logout();

  const avatarUrl = user?.avatar || "";

  return (
    <div className={`${styles.row} ${styles.topbar} sidebar_topbar`}>
      <Menu as="div" className={`${styles.topbar__menu} notion-popup__menu`}>
        <Menu.Button className={`${styles.topbar__more}`}>
          <div className={`${styles.topbar__user} aside_status`}>
            <UserAvatar url={avatarUrl} size={AVATAR_SIZE_L} />
            <div className={styles.topbar__user_name}>{user?.name}</div>
            <div className={styles.topbar__user_more}>
              <TopbarMoreSVG />
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className={`${styles.topbar__popup} notion-popup__body`}>
          <div className={styles.user}>
            <div className={styles.user__header}>
              <div className={styles.user__email}>{user?.email}</div>
              <Menu
                as="div"
                className={`${styles.topbar__menu} notion-popup__menu`}
              >
                <Menu.Button className={`${styles.topbar__more}`}>
                  <ButtonMini icon={<MoreSVG />} />
                </Menu.Button>
                <Menu.Items
                  className={`${styles.topbar__popupMore} notion-popup__body`}
                >
                  <Button
                    icon={<LogoutSVG />}
                    text={data.text_log_out}
                    handle={handleLogout}
                  />
                </Menu.Items>
              </Menu>
            </div>

            <div className={styles.user__list}>
              <div className={styles.user__row}>
                <div className={styles.user__left}>
                  <div className={styles.user__drag}>
                    <DragSVG />
                  </div>
                  <div className={styles.user__avatar}>
                    <UserAvatar url={avatarUrl} size={AVATAR_SIZE_L} />
                  </div>
                  <div className={styles.user__info}>
                    <div className={styles.user__name}>
                      {user?.name}
                      {data.text_s_notion}
                    </div>
                    <div className={styles.user__plan}>
                      {data.text_free_plan}
                    </div>
                  </div>
                </div>
                <div className={styles.user__check}>
                  <CheckSVG />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.control}>
            <Button text={data.text_log_out} handle={handleLogout} />
          </div>
        </Menu.Items>
      </Menu>

      <div className={styles.topbar__close} onClick={handletoogle}>
        <TopbarCloseSVG />
      </div>
    </div>
  );
};
