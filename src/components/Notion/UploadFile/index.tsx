import React from "react";
import styles from "./UploadFile.module.scss";
import { main } from "../../../data/languages/main";
import { useAppSelector } from "../../../hooks/redux";

export const UploadFile = (props: {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}) => {
  const { handle } = props;
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = main[lang];

  return (
    <>
      <form
        className={styles.upload}
        action="/addImage"
        method="post"
        encType="multipart/form-data"
      >
        <label className={styles.upload__button} htmlFor="file">
          {data.text_upload_file}
        </label>
        <input
          accept="image/*"
          type="file"
          id="file"
          name="file"
          style={{ display: "none" }}
          onChange={(e) => handle(e)}
        />

        <div className={styles.upload__information}>
          {data.text_limit_pixel}
        </div>
        <div className={styles.upload__information}>{data.text_limit_file}</div>
      </form>
    </>
  );
};
