import React from "react";
import styles from "./Header.module.scss";
import { Breadcrumb } from "../Breadcrumb/";
import { HeaderTopbar } from "../HeaderTopbar";
import { StateContext } from "../../../pages/NoutionPage";

import { ReactComponent as TopbarCloseSVG } from "../../../assets/img/svg/topbar_close.svg";
import { ButtonMini } from "../ButtonMini";
export const Header = (): React.ReactElement => {
  //test data
  const { context } = React.useContext(StateContext);

  return (
    <>
      <header className={styles.header}>
        {!context?.asideStatus && (
          <div onClick={context?.handleAsideToggle}>
            <ButtonMini icon={<TopbarCloseSVG />} cName={styles.sidebar_open} />
          </div>
        )}
        <Breadcrumb />
        <HeaderTopbar />
      </header>
    </>
  );
};
