import React, { SetStateAction } from "react";
import styles from "./userExists.module.scss";
import { ReactComponent as IconClose } from "../../../assets/icons/home/icon-close.svg";
import reject from "../../../assets/images/login/reject.png";
import { useAppSelector } from "../../../hooks/redux";
import signup from "../../../data/languages/signup";

function UserExists(props: {
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
    <div className={active ? styles.UserExists_active : styles.UserExists}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.reject} src={reject} alt="red cross mark" />
          <p className={styles.title}>{data.errorUser_text}</p>
          <div className={styles.background} />
        </div>
        {Icon}
      </div>
    </div>
  );
}

export default UserExists;
