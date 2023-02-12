import React from "react";
import styles from "./UploadFile.module.scss";
import { main } from "../../../data/languages/main";
import { useAppSelector } from "../../../hooks/redux";

export const UploadFile: React.FC = () => {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = main[lang];

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
  };

  return (
    <>
      <div className={styles.upload}>
        <label className={styles.upload__button} htmlFor="file">
          {data.text_upload_file}
        </label>
        <input
          type="file"
          id="file"
          name="file"
          style={{ display: "none" }}
          onChange={handleChange}
        />

        <div className={styles.upload__information}>
          {data.text_limit_pixel}
        </div>
        <div className={styles.upload__information}>{data.text_limit_file}</div>
      </div>
    </>
  );
};
