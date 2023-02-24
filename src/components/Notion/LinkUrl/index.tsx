import React, { useState } from "react";
import styles from "./LinkUrl.module.scss";
import { main } from "../../../data/languages/main";
import { useAppSelector } from "../../../hooks/redux";
export const LinkUrl = (props: { handle: (url: string) => void }) => {
  const { lang } = useAppSelector((store) => store.userReducer);
  const { handle } = props;
  const [url, setUrl] = useState("");
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
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <button
            style={url !== "" ? {} : { display: "none" }}
            onClick={() => {
              handle(url);
              setUrl("");
            }}
            className={styles.link__button}
          >
            {data.text_submit}
          </button>
        </div>

        <div className={styles.link__information}>
          {data.text_link_informarion}
        </div>
      </div>
    </>
  );
};
