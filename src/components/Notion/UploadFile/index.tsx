import React from "react";
import styles from "./UploadFile.module.scss";

export const UploadFile: React.FC = () => {
  const data = {
    text_upload_file: "Upload file",
    text_limit_pixel: "Images wider than 1500 pixels work best",
    text_limit_file: "The maximum size per file is 5 MB.",
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    // remove console.log
    console.log(e.target.files);
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
