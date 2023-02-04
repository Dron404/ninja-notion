import React from "react";
import styles from "./Breadcrumb.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as HomeSVG } from "../../../assets/img/svg/home_orange.svg";
import { Button } from "../Button";

export const Breadcrumb = (): React.ReactElement => {
  return (
    <>
      <div className={styles.breadcrumb}>
        <ul className={styles.breadcrumb__ul}>
          <li className={styles.breadcrumb__li}>
            <Button
              link={"/pages/1"}
              text="Home Page"
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
