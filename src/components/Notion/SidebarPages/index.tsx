import React from "react";
import styles from "./SidebarPages.module.scss";
import { Menu } from "@headlessui/react";

import { Button } from "../../../commom-components/Button";
import { ButtonMini } from "../../../commom-components/ButtonMini";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as MoreSVG } from "../../../assets/img/svg/more.svg";
import { ReactComponent as HomeSVG } from "../../../assets/img/svg/home_orange.svg";
import { ReactComponent as FavoriteSVG } from "../../../assets/img/svg/favorite.svg";
import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as CopySVG } from "../../../assets/img/svg/copy.svg";

export const SidebarPages = (): React.ReactElement => {
  const text_home = "Home Page";
  const text_add = "Add a page";
  const text_private = "Private";

  return (
    <>
      <div className={styles.pages}>
        <div className={styles.pages__title}>
          <span>{text_private}</span>

          <ButtonMini icon={<AddSVG />} cName="button_add_mini" />
        </div>

        <Button
          link={"/pages/1"}
          text={text_home}
          icon={<HomeSVG />}
          cName={"home-icon " + styles.pages__home}
        />

        <div className={styles.pages__list}>
          <div className={styles.pages__row + " aside-page-row"}>
            <Button icon="📗" text="Name Page" toggle={true} />

            <Menu
              as="div"
              className={styles.pages__menu + " notion-popup__menu"}
            >
              <Menu.Button className={styles.pages__more}>
                <div className="button-page-more">
                  <ButtonMini icon={<MoreSVG />} cName={styles.pages__more} />
                </div>
              </Menu.Button>
              <Menu.Items
                className={styles.pages__popup + " notion-popup__body"}
              >
                <Button
                  icon={<FavoriteSVG />}
                  text="Add to Favorites"
                  cName={styles.topbar__button}
                />
                <Button
                  icon={<CopySVG />}
                  text="Copy link"
                  cName={styles.topbar__button}
                  hotkey="Ctrl+Alt+L"
                />
                <Button
                  icon={<TrashSVG />}
                  text="Delete"
                  cName={styles.topbar__button}
                />
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
      <Button icon={<AddSVG />} text={text_add} />
    </>
  );
};
