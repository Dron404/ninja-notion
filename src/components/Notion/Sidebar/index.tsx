import React from "react";
import styles from "./Sidebar.module.scss";
import { ReactComponent as TopbarTrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as TopbarSearchSVG } from "../../../assets/img/svg/search.svg";
import { ReactComponent as TopbarSettingSVG } from "../../../assets/img/svg/setting.svg";

import { Button } from "../Button";
import { SidebarBottombar } from "../SidebarBottombar";
import { SidebarTopbar } from "../SidebarTopbar";
import { SidebarPages } from "../SidebarPages";

export const Sidebar = (): React.ReactElement => {
  const data = {
    text_newpage: "New page",
    text_trash: "Trash",
    text_search: "Search",
    text_setting: "Setting",
  };

  return (
    <>
      <div className={styles.sidebar + " aside_status"}>
        <SidebarTopbar />
        <div className={styles.nav + " " + styles.sidebar__nav}>
          <Button
            icon={<TopbarSettingSVG />}
            text={data.text_setting}
            cName={styles.sidebar__button}
          />

          <Button
            icon={<TopbarSearchSVG />}
            text={data.text_search}
            cName={styles.sidebar__button}
          />

          <SidebarPages />

          <div className={styles.nav}>
            <div className={styles.trash}>
              <Button
                icon={<TopbarTrashSVG />}
                text={data.text_trash}
                cName={styles.sidebar__button}
              />
            </div>
          </div>
        </div>

        <SidebarBottombar text={data.text_newpage} />
      </div>
    </>
  );
};
