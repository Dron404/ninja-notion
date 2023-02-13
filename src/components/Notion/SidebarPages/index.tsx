import React from "react";
import styles from "./SidebarPages.module.scss";

import { Button } from "../Button/";
import { SidebarPage } from "../SidebarPage/";
import { ButtonMini } from "../ButtonMini/";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { main } from "../../../data/languages/main";
import { useAppSelector } from "../../../hooks/redux";

import { ReactComponent as TopbarTrashSVG } from "../../../assets/img/svg/trash.svg";

export const SidebarPages = (): React.ReactElement => {
  const { user, lang, favoritePage, trashPage } = useAppSelector(
    (store) => store.userReducer
  );
  const data = main[lang];
  return (
    <>
      {favoritePage && favoritePage?.length > 0 && (
        <div className={styles.pages}>
          <div className={styles.pages__title}>
            <span>{data.text_favorite}</span>
          </div>
          <div className={styles.pages__list}>
            <div className={`${styles.pages__row} aside-page-row`}>
              {favoritePage.map((data) => (
                <SidebarPage
                  icon={data.icon}
                  text={data.name}
                  key={data._id}
                  dataPage={data}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={styles.pages}>
        <div className={styles.pages__title}>
          <span>{data.text_private}</span>
          <ButtonMini icon={<AddSVG />} cName="button_add_mini" />
        </div>

        <Button
          icon="🏠"
          cName="home_page"
          text={data.text_home_page}
          link="/pages/home"
        />

        <div className={styles.pages__list}>
          <div className={`${styles.pages__row} aside-page-row`}>
            {user &&
              user?.pages?.map(
                (data) =>
                  !data.dataTrash && (
                    <SidebarPage
                      icon={data.icon}
                      text={data.name}
                      key={data._id}
                      dataPage={data}
                    />
                  )
              )}
          </div>
        </div>
      </div>
      <Button icon={<AddSVG />} text={data.text_add} />
    </>
  );
};
