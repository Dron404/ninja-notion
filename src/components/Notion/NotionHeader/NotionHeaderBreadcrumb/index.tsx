import React from "react";
import styles from "./NotionHeaderBreadcrumb.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as HomeSVG } from "../../../../assets/img/svg/home_orange.svg";

export const NotionHeaderBreadcrumb = (): React.ReactElement => {
  return (
    <>
      <div className={styles.breadcrumb}>
        <ul className={styles.breadcrumb__ul}>
          <li className={styles.breadcrumb__li}>
            <Link to="/pages/1" className={styles.breadcrumb__link}>
              <span
                className={`${styles.breadcrumb__icon} ${styles.breadcrumb__home}`}
              >
                <HomeSVG />
              </span>
              <span className={`${styles.breadcrumb__text}`}>Home Page</span>
            </Link>
          </li>

          <li className={styles.breadcrumb__li}>
            <Link to="/pages/2" className={styles.breadcrumb__link}>
              <span className={`${styles.breadcrumb__icon}`}>📗</span>
              <span className={`${styles.breadcrumb__text}`}>Home Page 2</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
