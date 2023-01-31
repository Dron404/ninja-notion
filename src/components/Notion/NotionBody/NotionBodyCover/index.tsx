import React from "react";
import styles from "./NotionBodyCover.module.scss";

export const NotionBodyCover = ({
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
          ></div>
        )}
      </div>
    </>
  );
};
