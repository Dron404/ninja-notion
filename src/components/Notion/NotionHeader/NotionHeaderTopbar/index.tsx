import React from "react";
import styles from "./NotionHeaderTopbar.module.scss";
import { Link } from "react-router-dom";

import { ReactComponent as MoreSVG } from "../../../../assets/img/svg/more.svg";
import { ReactComponent as FavoriteSVG } from "../../../../assets/img/svg/favorite.svg";

export const NotionHeaderTopbar = (): React.ReactElement => {
  return (
    <>
      <div className={`${styles.topbar}`}>
        <div className={`${styles.topbar__button}`}>
          <Link to="/favorite" className={styles.topbar__link}>
            <FavoriteSVG />
          </Link>
        </div>
        <div className={`${styles.topbar__button}`}>
          <span>
            <MoreSVG />
          </span>
        </div>
      </div>
    </>
  );
};
