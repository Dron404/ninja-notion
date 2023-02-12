import React from "react";
import styles from "./SidebarBottombar.module.scss";

import { ReactComponent as TopbarAddSVG } from "../../../assets/img/svg/add.svg";
import { Button } from "../Button";

export const SidebarBottombar = ({
  text,
}: {
  text: string;
}): React.ReactElement => {
  return (
    <>
      <div className="hr-line"></div>
      <div className={styles.bottombar}>
        <Button
          icon={<TopbarAddSVG />}
          text={text}
          cName={styles.bottombar__wrapper}
        />
      </div>
    </>
  );
};
