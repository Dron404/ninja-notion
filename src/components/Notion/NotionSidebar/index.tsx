import React from "react";
import styles from "./NotionSidebar.module.scss";
import { ReactComponent as TopbarCloseSVG } from "../../../assets/img/svg/topbar_close.svg";
import { ReactComponent as TopbarMoreSVG } from "../../../assets/img/svg/topbar_more.svg";
import { ReactComponent as TopbarTrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as TopbarSearchSVG } from "../../../assets/img/svg/search.svg";
import { ReactComponent as TopbarSettingSVG } from "../../../assets/img/svg/setting.svg";
import { ReactComponent as TopbarAddSVG } from "../../../assets/img/svg/add.svg";

import { ReactComponent as HomeSVG } from "../../../assets/img/svg/home_orange.svg";

import { UserAvatar } from "../../User/UserAvatar";
import { IAsideStatus } from "../../../types/interface";

export const NotionSidebar = ({
  asideStatus,
  setAsideStaus,
}: IAsideStatus): React.ReactElement => {
  const avatarUrl =
    "https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100";
  const avatarSize = "25";

  const text_add = "Add a page";
  const text_newpage = "New page";
  const text_home = "Home Page";
  const text_trash = "Trash";
  const text_search = "Search";

  const handleAsideToggle = () => {
    setAsideStaus(!asideStatus);
  };

  return (
    <>
      <div className={styles.sidebar}>
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
            onClick={() => handleAsideToggle()}
          >
            <TopbarCloseSVG />
          </div>
        </div>
        <div className={styles.nav + " aside_status " + styles.sidebar__nav}>
          <div className={`${styles.row}`} tabIndex={0}>
            <div className={`${styles.nav__row}`}>
              <div className={styles.nav__icon}>
                <TopbarSearchSVG />
              </div>
              <div className={styles.nav__name}>{text_search}</div>
            </div>
          </div>
          <div className={`${styles.row}`} tabIndex={0}>
            <div className={`${styles.nav__row}`}>
              <div className={styles.nav__icon}>
                <TopbarSettingSVG />
              </div>
              <div className={styles.nav__name}>Setting</div>
            </div>
          </div>

          <div className={styles.pages}>
            <div className={styles.pages__title}>
              <span>Private</span>

              <span
                className={styles.pages__add + " button_control"}
                tabIndex={0}
              >
                <TopbarAddSVG />
              </span>
            </div>
            <div className={styles.row}>
              <div className={styles.pages__row} tabIndex={0}>
                <div className={styles.pages__emoji + " " + styles.pages__home}>
                  <HomeSVG />
                </div>
                <div className={styles.pages__name}>{text_home}</div>
              </div>
            </div>
          </div>

          <div className={styles.nav}>
            <div className={`${styles.row}`} tabIndex={0}>
              <div className={`${styles.nav__row}`}>
                <div className={styles.nav__icon}>
                  <TopbarAddSVG />
                </div>
                <div className={styles.nav__name}>{text_add}</div>
              </div>
            </div>
            <div className={styles.trash}>
              <div className={`${styles.row}`} tabIndex={0}>
                <div className={`${styles.nav__row}`}>
                  <div className={styles.nav__icon}>
                    <TopbarTrashSVG />
                  </div>
                  <div className={styles.nav__name}>{text_trash}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottombar + " aside_status"}>
          <div className={`${styles.row}`} tabIndex={0}>
            <div className={styles.nav}>
              <div className={`${styles.nav__row}`}>
                <div className={styles.nav__icon}>
                  <TopbarAddSVG />
                </div>
                <div className={styles.nav__name}>{text_newpage}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
