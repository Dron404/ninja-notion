import React from "react";
import styles from "./NotionSidebar.module.scss";
import { ReactComponent as TopbarCloseSVG } from "../../../assets/img/svg/topbar_close.svg";
import { ReactComponent as TopbarMoreSVG } from "../../../assets/img/svg/topbar_more.svg";
import { ReactComponent as TopbarTrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as TopbarSearchSVG } from "../../../assets/img/svg/search.svg";
import { ReactComponent as TopbarSettingSVG } from "../../../assets/img/svg/setting.svg";
import { ReactComponent as TopbarAddSVG } from "../../../assets/img/svg/add.svg";

export const NotionSidebar = (): React.ReactElement => {
  return (
    <>
      <div className="sidebar">
        <div className="topbar">
          <div className="topbar__user">
            <div className="topbar__user_avatar">
              <img src="https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100"></img>
            </div>
            <div className="topbar__user_name">Name User</div>
            <div className="topbar__user_more">
              <TopbarMoreSVG />
            </div>
          </div>
          <div className="topbar__close">
            <TopbarCloseSVG />
          </div>
        </div>
        <div className="nav">
          <div className="nav__row">
            <div className="nav__icon">
              <TopbarSearchSVG />
            </div>
            <div className="nav__name">Search</div>
          </div>

          <div className="nav__row">
            <div className="nav__icon">
              <TopbarSettingSVG />
            </div>
            <div className="nav__name">Setting</div>
          </div>
        </div>

        <div className="private">
          private
          <div className="nav">
            <div className="nav__row">
              <div className="nav__icon">
                <TopbarAddSVG />
              </div>
              <div className="nav__name">Add a page</div>
            </div>
          </div>
        </div>

        <div className="nav">
          <div className="nav__row">
            <div className="nav__icon">
              <TopbarTrashSVG />
            </div>
            <div className="nav__name">Trash</div>
          </div>
        </div>

        <div className="bottom">
          <div className="nav">
            <div className="nav__row">
              <div className="nav__icon">
                <TopbarAddSVG />
              </div>
              <div className="nav__name">New page</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
