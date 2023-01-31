import React from "react";
import styles from "./NotionBody.module.scss";
import { NotionBodyContent } from "./NotionBodyContent/";
import { NotionBodyCover } from "./NotionBodyCover/";

export const NotionBody = (): React.ReactElement => {
  return (
    <>
      <div className={styles.body}>
        <NotionBodyCover />
        <NotionBodyContent />
      </div>
    </>
  );
};
