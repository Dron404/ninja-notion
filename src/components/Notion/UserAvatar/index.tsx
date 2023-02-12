import React from "react";
import styles from "./UserAvatar.module.scss";
import { IUserAvatar } from "../../../types/interface";
import { ReactComponent as UserSVG } from "../../../assets/img/svg/user.svg";

export const UserAvatar = ({ url, size }: IUserAvatar): React.ReactElement => {
  return (
    <>
      <div
        className={styles.avatar}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {url ? <img className={styles.avatar__img} src={url} /> : <UserSVG />}
      </div>
    </>
  );
};
