import React from "react";
import styles from "./Breadcrumb.module.scss";
import { ReactComponent as HomeSVG } from "../../../assets/img/svg/home_orange.svg";
import { Button } from "../Button";

import { main } from "../../../data/languages/main";

export const Breadcrumb = (): React.ReactElement => {
  const lang = "en";
  const data = main[lang];

  return (
    <>
      <div className={styles.breadcrumb}>
        <ul className={styles.breadcrumb__ul}>
          <li className={styles.breadcrumb__li}>
            <Button
              link={"/pages/1"}
              text={data.text_home}
              icon={<HomeSVG />}
              cName={" home-icon " + styles.breadcrumb__link}
            />
          </li>

          <li className={styles.breadcrumb__li}>
            <Button
              link={"/pages/2"}
              text="Home Page 2"
              icon="📗"
              cName={styles.breadcrumb__link}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
