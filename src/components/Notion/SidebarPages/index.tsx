import React from "react";
import styles from "./SidebarPages.module.scss";

import { Button } from "../Button/";
import { SidebarPage } from "../SidebarPage/";
import { ButtonMini } from "../ButtonMini/";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as HomeSVG } from "../../../assets/img/svg/home_orange.svg";
import { dataFavorite } from "../../../data/dataFavorite";
import { dataPrivate } from "../../../data/dataPrivate";

export const SidebarPages = (): React.ReactElement => {
  const data = {
    text_home: "Home Page",
    text_add: "Add a page",
    text_private: "Private",
    text_favorite: "Faviride",
  };

  return (
    <>
      <div className={styles.pages}>
        <div className={styles.pages__title}>
          <span>{data.text_favorite}</span>
        </div>
        <div className={styles.pages__list}>
          <div className={styles.pages__row + " aside-page-row"}>
            {dataFavorite?.pages?.map((data, index) => (
              <SidebarPage
                icon={data.icon}
                text={data.name}
                id={data.id}
                childrenPages={data.children}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.pages}>
        <div className={styles.pages__title}>
          <span>{data.text_private}</span>
          <ButtonMini icon={<AddSVG />} cName="button_add_mini" />
        </div>

        <Button
          link={"/pages/1"}
          text={data.text_home}
          icon={<HomeSVG />}
          cName={"home-icon " + styles.pages__home}
        />

        <div className={styles.pages__list}>
          <div className={styles.pages__row + " aside-page-row"}>
            {dataPrivate?.pages?.map((data, index) => (
              <SidebarPage
                icon={data.icon}
                text={data.name}
                id={data.id}
                childrenPages={data.children}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Button icon={<AddSVG />} text={data.text_add} />
    </>
  );
};
