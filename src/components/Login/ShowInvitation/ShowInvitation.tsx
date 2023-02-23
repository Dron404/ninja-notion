import React, { SetStateAction } from "react";
import styles from "./showInvitation.module.scss";
import { ReactComponent as IconClose } from "../../../assets/icons/home/icon-close.svg";
import checkmark from "../../../assets/images/login/checkmark.png";
import { useAppSelector } from "../../../hooks/redux";
import signup from "../../../data/languages/signup";

function ShowInvitation(props: {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { active, setActive } = props;

  const { lang } = useAppSelector((store) => store.userReducer);
  const data = signup[lang];

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
          <p className={styles.title}>{data.invitation_text}</p>
          <p className={styles.text}>{data.invitation_notification}</p>
          <div className={styles.background} />
        </div>
        {Icon}
      </div>
    </div>
  );
}

export default ShowInvitation;
