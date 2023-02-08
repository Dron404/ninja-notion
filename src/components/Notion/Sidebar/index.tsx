import React from "react";
import styles from "./Sidebar.module.scss";
import { ReactComponent as TopbarTrashSVG } from "../../../assets/img/svg/trash.svg";

import { Button } from "../Button";
import { SidebarBottombar } from "../SidebarBottombar";
import { SidebarTopbar } from "../SidebarTopbar";
import { SidebarPages } from "../SidebarPages";
import { Search } from "../Search";
import { Settings } from "../Settings";
import { main } from "../../../data/languages/main";

export const Sidebar = (): React.ReactElement => {
  const lang = "en";
  const data = main[lang];

  return (
    <>
      <div className={`${styles.sidebar} aside_status`}>
        <SidebarTopbar />
        <div className={`${styles.nav} ${styles.sidebar__nav}`}>
          <Settings />
          <Search />
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
