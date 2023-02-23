import React, { useState } from "react";
import styles from "./messagePassword.module.scss";
import invalidPassword from "../../../assets/images/login/invalidPassword.png";
import { resetPasswordFromLogin } from "../../../store/user/user.action";
import { useAppSelector } from "../../../hooks/redux";
import login from "../../../data/languages/login";

function MessagePassword(props: { email: string }) {
  const [clickeddPassword, setClickedPassword] = useState(false);
  const email = props.email;

  const { lang } = useAppSelector((store) => store.userReducer);
  const data = login[lang];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.image} src={invalidPassword} alt="" />
        <p className={styles.title}>{data.errorPassword_text}</p>
        <button
          type="button"
          className={styles.btnRestore}
          onClick={async (event) => {
            const btn = event.target as HTMLButtonElement;
            btn.disabled = true;
            const response = await resetPasswordFromLogin(email);
            if (response?.status === 200) {
              setClickedPassword(!clickeddPassword);
            }
          }}
        >
          {data.errorPassword_linkToRestore}
        </button>
        {clickeddPassword ? (
          <p className={styles.check}>{data.errorPassword_notification}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MessagePassword;
