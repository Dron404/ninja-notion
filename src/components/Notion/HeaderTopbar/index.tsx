import React from "react";
import styles from "./HeaderTopbar.module.scss";
import { Menu } from "@headlessui/react";

import { ReactComponent as FavoriteSVG } from "../../../assets/img/svg/favorite.svg";
import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as CopySVG } from "../../../assets/img/svg/copy.svg";

import { ReactComponent as MoreSVG } from "../../../assets/img/svg/more.svg";

import { ButtonMini } from "../../../commom-components/ButtonMini";
import { Button } from "../../../commom-components/Button";

export const HeaderTopbar = (): React.ReactElement => {
  return (
    <>
      <div className={styles.topbar}>
        <ButtonMini icon={<FavoriteSVG />} link="/favorite" />

        <Menu as="div" className={styles.topbar__menu + " notion-popup__menu"}>
          <Menu.Button className={styles.topbar__more}>
            <ButtonMini icon={<MoreSVG />} />
          </Menu.Button>
          <Menu.Items className={styles.topbar__popup + " notion-popup__body"}>
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
    </>
  );
};
