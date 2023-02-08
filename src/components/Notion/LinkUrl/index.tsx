import React from "react";
import styles from "./LinkUrl.module.scss";
import { main } from "../../../data/languages/main";

export const LinkUrl: React.FC = () => {
  const lang = "en";
  const data = main[lang];
  return (
    <>
      <div className={styles.link}>
        <div className={styles.link__form}>
          <div className={styles.link__wrapperInput}>
            <input
              className={styles.link__input}
              type="url"
              placeholder={data.text_link_url}
            />
          </div>

          <button className={styles.link__button}>{data.text_submit}</button>
        </div>

        <div className={styles.link__information}>
          {data.text_link_informarion}
        </div>
      </div>
    </>
  );
};
