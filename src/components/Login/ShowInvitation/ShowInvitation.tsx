import React, { SetStateAction } from "react";
import styles from "./showInvitation.module.scss";
import { ReactComponent as IconClose } from "../../../assets/icons/home/icon-close.svg";
import checkmark from "../../../assets/images/login/checkmark.png";

function ShowInvitation(props: {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { active, setActive } = props;
  const Icon = (
    <IconClose
      onClick={() => {
        setActive(!active);
      }}
      onKeyDown={() => {
        setActive(!active);
      }}
      width="22px"
      height="22px"
      className={styles.close}
    />
  );

  return (
    <div
      className={
        active
          ? styles.notificationSuccessful_active
          : styles.notificationSuccessful
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img
            className={styles.checkMark}
            src={checkmark}
            alt="check mark completed"
          />
          <p className={styles.title}>Registration is mostly finished!</p>
          <p className={styles.text}>
            Please, check your email and activate your account by clicking the
            link. Be aware - the letter may be with spam
          </p>
          <div className={styles.background} />
        </div>
        {Icon}
      </div>
    </div>
  );
}

export default ShowInvitation;
