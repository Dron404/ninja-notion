import React from "react";
import styles from "./Body.module.scss";
import { Content } from "../Content";
import { Cover } from "../Cover";

import testCoverUrl from "../../../assets/img/cover/web_001.jpg";

export const Body = (): React.ReactElement => {
  const coverUrl = testCoverUrl;
  return (
    <>
      <div className={styles.body}>
        <Cover coverUrl={coverUrl} />
        <Content />
      </div>
    </>
  );
};
