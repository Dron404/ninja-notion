import React from "react";
import styles from "./NotionBodyCover.module.scss";

import cover_url from "../../../../assets/img/cover/web_001.jpg";

export const NotionBodyCover = (): React.ReactElement => {
  return (
    <>
      <div className={styles.cover}>
        <div
          className={`${styles.cover__bg}`}
          style={{
            backgroundImage: "url(" + cover_url + ")",
          }}
        ></div>
      </div>
    </>
  );
};
