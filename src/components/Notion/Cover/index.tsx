import React from "react";
import styles from "./Cover.module.scss";

import { CoverChange } from "../CoverButton/";

export const Cover = ({
  coverUrl,
}: {
  coverUrl: string;
}): React.ReactElement => {
  return (
    <>
      <div className={styles.cover}>
        {coverUrl && (
          <div
            className={`${styles.cover__bg}`}
            style={{
              backgroundImage: "url(" + coverUrl + ")",
            }}
          >
            <CoverChange />
          </div>
        )}
      </div>
    </>
  );
};
