import React from "react";
import styles from "./SidebarPages.module.scss";

import { Button } from "../Button";
import { ButtonPage } from "../ButtonPage";
import { ButtonMini } from "../ButtonMini";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as HomeSVG } from "../../../assets/img/svg/home_orange.svg";
import { IData } from "../../../types/interface";

export const SidebarPages = (): React.ReactElement => {
  const data = {
    text_home: "Home Page",
    text_add: "Add a page",
    text_private: "Private",
    text_favorite: "Faviride",
  };

  const dataPrivate: IData = {
    pages: [
      {
        object: "page",
        id: 101,
        cover: null,
        icon: null,
        favorite: false,
        property: {
          font: "default", // default, serif, mono
          small_text: false,
          full_width: false,
        },
        name: "Name Page 3",
        url: "/page/3",
        children: [
          {
            object: "page",
            id: 102,
            cover: null,
            icon: null,
            favorite: false,
            property: {
              font: "default", // default, serif, mono
              small_text: false,
              full_width: false,
            },
            name: "Name Page",
            url: "/page/3",
            children: [],
          },
        ],
      },
      {
        object: "page",
        id: 103,
        cover: null,
        icon: null,
        favorite: false,
        property: {
          font: "default",
          small_text: false,
          full_width: false,
        },
        name: "Name Page 2",
        url: "/page/1",
        children: [],
      },
    ],
  };

  const dataFavorite = {
    pages: [
      {
        object: "page",
        id: 103,
        cover: null,
        icon: null,
        favorite: false,
        property: {
          font: "default",
          small_text: false,
          full_width: false,
        },
        name: "Name Page 2",
        url: "/page/1",
        children: [],
      },
    ],
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
              <ButtonPage
                icon={data.icon}
                text={data.name}
                link={data.url}
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
              <ButtonPage
                icon={data.icon}
                text={data.name}
                link={data.url}
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
