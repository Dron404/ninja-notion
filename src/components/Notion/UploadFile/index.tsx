import React from "react";
import styles from "./UploadFile.module.scss";
import { main } from "../../../data/languages/main";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import saveImage from "../../../store/user/saveImage";
import { userSlice } from "../../../store/user/user.slice";

export const UploadFile: React.FC = () => {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = main[lang];
  const { updateUserState } = userSlice.actions;
  const dicpatch = useAppDispatch();

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
          onChange={async (e) => {
            const url = await saveImage(e);
            dicpatch(updateUserState({ avatar: url }));
          }}
        />

        <div className={styles.upload__information}>
          {data.text_limit_pixel}
        </div>
        <div className={styles.upload__information}>{data.text_limit_file}</div>
      </form>
    </>
  );
};
