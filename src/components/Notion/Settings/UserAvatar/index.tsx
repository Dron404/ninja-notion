import React from "react";
import styles from "./UserAvatar.module.scss";
import { IUserAvatar } from "../../../../types/interface";

export const UserAvatar = ({ url, size }: IUserAvatar): React.ReactElement => {
  return (
    <>
      <div
        className={styles.avatar}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundImage: `url('${url}')`,
        }}
      ></div>
    </>
  );
};
