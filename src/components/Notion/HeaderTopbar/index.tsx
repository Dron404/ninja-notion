import React from "react";
import styles from "./HeaderTopbar.module.scss";

import { ReactComponent as TopbarFavoriteSVG } from "../../../assets/img/svg/add.svg";
import { ReactComponent as TopbarMoreSVG } from "../../../assets/img/svg/more.svg";

import { ButtonMini } from "../../../commom-components/ButtonMini";

export const HeaderTopbar = (): React.ReactElement => {
  return (
    <>
      <div className={styles.topbar}>
        <ButtonMini icon={<TopbarFavoriteSVG />} link="/favorite" />
        <ButtonMini icon={<TopbarMoreSVG />} />
      </div>
    </>
  );
};
