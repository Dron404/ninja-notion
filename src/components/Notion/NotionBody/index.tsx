import React from "react";
import styles from "./NotionBody.module.scss";
import { NotionBodyContent } from "./NotionBodyContent/";
import { NotionBodyCover } from "./NotionBodyCover/";

import testCoverUrl from "../../../assets/img/cover/web_001.jpg";

export const NotionBody = (): React.ReactElement => {
  const coverUrl = testCoverUrl;
  return (
    <>
      <div className={styles.body}>
        <NotionBodyCover coverUrl={coverUrl} />
        <NotionBodyContent />
      </div>
    </>
  );
};
