import React from "react";
import styles from "./SidebarPage.module.scss";
import { INotionButton } from "../../../types/interface";
import { Link } from "react-router-dom";
import { ReactComponent as ToggleSVG } from "../../../assets/img/svg/toggle.svg";
import { ReactComponent as MoreSVG } from "../../../assets/img/svg/more.svg";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as FavoriteSVG } from "../../../assets/img/svg/favorite.svg";
import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as CopySVG } from "../../../assets/img/svg/copy.svg";
import { ReactComponent as DefaultSVG } from "../../../assets/img/svg/default.svg";
import { ReactComponent as RenameSVG } from "../../../assets/img/svg/rename.svg";
import { ButtonMini } from "../ButtonMini";
import { Button } from "../Button";
import { Menu } from "@headlessui/react";

import { main } from "../../../data/languages/main";

export const SidebarPage: React.FC<INotionButton> = ({
  text,
  icon,
  cName = "",
  toggle,
  id,
  children_page,
  padding,
}) => {
  const lang = "en";
  const data = main[lang];

  const [toogleStatus, setToogleStatus] = React.useState<boolean>(
    Boolean(toggle)
  );
  const [toogleFavorite, setToogleFavorite] = React.useState<boolean>(false);
  const handleTogle = () => setToogleStatus(!toogleStatus);
  const handleFavorite = () => {
    setToogleFavorite(!toogleFavorite);
  };
  const toggleStyle = toogleStatus ? "toggle-active" : "toggle-pasive";
  const newPadding = padding ? padding && padding + 7 : 14;

  const text_favorite = toogleFavorite
    ? data.text_remove_favorite
    : data.text_add_favorite;

  return (
    <>
      <div
        className={`${styles.buttonPage} ${cName}`}
        style={{ paddingLeft: `${newPadding}px` }}
      >
        <div className={styles.buttonPage__group}>
          <div
            className={`button__toggle ${toggleStyle}`}
            onClick={() => handleTogle()}
          >
            <ToggleSVG />
          </div>
          <Link
            to="/1"
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
          <ButtonMini icon={<AddSVG />} cName={styles.buttonPage__add} />

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
              <Button
                icon={<TrashSVG />}
                text={data.text_delete}
                cName={styles.buttonPage__button}
              />
              <Button
                icon={<FavoriteSVG />}
                text={text_favorite}
                cName={styles.buttonPage__button}
                handle={handleFavorite}
              />
              <Button
                icon={<CopySVG />}
                text={data.text_copy_link}
                cName={styles.buttonPage__button}
              />

              <Button
                icon={<RenameSVG />}
                text={data.text_rename}
                cName={styles.buttonPage__button}
                hotkey="Ctrl+Shft+R"
              />
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {!toogleStatus && (
        <div
          className={styles.buttonPage__children}
          style={{ paddingLeft: `${newPadding}px` }}
        >
          {children_page ? (
            children_page.map((data, index) => (
              <SidebarPage
                toggle={data.toggle}
                icon={data.icon}
                text={data.text}
                id={data.id}
                children_page={data.children_page}
                padding={newPadding}
                key={index}
              />
            ))
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
