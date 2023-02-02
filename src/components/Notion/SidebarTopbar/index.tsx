import React from "react";
import styles from "./SidebarTopbar.module.scss";

import { ReactComponent as TopbarCloseSVG } from "../../../assets/img/svg/topbar_close.svg";
import { ReactComponent as TopbarMoreSVG } from "../../../assets/img/svg/topbar_more.svg";

import { UserAvatar } from "../../User/UserAvatar";

import { StateContext } from "../../../pages/NoutionPage";

export const SidebarTopbar = (): React.ReactElement => {
  const { handleAsideToggle } = React.useContext(StateContext);

  const avatarUrl =
    "https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100";
  const avatarSize = "25";
  return (
    <>
      <div className={styles.row + " " + styles.topbar + " sidebar_topbar"}>
        <div className={styles.topbar__user + "  aside_status"} tabIndex={0}>
          <UserAvatar url={avatarUrl} size={avatarSize} />
          <div className={styles.topbar__user_name}>Name User</div>
          <div className={`${styles.topbar__user_more}`}>
            <TopbarMoreSVG />
          </div>
        </div>

        <div
          className={`${styles.topbar__close}`}
          tabIndex={0}
          onClick={handleAsideToggle}
        >
          <TopbarCloseSVG />
        </div>
      </div>
    </>
  );
};
