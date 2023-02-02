import React from "react";
import styles from "./SidebarPages.module.scss";

import { Button } from "../../../commom-components/Button";
import { ButtonMini } from "../../../commom-components/ButtonMini";
import { ReactComponent as TopbarAddSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as HomeSVG } from "../../../assets/img/svg/home_orange.svg";

export const SidebarPages = (): React.ReactElement => {
  const text_home = "Home Page";
  const text_add = "Add a page";
  const text_private = "Private";

  return (
    <>
      <div className={styles.pages}>
        <div className={styles.pages__title}>
          <span>{text_private}</span>

          <ButtonMini icon={<TopbarAddSVG />} cName="button_add_mini" />
        </div>

        <Button
          link={"/pages/1"}
          text={text_home}
          icon={<HomeSVG />}
          cName={"home-icon " + styles.pages__home}
        />

        <div className={styles.pages__list}>
          <Button icon="📗" text="Name Page" toggle={true} />
        </div>
      </div>
      <Button icon={<TopbarAddSVG />} text={text_add} cName="button-row" />
    </>
  );
};
