import React from "react";
import styles from "./NotionHeader.module.scss";
import { NotionHeaderBreadcrumb } from "./NotionHeaderBreadcrumb";
import { NotionHeaderTopbar } from "./NotionHeaderTopbar";

export const NotionHeader = (): React.ReactElement => {
  return (
    <>
      <header className={styles.header}>
        <NotionHeaderBreadcrumb />
        <NotionHeaderTopbar />
      </header>
    </>
  );
};
