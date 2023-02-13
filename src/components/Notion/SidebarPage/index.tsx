import React from "react";
import styles from "./SidebarPage.module.scss";
import { INotionButton, IPage } from "../../../types/interface";
import { Link } from "react-router-dom";
import { ReactComponent as ToggleSVG } from "../../../assets/img/svg/toggle.svg";
import { ReactComponent as MoreSVG } from "../../../assets/img/svg/more.svg";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as CopySVG } from "../../../assets/img/svg/copy.svg";
import { ReactComponent as DefaultSVG } from "../../../assets/img/svg/default.svg";
import { ReactComponent as RenameSVG } from "../../../assets/img/svg/rename.svg";
import { ReactComponent as FavoriteSVG } from "../../../assets/img/svg/favorite.svg";
import { ButtonMini } from "../ButtonMini";
import { Button } from "../Button";
import { Menu } from "@headlessui/react";
import copy from "copy-to-clipboard";

import { main } from "../../../data/languages/main";

import { useAppSelector } from "../../../hooks/redux";

import { ButtonTrash } from "../ButtonTrash";
import { ButtonCopyLink } from "../ButtonCopyLink";
import { ButtonFavorite } from "../ButtonFavorite";

export const SidebarPage: React.FC<INotionButton> = ({
  text,
  icon,
  cName = "",
  toggle,
  padding,
  dataPage,
}) => {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = main[lang];

  const [toogleStatus, setToogleStatus] = React.useState<boolean>(
    Boolean(toggle)
  );

  const handleTogle = () => setToogleStatus(!toogleStatus);

  const toggleStyle = toogleStatus ? "toggle-active" : "toggle-pasive";
  const newPadding = padding ? padding && padding + 7 : 14;

  const pageUrl = `/pages/${dataPage?._id}`;

  const handleRename = () => {
    console.log("handleRename");
  };

  return (
    <>
      <div
        className={`${styles.buttonPage} ${cName}`}
        style={{ paddingLeft: `${newPadding}px` }}
      >
        <div className={styles.buttonPage__group}>
          {dataPage?.children_page && (
            <div
              className={`button__toggle ${toggleStyle}`}
              onClick={() => handleTogle()}
            >
              <ToggleSVG />
            </div>
          )}
          <Link
            to={pageUrl}
            className={`${styles.buttonPage__link} button__link`}
            tabIndex={0}
          >
            {icon ? (
              <div className="button__icon">{icon}</div>
            ) : (
              <div className="button__icon">
                <DefaultSVG />
              </div>
            )}
            {text && <div className="button__text">{text}</div>}
          </Link>
        </div>

        <div className={styles.buttonPage__groupHidden}>
          {dataPage?.children_page && (
            <ButtonMini icon={<AddSVG />} cName={styles.buttonPage__add} />
          )}

          <Menu
            as="div"
            className={`${styles.buttonPage__menu} notion-popup__menu`}
          >
            <Menu.Button className={styles.buttonPage__menuButton}>
              <div className="button-page-more">
                <ButtonMini
                  icon={<MoreSVG />}
                  cName={styles.buttonPage__more}
                />
              </div>
            </Menu.Button>
            <Menu.Items
              className={`${styles.buttonPage__popup} notion-popup__body`}
            >
              <Menu.Item>
                {({ close }) => (
                  <div onClick={close}>
                    <ButtonTrash dataPage={dataPage} />
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ close }) => (
                  <div onClick={close}>
                    <ButtonCopyLink dataPage={dataPage} />
                  </div>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ close }) => (
                  <div onClick={close}>
                    <Button
                      icon={<RenameSVG />}
                      text={data.text_rename}
                      cName={styles.buttonPage__button}
                      hotkey="Ctrl+Shft+R"
                      handle={handleRename}
                    />
                  </div>
                )}
              </Menu.Item> */}

              <Menu.Item>
                {({ close }) => (
                  <div onClick={close}>
                    <ButtonFavorite dataPage={dataPage} />
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {toogleStatus && (
        <div
          className={styles.buttonPage__children}
          style={{ paddingLeft: `${newPadding}px` }}
        >
          {dataPage?.children_page && dataPage?.children_page ? (
            dataPage.children_page.map(
              (data) =>
                !data.dataTrash && (
                  <SidebarPage
                    toggle={false}
                    icon={data.icon}
                    text={data.name}
                    padding={newPadding}
                    key={data._id}
                    dataPage={data}
                  />
                )
            )
          ) : (
            <div
              className={styles.buttonPage__not}
              style={{ paddingLeft: `${newPadding}` }}
            >
              {data.text_not_page}
            </div>
          )}
        </div>
      )}
    </>
  );
};
